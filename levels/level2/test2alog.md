### Sun Jan 22 11:34:45 CST 2017
```
// node index.js build --name 2a --dojo.eth 6 --path levels/level2
$ source alias2a.sh
$ dcup
$ ethp1 account --new --password haha
0x9e17e482cc3a5031a4266bb3ee429d282546f992
$ dcend
```

### Thu Jan 19 14:41:18 CST 2017
```
// node index.js build  --name lv2 --path level2 --dojo.eth 6
```

### Mon Jan 16 16:02:28 CST 2017
```
// node build.js --name lv2 --path level2 --dojo.eth 2
$ source lv2-alias.sh && dcup
$ ethp1 account --new --password pass1
$ ethp1 account --new --password pass2
$ ethp1key
{
  "version": 3,
  "id": "e23ec601-9fd1-4e16-af7b-13b86787c82e",
  "crypto": {
    "mac": "b435122d6d4a405830f9c1c71777b8ad4a49bb6907b1f864db7a4c80b70c2880",
    "kdfparams": {
      "salt": "998caaffbe934feccc149b78afaaeeb4007d73959b37beff6b52bd956cd568e0",
      "r": 8,
      "p": 1,
      "n": 262144,
      "dklen": 32
    },
    "kdf": "scrypt",
    "cipherparams": {
      "iv": "170ec7dcc975b2b97237cdf29920e672"
    },
    "ciphertext": "d49f68d2c8db98060c9298ad7940b882b345e0a6c8e3f908111c459f851f9ec9",
    "cipher": "aes-128-ctr"
  },
  "address": "1721b4a00e53f4438a62a8648c74595062c23822"
}
{
  "version": 3,
  "id": "01d00309-9e52-4390-898e-81c4cee5e7ca",
  "crypto": {
    "mac": "19e45032fcb99e2ef2649b74db343dc9dc501a8ae414f33222a37a7625fcb5e2",
    "kdfparams": {
      "salt": "9ed5ed5555b88568dcfe214a1d44eeabd979723bb1c934699e1285f0bfd2ad9e",
      "r": 8,
      "p": 1,
      "n": 262144,
      "dklen": 32
    },
    "kdf": "scrypt",
    "cipherparams": {
      "iv": "d2397aaf95bb270c78e707aab3c369f7"
    },
    "ciphertext": "cd3232df1bbbabf0b98307dd3520011607d5dbd4c4b12fcc8f58b8eafed65694",
    "cipher": "aes-128-ctr"
  },
  "address": "a07833d736b36cdfa5b8dff6ac9c746b1ae0d64a"
}

// node build.js --name lv2 --path level2 --dojo.eth 6
$ source lv2-alias.sh && dcup
$ dc ps
Name             Command             State              Ports
-------------------------------------------------------------------------
lv2_bootnode_1     /geth --networki   Up                 30303/tcp,
             d=406236 - ...                        8545/tcp
lv2_ethp1_1        /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
             ...
lv2_ethp2_1        /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
             ...
lv2_ethp3_1        /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
             ...
lv2_ethp4_1        /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
             ...
lv2_ethp5_1        /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
             ...
lv2_ethp6_1        /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
             ...
lv2_ethp_1         /start.sh          Up                 30303/tcp,
             --networkid=4062                      8545/tcp
x

$ ethp1 info
{ hostname: 'ethp1',
  ethBlockNumber: 0,
  ethCoinbase: null,
  ethAccounts: 0,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: 0,
  ethMining: false }
$ ethp1 account --new --password pass1
  0x2661663b0b26a95709d794cbad27f89a30fc1377

$ ethp2 account --new --password pass2
$ ethp1 miner --start
$ ethp2 miner --start
$ ethp1 info && ethp2 info
{ hostname: 'ethp1',
  ethBlockNumber: 248,
  ethCoinbase: '0x1e7afe2369dd103e53dcf78802133fb96081eb3b',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '904.21875',
  ethMining: true }
{ hostname: 'ethp2',
  ethBlockNumber: 248,
  ethCoinbase: '0x30d5f361b6d920365fab5592bd55377115d8daa2',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 4,
  ethBalance: '368.28125',
  ethMining: true }

```
// https://github.com/ethereum/go-ethereum/issues/2769
// vp1(miner) vp2(non-miner)
// vp1-3eth-to-vp2 ok but vp2-1eth-to-vp1

