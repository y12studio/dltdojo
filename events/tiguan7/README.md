#### Oracle test on the DarkOrange
* http://128.199.124.120/account/0x88a9a5b182deadf8cea182133042cdf63c0d547e
* https://github.com/y12studio/dltdojo/tree/master/docs/chains/darkorange

```
$ mkdir darkorange && cd darkorange
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{darkorange.json,node.toml}
$ cd darkorange
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{package.json,darkorange.js}
$ npm i
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
#### References
* oraclekit/smart_oracle: a ruby implementation of a Smart Oracle  https://github.com/oraclekit/smart_oracle
* Daily Price Oracles » Brave New Coin  https://bravenewcoin.com/services/oracles/daily-price-oracles
* Oracle - Wikipedia https://en.wikipedia.org/wiki/Oracle
* I Am Sir Oracle, And When I Ope My Lips, Let No Dog Bark! - No Fear Shakespeare: The Merchant of Venice: Act 1, Scene 1, Page 4
 http://nfs.sparknotes.com/merchant/page_8.html
 * Interactions Between Contracts | Dapps for Beginners  https://dappsforbeginners.wordpress.com/tutorials/interactions-between-contracts/
 * solidity - Call function on another contract - Ethereum Stack Exchange  http://ethereum.stackexchange.com/questions/2826/call-function-on-another-contract
