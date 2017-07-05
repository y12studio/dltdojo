#!/bin/bash
# docker run -it -v dltdojo:/dltdojo foo ./info.sh
cd /dltdojo/clique
tree /dltdojo
echo "=== node0 address/password ==="
cat node0/UTC* | jq -r '.address'  | sed "s/^/0x/"
cat node0/passfile ; echo
echo "=== node1 address/password ==="
cat node1/UTC* | jq -r '.address'  | sed "s/^/0x/"
cat node1/passfile ; echo
echo "=== node2 address/password ==="
cat node2/UTC* | jq -r '.address' | sed "s/^/0x/"
cat node2/passfile ; echo
echo "=== poa-clique.json ==="
cat poa-clique.json | jq -r '.config'