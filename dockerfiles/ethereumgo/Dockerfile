FROM ethereum/client-go:v1.5.5

RUN apk --update add bash
ADD genesis.json genesis.json
RUN /geth init genesis.json
