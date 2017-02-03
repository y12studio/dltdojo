FROM node:7-alpine

WORKDIR /opt/app
RUN apk --update --no-cache add bash curl jq git \
    && apk add --virtual .builddeps build-base python musl-dev \
    && npm install -g truffle ethereumjs-testrpc\
    && apk del .builddeps
