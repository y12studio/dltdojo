#!/bin/bash
set -e
bitcoind -daemon
sleep 3
counterparty-server --testnet start
