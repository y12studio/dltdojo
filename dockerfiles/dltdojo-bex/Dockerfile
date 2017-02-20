FROM seegno/bitcoind:0.13.2-alpine
# https://github.com/seegno/docker-bitcoind/blob/master/0.13/alpine/Dockerfile
# https://github.com/ethereum/go-ethereum/blob/master/Dockerfile
# https://hub.docker.com/r/ethereum/client-go/

ENV ETHGO_VERSION=1.5.9
RUN apk --update --no-cache add bash curl jq git \
    && apk add --virtual .builddeps build-base go musl-dev linux-headers \
    && curl --insecure -sL https://github.com/ethereum/go-ethereum/archive/v$ETHGO_VERSION.tar.gz | tar zx \
    && mv go-ethereum-$ETHGO_VERSION go-ethereum \
    && (cd go-ethereum && make geth) \
    && cp go-ethereum/build/bin/geth /usr/bin/geth \
    && rm -rf /go-ethereum && rm -rf /var/cache/apk/* \
    && apk --no-cache --purge del .builddeps \
    && rm -rf /tmp/*
ADD bitcoin.conf /root/.bitcoin/
ADD btc.sh eth.sh genesis.json /
RUN chmod +x /*.sh
ENTRYPOINT []
