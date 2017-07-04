#!/bin/sh
set -e
BITCOIN_DATA=/home/bitcoin/.bitcoin
chmod 700 "$BITCOIN_DATA"
chown -R bitcoin "$BITCOIN_DATA"
su-exec bitcoin bitcoind -daemon -datadir="$BITCOIN_DATA"
sleep 2s
su-exec bitcoin bitcoin-cli generate 101
su-exec bitcoin bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 10.0
su-exec bitcoin bitcoin-cli generate 1
su-exec bitcoin bitcoin-cli sendtoaddress mfjvqSvrKDLaTEKns5UxwJjhS3vQP2wBPh 6.8
su-exec bitcoin bitcoin-cli generate 2
cd /bitcoin-abe && python -m Abe.abe --config abe-sqlite.conf
