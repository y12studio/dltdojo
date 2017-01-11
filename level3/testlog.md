## LOG

### Wed Jan 11 16:52:17 CST 2017
```
$ dcup
$ ls
lv3-alias.sh  lv3-peers.yml  lv3-peer.yml  README.md  testlog.md
$ docker cp $VP1ID:/opt/app/hahacoin.sol .
$ ls
hahacoin.sol  lv3-alias.sh  lv3-peers.yml  lv3-peer.yml  README.md  testlog.md
// copy into container and compile sol file.
$ docker cp hahacoin.sol $VP1ID:/tmp/ && vp1cli solc /tmp/hahacoin.sol HahaCoin
// or $ docker cp hahacoin.sol $VP1ID:/tmp/ && vp1 node index.js solc /tmp/hahacoin.sol HahaCoin
```

### Wed Jan 11 16:22:13 CST 2017
```
$ source lv3-alias.sh
$ dcup
$ vp1 ls
contractutils.js  index.js          node_modules
hahacoin.sol      keyrecover.js     package.json
// copy hahacoin.sol to host
$ dc ps
   Name                 Command               State          Ports
-------------------------------------------------------------------------
lv3_evp0_1   /geth --dev --networkid=58 ...   Up      30303/tcp, 8545/tcp
lv3_evp1_1   /start.sh --dev --networki ...   Up      30303/tcp, 8545/tcp
$ docker cp lv3_evp1_1:/opt/app/hahacoin.sol .
$ ls
hahacoin.sol  lv3-alias.sh  lv3-peers.yml  lv3-peer.yml  README.md  testlog.md
$ vp1 ls /tmp
ethash-test154592981  npm-6-0cd5ad3c
$ docker cp hahacoin.sol lv3_evp1_1:/tmp/
$ vp1 ls /tmp
ethash-test154592981  hahacoin.sol          npm-6-0cd5ad3c
$ vp1cli solc /tmp/hahacoin.sol HahaCoin
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
## LOG0110_2

```
$ vp1 /geth version
Geth
Version: 1.5.5-stable
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.7.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ vp1cli rpc personal_newAccount vp1pass
{"jsonrpc":"2.0","id":"1ee562e4-0d24-4716-b98a-4c280a017f51","result":"0xe705738246dc4e786d022141aeb30c9b027c5ae4"}

$ vp1cli rpc miner_start                       

$ vp1cli info
{
 "ethBlockNumber": 9,
 "ethGetBalance": "45000000000000000000",
 "ethCoinbase": "0xe705738246dc4e786d022141aeb30c9b027c5ae4",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceEther": "45"
}

$ vp1cli sendeth e705738246dc4e786d022141aeb30c9b027c5ae4 vp1pass ae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5 3
{
 "unlock": true,
 "sendtx": "0x986b6a737bd7f39d829142a1d9c8d56bd192cb6b16b16ced997d0a8c25023574"
}

$ vp1cli newToken e705738246dc4e786d022141aeb30c9b027c5ae4 vp1pass
Contract {
  _eth:
   Eth {
     _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
     getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
     getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
     getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
     getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
     getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
     getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
     getBlockTransactionCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: getBlockTransactionCountCall] },
     getBlockUncleCount:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: uncleCountCall] },
     getTransaction:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionByHash' },
     getTransactionFromBlock:
      { [Function: send]
        request: [Function: bound ],
        call: [Function: transactionFromBlockCall] },
     getTransactionReceipt:
      { [Function: send]
        request: [Function: bound ],
        call: 'eth_getTransactionReceipt' },
     getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
     call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
     estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
     sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
     sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
     sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
     compile: { solidity: [Object], lll: [Object], serpent: [Object] },
     submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
     getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
     coinbase: [Getter],
     getCoinbase: { [Function: get] request: [Function: bound ] },
     mining: [Getter],
     getMining: { [Function: get] request: [Function: bound ] },
     hashrate: [Getter],
     getHashrate: { [Function: get] request: [Function: bound ] },
     syncing: [Getter],
     getSyncing: { [Function: get] request: [Function: bound ] },
     gasPrice: [Getter],
     getGasPrice: { [Function: get] request: [Function: bound ] },
     accounts: [Getter],
     getAccounts: { [Function: get] request: [Function: bound ] },
     blockNumber: [Getter],
     getBlockNumber: { [Function: get] request: [Function: bound ] },
     protocolVersion: [Getter],
     getProtocolVersion: { [Function: get] request: [Function: bound ] },
     iban:
      { [Function: Iban]
        fromAddress: [Function],
        fromBban: [Function],
        createIndirect: [Function],
        isValid: [Function] },
     sendIBANTransaction: [Function: bound transfer] },
  transactionHash: '0x7316bb93092016d4b6effd5215f8392975570d619c947d61f46f04ab8c71fe5e',
  address: undefined,
  abi:
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
       inputs: [Object],
       name: 'send',
       outputs: [],
       payable: false,
       type: 'function' },
     { inputs: [], payable: false, type: 'constructor' },
     { anonymous: false,
       inputs: [Object],
       name: 'Sent',
       type: 'event' } ] }

