#!/bin/bash
# tree /dltdojo/$NET_NAME/
# copy keyfile
mkdir -p /root/.ethereum/keystore/
cp /dltdojo/$NET_NAME/$NODE_DIR/* /root/.ethereum/keystore/
ACCOUNT=`cat /root/.ethereum/keystore/UTC* | jq -r '.address'`
echo ACCOUNT=$ACCOUNT
# init geth
POAJSON=/dltdojo/$NET_NAME/$NET_NAME.json
geth init $POAJSON
# tree /root/.ethereum/keystore

# network time synchronisation
ntpdate -s time.nist.gov

networkid=`cat $POAJSON | jq -r '.config.chainId'`
echo networkid=$networkid
PARAMS='--rpc --rpcapi "miner,admin,db,personal,eth,net,web3"'
echo $SIGNER
if [ ! -z "$SIGNER" ]
then
    PARAMS="$PARAMS --unlock $ACCOUNT --password /root/.ethereum/keystore/passfile"
fi
echo $PARAMS
geth --networkid $networkid $PARAMS &
sleep 3s
### Write enode to dltdojo volume
# pwd = /opt/geth
ENODE=`geth --exec "admin.nodeInfo.enode" attach`
IP_ADDR=`ifconfig|grep "inet addr"|grep -v "127.0.0.1"|sed -r 's:[^0-9.]*([0-9.]+).*:\1:'`
SED_ARG="-r 's/\[::\]/${IP_ADDR}/'"
ENODE=`echo $ENODE|eval sed "$SED_ARG"`
echo $ENODE > /dltdojo/$NET_NAME/$NODE_DIR/enode
tail -f /dev/null