## LOG0107_3

```
$ vp1curl personal_newAccount '"vp1pass"'
$ vp1curl miner_start '"0x01"'
// wait ...
$ vp1 node index.js
{
 "ethGetBalance": "5000000000000000000",
 "ethCoinbase": "0x8bef3b5260fa0499d28d805a1c630e2de172c7bc",
 "ethBlockNumber": 1,
 "ethMining": true,
 "ether": "5"
}

$ vp1 node keyrecover.js --datadir=/root/.ethereum/devchain --address=8bef3b5260fa0499d28d805a1c630e2de172c7bc --password=vp1pass
{
 "keyObject": {
  "address": "8bef3b5260fa0499d28d805a1c630e2de172c7bc",
  "crypto": {
   "cipher": "aes-128-ctr",
   "ciphertext": "82b64ff1746cbc1e8d66988aa31fa07f5247bba224dba998edc7014f9e6de1ae",
   "cipherparams": {
    "iv": "9f3aeee368629213f17b0cf38ad7285d"
   },
   "kdf": "scrypt",
   "kdfparams": {
    "dklen": 32,
    "n": 262144,
    "p": 1,
    "r": 8,
    "salt": "785f039ebcb38ad93f4535c87094a7a13538ad177b37520b576a68821dd66eda"
   },
   "mac": "8fd34652041edb4b801354a3ab0556f66dbaa0052af4afb7846b98dbed1dd907"
  },
  "id": "d46db77f-04e7-46e9-be55-599150c55a51",
  "version": 3
 },
 "privateKey": "3619fcf4125b4710ec832b8216e43dd2740d8b951a52185163d0e46505ece915"
}

```

## LOG0107_2

```
$ vp1curl personal_newAccount '"vp1pass"'
$ vp1curl eth_coinbase
{"jsonrpc":"2.0","method":"eth_coinbase","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x7b10ee3bd623755e733137fbe0e648eb63aeac10"
}
$ vp1curl eth_mining
{"jsonrpc":"2.0","method":"eth_mining","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": false
}

$ vp1curl miner_start '"0x01"'
{"jsonrpc":"2.0","method":"miner_start","params":["0x01"],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": true
}
$ vp1curl eth_mining
{"jsonrpc":"2.0","method":"eth_mining","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": true
}

$ vp1curl eth_blockNumber
{"jsonrpc":"2.0","method":"eth_blockNumber","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x11"
}
$ vp1curl eth_coinbase
{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x25c0da697039e900217b174e4e09b3813ce34a04"
}

$ vp1curl eth_getBalance '"0x25c0da697039e900217b174e4e09b3813ce34a04","latest"'
{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x25c0da697039e900217b174e4e09b3813ce34a04"
}
$ echo $((16#25c0da697039e900217b174e4e09b3813ce34a04))
5623222977402456580
// 5.623222977402457 ether

$ vp1 ls /root/.ethereum/devchain/keystore
UTC--2017-01-07T05-44-38.099677518Z--7b10ee3bd623755e733137fbe0e648eb63aeac10
$ vp1 cat /root/.ethereum/devchain/keystore/UTC--2017-01-07T05-44-38.099677518Z--7b10ee3bd623755e733137fbe0e648eb63aeac10
{
  "version": 3,
  "id": "4ec5f1fd-f8cd-4fe9-928b-5f1f81e7e43e",
  "crypto": {
    "mac": "2ea25f1906c55b1b4db37a69c043393ee9ef59c5b0799d2103fdb500046e1aab",
    "kdfparams": {
      "salt": "efcb84ef6192f6b96f597b16585735a513f67b60e29db9c73093589c8e69073f",
      "r": 8,
      "p": 1,
      "n": 262144,
      "dklen": 32
    },
    "kdf": "scrypt",
    "cipherparams": {
      "iv": "0e6a9b90a417191f6970adfdd06957b7"
    },
    "ciphertext": "caee5fa2164ea9dd14f2f17f7488666b85635a5f1929fc4881ee226bb2453b36",
    "cipher": "aes-128-ctr"
  },
  "address": "7b10ee3bd623755e733137fbe0e648eb63aeac10"
}
```

## LOG0107_1

```
$ source level2-alias.sh
$ dcup
$ vp1curl eth_syncing
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": false
}
$ vp1curl personal_newAccount foopass
{"jsonrpc":"2.0","method":"personal_newAccount","params":["foopass"],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x3086b27d004a902fc09cd7ef70710977b726f86b"
}
$ vp1curl eth_accounts
{"jsonrpc":"2.0","method":"eth_accounts","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": [
    "0x3086b27d004a902fc09cd7ef70710977b726f86b"
  ]
}
$ vp1curl eth_blockNumber
{"jsonrpc":"2.0","method":"eth_blockNumber","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x0"
}

```

## LOG0106

```
$ date
Fri Jan  6 23:51:06 CST 2017
$ node index.js --path ./level2 --name=level2 --peers=6 --level=2
$ cd level2
$ source level2-alias.sh
$ dcup
No stopped containers
Creating network "level2_default" with the default driver
Creating level2_evp0_1
Creating level2_evp1_1
Creating and starting level2_evp1_2 ... done
Creating and starting level2_evp1_3 ... done
Creating and starting level2_evp1_4 ... done
Creating and starting level2_evp1_5 ... done
$ dc ps
    Name                   Command               State          Ports
----------------------------------------------------------------------------
level2_evp0_1   /geth --datadir=~/.ethereu ...   Up      30303/tcp, 8545/tcp
level2_evp1_1   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_2   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_3   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_4   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_5   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
$ vp1 bash
bash-4.3#  curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:8545
{"jsonrpc":"2.0","id":67,"result":"Geth/v1.5.5-stable-ff07d548/linux/go1.5.4"}

bash-4.3#  exit

$ vp1 curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}' http://localhost:8545
{"jsonrpc":"2.0","id":67,"result":"919717"}

$ vp1 /curlrpc.sh net_version
{"jsonrpc":"2.0","method":"net_version","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "919717"
}
$ vp1 /curlrpc.sh web3_clientVersion
{"jsonrpc":"2.0","method":"web3_clientVersion","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "Geth/v1.5.5-stable-ff07d548/linux/go1.5.4"
}

$ vp1 /curlrpc.sh net_peerCount
{"jsonrpc":"2.0","method":"net_peerCount","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x4"
}

```
