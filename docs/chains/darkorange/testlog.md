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
