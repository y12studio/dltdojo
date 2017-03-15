* https://blockchain.info/ticker?cors=true
* JSON-RPC API - Release 1 - Introduction https://api.random.org/json-rpc/1/introduction
* JSON-RPC API - Release 1 - Digital Signing  https://api.random.org/json-rpc/1/signing

### GCP micro vm
```
$ cd darkorange
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{package.json,darkorange.js}
$ npm i
$ node darkorange.js newAccount pass
$ node darkorange.js getInfo
{ ethBlockNumber: 33,
  ethCoinbase: '0x4e1d21135f6e1dd9913964d4f21c011717efa41a',
  ethAccounts: { '0x4e1d21135f6e1dd9913964d4f21c011717efa41a': '551' },
  ethNonces: { '0x4e1d21135f6e1dd9913964d4f21c011717efa41a': 0 },
  ethSyncing: false,
  netPeerCount: 4,
  ethMining: false }
$ node darkorange.js updateOracleBtcTwd 88a9a5b182deadf8cea182133042cdf63c0d547e 4e1d21135f6e1dd9913964d4f21c011717efa41a pass
{ '15m': 38903.63,
  last: 38903.63,
  buy: 38872.59,
  sell: 38903.63,
  symbol: 'NT$' }
$ node darkorange.js getOracleValue 88a9a5b182deadf8cea182133042cdf63c0d547e 4e1d21135f6e1dd9913964d4f21c011717efa41a
oracle.current is 38893
oracle.updateAt blocknum is 34

$ crontab -l
@hourly /usr/bin/node /home/y12studio/darkorange/darkorange.js updateOracleBtcTwd 88a9a5b182deadf8cea182133042cdf63c0d547e 4e1d21135f6e1dd9913964d4f21c011717efa41a pass
```
