FROM alpine:3.5

ADD package.json /tmp/package.json

RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
    && apk --update --no-cache add bash curl jq git nodejs==6.9.4-r0 \
    && apk add --virtual .builddeps build-base python go musl-dev \
    && git clone --depth 1 --branch release/1.5 https://github.com/ethereum/go-ethereum \
    && (cd go-ethereum && make geth) \
    && cp go-ethereum/build/bin/geth /geth \
    && rm -rf /go-ethereum && rm -rf /var/cache/apk/* \
    && cd /tmp && npm install \
    && apk del .builddeps \
    && mkdir -p /opt/app \
    && cp -a /tmp/node_modules /opt/app/ \
    && rm -rf /tmp/*

EXPOSE 8545
EXPOSE 30303

ADD start.sh curlrpc.sh genesis.json ./
RUN chmod +x start.sh && chmod +x curlrpc.sh
WORKDIR /opt/app
ADD index.js keyrecover.js /opt/app/
ENTRYPOINT ["/geth"]
