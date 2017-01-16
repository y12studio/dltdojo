#!/bin/bash
set -e
/geth --datadir=~/.ethereum/devchain init "/genesis.json"
sleep 3
BOOTNODE_IP=`getent hosts bootnode | cut -d" " -f1`
GETH_OPTS=${@/XXX/$BOOTNODE_IP}
/geth $GETH_OPTS
