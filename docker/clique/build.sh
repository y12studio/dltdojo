#!/bin/bash
# docker run -it -v dltdojo:/dltdojo foo ./build.sh NET_NAME NUM_NODE
[ $# == 2 ] || exit
NET_NAME=$1
NUM_NODE=$2
rm -rf /dltdojo/$NET_NAME/*
mkdir -p /dltdojo/$NET_NAME
cd /dltdojo/$NET_NAME
for ((i=0; i<NUM_NODE; i++))
do
   NODEDIR=node$i
   mkdir $NODEDIR
   echo $RAMDOM | sha256sum | base64 | head -c 16 > $NODEDIR/passfile
   geth account new --password $NODEDIR/passfile &>/dev/null
   mv /root/.ethereum/keystore/* $NODEDIR/
   echo "=== $NODEDIR address/password ==="
   cat $NODEDIR/UTC* | jq -r '.address'
done
puppeth
tree /dltdojo/$NET_NAME
echo "=== $NET_NAME.json ==="
cat $NET_NAME.json | jq -r '.config'