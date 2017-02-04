#!/bin/bash
set -e
bitcoind -daemon
sleep 2s
cd /opt/app/explorer && npm start
