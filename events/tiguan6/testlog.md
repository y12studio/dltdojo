### Deploy DDJTAB
kovan
```
$ parity --chain kovan --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{package.json,darkorange.js}
$ npm i
$ node darkorange.js getInfo
$ node darkorange.js deployDdjtab Ddjtab.sol bf87fb1a84eea1b89247fca2a47f0421c6fc28aa kovantest
// https://kovan.etherscan.io/address/0xa654ed908b49f0d0c5d330927d3364d4571b74c3
$ node darkorange.js getDdjtabInfo Ddjtab.sol a654ed908b49f0d0c5d330927d3364d4571b74c3 bf87fb1a84eea1b89247fca2a47f0421c6fc28aa
balance is 21000000
totalSupply is 21000000
$ node darkorange.js transferDdjtab Ddjtab.sol a654ed908b49f0d0c5d330927d3364d4571b74c3 bf87fb1a84eea1b89247fca2a47f0421c6fc28aa kovantest bf87fb1a84eea1b89247fca2a47f0421c6fc28aa 9
// https://ipfs.io/ipfs/Qmd55PfWajL2Mp7Ru5huPECsRWKPpEdsSFDqBUoUozQDjs
// solfile, contractAddress, addrFrom, password, addrTo, amount, certid, ipfsHashB58
$ node darkorange.js sendDdjtab Ddjtab.sol a654ed908b49f0d0c5d330927d3364d4571b74c3 bf87fb1a84eea1b89247fca2a47f0421c6fc28aa kovantest bf87fb1a84eea1b89247fca2a47f0421c6fc28aa 1 7 Qmd55PfWajL2Mp7Ru5huPECsRWKPpEdsSFDqBUoUozQDjs
```

### 2017-03-01T11:40:01+0800
* https://ipfs.io/ipfs/Qmd55PfWajL2Mp7Ru5huPECsRWKPpEdsSFDqBUoUozQDjs
```
$ ipfs add example.html
added Qmd55PfWajL2Mp7Ru5huPECsRWKPpEdsSFDqBUoUozQDjs example.html
$ hash=Qmd55PfWajL2Mp7Ru5huPECsRWKPpEdsSFDqBUoUozQDjs
$ ipfs cat $hash
$ curl "http://127.0.0.1:8080/ipfs/$hash"
```
