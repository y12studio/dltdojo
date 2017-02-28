https://github.com/ethereum/go-ethereum

### TESTNET
* TokenMarketNet/ethereum-smart-contract-transaction-demo: https://github.com/TokenMarketNet/ethereum-smart-contract-transaction-demo
* https://github.com/ethereum/wiki/wiki/JSON-RPC
* https://testnet.etherscan.io/address/0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4
* https://testnet.etherscan.io/address/0x5ceb367689eb8726fc7a8ec75bee43b783661a95

### 2017-02-28T12:52:27+0800
```
$ cd contracts && solc Ddjtab.sol --combined-json abi,bin > ../ropsten/contracts.json
```
### 2017-02-28T08:58:36+0800
```
$ docker run -d --name geth -v /home/lin/ethereum:/root \
           -p 8545:8545 -p 30303:30303 \
           ethereum/client-go --fast --cache=1024 --testnet --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3"
$ docker logs geth
$ curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' localhost:8545
{"jsonrpc":"2.0","id":1,"result":{"currentBlock":"0x93aa6","highestBlock":"0x93b2c","knownStates":"0x1e065a","pulledStates":"0x1d3933","startingBlock":"0x93a9a"}}
$ curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":0}' localhost:8545
{"jsonrpc":"2.0","id":0,"result":"0x1"}
$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["pass"],"id":67}' localhost:8545
{"jsonrpc":"2.0","id":67,"result":"0x5ceb367689eb8726fc7a8ec75bee43b783661a95"}
$ curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' localhost:8545
{"jsonrpc":"2.0","id":1,"result":["0x5ceb367689eb8726fc7a8ec75bee43b783661a95"]}
$ curl -X POST --data '{"jsonrpc":"2.0","method": "eth_getBalance","params":["0x5ceb367689eb8726fc7a8ec75bee43b783661a95", "latest"],"id":1}' localhost:8545
$ curl -X POST --data '{"jsonrpc":"2.0","method": "personal_importRawKey", "params": ["6f0dc3181ef1d5395f6f477d2b6999337adb6a279335675a3446204fe87b38a4","pass"],"id":199}' localhost:8545
$ curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' localhost:8545
{"jsonrpc":"2.0","id":1,"result":["0x5ceb367689eb8726fc7a8ec75bee43b783661a95","0xbbc7bc660947ccf8ee4346530003ac4185c6a3d4"]}
$ curl -X POST --data '{"jsonrpc":"2.0","method": "eth_getBalance","params":["0xbbc7bc660947ccf8ee4346530003ac4185c6a3d4", "latest"],"id":1}' localhost:8545

$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x5ceb367689eb8726fc7a8ec75bee43b783661a95", "pass", 3600],"id":67}' http://localhost:8545
$ docker stop geth
$ docker rm geth
```