```
// "difficulty": "0x4000"
$ vp1cli rpc personal_newAccount vp1pass
$ vp2cli rpc personal_newAccount vp2pass
$ vp3cli rpc personal_newAccount vp3pass
$ vp1cli rpc miner_start
$ vp1cli info && vp2cli info
{
 "ethBlockNumber": 0,
 "ethGetBalance": "0",
 "ethCoinbase": "0x8b8c1c00dc15980434ff4d679103fb21be205816",
 "ethSyncing": false,
 "netPeerCount": 5,
 "balanceEther": "0"
}
{
 "ethBlockNumber": 0,
 "ethGetBalance": "0",
 "ethCoinbase": "0x75a416a2c2c3c398ad09f02b46ebe989de2607cb",
 "ethSyncing": false,
 "netPeerCount": 3,
 "balanceEther": "0"
}

// wait for DAG downloading.

$ vp1cli info && vp2cli info
{
 "ethBlockNumber": 769,
 "ethGetBalance": "4.25234375e+21",
 "ethCoinbase": "0x8b8c1c00dc15980434ff4d679103fb21be205816",
 "ethSyncing": false,
 "netPeerCount": 5,
 "balanceEther": "4252.34375"
}
{
 "ethBlockNumber": 766,
 "ethGetBalance": "0",
 "ethCoinbase": "0x75a416a2c2c3c398ad09f02b46ebe989de2607cb",
 "ethSyncing": false,
 "netPeerCount": 4,
 "balanceEther": "0"
}

$ vp1cli info && vp2cli info
{
 "ethBlockNumber": 1051,
 "ethGetBalance": "5.7745e+21",
 "ethCoinbase": "0x8b8c1c00dc15980434ff4d679103fb21be205816",
 "ethSyncing": false,
 "netPeerCount": 2,
 "balanceEther": "5774.5"
}
{
 "ethBlockNumber": 1054,
 "ethGetBalance": "3000000000000000000",
 "ethCoinbase": "0x75a416a2c2c3c398ad09f02b46ebe989de2607cb",
 "ethSyncing": false,
 "netPeerCount": 4,
 "balanceEther": "3"
}

```

## LOG0109_1

