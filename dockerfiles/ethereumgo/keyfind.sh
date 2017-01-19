#!/bin/bash
set -e
find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -exec cat {} \; | jq .
