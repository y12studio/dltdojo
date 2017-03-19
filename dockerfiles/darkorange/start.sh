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
  echo "start parity with nodefaucet.toml"
  cd /opt/darkorange && parity --config nodefaucet.toml
else
  echo "hello darkorange"
fi
