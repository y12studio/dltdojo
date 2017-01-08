## LOG0108_3

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
$ vp1cli info
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
$ vp1cli info
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
