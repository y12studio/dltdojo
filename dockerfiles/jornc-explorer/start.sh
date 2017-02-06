#!/bin/bash
set -e
bitcoind -daemon
sleep 2s
/docker-entrypoint.sh
