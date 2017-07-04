#!/bin/sh
set -e
bitcoind -daemon
sleep 2s
node node_modules/cc-block-explorer/bin/cc-block-explorer --conf=/opt/app/cc.conf

