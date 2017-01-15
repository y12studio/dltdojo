FROM alpine:3.5

WORKDIR /opt/btc
RUN apk --update add bash curl bitcoin==0.13.1-r0 bitcoin-cli==0.13.1-r0 bitcoin-tx==0.13.1-r0
RUN mkdir data
# Generated random user / password / port in: /etc/bitcoin.conf
ADD bitcoin.conf /opt/btc/bitcoin.conf
