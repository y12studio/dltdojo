#### BUILD
```
$ curl -L https://raw.githubusercontent.com/hyperledger/fabric/master/examples/sfhackfest/sfhackfest.tar.gz -o sfhackfest.tar.gz 2> /dev/null
$ tar -xvf sfhackfest.tar.gz
$ cp docker-compose-gettingstarted.yml docker-compose.yml
$ nano docker-compose.yml
$ docker-compose build
$ curl -OOOOOO https://raw.githubusercontent.com/hyperledger/fabric-sdk-node/v1.0-alpha/examples/balance-transfer/{config.json,deploy.js,helper.js,invoke.js,query.js,package.json}
$ curl -O https://y12studio.github.io/dltdojo/chains/darkorange/darkorange.js
$ nano package.json
$ npm i
```

#### TEST

```
$ docker-compose up -d
$ docker ps --format "{{.Names}}  {{.Ports}}\n"
cli

peer2  0.0.0.0:8056->7051/tcp

peer1  0.0.0.0:8055->7051/tcp

peer0  0.0.0.0:8051->7051/tcp, 0.0.0.0:8053->7053/tcp

btcboot  0.0.0.0:18332->18332/tcp, 18333/tcp

ca  0.0.0.0:8054->7054/tcp

orderer  0.0.0.0:8050->7050/tcp

darkorange  0.0.0.0:8545->8545/tcp, 0.0.0.0:9080-9081->9080-9081/tcp

abe  8332-8333/tcp, 18332-18333/tcp, 18444/tcp, 0.0.0.0:12750->12750/tcp

// Deploy initializes key value pairs of a=100 & b=200
$ GOPATH=$PWD node deploy.js
$ node invoke.js
$ node query.js
```

#### TEST

####
* http://hyperledger-fabric.readthedocs.io/en/latest/asset_setup.html
* https://github.com/hyperledger/fabric-sdk-node/tree/master/examples/balance-transfer
