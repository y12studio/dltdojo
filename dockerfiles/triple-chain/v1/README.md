### TripleChain Test

SmartContract interaction test between Hyperledger Fabric, Bitcoin and Ethereum network.

#### Setup Hyperledger Fabric
```
$ curl -L https://raw.githubusercontent.com/hyperledger/fabric/master/examples/sfhackfest/sfhackfest.tar.gz -o sfhackfest.tar.gz 2> /dev/null
$ tar -xvf sfhackfest.tar.gz
$ cp docker-compose-gettingstarted.yml docker-compose.yml
$ nano docker-compose.yml
$ docker-compose build
$ curl -OOOOOO https://raw.githubusercontent.com/hyperledger/fabric-sdk-node/v1.0-alpha/examples/balance-transfer/{config.json,deploy.js,helper.js,invoke.js,query.js,package.json}
$ npm i
```

#### Start all containers

```
$ docker-compose build
$ docker-compose up -d
$ docker ps --format "{{.Names}}  {{.Ports}}"
cli
peer2  0.0.0.0:8056->7051/tcp
peer1  0.0.0.0:8055->7051/tcp
peer0  0.0.0.0:8051->7051/tcp, 0.0.0.0:8053->7053/tcp
orderer  0.0.0.0:8050->7050/tcp
btcboot  0.0.0.0:18332->18332/tcp, 18333/tcp
abe  8332-8333/tcp, 18332-18333/tcp, 18444/tcp, 0.0.0.0:12750->12750/tcp
ca  0.0.0.0:8054->7054/tcp
eth  0.0.0.0:8545->8545/tcp, 30303/tcp
```

#### Fabric Test

Deploy initializes key value pairs of a=100 & b=200
```
$ GOPATH=$PWD node deploy.js
$ node invoke.js
$ node query.js
```

#### Generate Test Bitcoin
abe : bitcoin block explorer http://hostip:12750/

```
$ node btc.js init localhost 18332
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 50,
  blocks: 101,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1490359178,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```
#### Generate Test Ethereum
```
$ node eth.js init
$ node eth.js info
{ ethBlockNumber: 1,
  ethCoinbase: '0x25bed3737ebba15b755655e7619af367d7b26dcc',
  ethAccounts: { '0x25bed3737ebba15b755655e7619af367d7b26dcc': '5' },
  ethNonces: { '0x25bed3737ebba15b755655e7619af367d7b26dcc': 0 },
  ethSyncing: false,
  netPeerCount: 0,
  ethMining: true }
$ node eth.js deploy pass
$ node eth.js deployInfo
```

#### TripleChain Test
```
$ node triple-invoke.js pass
$ node query.js
```
#### Clean up
```
$ docker-compose stop
$ docker-compose rm
```
####
* http://hyperledger-fabric.readthedocs.io/en/latest/asset_setup.html
* https://github.com/hyperledger/fabric-sdk-node/tree/master/examples/balance-transfer
