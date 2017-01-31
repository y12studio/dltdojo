FROM ethereum/client-go:v1.5.7

RUN apk --update --no-cache add bash curl jq
ADD start.sh curlrpc.sh keyfind.sh startboot.sh startpeer.sh genesis.json /
RUN chmod a+x /*.sh
