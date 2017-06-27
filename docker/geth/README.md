### dlotdojo/geth:1.6.6

```
docker build -t dltdojo/geth:1.6.6 .
docker run -d dltdojo/geth:1.6.6
d91d7a711ab8..

docker exec -it d91d sh
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
```

