# TESTLOG

### Mon Jan 16 11:08:00 CST 2017
```
$ node build.js --name lv1 --dojo.btc 4 --path level1
$ cd level1
$ source lv1-alias.sh
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
lv1_btcp1_1        bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
lv1_btcp2_1        bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
lv1_btcp3_1        bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
lv1_btcp4_1        bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
lv1_btcp_1         bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
lv1_dltdojo_1      node index.js      Up
                   start

$ btcp1 getInfo
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484539458,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ btcp1 getNewAddress
mkUxg79fKXUiwSSQJMtfeYqPLyeemZYcw7
$ btcp1 dumpPrivKey --address mkUxg79fKXUiwSSQJMtfeYqPLyeemZYcw7
cQTNYybhp6UW39xPzT7RJXgyEDH6J2EvDrQLD42mJyPE8x7D4vsL

$ ddj btc btcp1 getInfo
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484536465,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }

$ ddj btc btcp1 getNewAddress
mqaCt78PzmoQfd5Y7zwUsFsZn81nE5YV3d
$ ddj btc btcp1 dumpPrivKey --address mqaCt78PzmoQfd5Y7zwUsFsZn81nE5YV3d
cVK5tHaHGLKYof54wbsX5n28pnAPPCKCZH5Mb38jorsPJpJbpUzS

$ ddj btc getInfo btcp1
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484536465,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ ddj btc getInfo btcp2
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484536465,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }

```

### LOG0106
```
$ date && docker -v && echo $BASH_VERSION
Fri Jan  6 14:13:32 CST 2017
Docker version 1.12.5, build 7392c3b
4.3.11(1)-release
$
```
### LOG0105
```
$ docker-compose -v
docker-compose version 1.9.0, build 2585387
$ source alias.sh
$ dc up -d
Creating network "level1_default" with the default driver
Creating level1_vp0_1
Creating level1_vp3_1
Creating level1_vp1_1
Creating level1_vp2_1
$ dc ps
    Name                  Command               State   Ports
-------------------------------------------------------------
level1_vp0_1   bitcoind -regtest -txindex ...   Up
level1_vp1_1   bitcoind -regtest -txindex ...   Up
level1_vp2_1   bitcoind -regtest -txindex ...   Up
level1_vp3_1   bitcoind -regtest -txindex ...   Up

$ vp0cli getinfo
{
  "version": 130200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1483585089,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ vp0cli getnewaddress
mrjN5jsJf4GNA8Sy6gXuStocwFN1fR45d2
$ vp0cli getnewaddress
$ vp0cli getnewaddress
$ vp0cli getnewaddress
$ vp0cli getnewaddress
$ vp0cli getaddressesbyaccount ""
[
  "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy",
  "mpHtKSYaQ8Udkn5brZwvxnP4mEUGc4irec",
  "mpit6q3nokF3XsH9wNcXBGRTiRCrMJdHsE",
  "mrjN5jsJf4GNA8Sy6gXuStocwFN1fR45d2",
  "msufv8Mdxn7HNgihL1c3nr7jG4um1FPY4U"
]
$ vp1cli getaddressesbyaccount ""
[
  "n1ZkxP1LfN67giP8qDPyyGRaxwdzCTcj1w"
]
$ vp1cli getnewaddress
mxCSA2Kyzoh2NMRS18UCUFYuqggvbfrY4T
$ vp1cli getaddressesbyaccount ""
[
  "mxCSA2Kyzoh2NMRS18UCUFYuqggvbfrY4T",
  "n1ZkxP1LfN67giP8qDPyyGRaxwdzCTcj1w"
]
$ vp1cli generate 101
$ vp1cli getbalance
50.00000000
$ vp0cli getbalance
0.00000000
$ vp0cli getnewaddress
mg41DtN1A2x9sMqRHtg82AVxHrSQLrMPG2
$ vp1cli sendtoaddress mg41DtN1A2x9sMqRHtg82AVxHrSQLrMPG2 8
$ vp1cli getbalance
41.99996160
$ vp0cli getbalance
0.00000000
$ vp2cli generate 1
[
  "3fd4d2c530eb943ec973b79052c4730eedee41ef7037807a5f65009349e67e93"
]
$ vp1cli getbalance
91.99996160
$ vp0cli getbalance
8.00000000
$ dc stop
```
