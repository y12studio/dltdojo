### 2017-04-05T11:10:18+0800
```
$ docker build -t y12docker/elements:0.13.1 .
$ docker run -it --rm y12docker/elements:0.13.1 elements-cli --version
Elements Core RPC client version v0.13.1.0-a0b6e11
$ docker-compose build
$ docker-compose up -d
$ docker-compose ps
$ docker-compose exec btcboot bitcoin-cli getinfo
{
  "version": 130100,
  "protocolversion": 70014,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 2,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1491379100,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ alias e1-cli="docker-compose exec element1 elements-cli"
$ alias e2-cli="docker-compose exec element2 elements-cli"
$ e1-cli getinfo
{
  "version": 130100,
  "protocolversion": 70014,
  "walletversion": 130000,
  "balance": {
  },
  "blocks": 0,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 1,
  "testnet": false,
  "keypoololdest": 1491385285,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ e1-cli getwalletinfo
{
  "walletversion": 130000,
  "balance": {
  },
  "unconfirmed_balance": {
  },
  "immature_balance": {
    "bitcoin": 21000000.00000000
  },
  "txcount": 1,
  "keypoololdest": 1491385285,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "hdmasterkeyid": "1edcd68ed71a20fc3b4263d1f99b9d8478a75cc6"
}
$ e1-cli generate 101
$ e1-cli getwalletinfo
{
  "walletversion": 130000,
  "balance": {
    "bitcoin": 21000000.00000000
  },
  "unconfirmed_balance": {
  },
  "immature_balance": {
    "bitcoin": 0.00000000
  },
  "txcount": 102,
  "keypoololdest": 1491385285,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "hdmasterkeyid": "1edcd68ed71a20fc3b4263d1f99b9d8478a75cc6"
}
$ e2-cli getwalletinfo
{
  "walletversion": 130000,
  "balance": {
    "bitcoin": 21000000.00000000
  },
  "unconfirmed_balance": {
  },
  "immature_balance": {
  },
  "txcount": 1,
  "keypoololdest": 1491385285,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "hdmasterkeyid": "e4ba447785c608336a6882eaab0273142f0f2fc1"
}

$ e1-cli sendtoaddress $(e1-cli getnewaddress) 10500000 "" "" true
$ e1-cli generate 101
$ e2-cli sendtoaddress $(e2-cli getnewaddress) 10500000 "" "" true
$ e2-cli generate 101
$ ADDR=$(e2-cli getnewaddress)
$ e2-cli validateaddress $ADDR
{
  "isvalid": true,
  "address": "CTEqKjF5tpAFwRTL1X7GWahPUcVUZfQqM6cHQRQ8NV9yWh7Kc8L4DAqvkxxfdjb3u6fAXJZAD8JfGKYk",
  "scriptPubKey": "76a914361ed54eba010a211b91316e7f4ccfecb5b99e7e88ac",
  "confidential_key": "02d03a51f7bfefab2114594ec2ee05a23c8bd52c6e9b7db50882753ff1f6b89d97",
  "unconfidential": "2deMupD2qGA9mj1YyLsJuec1qVwQyH1Sox1",
  "ismine": true,
  "iswatchonly": false,
  "isscript": false,
  "pubkey": "022d9435b79be9bf478476afd42758501a26e84e89d186e9e9c3e70527e824fc50",
  "iscompressed": true,
  "account": "",
  "hdkeypath": "m/0'/0'/3'",
  "hdmasterkeyid": "e4ba447785c608336a6882eaab0273142f0f2fc1"
}

$ TXID=$(e2-cli sendtoaddress $ADDR 1)
$ e2-cli generate 1
[
  "6672a0d268072d7fc42a9ac68cce8de2f84e8bca27c0d98d2a55e9e9eef275a9"
]
$ e2-cli gettransaction $TXID
{
  "amount": {
    "bitcoin": 0.00000000
  },
  "fee": -0.00042720,
  "confirmations": 1,
  "blockhash": "6672a0d268072d7fc42a9ac68cce8de2f84e8bca27c0d98d2a55e9e9eef275a9",
  "blockindex": 1,
  "blocktime": 1491386029,
  "txid": "f35f6dde8aac2919e5f8bab9c8689d9b32e2b05804347771105176070432f2f4",
  "walletconflicts": [
  ],
  "time": 1491386020,
  "timereceived": 1491386020,
  "bip125-replaceable": "no",
  "blindingfactors": "e65a14eee9e15f9c23eb4aee8cc11e27caabc50447429d7ed0097702a7508f8d:777deb0c8c4e87812e2bdc0abfa7369999b051f4d02e7e00bbe2f0cfce8a8468:0000000000000000000000000000000000000000000000000000000000000000:",
  "details": [
    {
      "account": "",
      "address": "2deMupD2qGA9mj1YyLsJuec1qVwQyH1Sox1",
      "category": "send",
      "amount": -1.00000000,
      "amountblinder": "777deb0c8c4e87812e2bdc0abfa7369999b051f4d02e7e00bbe2f0cfce8a8468",
      "asset": "09f663de96be771f50cab5ded00256ffe63773e2eaa9a604092951cc3d7c6621",
      "assetblinder": "1c4b9dd337c010f8ef1d67d11be22cc0027c5db02cebf60c5c9449543f551d4c",
      "label": "",
      "vout": 1,
      "fee": -0.00042720,
      "abandoned": false
    },
    {
      "account": "",
      "address": "2deMupD2qGA9mj1YyLsJuec1qVwQyH1Sox1",
      "category": "receive",
      "amount": 1.00000000,
      "amountblinder": "777deb0c8c4e87812e2bdc0abfa7369999b051f4d02e7e00bbe2f0cfce8a8468",
      "asset": "09f663de96be771f50cab5ded00256ffe63773e2eaa9a604092951cc3d7c6621",
      "assetblinder": "1c4b9dd337c010f8ef1d67d11be22cc0027c5db02cebf60c5c9449543f551d4c",
      "label": "",
      "vout": 1
    }
  ],
  "hex": "0.......0"
}
$ e1-cli gettransaction $TXID
error code: -5
error message:
Invalid or non-wallet transaction id
$ e1-cli dumpassetlabels
{
  "bitcoin": "09f663de96be771f50cab5ded00256ffe63773e2eaa9a604092951cc3d7c6621"
}
$ e1-cli getwalletinfo bitcoin
{
  "walletversion": 130000,
  "balance": 10500000.00000000,
  "unconfirmed_balance": 0.00000000,
  "immature_balance": 0.00000000,
  "txcount": 205,
  "keypoololdest": 1491385285,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "hdmasterkeyid": "1edcd68ed71a20fc3b4263d1f99b9d8478a75cc6"
}
$ ISSUE=$(e1-cli issueasset 1 1)
$ echo $ISSUE | jq .
{
  "token": "e0a06c9672fde5e9bb0d994d3c9f92fdcb30dc10ec3de2f2c987f54b7fd7d70a",
  "asset": "e8d5c2bc0e4fdcd78f4f6e9f67b1d50d6afd0fab9f638e1abaf837270b8b77c3",
  "entropy": "d484000eccbc7d5e10bb3eee11c32e828aed41732d59b714a5a7e92f99d5c346",
  "vin": "0",
  "txid": "87834c9a67a5bab1cc2c5b7e3d9f72b25335ceb401cc395b52079eac6388937c"
}
$ ASSET=$(echo $ISSUE | jq '.asset' | tr -d '"')
$ echo $ASSET
e8d5c2bc0e4fdcd78f4f6e9f67b1d50d6afd0fab9f638e1abaf837270b8b77c3
$ e1-cli listissuances
[
  {
    "isreissuance": false,
    "token": "e0a06c9672fde5e9bb0d994d3c9f92fdcb30dc10ec3de2f2c987f54b7fd7d70a",
    "tokenamount": 1.00000000,
    "tokenblinds": "54bc0f1b5b22cc6e6f1e686ad0928eccff0da3af108cca5309347ae895ab8cf7",
    "entropy": "d484000eccbc7d5e10bb3eee11c32e828aed41732d59b714a5a7e92f99d5c346",
    "txid": "87834c9a67a5bab1cc2c5b7e3d9f72b25335ceb401cc395b52079eac6388937c",
    "vin": 0,
    "asset": "e8d5c2bc0e4fdcd78f4f6e9f67b1d50d6afd0fab9f638e1abaf837270b8b77c3",
    "assetamount": 1.00000000,
    "assetblinds": "d713a091580b350f426ff4d47e8972b099333bb87882ed33020b1d3828b6a4de"
  }
]
$ e1-cli sendtoaddress $(e2-cli getnewaddress) 1 "" "" false $ASSET
$ e2-cli generate 1
$ e2-cli getwalletinfo $ASSET
{
  "walletversion": 130000,
  "balance": 1.00000000,
  "unconfirmed_balance": 0.00000000,
  "immature_balance": 0.00000000,
  "txcount": 108,
  "keypoololdest": 1491385285,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "hdmasterkeyid": "e4ba447785c608336a6882eaab0273142f0f2fc1"
}

```
