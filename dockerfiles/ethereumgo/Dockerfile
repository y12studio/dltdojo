FROM ethereum/client-go:v1.5.8

RUN apk --update --no-cache add bash curl jq
ADD start.sh curlrpc.sh keyfind.sh start.sh genesis.json /
RUN chmod a+x /*.sh
ENTRYPOINT []
