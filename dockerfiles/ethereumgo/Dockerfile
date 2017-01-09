FROM ethereum/client-go:v1.5.5

RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
    && apk --update --no-cache add bash curl jq git nodejs==6.9.4-r0
RUN apk add --virtual .builddeps build-base python
ADD package.json /tmp/package.json
RUN cd /tmp && npm install && apk del .builddeps
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/ && rm -rf /tmp/*
ADD start.sh curlrpc.sh genesis.json ./
RUN chmod +x start.sh && chmod +x curlrpc.sh
WORKDIR /opt/app
ADD index.js keyrecover.js /opt/app/
