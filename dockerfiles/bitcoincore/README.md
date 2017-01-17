## LOG

```
$ docker tag y12docker/dltdojo-bitcoin:latest y12docker/dltdojo-bitcoin:0.13.1.core.a0
$ docker push y12docker/dltdojo-bitcoin:0.13.1.core.a0
```

### Wed Jan 11 07:30:34 CST 2017
```
$ docker build -t y12docker/dltdojo-bitcoin .
$ docker push y12docker/dltdojo-bitcoin
```

### LOG
```
$ docker build -t y12docker/dltdojo-bitcoin:0.13.1.core .
$ docker run y12docker/dltdojo-bitcoin:0.13.1.core bitcoind --version
Bitcoin Core Daemon version v0.13.1.0-dc34e83
Copyright (C) 2009-2016 The Bitcoin Core developers
$ CID=$(docker run -d -p 8333:8333 -p 8332:8332 y12docker/dltdojo-bitcoin:0.13.1.core bitcoind -conf=/opt/btc/bitcoin.conf -datadir=/opt/btc/data)
$ docker ps
CONTAINER ID        IMAGE                                   COMMAND                  CREATED             STATUS              PORTS                              NAMES
78e50a7ca942        y12docker/dltdojo-bitcoin:0.13.1.core   "bitcoind -conf=/opt/"   4 seconds ago       Up 4 seconds        0.0.0.0:8332-8333->8332-8333/tcp   modest_saha
$ alias bc='docker exec $CID bitcoin-cli -conf=/opt/btc/bitcoin.conf'
$ bc getinfo
{
  "version": 130100,
  "protocolversion": 70014,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 1520,
  "timeoffset": 0,
  "connections": 2,
  "proxy": "",
  "difficulty": 1,
  "testnet": false,
  "keypoololdest": 1483598705,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}

$ docker push y12docker/dltdojo-bitcoin:0.13.1.core
```

http://git.alpinelinux.org/cgit/aports/tree/community/bitcoin/APKBUILD
