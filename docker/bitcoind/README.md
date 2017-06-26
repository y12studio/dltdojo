### dltdojo/bitcoind:1.4.2

* https://hub.docker.com/r/dltdojo/bitcoind/

```
$ docker build -t dltdojo/bitcoind:1.4.2 .
$ docker run -d dltdojo/bitcoind:1.4.2
39f85a358e0c9f3ab1ba495c7ccc642da373607cff66067c4753792751a7283e
$ docker exec -it 39f8 -u bitcoin sh

/ $ bitcoin-cli getinfo
{
  "version": 140200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1498473356,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
/ $ bitcoin-cli generate 101
/ $ bitcoin-cli getinfo
{
  "version": 140200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 50.00000000,
  "blocks": 101,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1498473356,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
/ $ bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 10.00
2ddb487400db7b94a7d8728e64a3ebd0205c3994ffc74f651d58ee1d5c2e93e3
/ $ bitcoin-cli getinfo
{
  "version": 140200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 39.99996160,
  "blocks": 101,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1498473356,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
/ $ bitcoin-cli generate 1
[
  "55fb99c19e60bf192b8f1d0a23bf00e7b35a6c7443d7fe554bd4fe1dff48dfec"
]

/ $ bitcoin-cli gettransaction 2ddb487400db7b94a7d8728e64a3ebd0205c3994ffc74f651
d58ee1d5c2e93e3
{
  "amount": -10.00000000,
  "fee": -0.00003840,
  "confirmations": 1,
  "blockhash": "55fb99c19e60bf192b8f1d0a23bf00e7b35a6c7443d7fe554bd4fe1dff48dfec",
  "blockindex": 1,
  "blocktime": 1498474968,
  "txid": "2ddb487400db7b94a7d8728e64a3ebd0205c3994ffc74f651d58ee1d5c2e93e3",
  "walletconflicts": [
  ],
  "time": 1498474936,
  "timereceived": 1498474936,
  "bip125-replaceable": "no",
  "details": [
    {
      "account": "",
      "address": "mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou",
      "category": "send",
      "amount": -10.00000000,
      "vout": 1,
      "fee": -0.00003840,
      "abandoned": false
    }
  ],
  "hex": "0200000001b26b2231462b1fec3408b6cdd9a885adfe0d2c17e2bc3a32eb0c50ead7a1ea9200000000494830450221008220ee36688be67f4024d4f10cfaaa8b9c5a92b20e39edb3649ddddec484912a02203e8094174677c17158fae3581d412d10942d0577db173ada24c355be67cea6bf01feffffff0200196bee000000001976a914cd7b1303a465bba8a5775e976ccf591bfdcf15e788ac00ca9a3b000000001976a914a57414e5ffae9ef5074bacbe10a320bb2614e1f388ac65000000"
}
/ $ bitcoin-cli getnewaddress
mzvubqbwXXWEZVAmZ7EVKrYJu8D1azm8py

/ $ exit

$ docker stop 39f8
```

### REFERENCES

* seegno/bitcoind - Docker Hub  https://hub.docker.com/r/seegno/bitcoind/
