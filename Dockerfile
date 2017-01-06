FROM node:7-alpine

RUN apk --update add bash
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/ && rm -rf /tmp/*
WORKDIR /opt/app
ADD index.js /opt/app
ENTRYPOINT ["node","index.js"]
