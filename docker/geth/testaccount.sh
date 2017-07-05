#!/bin/bash
PASS=$(date +%s | sha256sum | base64 | head -c 24)
echo $PASS > passfile
geth account new --password passfile &>/dev/null
cd ~/.ethereum/keystore/
FILE=$(ls | sort -n | head -1)
KFILE="$(<$FILE)"
echo "{ \"Password\": \"${PASS}\" , \"FileName\": \"${FILE}\", \"KeyFile\": ${KFILE} }" | jq -r
