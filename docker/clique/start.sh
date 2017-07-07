#!/bin/bash
#
# Check filesystem
#
#tree /dltdojo/$NET_NAME/
#
# Copy keyfile to default path.
#
mkdir -p /root/.ethereum/keystore/
cp /dltdojo/$NET_NAME/$NODE_DIR/* /root/.ethereum/keystore/
#
# Get default account's address
#
ACCOUNT=`cat /root/.ethereum/keystore/UTC* | jq -r '.address'`
echo ACCOUNT=$ACCOUNT
#
# init geth
#
POAJSON=/dltdojo/$NET_NAME/$NET_NAME.json
geth init $POAJSON

# network time synchronisation
# ntpdate -s time.nist.gov
#
# Get networkid
#
networkid=`cat $POAJSON | jq -r '.config.chainId'`
echo networkid=$networkid
#
# Get geth parameters
# 
PARAMS='--rpc --rpcapi "miner,admin,db,personal,eth,net,web3"'
echo $SIGNER
if [ ! -z "$SIGNER" ]
then
    PARAMS="$PARAMS --unlock $ACCOUNT --password /root/.ethereum/keystore/passfile"
fi
echo $PARAMS
#
# Start geth
#
geth --networkid $networkid $PARAMS &
sleep 5s
#
# Write enode to dltdojo volume
# pwd = /opt/geth
geth --exec "admin.nodeInfo.enode" attach &> enode
ENODE=`cat enode`
IP_ADDR=`ifconfig|grep "inet addr"|grep -v "127.0.0.1"|sed -r 's:[^0-9.]*([0-9.]+).*:\1:'`
SED_ARG="-r 's/\[::\]/${IP_ADDR}/'"
ENODE=`echo $ENODE|eval sed "$SED_ARG"`
echo $ENODE > /dltdojo/$NET_NAME/$NODE_DIR/enode
echo ENDOE=$ENODE
#
# admin.addPeer(node0)
#
if [ "$NODE_DIR" == "node0" ]
then
    sleep 1s
else
    #
    # Wait for node0 ready.
    #
    sleep 10s
fi
ENODE_BOOT=`cat /dltdojo/$NET_NAME/node0/enode`
echo ENODE_BOOT=$ENODE_BOOT
geth --exec "admin.addPeer($ENODE_BOOT)" attach
#
# miner.start()
#
if [ ! -z "$SIGNER" ]
then
   geth --exec "miner.start()" attach
fi
tail -f /dev/null