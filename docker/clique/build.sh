#!/bin/bash
# docker run -it -v dltdojo:/dltdojo foo ./build.sh
rm -rf /dltdojo/clique/*
mkdir -p /dltdojo/clique
cd /dltdojo/clique
mkdir node0 node1 node2
echo $RAMDOM | sha256sum | base64 | head -c 16 > node0/passfile
echo $RANDOM | sha256sum | base64 | head -c 16 > node1/passfile
echo $RANDOM | sha256sum | base64 | head -c 16 > node2/passfile
geth account new --password node0/passfile &>/dev/null
mv /root/.ethereum/keystore/* node0/
geth account new --password node1/passfile &>/dev/null
mv /root/.ethereum/keystore/* node1/
geth account new --password node2/passfile &>/dev/null
mv /root/.ethereum/keystore/* node2/
tree /dltdojo
echo "=== node0 address/password ==="
cat node0/UTC* | jq -r '.address'
echo "=== node1 address/password ==="
cat node1/UTC* | jq -r '.address'
echo "=== node2 address/password ==="
cat node2/UTC* | jq -r '.address'
puppeth
echo "=== poa-clique.json ==="
cat poa-clique.json | jq -r '.config'