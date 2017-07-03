```
$ docker build -t dltdojo/abe .
$ docker run -d -p 12750:12750 dltdojo/abe
$ docker ps
$ docker exec --user bitcoin -it 9b9c bash

bash-4.3$ bitcoin-cli generate 101
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
  "keypoololdest": 1499066158,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
bash-4.3$ bitcoin-cli getinfo
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
  "keypoololdest": 1499066158,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
```