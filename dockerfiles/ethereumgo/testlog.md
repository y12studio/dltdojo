## LOG0110_3

### Fri Jan 13 14:50:06 CST 2017
```
$ njs dev 1 pass
{ input:
   { name: 'dev mode 1',
     password: 'pass',
     account: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
     info:
      { ethBlockNumber: 0,
        ethGetBalance: '0',
        ethCoinbase: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
        ethSyncing: false,
        netPeerCount: 0,
        balanceEther: '0' } },
  saving:
   { sname: 'dev1',
     address: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
     file: '/tmp/dev1_0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed.json' } }
$ njs hahacoin --new
// wait....
{ input:
   { name: 'dev mode 1',
     password: 'pass',
     account: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
     info:
      { ethBlockNumber: 5,
        ethGetBalance: '25000000000000000000',
        ethCoinbase: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
        ethSyncing: false,
        netPeerCount: 0,
        balanceEther: '25' },
     contract:
      { tx: '0xf7be1884ad4c1cd7b22c278b37babc863b5de6c7dd79f88844905d2b3d8fdd9e',
        address: '0x28529c20654ebfdd60ad158f126efbeb375fd792',
        resultAbi: [Object] } },
  saving:
   { sname: 'dev1',
     address: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
     file: '/tmp/dev1_0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed.json' } }

$ njs hahacoin
{ account: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
  balance: '10000' }
$ njs hahacoin --send --to 0de51d24bd6c97564f99bb829c789b4748a3d0d7 --amount 99
// wait...
$ njs hahacoin
{ account: '0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed',
  balance: '9901' }
```

### Fri Jan 13 08:18:43 CST 2017
```
$ source alias.sh
$ dcup
$ njs dev 1 vp1pass
{ _: [ 'dev' ],
  help: false,
  h: false,
  '$0': 'index.js',
  case: 1,
  password: 'vp1pass' }
{ jsonrpc: '2.0',
  id: '7e7fab48-9a07-4a7c-a912-02387603ca75',
  result: '0x0de51d24bd6c97564f99bb829c789b4748a3d0d7' }
{ jsonrpc: '2.0',
  id: '9a886296-a20e-4cae-a983-28e867cf4c2d',
  result: true }
$ njs latest
{ input:
   { name: 'dev mode 1',
     password: 'pass',
     account: '0x54050a6c7ca66e20eaca5d28e3b192f81c5e292b',
     info:
      { ethBlockNumber: 0,
        ethGetBalance: '0',
        ethCoinbase: '0x54050a6c7ca66e20eaca5d28e3b192f81c5e292b',
        ethSyncing: false,
        netPeerCount: 0,
        balanceEther: '0' } },
  saving:
   { sname: 'dev1',
     address: '0x54050a6c7ca66e20eaca5d28e3b192f81c5e292b',
     file: '/tmp/dev1_0x54050a6c7ca66e20eaca5d28e3b192f81c5e292b.json' } }
$ nsh ls /tmp
dev1_0x0de51d24bd6c97564f99bb829c789b4748a3d0d7.json
ethash-test362343188
ethereum_dev_mode
npm-7-7c343517
saving-latest.json
$ njs hahacoin --new
```
### Thu Jan 12 16:12:20 CST 2017
```
$ docker build -t y12docker/dltdojo-ethgo .
```
### Wed Jan 11 15:16:58 CST 2017

```
$ docker build -t y12docker/dltdojo-ethgo .
$ docker run --entrypoint ls y12docker/dltdojo-ethgo
contractutils.js
hahacoin.sol
index.js
keyrecover.js
node_modules
package.json
$ docker run -v $(pwd):/tmp --entrypoint ls y12docker/dltdojo-ethgo /tmp
$ docker run -v $(pwd):/tmp --entrypoint cat y12docker/dltdojo-ethgo /tmp/hahacoin.sol
$ docker run -v $(pwd):/tmp --entrypoint node y12docker/dltdojo-ethgo index.js solc /tmp/hahacoin.sol HahaCoin
{ abi:
   [ { constant: true,
       inputs: [],
       name: 'minter',
       outputs: [Object],
       payable: false,
       type: 'function' },
     { constant: true,
       inputs: [Object],
       name: 'balances',
       outputs: [Object],
       payable: false,
       type: 'function' },
     { constant: false,
       inputs: [Object],
       name: 'mint',
       outputs: [],
       payable: false,
       type: 'function' },
     { constant: false,
       inputs: [],
       name: 'Coin',
       outputs: [],
       payable: false,
       type: 'function' },
     { constant: false,
       inputs: [Object],
       name: 'send',
       outputs: [],
       payable: false,
       type: 'function' },
     { anonymous: false,
       inputs: [Object],
       name: 'Sent',
       type: 'event' } ],
  data: '0x606060405234610000575b61023d806100196000396000f300606060405263ffffffff60e060020a60003504166307546172811461005057806327e235e31461007957806340c10f19146100a4578063a77b2e37146100c2578063d0679d34146100d1575b610000565b346100005761005d6100ef565b60408051600160a060020a039092168252519081900360200190f35b3461000057610092600160a060020a03600435166100fe565b60408051918252519081900360200190f35b34610000576100c0600160a060020a0360043516602435610110565b005b34610000576100c061014e565b005b34610000576100c0600160a060020a0360043516602435610179565b005b600054600160a060020a031681565b60016020526000908152604090205481565b60005433600160a060020a0390811691161461012b5761014a565b600160a060020a03821660009081526001602052604090208054820190555b5050565b6000805473ffffffffffffffffffffffffffffffffffffffff191633600160a060020a03161790555b565b600160a060020a0333166000908152600160205260409020548190101561019f5761014a565b600160a060020a0333811660008181526001602090815260408083208054879003905593861680835291849020805486019055835192835282015280820183905290517f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd33459181900360600190a15b50505600a165627a7a72305820685d57996086b8d1056f7b207420ca43d703828be3d9bc2c39919d6711be27d80029' }
```

