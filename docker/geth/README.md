### dlotdojo/geth:1.6.6

* https://hub.docker.com/r/ethereum/client-go/

```
$ docker build -t dltdojo/geth:1.6.6 .
$ docker run -d dltdojo/geth:1.6.6
d91d7a711ab8..

$ docker exec -it d91d bash
# geth attach http://localhost:8545
Welcome to the Geth JavaScript console!

instance: Geth/v1.6.6-stable/linux-amd64/go1.7.3
 modules: admin:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 web3:1.0
> personal.newAccount("mypasswd")
"0xb6e3a277c9c39fb4d5c151fafd4aa79e49fa7527"
> web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")
0
> miner.start()
null
> web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")
285
> personal.unlockAccount(eth.accounts[0], "mypasswd", 300)
> eth.sendTransaction({from: eth.accounts[0], value: web3.toWei(1.88, "ether"), to: "0xbe05f1ff430613b1fea22970a2ba6dbed564ab77"}) 
"0x8b8e9041fa2c9bdf089cf775d71cecd17c9537dd9c72b4b79c12f6e5d56ea063"
> web3.eth.getTransaction("0x8b8e9041fa2c9bdf089cf775d71cecd17c9537dd9c72b4b79c12f6e5d56ea063")

{
  blockHash: "0x251ac0703fe15f665df7f7f85b0132f13e5f199013d1c591a900c3e70f9006e9",
  blockNumber: 499,
  from: "0xb6e3a277c9c39fb4d5c151fafd4aa79e49fa7527",
  gas: 90000,
  gasPrice: 0,
  hash: "0x8b8e9041fa2c9bdf089cf775d71cecd17c9537dd9c72b4b79c12f6e5d56ea063",
  input: "0x",
  nonce: 0,
  r: "0xdd84b0a4bc2901402ebc8da44b47a593d7b42743bfca0d8173ded9e692d9b92e",
  s: "0x47035f3db41bcae44c99baa8210531ca40fa01b3c9d294382d9260a102a2e2d6",
  to: "0xbe05f1ff430613b1fea22970a2ba6dbed564ab77",
  transactionIndex: 0,
  v: "0xa96",
  value: 1880000000000000000
}

> loadScript("/opt/geth/gethload.js")
true
> checkAllBalances();
  eth.accounts[0]:      0x1b439ad799ce2f83420178c411bf09d790ffc67f      balance: 190 ether
  Total balance: 190 ether

```

#### testaccount.sh

```
$ docker run -it --rm dltdojo/geth:1.6.6 ./testaccount.sh
{
  "Password": "ZWIyODYxMmJkMWJkNTQ4Y2Ri",
  "KeyFileName": "UTC--2017-07-05T04-21-39.227335865Z--23c6a342819f09c52cfa3c13385fb086767d57d6",
  "KeyFile": {
    "address": "23c6a342819f09c52cfa3c13385fb086767d57d6",
    "crypto": {
      "cipher": "aes-128-ctr",
      "ciphertext": "8b81c8b9b79577afb227ecd053ccc60a992db5ed6b580b8b21037a15f891886e",
      "cipherparams": {
        "iv": "57041514cc630a5fbda729686700dc69"
      },
      "kdf": "scrypt",
      "kdfparams": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "ded1bc449561897ccfd235cdd692c6a3c459d463941112fc8a61fcbc1d2028cb"
      },
      "mac": "7c26658052bcc89a473c69d36534801c1b0463e3fcedc797a6c9bd55df1ac708"
    },
    "id": "704071e1-ad6c-4d01-85ee-2abc6fe95ff9",
    "version": 3
  }
}

$ docker run -it --rm dltdojo/geth:1.6.6 ls -al /usr/local/bin
total 41700
drwxr-xr-x    2 root     root          4096 Jul  5 05:23 .
drwxr-xr-x    8 root     root          4096 Jul  5 05:23 ..
-rwxr-xr-x    1 root     root      29200920 Jul  5 05:02 geth
-rwxr-xr-x    1 root     root      13484904 Jul  5 05:02 puppeth

$ docker run -it --rm dltdojo/geth:1.6.6.all ls -al /usr/local/bin
total 157828
drwxr-xr-x    2 root     root          4096 Jul  5 05:10 .
drwxr-xr-x    7 root     root          4096 Jul  5 05:10 ..
-rwxr-xr-x    1 root     root       8536816 Jul  5 05:02 abigen
-rwxr-xr-x    1 root     root      19160760 Jul  5 05:02 bootnode
-rwxr-xr-x    1 root     root      18667664 Jul  5 05:02 evm
-rwxr-xr-x    1 root     root      25172016 Jul  5 05:02 faucet
-rwxr-xr-x    1 root     root      29200920 Jul  5 05:02 geth
-rwxr-xr-x    1 root     root      13484904 Jul  5 05:02 puppeth
-rwxr-xr-x    1 root     root       2890017 Jul  5 05:02 rlpdump
-rwxr-xr-x    1 root     root      24311456 Jul  5 05:02 swarm
-rwxr-xr-x    1 root     root      20161208 Jul  5 05:03 wnode
```

