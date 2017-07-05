#!/bin/bash
# docker run -it -v vfoo:/data foo
rm -rf /data/foo/*
mkdir -p /data/foo
cd /data/foo
mkdir node0 node1 node2
date +%s | sha256sum | base64 | head -c 24 > node0/passfile
date +%s | sha256sum | base64 | head -c 24 > node1/passfile
date +%s | sha256sum | base64 | head -c 24 > node2/passfile
geth account new --password node0/passfile &>/dev/null
mv /root/.ethereum/keystore/* node0/
geth account new --password node1/passfile &>/dev/null
mv /root/.ethereum/keystore/* node1/
geth account new --password node2/passfile &>/dev/null
mv /root/.ethereum/keystore/* node2/
tree /data
