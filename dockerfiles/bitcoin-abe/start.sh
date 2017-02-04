#!/bin/bash
set -e
bitcoind -daemon
sleep 2s
cd /bitcoin-abe && python -m Abe.abe --config abe-sqlite.conf
