#!/bin/sh
set -e
BITCOIN_DATA=/home/node/bitcoind
#bitcoind -daemon -datadir="$BITCOIN_DATA"
sleep 2s
/home/node/docker-entrypoint.sh