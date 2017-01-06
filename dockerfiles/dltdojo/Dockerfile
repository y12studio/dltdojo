FROM node/7-alpine

WORKDIR /dltdojo
RUN apk --update add bash
RUN apk add --no-cache --virtual .build-deps git
# git clone 
RUN apk del .build-deps
