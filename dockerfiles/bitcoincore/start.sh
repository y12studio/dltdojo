#!/bin/bash
set -e
DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
if [ -z "$DLTDOJO_IP" ]; then
    # This will introduce a 1-12 second random sleep/pause
    sleep $[ ( $RANDOM % 12 )  + 1 ]s
    DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
    if [ -z "$DLTDOJO_IP" ]; then
        # This will introduce a 1-6 second random sleep/pause
        sleep $[ ( $RANDOM % 6 )  + 1 ]s
        DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
    fi
fi
DLTDOJO_SUBNET=$DLTDOJO_IP/24
BITCOIND_OPTS=${@/DLTDOJOSUBNETinSTARTSH/$DLTDOJO_SUBNET}
bitcoind $BITCOIND_OPTS
