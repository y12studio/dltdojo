### docker-compose up

* localhost:12750

```
$ docker-compose up -d
e$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
abe_bitcore_1      /start.sh          Up                 0.0.0.0:12750->1
                                                         2750/tcp,
                                                         18332/tcp,
                                                         18333/tcp,
                                                         18444/tcp,
                                                         8332/tcp,
                                                         8333/tcp
abe_btc0_1         /entrypoint.sh     Up                 18332/tcp,
                   bitcoind                              18333/tcp,
                                                         18444/tcp,
                                                         8332/tcp,
                                                         8333/tcp
$ docker-compose exec --user bitcoin btc0 bash

bash-4.3$ bitcoin-cli generate 101

bash-4.3$ bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 8.8
b0ef1e8aa5e031d4385c665db27b26de6e5cdf7030c328fce6bf1e211642f357

bash-4.3$ bitcoin-cli generate 1
[
  "6ba3e4066df30386f581ecf39ec885b6dc2e2b5ac6065cc829fa389e3518602c"
]

bash-4.3$ bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 5.8
f025be078759ff8b5274a2dd7ed62e6042c9a60861d535793996b48c255fb16c

bash-4.3$ bitcoin-cli generate 1
[
  "2e98c0ada4f64ae1d4445ef37492695d12dfb54b6ac3c019724dba80a8db061e"
]
```

### docker run 
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