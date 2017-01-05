docker images : https://hub.docker.com/r/y12docker/bitcoind/

y12docker/bitcoind:0.13.2.core

```
$ date && docker -v
Thu Jan  5 10:25:25 CST 2017
Docker version 1.12.5, build 7392c3b
$ wget -qO- https://github.com/bitcoin/bitcoin/archive/v0.13.2.tar.gz | tar xvz -C ~/tmp
$ ./build.sh
y12docker/bitcoind  0.13.2.core            e555c3965c60        4 minutes ago       17.95 MB
y12docker/bitcoind  0.13.1.core            ef9d68197c1a        4 weeks ago         18 MB
y12docker/bitcoind  0.12.1.core            5b067c5b6e4c        8 months ago        17.91 MB
y12docker/bitcoind  0.12.0.core            59752f001cce        10 months ago       17.88 MB

$ docker run y12docker/bitcoind:0.13.2.core bitcoind --version
Bitcoin Core Daemon version v0.13.2.0-g0d71914
Copyright (C) 2009-2016 The Bitcoin Core developers

$ CID=$(docker run -d -p 8333:8333 -p 8332:8332 y12docker/bitcoind:0.13.2.core bitcoind -conf=/btc/bitcoin.conf -datadir=/btc/data)
$ docker ps
CONTAINER ID        IMAGE                            COMMAND                  CREATED             STATUS              PORTS                              NAMES
5a480dca0387        y12docker/bitcoind:0.13.2.core   "bitcoind -conf=/btc/"   9 seconds ago       Up 8 seconds        0.0.0.0:8332-8333->8332-8333/tcp   sleepy_mclean

$ alias bc='docker exec $CID bitcoin-cli -conf=/btc/bitcoin.conf'
$ bc getinfo
{
  "version": 130200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 1370,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 1,
  "testnet": false,
  "keypoololdest": 1483583318,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}

$ bc getblockchaininfo
{
  "chain": "main",
  "blocks": 2848,
  "headers": 358000,
  "bestblockhash": "00000000f7542ee63bae3104312e1e5569b7244fd7b3c0d9189df10964110956",
  "difficulty": 1,
  "mediantime": 1233655385,
  "verificationprogress": 8.595928944899676e-06,
  "chainwork": "00000000000000000000000000000000000000000000000000000b210b210b21",
  "pruned": false,
  "softforks": [
    {
      "id": "bip34",
      "version": 2,
      "enforce": {
        "status": false,
        "found": 0,
        "required": 750,
        "window": 1000
      },
      "reject": {
        "status": false,
        "found": 0,
        "required": 950,
        "window": 1000
      }
    },
    {
      "id": "bip66",
      "version": 3,
      "enforce": {
        "status": false,
        "found": 0,
        "required": 750,
        "window": 1000
      },
      "reject": {
        "status": false,
        "found": 0,
        "required": 950,
        "window": 1000
      }
    },
    {
      "id": "bip65",
      "version": 4,
      "enforce": {
        "status": false,
        "found": 0,
        "required": 750,
        "window": 1000
      },
      "reject": {
        "status": false,
        "found": 0,
        "required": 950,
        "window": 1000
      }
    }
  ],
  "bip9_softforks": {
    "csv": {
      "status": "defined",
      "startTime": 1462060800,
      "timeout": 1493596800
    },
    "segwit": {
      "status": "defined",
      "startTime": 1479168000,
      "timeout": 1510704000
    }
  }
}

$ bc getnetworkinfo
{
  "version": 130200,
  "subversion": "/Satoshi:0.13.2/",
  "protocolversion": 70015,
  "localservices": "000000000000000d",
  "localrelay": true,
  "timeoffset": -1,
  "connections": 4,
  "networks": [
    {
      "name": "ipv4",
      "limited": false,
      "reachable": true,
      "proxy": "",
      "proxy_randomize_credentials": false
    },
    {
      "name": "ipv6",
      "limited": false,
      "reachable": true,
      "proxy": "",
      "proxy_randomize_credentials": false
    },
    {
      "name": "onion",
      "limited": true,
      "reachable": false,
      "proxy": "",
      "proxy_randomize_credentials": false
    }
  ],
  "relayfee": 0.00001000,
  "localaddresses": [
  ],
  "warnings": ""
}


$ docker push y12docker/bitcoind:0.13.2.core

```
