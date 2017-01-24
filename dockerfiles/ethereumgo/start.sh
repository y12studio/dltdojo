#!/bin/bash
set -e
# IP=`awk 'END{print $1}' /etc/hosts`
# DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
/geth --datadir=~/.ethereum/devchain init "/genesis.json"
sleep $[ ( $RANDOM % 6 )  + 1 ]s
BOOTNODE_IP=`getent hosts bootnode | cut -d" " -f1`
if [ -z "$BOOTNODE_IP" ]; then
    # This will introduce a 1-12 second random sleep/pause
    sleep $[ ( $RANDOM % 6 )  + 1 ]s
    BOOTNODE_IP=`getent hosts bootnode | cut -d" " -f1`
fi
GETH_OPTS=${@/XXX/$BOOTNODE_IP}
/geth $GETH_OPTS
