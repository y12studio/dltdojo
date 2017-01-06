FROM ethereum/client-go:v1.5.5

RUN apk --update add bash curl jq
ADD genesis.json genesis.json
RUN /geth init genesis.json
ADD start.sh start.sh
RUN chmod +x start.sh
ADD curlrpc.sh curlrpc.sh
RUN chmod +x curlrpc.sh
