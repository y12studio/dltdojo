#!/bin/sh
set -e
BITCOIN_DATA=/home/bitcoin/.bitcoin
chmod 700 "$BITCOIN_DATA"
chown -R bitcoin "$BITCOIN_DATA"
su-exec bitcoin bitcoind -daemon -datadir="$BITCOIN_DATA"
sleep 2s
cd /bitcoin-abe && python -m Abe.abe --config abe-sqlite.conf
