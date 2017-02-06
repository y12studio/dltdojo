#!/bin/bash
set -e
/geth --datadir=~/.ethereum/devchain init "/genesis.json"
/geth --dev --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain
