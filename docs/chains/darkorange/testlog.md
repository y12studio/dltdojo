### 2017-03-04T14:03:00+0800
```
$ curl -O https://y12studio.github.io/dltdojo/chains/darkorange/darkorange.json
$ nohup parity --config node.toml > /dev/null 2>&1 &
$ node
> Web3 = require("web3");
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> web3.eth.blockNumber
> web3.eth.coinbase
'0xe395929b9e00db8fc913399614b76dabf4aee790'
> web3.eth.accounts
[ '0x4792d5fc595e237347d71acfc57948efdd7c5cf7',
  '0xded0ea74b9f6f4638d606dfda01c16744ec1be9f',
  '0xe395929b9e00db8fc913399614b76dabf4aee790' ]
> web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]).toNumber(),'ether')
> web3.fromWei(web3.eth.getBalance(web3.eth.accounts[1]).toNumber(),'ether')
> web3.personal.unlockAccount(web3.eth.accounts[0], "mypasswd")
> web3.eth.sendTransaction({from:web3.eth.accounts[0], to:web3.eth.accounts[1], value: web3.toWei(199, "ether")})
> web3.eth.sendTransaction({from:web3.eth.accounts[0], to:'0xf5d6adec950ea2d3075d702ef0e8ca653f2c96ab', value: web3.toWei(199, "ether")})
```
Normal node
```
$ bash <(curl https://get.parity.io -Lk)
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{darkorange.json,node.toml}
$ nohup parity --config node.toml > /dev/null 2>&1 &
$ curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
{"jsonrpc":"2.0","result":"enode://d27868316ba6c53e9bcf26c0cbf4816d3488476d563ce762bb8c229b171e68c29760d8be83eb4eebbdb0a0ea6ee85ffcb6c7d07b0786d4319868f79396c6d594@128.199.124.120:30303","id":0}
$ npm i web3 -S
$ node
> Web3 = require("web3");
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> web3.eth.blockNumber
> web3.personal.newAccount('passhere')
'0xf5d6adec950ea2d3075d702ef0e8ca653f2c96ab'
> web3.fromWei(web3.eth.getBalance('0xf5d6adec950ea2d3075d702ef0e8ca653f2c96ab').toNumber(),'ether')
```
### 2017-03-03T08:58:19+0800
```
$ curl -O https://raw.githubusercontent.com/ethcore/parity/master/ethcore/res/ethereum/kovan.json
$ mv kovan.json darkorange-template.json
// set the initial parameters of the chain
$ mv darkorange-template.json darkorange.json
$ registrar=0xA1
$ validator=0xA2
$ validatorpass=xxxxxx
$ user=0xA3
$ sed -i.bak "s/0x0000000000000000000000000000000000000091/$registrar/g" drakorange.json
$ sed -i.bak "s/0x0000000000000000000000000000000000000092/$validator/g" drakorange.json
$ sed -i.bak "s/0x0000000000000000000000000000000000000093/$user/g" drakorange.json
```

### kovan test
```
$ parity --version
Parity
  version Parity/v1.6.0-unstable-810c71d-20170303/x86_64-linux-gnu/rustc1.15.1
$ ls ~/.local/share/io.parity.ethereum/
chains  dapps  jsonrpc.ipc  keys  network  signer

$ parity --chain kovan --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
```
node web3
```
$ npm install web3
$ node
> Web3 = require("web3")
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> web3.eth.blockNumber
4752
> var newAccount = web3.personal.newAccount("kovantest")
> web3.eth.accounts
> web3.eth.coinbase
> web3.eth.getBalance(web3.eth.accounts[0]).toNumber()
> .exit
$ ls ~/.local/share/io.parity.ethereum/keys/kovan
dapps_history.json
UTC--2017-03-03T05-56-25Z-xxxxxxxxx
```
