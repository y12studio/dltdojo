## TEST TASK

btc test
```
$ bdcup
$ node index.js btc localhost info
$ node index.js btc localhost account --new
$ node index.js btc localhost account --dumpkey --address xxxxx
$ node index.js btc localhost miner --num 10
$ node index.js btc localhost send --to mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT --btc 1.88
$ btcp1 info
$ bdcend
```
eth test
```
$ edcup
$ node index.js eth localhost info
$ node index.js eth localhost account --new --password p1pass
$ node index.js eth localhost send --to 0x8b8c1c00dc15980434ff4d679103fb21be205816 --eth 3.6 --password p1pass
$ ethp1 info
$ edcend
```

build test
```
$ node index.js build --dojo.btc 4 --name foo --path dockerfiles/dltdojo/examples
$ node index.js build --dojo.eth 6 --name foo --path dockerfiles/dltdojo/examples
```

### Tue Jan 17 19:25:07 CST 2017
```
$ fdcup
$ fabp1peer version
Fabric peer server version 1.0.0-preview
$ fabp1peer chaincode deploy -n test_cc -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'
$ fabp1peer chaincode invoke -n test_cc -c '{"Args":["query","a"]}'
$ fdc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
ddj_cop_1          cop server start   Up                 0.0.0.0:8888->88
                   -ca testd ...                         88/tcp
ddj_dltdojo_1      node index.js      Up
                   start
ddj_fabp1_1        peer node start    Up                 0.0.0.0:7051->70
                                                         51/tcp
ddj_fabp2_1        peer node start    Up
ddj_fabp_1         peer node start    Up
ddj_orderer_1      orderer            Up                 0.0.0.0:7050->70
                                                         50/tcp
```
### Tue Jan 17 14:28:16 CST 2017
```
$ edcup
$ node index.js eth localhost dev --case 1
$ node index.js eth localhost info --hahacoin
$ node index.js eth localhost hahacoin --new --address 0x631e86b905f9c118524660d379cfe5dacd489c33 --password passAlice
$ node index.js eth localhost hahacoin --address 0x631e86b905f9c118524660d379cfe5dacd489c33 --password passAlice --contract 0xa17e49072ac8b4dd1ae37ee5d5e6c9fbbe09cfad
$ node index.js eth localhost hahacoin send --address 0x631e86b905f9c118524660d379cfe5dacd489c33 --password passAlice --contract 0xa17e49072ac8b4dd1ae37ee5d5e6c9fbbe09cfad --to 0x8b8c1c00dc15980434ff4d679103fb21be205816 --amount 3.6
```
### Tue Jan 17 09:40:04 CST 2017
```
$ bdcup
$ node index.js btc localhost info
$ node index.js btc localhost account --new
$ node index.js btc localhost account --dumpkey --address xxxxx
$ node index.js btc localhost miner --num 10
$ node index.js btc localhost send --to mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT --btc 1.88
```
### Mon Jan 16 14:16:38 CST 2017
```
$ edcup
$ edc ps
Name             Command             State              Ports
-------------------------------------------------------------------------
ddj_bootnode_1     /geth --dev        Up                 30303/tcp,
             --networkid=88                        8545/tcp
             ...
ddj_dltdojo_1      node index.js      Up
             start
ddj_ethp1_1        /start.sh --dev    Up                 30303/tcp, 127.0
             --networki ...                        .0.1:8545->8545/
                                                   tcp
ddj_ethp_1         /start.sh --dev    Up                 30303/tcp,
             --networki ...                        8545/tcp

$ node index.js eth localhost account --password pass1 --new
$ node index.js eth localhost miner --start
$ node index.js eth localhost info
$ node index.js eth localhost send --to 0x8b8c1c00dc15980434ff4d679103fb21be205816 --eth 3.6 --password pass1
$ node index.js eth localhost info
$ ethp1exec ls /root/.ethereum/devchain/keystore | sort -n
$ ethp1exec find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -print -exec cat {} \;

```
### Mon Jan 16 09:06:15 CST 2017
```
$ bdcup
$ node index.js btc localhost getInfo
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 2,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484529019,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ node index.js btc localhost getNewAddress
muWbBzvgXPmBoUw7Cc7ziTySqXgCK3ooU3
$ node index.js btc localhost dumpPrivKey --address muWbBzvgXPmBoUw7Cc7ziTySqXgCK3ooU3
cPB7Yuq17uvCchZefXmXkW7PMGajhuWi6mocBxcmCev7Sd344niU

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
  keypoololdest: 1484529019,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ ddj btc getNewAddress btcp1
n2Niyx2H1ereJoSg4JwTguC2dKa3ruNwKu
$ ddj btc getNewAddress btcp2
n2z4DEQgkZadkb4d4WrQRzsJAAeSYak2yi

```
### Sun Jan 15 21:33:18 CST 2017
```
$ dcup
$ dc ps
Name             Command             State              Ports
-------------------------------------------------------------------------
ddj_bvp0_1         bitcoind           Up                 18332/tcp,
             -regtest                              18333/tcp
             -txindex ...
ddj_bvp1_1         bitcoind           Up                 127.0.0.1:18332-
             -regtest                              >18332/tcp, 127.
             -txindex ...                          0.0.1:18333->183
                                                   33/tcp
ddj_dltdojo_1      node index.js      Up
             start

$ dojo btc getNewAddress bvp0
{ _: [ 'btc' ], hostname: 'bvp0', '$0': 'index.js' }
{ isvalid: true,
  address: 'mnL8GKxsbWgEGQzMhBHPLUTuLyNUsna5v8',
  scriptPubKey: '76a9144abca0ad1d794c5b084ce959d8a783b1d128db5188ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02e9167493d77233c59e9dc0a98721350e24ee9f9f5b29d8dc519df76cfbe5bb34',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: '22085000d477b8daf93c4287a12ecbd0f24d00dd' }
$ dojo btc getNewAddress bvp1
{ _: [ 'btc' ], hostname: 'bvp1', '$0': 'index.js' }
{ isvalid: true,
  address: 'mkRG1399uD7wBKe6yVJHaWfjWPQ51RHccV',
  scriptPubKey: '76a91435c4e9f4769bacc79fee46aca5024f10db4b8fe388ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02067bf2683a57f2ac0674060475751f33c883e82aa570afbbe0d1896d7eb01d4f',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: 'f1b647617df3f74c35dadc527399eeb2ee5ceb76' }
```

