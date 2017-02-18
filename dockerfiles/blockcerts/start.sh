#!/bin/bash
set -e
bitcoind -daemon
sleep 2s
issuer=`bitcoin-cli getnewaddress`
echo "Issuer Address="$issuer
revocation=`bitcoin-cli getnewaddress`
echo "Revocation Address="$revocation
#
sed -i.bak "s/<issuing-address>/$issuer/g" /etc/cert-issuer/conf.ini
sed -i.bak "s/<revocation-address>/$revocation/g" /etc/cert-issuer/conf.ini
bitcoin-cli dumpprivkey $issuer > /etc/cert-issuer/pk_issuer.txt
bitcoin-cli generate 101
bitcoin-cli sendtoaddress $issuer 30
bitcoin-cli generate 1
cp /cert-issuer/examples/data-testnet/unsigned_certificates/6c6bd2ec-d0d6-41a9-bec8-57bb904c62a8.json /etc/cert-issuer/data/unsigned_certificates/
cd /cert-issuer/
cert-signer -c /etc/cert-issuer/conf.ini
cert-issuer -c /etc/cert-issuer/conf.ini
bitcoin-cli generate 1
sleep 2s
tail -f /dev/null