$ vp1cli newToken e705738246dc4e786d022141aeb30c9b027c5ae4 vp1pass
// instanceContract.transactionHash
0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84

$ vp1cli tx 0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84
cannot unmarshal non-string as hex data
// var transaction = web3.eth.getTransaction(argv.hash)

$ vp1curl eth_getTransactionByHash '"0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84"'
{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84"],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": {
    "blockHash": "0x28e4cfda3519f0870c16aecabf7705c007f62024d9c41298fe01ca3e85102871",
    "blockNumber": "0x48",
    "from": "0xe705738246dc4e786d022141aeb30c9b027c5ae4",
    "gas": "0x2b576",
    "gasPrice": "0x4a817c800",
    "hash": "0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84",
    "input": "0x606060405234610000575b60008054600160a060020a03191633600160a060020a03161790555b5b6101f8806100366000396000f300606060405263ffffffff60e060020a60003504166307546172811461004557806327e235e31461006e57806340c10f1914610099578063d0679d34146100b7575b610000565b34610000576100526100d5565b60408051600160a060020a039092168252519081900360200190f35b3461000057610087600160a060020a03600435166100e4565b60408051918252519081900360200190f35b34610000576100b5600160a060020a03600435166024356100f6565b005b34610000576100b5600160a060020a0360043516602435610134565b005b600054600160a060020a031681565b60016020526000908152604090205481565b60005433600160a060020a0390811691161461011157610130565b600160a060020a03821660009081526001602052604090208054820190555b5050565b600160a060020a0333166000908152600160205260409020548190101561015a57610130565b600160a060020a0333811660008181526001602090815260408083208054879003905593861680835291849020805486019055835192835282015280820183905290517f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd33459181900360600190a15b50505600a165627a7a72305820017451b96aadb1f567dbb9fb5f7fa1d03867fc9f4d87b15a6b508b471a0de0200029",
    "nonce": "0x3",
    "to": null,
    "transactionIndex": "0x0",
    "value": "0x0",
    "v": "0x1b",
    "r": "0xa12d58546708bfe7bd08bf3d62edc515b7094287a31700258e34ef083bc81b28",
    "s": "0x42462d612a200eefaadc66d9c541e16839ef27e0bf8d94d6515dac9c8d1ae04b"
  }
}
$ vp1curl eth_getTransactionReceipt '"0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84"'
{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84"],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": {
    "blockHash": "0x28e4cfda3519f0870c16aecabf7705c007f62024d9c41298fe01ca3e85102871",
    "blockNumber": "0x48",
    "contractAddress": "0x0d3993b476090556407c854a2edf03fedff852ce",
    "cumulativeGasUsed": "0x2b576",
    "from": "0xe705738246dc4e786d022141aeb30c9b027c5ae4",
    "gasUsed": "0x2b576",
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "root": "0x277e2d4049d38ee8790b4cab7d561af8f201bd15f5493ec523a47d49eec3661a",
    "to": null,
    "transactionHash": "0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84",
    "transactionIndex": "0x0"
  }
}

$ vp1cli rpc eth_getTransactionReceipt 0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84
{"jsonrpc":"2.0","id":"c9694bb4-1ee5-497e-9b55-31b0930a206b","error":{"code":-32602,"message":"cannot unmarshal non-string as hex data"}}

$ vp1cli rpcreq eth_getTransactionReceipt 0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84
{ jsonrpc: '2.0',
  id: 0,
  error:
   { code: -32602,
     message: 'cannot unmarshal non-string as hex data' } }

$ vp1curl eth_getTransactionReceipt '"0xc32aaf2f4fb98026b9b484eaca1ab1fdb7d7b30df1d34a10d792fa4b581fad84"' | jq .result.contractAddress
"0xa0f4f9675212f6acd6b297f114a511e49d9ee318"
```

## LOG0110_1

newToken
```
// --dojo.eth 2 --name lv3
$ dcup
$ vp1cli rpc personal_newAccount vp1pass       
{"jsonrpc":"2.0","id":"a08dbf1d-5553-4b86-8f29-9fab9b5417db","result":"0x3b012875d4bb633e0b822fb8fa68ffcacb5f998e"}

$ vp1cli rpc miner_start                       
{"jsonrpc":"2.0","id":"c103b03b-dfea-4dac-a68c-19c4d4cd622d","result":true}

$ vp1cli newToken 3b012875d4bb633e0b822fb8fa68ffcacb5f998e vp1pass
```

issue : cannot unmarshal non-string as hex data

```
$ vp1cli sendeth 61c8b60e657af2f09f2a9ed1008f61b7fb8565f0 vp1pass ae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5 3
index.js sendeth <accountAddress> <accountPassword> <toAddress> <ether>

Options:
  -h, --help  Show help                                                [boolean]

invalid argument 2: cannot unmarshal non-string as hex data

$ vp1 /geth version
Geth
Version: 1.5.6-stable
Git Commit: 2a609af51873204c940a9b2a7215e6b5a97b0656
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.7.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ vp1 cat node_modules/web3/package.json | jq .version
"0.18.0"

```
