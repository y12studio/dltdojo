#!/bin/bash
set -e
cd /opt/browser-solidity && http-server . -p 9080 > /dev/null 2>&1 &
cd /opt/etherwallet/dist && http-server . -p 9081 > /dev/null 2>&1 &
if [ "$1" == "peer" ]
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
  cd /opt/darkorange && echo "faucet" > nodefaucet.pwds && parity --config nodefaucet.toml
elif [ "$1" == "unlock" ]
then
  echo unlock parity_newAccountFromPhrase ${2}
  cd /opt/darkorange && parity --config node.toml > /dev/null 2>&1 &
  sleep 3s
  # '"$2"'
  SIGNER=$(curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["'"$2"'", "'"$2"'"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545 | jq -r .result)
  echo NewAccountFromPhrase ${2} is ${SIGNER}
  pkill parity
  sleep 3s
  echo "start parity with nodefaucet.toml"
  cd /opt/darkorange \
    && sed -i.bak "s/0x002cfe7604db809a84c45067d1e361d933514924/${SIGNER}/g" nodefaucet.toml \
    && echo ${2} > nodefaucet.pwds \
    && cat nodefaucet.toml && cat nodefaucet.pwds \
    && parity --config nodefaucet.toml
else
  echo "hello darkorange"
fi