https://gitter.im/ethereum/go-ethereum/archives/2016/12/25

y12docker/dltdojo-ethgo:1.5.6.a1 Error: invalid argument 2: cannot unmarshal non-string as hex data

```
$ docker build -t y12docker/dltdojo-ethgo:1.5.5.a1 .

```

## LOG0110_2

```
$ docker build -t y12docker/dltdojo-ethgo:1.5.6.a1 .
$ docker run -it --entrypoint solcjs y12docker/dltdojo-ethgo:1.5.6.a1 --version
0.4.7+commit.822622cf.Emscripten.clang
$ docker run -it --entrypoint node y12docker/dltdojo-ethgo:1.5.6.a1 index.js newToken 0x400f8578b27715236e2f4ee0259c07cadcf396ff 1000
{ errors: [ ':1:413: Error: Undeclared identifier.\npragma solidity ^0.4.7; contract Coin { address public minter; mapping (address => uint) public balances; function Coin() { minter = msg.sender; } function mint(address receiver, uint amount) { if (msg.sender != minter) return; balances[receiver] += amount; } function send(address receiver, uint amount) { if (balances[msg.sender] < amount) return; balances[msg.sender] -= amount; balances[receiver] += amount; Sent(msg.sender, receiver, amount); } }\n                                                                                                                                                                                                                                                                                                                                                                                                                            ^--^\n' ] }
index.js newToken <accountAddress> <supply>

Options:
  -h, --help  Show help                                                [boolean]

Cannot read property 'info' of undefined

$ docker push y12docker/dltdojo-ethgo:1.5.6.a1
```


## LOG0110_1

```
$ docker build -t y12docker/dltdojo-ethgo:1.5.6.a0 .
$ docker run y12docker/dltdojo-ethgo:1.5.6.a0 version
Geth
Version: 1.5.6-stable
Git Commit: 2a609af51873204c940a9b2a7215e6b5a97b0656
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.7.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ docker push y12docker/dltdojo-ethgo:1.5.6.a0
```

## LOG0109_1

eth_getTransactionByHash : cannot unmarshal non-string as hex data

https://github.com/ethereum/go-ethereum/issues/2438

```
// npm web3 package
// web3.eth.getTransaction('0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05')
$ vp1cli tx 0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05
cannot unmarshal non-string as hex data

// npm request package
$ vp1cli rpc eth_getTransactionByHash 0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05
{"jsonrpc":"2.0","id":"234dfb74-ac4f-48ce-a0f4-02207a8876b3","error":{"code":-32602,"message":"cannot unmarshal non-string as hex data"}}

$vp1 bash
# curl -s -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05"],"id":1}' http://localhost:8545 | jq .
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0x55b36a841e7675243c633f171bfa19a745d32d28ef760c2da27b1adbf313ca49",
    "blockNumber": "0x252",
    "from": "0x61c8b60e657af2f09f2a9ed1008f61b7fb8565f0",
    "gas": "0x15f90",
    "gasPrice": "0x4a817c800",
    "hash": "0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05",
    "input": "0x",
    "nonce": "0x1",
    "to": "0xae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5",
    "transactionIndex": "0x0",
    "value": "0x29a2241af62c0000",
    "v": "0x1c",
    "r": "0x8d2b13c08144880863fa02757b2a00f624dfe235ddd8664138c985751d01c96d",
    "s": "0x22e7546a1d97e1c3338379127ae8dd7ce0560317c2d4062a000bcbe96e1a244c"
  }
}

```

## LOG0108_3

```
$ docker build -t y12docker/dltdojo-ethgo:1.5.5.a0 .
$ docker run y12docker/dltdojo-ethgo:1.5.5.a0 version
Geth
Version: 1.5.5-stable
Git Commit: ff07d54843ea7ed9997c420d216b4c007f9c80c3
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.5.4
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ docker run -it --entrypoint=bash y12docker/dltdojo-ethgo:1.5.5.a0
$ docker push y12docker/dltdojo-ethgo:1.5.5.a0
```

