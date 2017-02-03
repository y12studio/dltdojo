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
if [ -n "$2" ]
then
  sleep 5s
  BOOTNODE_IP=`getent hosts ${2} | cut -d" " -f1`
  ENODE_URL="enode://f1f4bf0bec35e3578e333287c444661aad595e3096802cda897f9fcfdd107f71870d45ed52707507e871f88e90717eb6881b4311c3cc0fd789be738e84132579@${BOOTNODE_IP}:30300"
  echo enode url ${ENODE_URL}
  # curl -s --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["'${ENODE_URL}'"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
fi
kill -9 `cat /tmp/parity.pid`
sleep 2s
# https://github.com/ethcore/parity/blob/master/parity/cli/usage.txt
if [ -n "$SIGNER" ]
then
  echo engine-signer $SIGNER
  OPTSIGNER='--engine-signer='${SIGNER}
  OPTPOA='--chain /opt/parity/poa-final-spec.json -d /tmp/parity --password /opt/parity/node.pwds --port 30300 --jsonrpc-interface=0.0.0.0 --jsonrpc-cors=* --jsonrpc-hosts=all --jsonrpc-port 8545 --ui-port 8180 --dapps-port 8080 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts'
  if [ -n "${ENODE_URL}" ]
  then
    parity --bootnodes=${ENODE_URL} ${OPTSIGNER} ${OPTPOA}
  else
    parity ${OPTSIGNER} ${OPTPOA}
  fi
else
  parity --bootnodes=${ENODE_URL} --chain /opt/parity/poa-final-spec.json -d /tmp/parity --port 30300 --jsonrpc-interface=0.0.0.0 --jsonrpc-cors=* --jsonrpc-hosts=all --jsonrpc-port 8545 --ui-port 8180 --dapps-port 8080 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
fi
