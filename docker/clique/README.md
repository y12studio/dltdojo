## Build a Ethereum Clique Private Testnet in 5 Min

* docker version: 17.06
* docker-compose: 1.8.0

## Quick Start (Name:foonet1)

* Network name: foonet1
* Signer: node0

```
$ docker pull dltdojo/clique:1.6.6
$ docker run -it -v dltdojo:/dltdojo dltdojo/clique:1.6.6 ./build.sh foonet1 4
$ curl -o docker-compose.yml https://raw.githubusercontent.com/y12studio/dltdojo/master/docker/clique/docker-compose.yml
$ sed -i.bak -e 's/cqnet1/foonet1/' docker-compose.yml
$ docker-compose up -d
```

### Build a dltdojo volume for foonet1

```
$ docker pull dltdojo/clique:1.6.6
$ docker run -it -v dltdojo:/dltdojo dltdojo/clique:1.6.6 ./build.sh foonet1 4

=== node0 address/password ===
e5aa4d1e8d86fe8b7149f806a060600db895f38a
=== node1 address/password ===
9b1b36d3b2b6c55bd6a829d9d06e839a8ff80875
=== node2 address/password ===
29b1bb318a23f40fc891fda44d4023fb4344e09a
=== node3 address/password ===
b0b46097790b3ca975fab7380b4fc5858ab189f6
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
> foonet1
Sweet, you can set this via --network=foonet1 next time!

INFO [07-07|03:38:49] Administering Ethereum network           name=foonet1
WARN [07-07|03:38:49] No previous configurations found         path=/root/.puppeth/foonet1

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
> 0xe5aa4d1e8d86fe8b7149f806a060600db895f38a
> 0x

Which accounts should be pre-funded? (advisable at least one)
> 0xe5aa4d1e8d86fe8b7149f806a060600db895f38a
> 0x9b1b36d3b2b6c55bd6a829d9d06e839a8ff80875
> 0x


Specify your chain/network ID if you want an explicit one (default = random)
>

Anything fun to embed into the genesis block? (max 32 bytes)
> DLTDOJO TESTNET

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which file to save the genesis into? (default = foonet1.json)
>
INFO [07-07|03:39:27] Exported existing genesis block

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> ^C/dltdojo/foonet1
├── foonet1.json
├── node0
│   ├── UTC--2017-07-07T03-37-41.978421537Z--e5aa4d1e8d86fe8b7149f806a060600db895f38a
│   └── passfile
├── node1
│   ├── UTC--2017-07-07T03-37-42.758869576Z--9b1b36d3b2b6c55bd6a829d9d06e839a8ff80875
│   └── passfile
├── node2
│   ├── UTC--2017-07-07T03-37-43.543836899Z--29b1bb318a23f40fc891fda44d4023fb4344e09a
│   └── passfile
└── node3
    ├── UTC--2017-07-07T03-37-44.328490481Z--b0b46097790b3ca975fab7380b4fc5858ab189f6
    └── passfile

4 directories, 9 files
=== foonet1.json ===
{
  "chainId": 2215,
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

### Let docker-compose up

```
$ curl -o docker-compose.yml https://raw.githubusercontent.com/y12studio/dltdojo/master/docker/clique/docker-compose.yml -o docker-compose.yml
$ sed -i.bak -e 's/cqnet1/foonet1/' docker-compose.yml
$ docker-compose up -d
Recreating clique_node0_1
Recreating clique_node1_1
Recreating clique_node3_1
Recreating clique_node2_1
$ docker-compose ps
     Name         Command     State   Ports
-------------------------------------------
clique_node0_1   ./start.sh   Up
clique_node1_1   ./start.sh   Up
clique_node2_1   ./start.sh   Up
clique_node3_1   ./start.sh   Up

$ docker-compose logs node0
$ docker-compose logs node1
$ docker-compose exec node0 bash
  #  ./info.sh foonet1
  # geth attach
  > admin.peers
  > eth.blockNumber
  > loadScript("/opt/geth/gethload.js")
  > checkAllBalances();
  > personal.unlockAccount("<ACCOUNT0>")
  > eth.sendTransaction({from:"<ACCOUNT0>", to:"<ACCOUNT2>", value: web3.toWei(99, "ether")})

$ docker-compose exec node2 bash
  # geth attach
  > admin.peers
  > eth.blockNumber
  > loadScript("/opt/geth/gethload.js")
  > checkAllBalances()
    eth.accounts[0]:      0x29b1bb318a23f40fc891fda44d4023fb4344e09a      balance: 99.88 ether
     Total balance: 99.88 ether

```

### Stop all containers

```
$ docker-compose stop
$ docker-compose rm
```