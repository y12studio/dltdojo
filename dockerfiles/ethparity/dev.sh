#!/bin/bash
set -e
parity --chain dev --jsonrpc-interface=0.0.0.0 --jsonrpc-cors=* --jsonrpc-hosts=all --jsonrpc-port 8545 --ui-port 8180 --ui-interface=0.0.0.0 --ui-no-validation --dapps-port 8080 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