### Sun Jan 15 16:26:36 CST 2017
```
// docker-compose -p $DCNAME -f dockerfiles/dltdojo/btc.yml
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
ddltdojo_bvp0_1    bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
ddltdojo_bvp1_1    bitcoind           Up                 127.0.0.1:18332-
                   -regtest                              >18332/tcp, 127.
                   -txindex ...                          0.0.1:18333->183
                                                         33/tcp
$ sh1 ifconfig
eth0      Link encap:Ethernet  HWaddr 02:42:AC:63:00:02
          inet addr:172.99.0.2  Bcast:0.0.0.0  Mask:255.255.0.0
          inet6 addr: fe80::42:acff:fe63:2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:27 errors:0 dropped:0 overruns:0 frame:0
          TX packets:28 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:2379 (2.3 KiB)  TX bytes:2373 (2.3 KiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:14 errors:0 dropped:0 overruns:0 frame:0
          TX packets:14 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:720 (720.0 B)  TX bytes:720 (720.0 B)

$ curl --user user --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:18332/
$ node index.js info
{ _: [ 'info' ],
  name: 'alice',
  '$0': '/usr/bin/nodejs index.js' }
undefined
{ isvalid: true,
  address: 'mfYNDVTY1VbtxCtiPiTA5miZxZ2ngZMEKj',
  scriptPubKey: '76a9140044626dba504f8db1bb3eb009cbb0d731f02b6588ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02ac066f7cc057a64b45cdd1306f66426768e0aa9f45b8d8957c661081d9fb2cdc',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: '5cf3f4394cd0b324e8f831ce16c20bb835e77c83' }
```
