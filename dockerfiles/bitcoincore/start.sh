#!/bin/bash
set -e
# http://stackoverflow.com/questions/27670495/can-i-get-ip-address-inside-my-docker-container
# DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
sleep $[ ( $RANDOM % 6 )  + 1 ]s
IP=`awk 'END{print $1}' /etc/hosts`
if [ -z "$IP" ]; then
    # This will introduce a 1-12 second random sleep/pause
    sleep $[ ( $RANDOM % 6 )  + 1 ]s
    IP=`awk 'END{print $1}' /etc/hosts`
fi
DLTDOJO_SUBNET=$IP/24
BITCOIND_OPTS=${@/DLTDOJOSUBNETinSTARTSH/$DLTDOJO_SUBNET}
bitcoind $BITCOIND_OPTS
