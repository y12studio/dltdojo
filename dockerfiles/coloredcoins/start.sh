#!/bin/bash
set -e
bitcoind -daemon
sleep 3
cd /opt/ccoin/coloredcoinsd ; npm start