```
$ vp2cli rpc personal_newAccount vp2pass
$ vp2cli rpc miner_start 1
$ dc logs
....
evp1_1  | I0109 09:54:35.525132 core/blockchain.go:1047] imported 1 blocks,     0 txs (  0.000 Mg) in   4.985ms ( 0.000 Mg/s). #30 [6174e0bc…]
evp1_1  | I0109 09:54:38.654495 core/blockchain.go:1047] imported 1 blocks,     0 txs (  0.000 Mg) in   5.147ms ( 0.000 Mg/s). #31 [55b0af02…]
evp1_1  | I0109 09:54:40.465566 core/blockchain.go:1047] imported 1 blocks,     0 txs (  0.000 Mg) in   3.614ms ( 0.000 Mg/s). #32 [43cda26f…]
evp1_1  | I0109 09:54:40.479025 core/blockchain.go:1047] imported 1 blocks,     0 txs (  0.000 Mg) in   3.990ms ( 0.000 Mg/s). #33 [d851785c…]
evp1_1  | I0109 09:54:44.091722 core/blockchain.go:1047] imported 1 blocks,     0 txs (  0.000 Mg) in   5.196ms ( 0.000 Mg/s). #34 [32440ad1…]
$ docker ps -s
CONTAINER ID        IMAGE                           COMMAND                  CREATED             STATUS              PORTS                 NAMES               SIZE
1d7cd14cd98e        y12docker/dltdojo-ethgo:1.5.5   "/start.sh --networki"   7 minutes ago       Up 7 minutes        8545/tcp, 30303/tcp   level2_evp1_4       2.512 MB (virtual 708.2 MB)
9faec5d012cf        y12docker/dltdojo-ethgo:1.5.5   "/start.sh --networki"   7 minutes ago       Up 7 minutes        8545/tcp, 30303/tcp   level2_evp1_3       3.005 MB (virtual 708.7 MB)
fcfe0293ef22        y12docker/dltdojo-ethgo:1.5.5   "/start.sh --networki"   7 minutes ago       Up 7 minutes        8545/tcp, 30303/tcp   level2_evp1_5       2.578 MB (virtual 708.3 MB)
13bd9b1ad7af        y12docker/dltdojo-ethgo:1.5.5   "/start.sh --networki"   7 minutes ago       Up 7 minutes        8545/tcp, 30303/tcp   level2_evp1_2       1.076 GB (virtual 1.782 GB)
ad822ae9b538        y12docker/dltdojo-ethgo:1.5.5   "/geth --networkid=91"   7 minutes ago       Up 7 minutes        8545/tcp, 30303/tcp   level2_evp0_1       5.263 MB (virtual 711 MB)
40a16d554968        y12docker/dltdojo-ethgo:1.5.5   "/start.sh --networki"   7 minutes ago       Up 7 minutes        8545/tcp, 30303/tcp   level2_evp1_1       2.733 MB (virtual 708.4 MB)
// evp1_2 with 1G DAG File
$ vp2cli info
{
 "netPeerCount": 3,
 "ethGetBalance": "1.725e+21",
 "ethCoinbase": "0x1ab0ec767423e8f0bbae3c7ac7863e20efa1cc78",
 "ethBlockNumber": 345,
 "ethMining": true,
 "ethGetBlockPending": {
  "difficulty": "154855",
  "extraData": "0xd783010505846765746887676f312e352e34856c696e7578",
  "gasLimit": 95718562,
  "gasUsed": 0,
  "hash": null,
  "logsBloom": null,
  "miner": null,
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": null,
  "number": 346,
  "parentHash": "0xafe82bdb00a72922776481a765164eb6194a6a71c4ee7d8dab77d390974622a8",
  "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 538,
  "stateRoot": "0xffae6efe4b1ccd41edf7da6e20dd7db8d5d4fabc94f1474741892dc577624fa0",
  "timestamp": 1483927391,
  "totalDifficulty": "0",
  "transactions": [],
  "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  "uncles": []
 },
 "ether": "1725"
}
$ vp1cli info
{
 "netPeerCount": 6,
 "ethGetBalance": "0",
 "ethCoinbase": "0xed3efecca8b88d5bec937e09f2294fbc3f304989",
 "ethBlockNumber": 347,
 "ethMining": false,
 "ethGetBlockPending": {
  "difficulty": "155005",
  "extraData": "0xd783010505846765746887676f312e352e34856c696e7578",
  "gasLimit": 95531706,
  "gasUsed": 0,
  "hash": null,
  "logsBloom": null,
  "miner": null,
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "nonce": null,
  "number": 348,
  "parentHash": "0x71e1ed02ddc9ab152549e74f3e773b5d53d7040be4494cc91eca4a62403c3e7c",
  "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 538,
  "stateRoot": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp": 1483927396,
  "totalDifficulty": "0",
  "transactions": [],
  "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  "uncles": []
 },
 "ether": "0"
}
```

## LOG0107_4

```
$ vp1cli rpc personal_newAccount vp1pass
{ jsonrpc: '2.0',
  id: 0,
  result: '0x2f7be2ebb8156c257a342ece0c2884351aca75dc' }
$ vp1cli info
{
 "ethGetBalance": "0",
 "ethCoinbase": "0x2f7be2ebb8156c257a342ece0c2884351aca75dc",
 "ethBlockNumber": 0,
 "ethMining": false,
 "ether": "0"
}
$ vp1cli rpc miner_start
{ jsonrpc: '2.0', id: 0, result: true }
$ vp1cli info
{
 "ethGetBalance": "70000000000000000000",
 "ethCoinbase": "0x2f7be2ebb8156c257a342ece0c2884351aca75dc",
 "ethBlockNumber": 14,
 "ethMining": true,
 "ether": "70"
}


```

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
