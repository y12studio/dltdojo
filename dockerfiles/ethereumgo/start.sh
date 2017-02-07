#!/bin/bash
set -e
/geth --datadir=~/.ethereum/devchain init "/genesis.json"

if [ "$1" == "boot" ]
then
  echo "boot mode"
  /geth --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --nodekeyhex=091bd6067cb4612df85d9c1ff85cc47f259ced4d4cd99816b14f35650f59c322
elif [ "$1" == "peer" ]
then
  echo "peer mode"
  sleep $[ ( $RANDOM % 3 )  + 1 ]s
  BOOTNODE_IP=`getent hosts ${2} | cut -d" " -f1`
  if [ -z "$BOOTNODE_IP" ]; then
      # This will introduce a 1-12 second random sleep/pause
      sleep $[ ( $RANDOM % 6 )  + 1 ]s
      BOOTNODE_IP=`getent hosts ${2} | cut -d" " -f1`
  fi
  /geth --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@${BOOTNODE_IP}:30303"
else
  echo "dev mode"
  /geth --dev --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable
fi
