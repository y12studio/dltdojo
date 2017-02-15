#!/bin/bash
set -e
IP=`awk 'END{print $1}' /etc/hosts`
if [ -z "$IP" ]; then
    # This will introduce a 1-6 second random sleep/pause
    sleep $[ ( $RANDOM % 6 )  + 1 ]s
    IP=`awk 'END{print $1}' /etc/hosts`
fi
if [ -n "$IP" ]
then
  SUBNET=$IP/24
  echo "start bitcoind with rpcallowip ${SUBNET}"
  bitcoind -rpcallowip=${SUBNET}
else
  echo "start bitcoind"
  bitcoind
fi
