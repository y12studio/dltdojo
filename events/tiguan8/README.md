### Setup
```
$ docker version
Client:
 Version:      17.03.0-ce
 API version:  1.26
 Go version:   go1.7.5
 Git commit:   3a232c8
 Built:        Tue Feb 28 07:57:58 2017
 OS/Arch:      linux/amd64

Server:
 Version:      17.03.0-ce
 API version:  1.26 (minimum version 1.12)
 Go version:   go1.7.5
 Git commit:   3a232c8
 Built:        Tue Feb 28 07:57:58 2017
 OS/Arch:      linux/amd64
 Experimental: false
$ cd events/tiguan8
$ npm i
$ docker-compose up -d
Creating network "tiguan8_default" with the default driver
Creating tiguan8_bcu_1
Creating tiguan8_abe_1
Creating tiguan8_btcboot_1
Creating tiguan8_bcc_1
$ docker-compose scale bcc=6 bcu=6
Creating and starting tiguan8_bcc_2 ... done
Creating and starting tiguan8_bcc_3 ... done
Creating and starting tiguan8_bcc_4 ... done
Creating and starting tiguan8_bcc_5 ... done
Creating and starting tiguan8_bcc_6 ... done
Creating and starting tiguan8_bcu_2 ... done
Creating and starting tiguan8_bcu_3 ... done
Creating and starting tiguan8_bcu_4 ... done
Creating and starting tiguan8_bcu_5 ... done
Creating and starting tiguan8_bcu_6 ... done
lin@ubuntu73:~/git/dltdojo/events/tiguan8$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
tiguan8_abe_1      /start.sh          Up                 0.0.0.0:12750->1
                                                         2750/tcp,
                                                         18332/tcp,
                                                         18333/tcp,
                                                         18444/tcp,
                                                         8332/tcp,
                                                         8333/tcp
tiguan8_bcc_1      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcc_2      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcc_3      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcc_4      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcc_5      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcc_6      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcu_1      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcu_2      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcu_3      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcu_4      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcu_5      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_bcu_6      /start.sh          Up                 18332/tcp,
                                                         18333/tcp
tiguan8_btcboot_   /start.sh          Up                 0.0.0.0:18332->1
1                                                        8332/tcp,

                                                         18333/tcp
```
### Test
```
$ node test.js info localhost 18332
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 13,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1490187305,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }

$ node test.js peerinfo localhost 18332
172.24.0.5:54460 /Satoshi:0.13.1/
172.24.0.4:34951 /Satoshi:0.13.2/
172.24.0.2:52129 /BitcoinUnlimited:1.0.1.1(EB16; AD12)/
172.24.0.6:36396 /Satoshi:0.13.1/
172.24.0.7:55837 /Satoshi:0.13.1/
172.24.0.9:40415 /Satoshi:0.13.1/
172.24.0.8:33272 /Satoshi:0.13.1/
172.24.0.10:33724 /Satoshi:0.13.1/
172.24.0.11:49301 /BitcoinUnlimited:1.0.1.1(EB16; AD12)/
172.24.0.12:39693 /BitcoinUnlimited:1.0.1.1(EB16; AD12)/
172.24.0.13:55498 /BitcoinUnlimited:1.0.1.1(EB16; AD12)/
172.24.0.15:45724 /BitcoinUnlimited:1.0.1.1(EB16; AD12)/
172.24.0.14:41069 /BitcoinUnlimited:1.0.1.1(EB16; AD12)/
$ node test.js generate localhost 18332 201
$ node test.js maketx localhost 18332 10
$ node test.js generate localhost 18332 1
{ size: 11,
  bytes: 625417,
  usage: 745392,
  maxmempool: 300000000,
  mempoolminfee: 0 }
[ '389afbb049f16fd573be2bc09521768b4416beea437a1590ab0812ec0e20586f' ]
$ node test.js maketx localhost 18332 20
$ node test.js generate localhost 18332 1
{ size: 21,
  bytes: 1148113,
  usage: 1369904,
  maxmempool: 300000000,
  mempoolminfee: 0 }
[ '4b5d8ffa00fe6f85d317ff65bcde7c53451a6f3b60ff372d0ca68954a1e6d2c4' ]
$ node test.js generate localhost 18332 1
{ size: 9,
  bytes: 497767,
  usage: 593584,
  maxmempool: 300000000,
  mempoolminfee: 0 }
[ '607f4ca4a54ef0b27c3c9642c2aa60b07dc9d9fcff706f592b4b9a2afaf596a6' ]
$ node test.js generate localhost 18332 1
{ size: 0,
  bytes: 0,
  usage: 64,
  maxmempool: 300000000,
  mempoolminfee: 0 }
[ '139910986c4ef63d8829d78f1441dbbeebdf36caf862eb3d2efab5d37b35e23a' ]
$ docker-compose stop
$ docker-compose rm
```
