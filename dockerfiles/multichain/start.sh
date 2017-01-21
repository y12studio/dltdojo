#!/bin/bash
set -e
DLTDOJO_IP=`getent hosts dltdojo | cut -d" " -f1`
DLTDOJO_SUBNET=$DLTDOJO_IP/24
BITCOIND_OPTS=${@/DLTDOJOSUBNETinSTARTSH/$DLTDOJO_SUBNET}
multichaind $BITCOIND_OPTS
