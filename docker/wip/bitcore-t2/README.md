### dltdojo/bitcore

* https://github.com/starit/btc-docker-compose
* https://hub.docker.com/r/sena/bitcore/
* http://localhost:3001/insight

```
$ docker build -t dltdojo/bitcore .
$ docker-compose up -d
$ docker-compose exec --user bitcoin btc0 bash

bash-4.3$ bitcoin-cli generate 101

bash-4.3$ bitcoin-cli getinfo
{
  "version": 140200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 50.00000000,
  "blocks": 101,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1499177189,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}

bash-4.3$ bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 10.00
49a079ebf5eeef162b46bf2f164b204f257f7eaedf361ec0e4b6c91a64ccc005

bash-4.3$ bitcoin-cli generate 2
[
  "75a9e3abe9448e3df51c3cf1c1404ea7b555908a0706b2cd1a6671d1d336d6d0",
  "09f520e735f6bbd6730d43d283468af80e68eaefbe014bc5a01a34f1bb44dc34"
]

```