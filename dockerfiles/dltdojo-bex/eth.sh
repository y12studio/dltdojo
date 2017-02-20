#!/bin/bash
set -e

if [ "$1" == "boot" ]
then
  echo "boot mode"
  geth --datadir=~/.ethereum/devchain init "/genesis.json"
  geth --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --nodekeyhex=091bd6067cb4612df85d9c1ff85cc47f259ced4d4cd99816b14f35650f59c322
elif [ "$1" == "peer" ]
then
  echo "peer mode"
  geth --datadir=~/.ethereum/devchain init "/genesis.json"
  sleep $[ ( $RANDOM % 3 )  + 1 ]s
  BOOTNODE_IP=`getent hosts ${2} | cut -d" " -f1`
  if [ -z "$BOOTNODE_IP" ]; then
      # This will introduce a 1-12 second random sleep/pause
      sleep $[ ( $RANDOM % 6 )  + 1 ]s
      BOOTNODE_IP=`getent hosts ${2} | cut -d" " -f1`
  fi
  geth --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@${BOOTNODE_IP}:30303"
elif [ "$1" == "dev" ]
then
  echo "ethereum dev mode"
  geth --dev --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable
elif [ "$1" == "miner_start" ]
then
  curl -X POST --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["pass"],"id":67}' localhost:8545
  curl -X POST --data '{"jsonrpc":"2.0","method":"miner_start","params":[],"id":74}' localhost:8545
else
  echo "ethereum script"
fi
