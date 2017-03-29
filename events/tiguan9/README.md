### Setup
```
$ git clone --depth=1 https://github.com/y12studio/dltdojo.git
$ cd dltdojo/dockerfiles/triple-chain/v1/
$ mv docker-compose.darkorange.yml docker-compose.yml
$ docker-compose up -d
Creating btc1
Creating ccenv_latest
Creating abe
Creating darkorange
Creating btcboot
Creating orderer
Creating ca
Creating ccenv_snapshot
Creating peer0
Creating peer1
Creating peer2
Creating cli
$ docker ps --format "{{.Names}}  {{.Ports}}"
cli
peer2  0.0.0.0:8056->7051/tcp
peer1  0.0.0.0:8055->7051/tcp
peer0  0.0.0.0:8051->7051/tcp, 0.0.0.0:8053->7053/tcp
ca  0.0.0.0:8054->7054/tcp
btcboot  0.0.0.0:18332->18332/tcp, 18333/tcp
orderer  0.0.0.0:8050->7050/tcp
darkorange  0.0.0.0:8545->8545/tcp, 0.0.0.0:9080-9081->9080-9081/tcp
abe  8332-8333/tcp, 18332-18333/tcp, 18444/tcp, 0.0.0.0:12750->12750/tcp
btc1  18332-18333/tcp
```

### Bitcoin Test

abe block explorer: http://hostip:12750/

```
$ node btc.js init localhost 18332
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 50,
  blocks: 101,
  timeoffset: 0,
  connections: 2,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1490797952,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```

### Ethereum Test

* MyEtherWallet http://hostip:9081
* browser-solidity http://hostip:9080
* test account : http://128.199.124.120/account/0x00f1667771080c41e6cdff68342f85494c5f3417
* test contract : http://128.199.124.120/account/0x351d2b83e4cf96bb991bf83a67a5088f01adc8d3

```
$ node eth.js info
{ ethBlockNumber: 275,
  ethCoinbase: '0x00f1667771080c41e6cdff68342f85494c5f3417',
  ethAccounts:
   { '0x00f1667771080c41e6cdff68342f85494c5f3417': '17.9963267927384174',
     '0xba32c3353270290a947d69447a4f3515f0d2feb4': '0' },
  ethNonces:
   { '0x00f1667771080c41e6cdff68342f85494c5f3417': 2,
     '0xba32c3353270290a947d69447a4f3515f0d2feb4': 0 },
  ethSyncing: false,
  netPeerCount: 1,
  ethMining: false }
$ node eth.js deploy YOURPASSHERE
0x923bd3a4e3072dbc78fb52b3fdf07d7704f9b0d3f4d99d120a5678befb4da88b
0x351d2b83e4cf96bb991bf83a67a5088f01adc8d3
$ node eth.js deployInfo
balance is 100
```

### Hyperledger Fabric Test

```
$ GOPATH=$PWD node deploy.js
...
[2017-03-29 22:48:46.486] [INFO] DEPLOY - Successfully sent deployment transaction to the orderer.
[2017-03-29 22:48:56.508] [INFO] DEPLOY - The chaincode transaction has been successfully committed

$ node invoke.js
...
[2017-03-29 22:49:24.672] [INFO] Helper - Successfully loaded member from persistence
[2017-03-29 22:49:24.674] [INFO] INVOKE - Successfully obtained user to submit transaction
[2017-03-29 22:49:24.674] [INFO] INVOKE - Executing Invoke
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[]}}
[2017-03-29 22:49:25.076] [INFO] INVOKE - Successfully obtained proposal responses from endorsers
[2017-03-29 22:49:25.076] [INFO] Helper - move proposal was good
[2017-03-29 22:49:25.076] [INFO] Helper - move proposal was good
[2017-03-29 22:49:25.076] [INFO] Helper - move proposal was good
[2017-03-29 22:49:25.076] [INFO] Helper - Successfully obtained transaction endorsements.
[2017-03-29 22:49:35.120] [INFO] INVOKE - The chaincode transaction has been successfully committed

$ node query.js
...
[2017-03-29 22:51:02.565] [INFO] Helper - Successfully loaded member from persistence
[2017-03-29 22:51:02.566] [INFO] QUERY - Successfully obtained enrolled user to perform query
[2017-03-29 22:51:02.567] [INFO] QUERY - Executing Query
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[51,48,48]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[51,48,48]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[51,48,48]}}
[2017-03-29 22:51:02.607] [INFO] QUERY - ############### Query results after the move on PEER0, User "b" now has  "300"
[2017-03-29 22:51:02.607] [INFO] QUERY - ############### Query results after the move on PEER1, User "b" now has  "300"
[2017-03-29 22:51:02.607] [INFO] QUERY - ############### Query results after the move on PEER2, User "b" now has  "300"
```

### Bitcoin-Ethereum-HyperledgerFabric Test

```
$ node triple-invoke.js YOURPASSHERE
...
[2017-03-29 22:52:05.837] [INFO] INVOKE - Executing Invoke
{"args":["move","a","b","1"],"chainId":"myc1","chaincodeId":"mycc","fcn":"invoke","nonce":{"data":[254,129,143,87,62,81,123,210,159,202,55,18,171,61,91,222,110,242,87,224,153,11,172,184],"type":"Buffer"},"txId":{"data":[175,190,197,115,155,155,31,1,230,70],"type":"Buffer"}} c1e1d4aa1bb3432cfc733435bfa18808ae5bae29e01d3a69507637d25f90844d
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[]}}
info: [Peer.js]: Received proposal response: code - {"status":200,"message":"OK","payload":{"type":"Buffer","data":[]}}
[2017-03-29 22:52:06.204] [INFO] INVOKE - Successfully obtained proposal responses from endorsers
[2017-03-29 22:52:06.205] [INFO] Helper - move proposal was good
[2017-03-29 22:52:06.205] [INFO] Helper - move proposal was good
[2017-03-29 22:52:06.205] [INFO] Helper - move proposal was good
[2017-03-29 22:52:06.205] [INFO] Helper - Successfully obtained transaction endorsements.


{ ethBlockNumber: 276,
  ethCoinbase: '0x00f1667771080c41e6cdff68342f85494c5f3417',
  ethAccounts:
   { '0x00f1667771080c41e6cdff68342f85494c5f3417': '17.99474774301463356',
     '0xba32c3353270290a947d69447a4f3515f0d2feb4': '0' },
  ethNonces:
   { '0x00f1667771080c41e6cdff68342f85494c5f3417': 3,
     '0xba32c3353270290a947d69447a4f3515f0d2feb4': 0 },
  ethSyncing: false,
  netPeerCount: 1,
  ethMining: false }
[ '4a6a0669cd8cb1d8959e7b8523cbca409ce05cf1f8758605fb5b1e4ed774bc57' ]

{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 98.9999616,
  blocks: 102,
  timeoffset: 0,
  connections: 2,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1490797952,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }

[2017-03-29 22:52:16.256] [INFO] INVOKE - The chaincode transaction has been successfully committed

$ node query.js

[2017-03-29 23:04:47.224] [INFO] QUERY - ############### Query results after the move on PEER2, User "b" now has  "302"
```
#### Clean up
```
$ docker-compose stop
$ docker-compose rm
```