Transaction propagation issue on private test net since geth 1.4.6 · Issue #2769 · ethereum/go-ethereum

https://github.com/ethereum/go-ethereum/issues/2769

// with --dev (only one peer)
```
$ vp1cli rpc personal_newAccount vp1pass
response:  {"jsonrpc":"2.0","id":"a16bd9ed-aaae-4c9b-a1f1-c4cf89455c6a","result":"0x935e9e03299c14c083c6902305192c59cc8e7afb"}
$ vp1cli rpc miner_start 1
response:  {"jsonrpc":"2.0","id":"40bbd383-fd8f-45fb-88dc-124118ddb09f","result":true}
$ dc logs
...
evp1_1  | I0108 17:26:37.867909 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 97%
evp1_1  | I0108 17:26:37.868000 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 98%
evp1_1  | I0108 17:26:37.868062 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 99%
evp1_1  | I0108 17:26:37.868095 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 100%
evp1_1  | I0108 17:26:37.868132 vendor/github.com/ethereum/ethash/ethash.go:276] Done generating DAG for epoch 0, it took 7.047686ms
evp1_1  | I0108 17:26:43.386157 miner/unconfirmed.go:83] 🔨  mined potential block #1 [04a576d3…], waiting for 5 blocks to confirm
evp1_1  | I0108 17:26:43.386937 miner/worker.go:516] commit new work on block 2 with 0 txs & 0 uncles. Took 515.995µs
$ vp1cli info --debug
{
 "netPeerCount": 0,
 "ethGetBalance": "25000000000000000000",
 "ethCoinbase": "0x935e9e03299c14c083c6902305192c59cc8e7afb",
 "ethBlockNumber": 5,
 "ethMining": true,
 "ether": "25"
}
```
// without --dev
```
$ vp1cli rpc personal_newAccount vp1pass
$ vp1cli info --debug
{
 "netPeerCount": 4,
 "ethGetBalance": "0",
 "ethCoinbase": "0x4518eeaa608e16ea10fba08ff6ef8fa7c105c9ba",
 "ethBlockNumber": 0,
 "ethMining": false,
 "ether": "0"
}
$ vp1cli rpc miner_start 1
response:  {"jsonrpc":"2.0","id":"40bbd383-fd8f-45fb-88dc-124118ddb09f","result":true}

$ dc logs
...
evp1_1  | I0108 17:30:27.919645 vendor/github.com/ethereum/ethash/ethash.go:259] Generating DAG for epoch 0 (size 1073739904) (0000000000000000000000000000000000000000000000000000000000000000)
evp1_1  | I0108 17:30:28.647228 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 0%
evp1_1  | I0108 17:30:31.693135 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 1%
evp1_1  | I0108 17:30:34.716597 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 2%
evp1_1  | I0108 17:30:37.858972 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 3%
evp1_1  | I0108 17:30:40.842438 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 4%
evp1_1  | I0108 17:30:43.921561 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 5%
...
evp1_1  | I0108 17:35:28.260124 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 97%
evp1_1  | I0108 17:35:31.299544 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 98%
evp1_1  | I0108 17:35:34.295193 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 99%
evp1_1  | I0108 17:35:37.329788 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 100%
evp1_1  | I0108 17:35:37.332074 vendor/github.com/ethereum/ethash/ethash.go:276] Done generating DAG for epoch 0, it took 5m9.412434666s

// DAG 5 Minutes

$ vp1cli info
{
 "netPeerCount": 5,
 "ethGetBalance": "0",
 "ethCoinbase": "0x4518eeaa608e16ea10fba08ff6ef8fa7c105c9ba",
 "ethBlockNumber": 0,
 "ethMining": true,
 "ether": "0"
}

evp1_1  | I0108 17:35:37.332074 vendor/github.com/ethereum/ethash/ethash.go:276] Done generating DAG for epoch 0, it took 5m9.412434666s
evp1_1  | I0108 19:08:46.206435 miner/unconfirmed.go:83] 🔨  mined potential block #1 [ea01de07…], waiting for 5 blocks to confirm
evp1_1  | I0108 19:08:46.207100 miner/worker.go:516] commit new work on block 2 with 0 txs & 0 uncles. Took 459.507µs

// block#1 for 1.5 hours

$ vp1cli info
{
 "netPeerCount": 5,
 "ethGetBalance": "5000000000000000000",
 "ethCoinbase": "0x4518eeaa608e16ea10fba08ff6ef8fa7c105c9ba",
 "ethBlockNumber": 1,
 "ethMining": true,
 "ether": "5"
}
```

## LOG0108_2

```
$ docker build -f Dockerfile.build -t fooeth .
```

## LOG0108_1

```
$ docker run --entrypoint=node y12docker/dltdojo-ethgo:1.5.5 index.js -h
Commands:
  newAccount <password>  Create a new account
  info                   info type
  foo <key>              Set a config variable

Options:
  -h, --help  Show help                                                [boolean]

```
