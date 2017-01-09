#!/bin/bash
set -e
/geth --datadir=~/.ethereum/devchain init "/genesis.json"
sleep 3
EVP0_IP=`getent hosts evp0 | cut -d" " -f1`
EVP1_IP=`getent hosts evp1 | cut -d" " -f1`
GETH_OPTS=${@/XXX/$EVP0_IP}
/geth $GETH_OPTS
