## Quick Start

* clique network name: cqnet1

```
$ docker run -it -v dltdojo:/dltdojo dltdojo/clique:1.6.6 ./build.sh cqnet1 4
$ docker-compose up -d
$ docker-compose exec node0 bash
  bash-4.3# geth --exec "miner.start()" attach
$ docker-compose exec node1 bash
  bash-4.3# geth --exec "admin.addPeer(`cat /dltdojo/cqnet1/node0/enode`)" attach
$ docker-compose exec node2 bash
  bash-4.3# geth --exec "admin.addPeer(`cat /dltdojo/cqnet1/node0/enode`)" attach
$ docker-compose exec node3 bash
  bash-4.3# geth --exec "admin.addPeer(`cat /dltdojo/cqnet1/node0/enode`)" attach
  
```

### Step 1: Define your clique netowrk

* clique network name: cqnet1

```
$ docker run -it -v dltdojo:/dltdojo dltdojo/clique:1.6.6 ./build.sh cqnet1 4
=== node0 address/password ===
6852fc0b01d23daedcf7cd1203205cf422715bae
=== node1 address/password ===
c5bb7501054de9f301510f9fc4edfe4fa2d4358c
=== node2 address/password ===
29b06747057c491786e127c7da52a6f297d20e65
=== node3 address/password ===
d4b448191296672b99dbe73f6773d95c40b7eda0
+-----------------------------------------------------------+
| Welcome to puppeth, your Ethereum private network manager |
|                                                           |
| This tool lets you create a new Ethereum network down to  |
| the genesis block, bootnodes, miners and ethstats servers |
| without the hassle that it would normally entail.         |
|                                                           |
| Puppeth uses SSH to dial in to remote servers, and builds |
| its network components out of Docker containers using the |
| docker-compose toolset.                                   |
+-----------------------------------------------------------+

Please specify a network name to administer (no spaces, please)
> cqnet1
Sweet, you can set this via --network=cqnet1 next time!

INFO [07-06|12:03:35] Administering Ethereum network           name=cqnet1
WARN [07-06|12:03:35] No previous configurations found         path=/root/.puppeth/cqnet1

What would you like to do? (default = stats)
 1. Show network stats
 2. Configure new genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which consensus engine to use? (default = clique)
 1. Ethash - proof-of-work
 2. Clique - proof-of-authority
> 2

How many seconds should blocks take? (default = 15)
>

Which accounts are allowed to seal? (mandatory at least one)
> 0x6852fc0b01d23daedcf7cd1203205cf422715bae
> 0x

Which accounts should be pre-funded? (advisable at least one)
> 0x6852fc0b01d23daedcf7cd1203205cf422715bae
> 0xc5bb7501054de9f301510f9fc4edfe4fa2d4358c
> 0x


Specify your chain/network ID if you want an explicit one (default = random)
>

Anything fun to embed into the genesis block? (max 32 bytes)
> DLTDOJO

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which file to save the genesis into? (default = cqnet1.json)
>
INFO [07-06|12:04:12] Exported existing genesis block

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> ^C/dltdojo/cqnet1
├── cqnet1.json
├── node0
│   ├── UTC--2017-07-06T12-03-27.450342155Z--6852fc0b01d23daedcf7cd1203205cf422715bae
│   └── passfile
├── node1
│   ├── UTC--2017-07-06T12-03-28.237673892Z--c5bb7501054de9f301510f9fc4edfe4fa2d4358c
│   └── passfile
├── node2
│   ├── UTC--2017-07-06T12-03-29.027746078Z--29b06747057c491786e127c7da52a6f297d20e65
│   └── passfile
└── node3
    ├── UTC--2017-07-06T12-03-29.818507556Z--d4b448191296672b99dbe73f6773d95c40b7eda0
    └── passfile

4 directories, 9 files
=== cqnet1.json ===
{
  "chainId": 64944,
  "homesteadBlock": 1,
  "eip150Block": 2,
  "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "eip155Block": 3,
  "eip158Block": 3,
  "clique": {
    "period": 15,
    "epoch": 30000
  }
}

```

### Setp2: Start docker containers

