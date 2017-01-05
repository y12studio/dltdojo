#!/bin/bash

set -e
set -x

SCRIPTPATH=$( cd "$(dirname "$0")" ; pwd -P )
VERSION=bitcoin-0.13.2
DKTAG=0.13.2.core
DIRBUILD=~/tmp/bitcoin
#
# wget -qO- https://github.com/bitcoin/bitcoin/archive/v0.13.2.tar.gz | tar xvz -C ~/tmp
rm -rf ${DIRBUILD}
cp -r ~/tmp/${VERSION} ${DIRBUILD}
cd ${DIRBUILD}
./autogen.sh
CONFIGFLAGS="-disable-tests --without-gui --disable-ccache --disable-maintainer-mode --disable-dependency-tracking"
./configure --prefix=${SCRIPTPATH} --with-incompatible-bdb ${CONFIGFLAGS}
make -j4
make install-strip
#
# larsks/dockerize https://github.com/larsks/dockerize
#
cd ${SCRIPTPATH}
dockerize -t y12docker/bitcoind:${DKTAG} -a bin/bitcoind /usr/bin/bitcoind \
    -a bin/bitcoin-cli /usr/bin/bitcoin-cli \
    -a bin/bitcoin-tx /usr/bin/bitcoin-tx \
    -a bitcoin.conf /btc/bitcoin.conf \
    -a README.md /btc/data/README.md \
    -a /bin/bash /bin/bash \
    -a /bin/hostname /bin/hostname \
    -a /bin/ping /bin/ping \
    -a /sbin/ifconfig /bin/ifconfig \
    -a /bin/echo /bin/echo \
    -a /usr/bin/env /usr/bin/env \
    -a /usr/bin/nslookup /usr/bin/nslookup \
    -c /bin/bash --filetools
