#!/bin/bash
# geth --dev account new --password passfile
# curl -X POST --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["pass"],"id":67}' localhost:8545
geth --dev --rpc --rpcapi "miner,admin,db,personal,eth,net,web3"
