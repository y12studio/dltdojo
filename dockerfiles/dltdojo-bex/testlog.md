### 2017-02-20T11:47:50+0800
* http://192.168.2.73:12750
* http://192.168.2.73:18000

```
$ dcup
$ dj btc btcboot info
$ dj btc btc1 info
$ dj btc btc1 miner --num 101
$ dj btc btcboot miner --num 10
$ dj eth ethdev account --new --password pass
$ dj eth ethdev miner --start
$ dj eth ethdev account --list
{ '0x3cf0869b280d4e0cf423ea4fb0e46d604ccc900a': { balance: '105000000000000000000', ethBalance: '105' } }
$ dj eth ethdev send --to 0xaaf98a65dabd34d69769a377016a38b800cc72d6 --eth 1.68 --password pass
$ dj eth ethdev hahacoin --new --password pass --address 0x3cf0869b280d4e0cf423ea4fb0e46d604ccc900a
{ tx: '0xe81c608a28f90e3547137efd921f3ce85b7d1c2a6dc78f63813290e6423ff93e',
  contractAddress: '0xaf0b4b4e7ed99ca734325d3b91aee84d6da1b387' }
$ dj eth ethdev txinfo
{ blockHash: '0x0643fe40646069fb2156916af3574b3256775da7e97d83f7eff681d9a3587553',
  blockNumber: 11,
  contractAddress: '0xd14f1f9440cd5776d35ec66cfa8b1414e2a9cef7',
  cumulativeGasUsed: 199179,
  from: '0x3cf0869b280d4e0cf423ea4fb0e46d604ccc900a',
  gasUsed: 199179,
  logs: [],
  logsBloom: 'xx'',
  root: '0x7190635b46e9ad7023ef3c1eda5d335e5d9ec9bc354ea7590584eaa16d41f6ce',
  to: null,
  transactionHash: '0x6965efbf3e37074dd75a3a428b54494f30387307054d367145505d3f3dea4006',
  transactionIndex: 0 }
$ dj eth ethdev hahacoin --address 0x3cf0869b280d4e0cf423ea4fb0e46d604ccc900a --password pass --contract 0x7c81b80af190340f666b3ed052a6c0ddf570e608
{ account: '0x3cf0869b280d4e0cf423ea4fb0e46d604ccc900a',
  contractAddress: '0x7c81b80af190340f666b3ed052a6c0ddf570e608',
  contractBalance: '10000' }
```
### 2017-02-20T10:51:50+0800
* http://192.168.2.73:12750
* http://192.168.2.73:18000

```
$ dcup
$ dc exec btcboot bitcoin-cli generate 101
$ dc exec ethdev /eth.sh miner_start
{"jsonrpc":"2.0","id":67,"result":"0x4a50ba1e7d6f830adfbfd55b00014a6741a8277b"}
{"jsonrpc":"2.0","id":74,"result":true}
```
### 2017-02-19T22:16:22+0800
```
$ docker build -t y12docker/dltdojo-bex .
$ docker images | grep dltdojo-bex
y12docker/dltdojo-bex  latest  33d0030db252   4 minutes ago       110 MB
$ docker run -it --rm y12docker/dltdojo-bex bitcoind --version
Bitcoin Core Daemon version v0.13.2.0-g0d71914
Copyright (C) 2009-2016 The Bitcoin Core developers
$ docker run -it --rm y12docker/dltdojo-bex geth version
Geth
Version: 1.5.9-stable
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.6.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ docker run -it --rm y12docker/dltdojo-bex /startbtc.sh
$ docker run -it --rm y12docker/dltdojo-bex /starteth.sh
```
