### bitcoinjs 2.3.0
bitcoinjs/bitcoinjs-lib: Bitcoin-related functions implemented in pure JavaScript  https://github.com/bitcoinjs/bitcoinjs-lib
```
$ cd docs/js/bitcoinjs
$ cat index.js
module.exports = {
  base58: require('bs58'),
  bitcoin: require('bitcoinjs-lib'),
  ecurve: require('ecurve'),
  BigInteger: require('bigi'),
  Buffer: require('buffer')
}
$ npm install bs58 bitcoinjs-lib ecurve bigi buffer
$ browserify index.js --standalone BitcoinJS > 2.3.0/bitcoinjs.js
```