```
$ docker-compose up -d
$ docker-compose ps
     Name         Command     State   Ports
-------------------------------------------
clique_node0_1   ./start.sh   Up
clique_node1_1   ./start.sh   Up
clique_node2_1   ./start.sh   Up
clique_node3_1   ./start.sh   Up

$ docker-compose exec node0 bash

bash-4.3# geth attach
Welcome to the Geth JavaScript console!

instance: Geth/v1.6.6-stable/linux-amd64/go1.9beta2
coinbase: 0xde4813d4d4c78246c9c8a0cf658c8b086abafbfe
at block: 0 (Thu, 06 Jul 2017 09:39:49 UTC)
 datadir: /root/.ethereum
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> loadScript("/opt/geth/gethload.js")
true
> checkAllBalances();
  eth.accounts[0]:      0xde4813d4d4c78246c9c8a0cf658c8b086abafbfe      balance: 9.04625697166532776746648320380374280103671755200316906558262375061821325312e+56 ether
  Total balance: 9.046256971665328e+56 ether

> miner.
miner.constructor          miner.setGasPrice
miner.getHashrate          miner.start
miner.hasOwnProperty       miner.stop
miner.isPrototypeOf        miner.toLocaleString
miner.propertyIsEnumerable miner.toString
miner.setEtherbase         miner.valueOf
miner.setExtra
> miner.start();
null
> eth.blockNumber
76
> eth.
eth._requestManager            eth.getRawTransaction
eth.accounts                   eth.getRawTransactionFromBlock
eth.blockNumber                eth.getStorageAt
eth.call                       eth.getSyncing
eth.coinbase                   eth.getTransaction
eth.compile                    eth.getTransactionCount
eth.constructor                eth.getTransactionFromBlock
eth.contract                   eth.getTransactionReceipt
eth.defaultAccount             eth.getUncle
eth.defaultBlock               eth.getWork
eth.estimateGas                eth.hashrate
eth.filter                     eth.iban
eth.gasPrice                   eth.icapNamereg
eth.getAccounts                eth.isSyncing
eth.getBalance                 eth.mining
eth.getBlock                   eth.namereg
eth.getBlockNumber             eth.pendingTransactions
eth.getBlockTransactionCount   eth.protocolVersion
eth.getBlockUncleCount         eth.resend
eth.getCode                    eth.sendIBANTransaction
eth.getCoinbase                eth.sendRawTransaction
eth.getCompilers               eth.sendTransaction
eth.getGasPrice                eth.sign
eth.getHashrate                eth.signTransaction
eth.getMining                  eth.submitTransaction
eth.getPendingTransactions     eth.submitWork
eth.getProtocolVersion         eth.syncing
> eth.mining
true
> admin.
admin.addPeer              admin.propertyIsEnumerable
admin.constructor          admin.removePeer
admin.datadir              admin.sleep
admin.exportChain          admin.sleepBlocks
admin.getDatadir           admin.startRPC
admin.getNodeInfo          admin.startWS
admin.getPeers             admin.stopRPC
admin.hasOwnProperty       admin.stopWS
admin.importChain          admin.toLocaleString
admin.isPrototypeOf        admin.toString
admin.nodeInfo             admin.valueOf
admin.peers
> admin.nodeInfo
{
  enode: "enode://ec6959fc740765df420a63cb714d60df9341eb4b625399e2949c45e95e8e3f201b64934b9f5333c65e5522977e8a898830f7e3d5a2583e06e362c9c6eb3896ac@[::]:30303",
  id: "ec6959fc740765df420a63cb714d60df9341eb4b625399e2949c45e95e8e3f201b64934b9f5333c65e5522977e8a898830f7e3d5a2583e06e362c9c6eb3896ac",
  ip: "::",
  listenAddr: "[::]:30303",
  name: "Geth/v1.6.6-stable/linux-amd64/go1.9beta2",
  ports: {
    discovery: 30303,
    listener: 30303
  },
  protocols: {
    eth: {
      difficulty: 159,
      genesis: "0x832992ea6c4619ed0660e728e0add1196a8c4ee78a1e628aa78e712f90dd658e",
      head: "0x94c969a2ed06c4aad41eaa0dc3baae245c7df8ce98a76aa0d10fc6f4b8f3ef25",
      network: 19832
    }
  }
}
```

### node1

```
$ docker-compose exec node1 bash

bash-4.3# cat /dltdojo/cqnet1/node0/enode
"enode://7fd9b95ca099cbc5540270af88e3e4ea613c7a79234beb8fd494318121e330a5ec51eedc46e82b0f34d4893ef08d3605606767b5218514ebc8e369e6334e9ae2@172.25.0.5:30303"
bash-4.3# geth --exec "admin.addPeer(`cat /dltdojo/cqnet1/node0/enode`)" attach
true
bash-4.3# geth --exec "admin.addPeer(`cat /dltdojo/cqnet1/node2/enode`)" attach
true
bash-4.3# geth --exec "admin.peers" attach
[{
    caps: ["eth/63"],
    id: "7fd9b95ca099cbc5540270af88e3e4ea613c7a79234beb8fd494318121e330a5ec51eedc46e82b0f34d4893ef08d3605606767b5218514ebc8e369e6334e9ae2",
    name: "Geth/v1.6.6-stable/linux-amd64/go1.9beta2",
    network: {
      localAddress: "172.25.0.3:39512",
      remoteAddress: "172.25.0.5:30303"
    },
    protocols: {
      eth: {
        difficulty: 13,
        head: "0x3bac5776051164e70da23f5363f3629e4eb52f0067c70647f0a96c49eba9d3ed",
        version: 63
      }
    }
}, {
    caps: ["eth/63"],
    id: "fd146e0547e20543a21ec11bfc58523ec60cc7360beb8ce6f5330293a783e0f98ff60698f7cbdbd22754165bba4c222f2e4e36d8ced86974bc30c67529e478b2",
    name: "Geth/v1.6.6-stable/linux-amd64/go1.9beta2",
    network: {
      localAddress: "172.25.0.3:59600",
      remoteAddress: "172.25.0.4:30303"
    },
    protocols: {
      eth: {
        difficulty: 1,
        head: "0xfd8d4c3ef781f4eab3e942e27b8d77bcdce9d3c086fb189c103a4855194c71c4",
        version: 63
      }
    }
}]

```

### Build image

```
$ docker build -t dltdojo/clique:1.6.6 .
$ docker push dltdojo/clique:1.6.6
```

### Referneces
* 使用 go-ethereum 1.6 Clique PoA consensus 建立 Private chain (1)  https://medium.com/taipei-ethereum-meetup/%E4%BD%BF%E7%94%A8-go-ethereum-1-6-clique-poa-consensus-%E5%BB%BA%E7%AB%8B-private-chain-1-4d359f28feff
