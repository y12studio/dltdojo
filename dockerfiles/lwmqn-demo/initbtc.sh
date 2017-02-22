#!/bin/bash
set -e
bitcoin-cli generate 102
sleep 1s
bitcoin-cli sendmany "" "{\"ms7X9LdUS4BYw3eLhzQiP7GEZVfFigNYdn\":1,\"mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG\":2}"
sleep 1s
bitcoin-cli generate 1
