#!/bin/bash
set -e
# IP=`awk 'END{print $1}' /etc/hosts`
# DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
/geth --datadir=~/.ethereum/devchain init "/genesis.json"
sleep $[ ( $RANDOM % 6 )  + 1 ]s
BOOTNODE_IP=`getent hosts ethboot | cut -d" " -f1`
if [ -z "$BOOTNODE_IP" ]; then
    # This will introduce a 1-12 second random sleep/pause
    sleep $[ ( $RANDOM % 6 )  + 1 ]s
    BOOTNODE_IP=`getent hosts ethboot | cut -d" " -f1`
fi
/geth --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@${BOOTNODE_IP}:30303"
