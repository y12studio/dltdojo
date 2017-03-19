#!/bin/bash
set -e

if [ "$1" == "darkorange" ]
then
  echo "darkorange chain"
  cd /opt/darkorange && parity --config node.toml
elif [ "$1" == "faucet" ]
then
  echo "darkorange chain"
  echo "new faucet account"
  cd /opt/darkorange && parity --config node.toml > /dev/null 2>&1 &
  sleep 3s
  curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["faucet", "faucet"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
  pkill parity
  sleep 3s
  cd /opt/browser-solidity && http-server . -p 9080 > /dev/null 2>&1 &
  cd /opt/etherwallet/dist && http-server . -p 9081 > /dev/null 2>&1 &
  echo "start parity with nodefaucet.toml"
  cd /opt/darkorange && parity --config nodefaucet.toml
else
  echo "hello darkorange"
fi
