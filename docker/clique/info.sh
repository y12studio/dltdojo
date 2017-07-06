#!/bin/bash
# docker run -it -v dltdojo:/dltdojo foo ./info.sh NET_NAME
[ $# == 1 ] || exit
NET_NAME=$1
cd /dltdojo/$NET_NAME
tree /dltdojo/$NET_NAME
for i in node*
do
   echo "=== $i address/password ==="
   cat $i/UTC* | jq -r '.address'  | sed "s/^/0x/"
   cat $i/passfile ; echo
done
cat $NET_NAME.json | jq -r '.config'