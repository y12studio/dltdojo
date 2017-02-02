#!/bin/bash
set -e
# https://github.com/ethcore/parity/wiki/Demo-PoA-tutorial
# https://github.com/ethcore/parity/issues/3824
parity daemon /tmp/parity.pid --chain /opt/parity/poa-init-spec.json -d /tmp/parity --jsonrpc-port 8540 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
sleep 2s
if [ "$1" == "node0" ]
then
  SIGNER=$(curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node0", "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result)
  echo NewAccountFromPhrase node0/node0 $SIGNER
  USER=$(curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user", "user"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result)
  echo NewAccountFromPhrase user/user $USER
elif [ "$1" == "node1" ]
then
  SIGNER=$(curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node1", "node1"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result)
  echo NewAccountFromPhrase node1/node1 $SIGNER
else
  echo "Normal Peer"
fi
kill -9 `cat /tmp/parity.pid`
sleep 2s
if [ -n "$SIGNER" ]
then
  echo engine-signer $SIGNER
  parity --chain /opt/parity/poa-final-spec.json -d /tmp/parity --password /opt/parity/node.pwds --engine-signer "${SIGNER}" --port 30300 --jsonrpc-port 8540 --ui-port 8180 --dapps-port 8080 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
else
  parity --chain /opt/parity/poa-final-spec.json -d /tmp/parity --port 30300 --jsonrpc-port 8540 --ui-port 8180 --dapps-port 8080 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
fi
