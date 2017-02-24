### 2017-02-23T16:42:20+0800
```
$ cd hackfast
$ curl -L https://raw.githubusercontent.com/hyperledger/fabric/master/examples/sfhackfest/sfhackfest.tar.gz -o sfhackfest.tar.gz 2> /dev/null;  tar -xvf sfhackfest.tar.gz
$ docker-compose -f docker-compose-gettingstarted.yml build
$ docker-compose -f docker-compose-gettingstarted.yml up -d
$ docker ps
$ curl -OOOOOO https://raw.githubusercontent.com/hyperledger/fabric-sdk-node/v1.0-alpha/examples/balance-transfer/{config.json,deploy.js,helper.js,invoke.js,query.js,package.json}
$ npm install
$ GOPATH=$PWD node deploy.js
$ node invoke.js
$ node query.js
info: Returning a new winston logger with default configurations
info: [Chain.js]: Constructed Chain instance: name - fabric-client1, securityEnabled: true, TCert download batch size: 10, network mode: true
info: [Peer.js]: Peer.const - url: grpc://localhost:8051 options  grpc.ssl_target_name_override=tlsca, grpc.default_authority=tlsca
info: [Peer.js]: Peer.const - url: grpc://localhost:8055 options  grpc.ssl_target_name_override=tlsca, grpc.default_authority=tlsca
info: [Peer.js]: Peer.const - url: grpc://localhost:8056 options  grpc.ssl_target_name_override=tlsca, grpc.default_authority=tlsca
info: [crypto_ecdsa_aes]: This class requires a KeyValueStore to save keys, no store was passed in, using the default store /home/lin/.hfc-key-store
info: [Client.js]: Successfully loaded user "admin" from local key value store
[2017-02-23 17:06:00.098] [INFO] Helper - Successfully loaded member from persistence
[2017-02-23 17:06:00.099] [INFO] QUERY - Successfully obtained enrolled user to perform query
[2017-02-23 17:06:00.099] [INFO] QUERY - Executing Query
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[51,48,48]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[51,48,48]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[51,48,48]}}
[2017-02-23 17:06:00.140] [INFO] QUERY - ############### Query results after the move on PEER0, User "b" now has  "300"
[2017-02-23 17:06:00.140] [INFO] QUERY - ############### Query results after the move on PEER1, User "b" now has  "300"
[2017-02-23 17:06:00.140] [INFO] QUERY - ############### Query results after the move on PEER2, User "b" now has  "300"
```
