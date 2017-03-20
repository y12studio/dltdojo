#### 2017-03-20T09:51:09+0800
```
$ docker build -t y12docker/dltdojo-darkorange .
$ docker run -it -p 8545:8545 -p 9080:9080 -p 9081:9081 --rm y12docker/dltdojo-darkorange /start.sh unlock YOURPASSHERE

unlock parity_newAccountFromPhrase YOURPASSHERE
NewAccountFromPhrase YOURPASSHERE is 0x00f1667771080c41e6cdff68342f85494c5f3417
start parity with nodefaucet.toml
[parity]
chain = "darkorange.json"
[network]
port = 30303
[rpc]
interface = "0.0.0.0"
port = 8545
#cors = "http://remix.ethereum.org"
cors = "*"
hosts = ["all"]
apis = ["web3", "eth", "net", "personal", "parity", "parity_set", "traces", "rpc", "parity_accounts"]
# [ui]
# port = 8180
# [dapps]
# port = 8080
[account]
unlock = ["0x00f1667771080c41e6cdff68342f85494c5f3417"]
password = ["nodefaucet.pwds"]
[mining]
#engine_signer = "0x0000000000000000000000000000000000000092"
reseal_on_txs = "none"
YOURPASSHERE
Loading config file from nodefaucet.toml
2017-03-20 01:51:58 UTC Starting Parity/v1.6.2-beta-8a27211-20170311/x86_64-linux-gnu/rustc1.15.1
2017-03-20 01:51:58 UTC State DB configuration: fast
2017-03-20 01:51:58 UTC Operating mode: active
2017-03-20 01:51:58 UTC Configured for Darkorange using AuthorityRound engine
2017-03-20 01:51:58 UTC Updated conversion rate to Ξ1 = US$43.02 (2767262000 wei/gas)
2017-03-20 01:52:03 UTC Public node URL: enode://3bca10ef720baa83a7ca5d9e91ff5f68f230695a6743d2acfa02b784ccedc621b928d03afbd87dabee58da1a3e3cad12e9ed51cb21ccc9f02493773cc3ed4ca2@172.17.0.2:30303
```

MyEtherWallet
```
http://hostip:9081 - Send Ether & Tokens - Parity Parity Phrase - faucet - send ether to 0x00f1667771080c41e6cdff68342f85494c5f3417
```

browser-solidity
```
http://hostip:9080/ - Web Provider - http://hostip:8545
```

#### 2017-03-20T00:16:00+0800
MyEtherWallet

Add Custom Node

* URL http://hostip
* PORT 8545
* TYPE Custom

Generate Wallet

* Keystore File
* wallet address

Faucet (Send Ether & Tokens)

* How would you like to access your wallet? (Parity Phrase)
* faucet - unlock
* send ether to wallet address

#### 2017-03-19T15:29:09+0800
```
$ docker build -t y12docker/dltdojo-darkorange .
$ docker run -it --rm y12docker/dltdojo-darkorange node --version
v7.7.3
$ docker run -it --rm y12docker/dltdojo-darkorange /start.sh darkorange

darkorange chain
Loading config file from node.toml
2017-03-19 09:13:20 UTC Starting Parity/v1.6.2-beta-8a27211-20170311/x86_64-linux-gnu/rustc1.15.1
2017-03-19 09:13:20 UTC State DB configuration: fast
2017-03-19 09:13:20 UTC Operating mode: active
2017-03-19 09:13:20 UTC Configured for Darkorange using AuthorityRound engine
2017-03-19 09:13:21 UTC Updated conversion rate to Ξ1 = US$38.48 (3093753000 wei/gas)
2017-03-19 09:13:26 UTC Public node URL: enode://74c21ae59d002eca1d63cfddf362947cfb6d009aaab5655d5a6d924132430d52c0e10fc8af005d3168eb16388f899427300bb02f0715b7b7f37d49d87296b3ee@172.17.0.2:30303
2017-03-19 09:13:29 UTC Imported #133 dd13…e1d8 (1 txs, 0.02 Mgas, 0.27 ms, 0.69 KiB) + another 7 block(s) containing 7 tx(s)

$ docker run -it -p 8545:8545 --rm y12docker/dltdojo-darkorange /start.sh faucet
// http://remix.ethereum.org
// local web3 provider url http://192.168.2.73:8545
$ docker push y12docker/dltdojo-darkorange:latest
```
