FROM ethereum/client-go:v1.5.7

RUN apk --update --no-cache add bash curl jq
ADD start.sh curlrpc.sh genesis.json /
RUN chmod +x /start.sh ; chmod +x /curlrpc.sh
