## --dev mode

### Tue Jan 17 12:33:11 CST 2017
```
$ docker run ethereum/client-go:v1.5.5 version
Geth
Version: 1.5.7-stable
Git Commit: da2a22c384a9b621ec853fe4b1aa651d606cf42b
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.5.4
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ docker run -it ethereum/client-go:v1.5.7 --verbosity 0 --dev console
instance: Geth/v1.5.7-stable-da2a22c3/linux/go1.5.4
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0
```

#### web3.eth.getTransaction

```
$ docker run ethereum/client-go:v1.5.5 version
Geth
Version: 1.5.6-stable
Git Commit: 2a609af51873204c940a9b2a7215e6b5a97b0656
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.5.4
OS: linux
GOPATH=
GOROOT=/usr/lib/go

$ docker run -it ethereum/client-go:v1.5.6 --verbosity 0 --dev console

instance: Geth/v1.5.6-stable-2a609af5/linux/go1.5.4
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

> personal.newAccount('mypasswd')
"0x8071b5974ea55c380f914bba715f317ca5889680"
> miner.start()
true
> eth.getBalance(eth.accounts[0])
85000000000000000000
> personal.unlockAccount(eth.accounts[0],"mypasswd", 300)
true
> eth.sendTransaction({from: eth.accounts[0], to: "0x364d385977b17b26fce6d245329c7ab992f557eb", gasPrice: "1000"})
"0x4cf129d96f1ef7983c9f08915225b0558c6306d5b45300cbe6c651539953b6c9"
> web3.eth.getTransaction("0x0b47e13335c46b544c20097dc967d5eb58a9f590d330977c1738cf8997b5196a")
```


console: personal.unlockAccount cannot unmarshal non-string as hex data
v1.5.6 test

#### System information

```
$ docker run ethereum/client-go:v1.5.6 version
Geth
Version: 1.5.6-stable
Git Commit: 2a609af51873204c940a9b2a7215e6b5a97b0656
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.5.4
OS: linux
GOPATH=
GOROOT=/usr/lib/go
```
#### Expected behaviour

```
> personal.unlockAccount(address,password,300)
true
```
#### Actual behaviour

```
> personal.unlockAccount(address,password,300)
Error: invalid argument 2: cannot unmarshal non-string as hex data
```

#### Steps to reproduce the behaviour

```
$ docker run -it -p 8545:8545 ethereum/client-go:v1.5.6 --dev --rpc --rpcaddr "0.0.0.0" --rpcapi "personal,eth,net,web3" console
instance: Geth/v1.5.6-stable-2a609af5/linux/go1.5.4
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

> personal.newAccount('mypasswd')
"0x364d385977b17b26fce6d245329c7ab992f557eb"
> personal.unlockAccount('0x364d385977b17b26fce6d245329c7ab992f557eb','mypasswd',300)
Error: invalid argument 2: cannot unmarshal non-string as hex data
> personal.unlockAccount('0x364d385977b17b26fce6d245329c7ab992f557eb','mypasswd','0x10')
unlock duration must be a number

$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x364d385977b17b26fce6d245329c7ab992f557eb","mypasswd",300],"id":67}' http://localhost:8545

{"jsonrpc":"2.0","id":67,"error":{"code":-32602,"message":"invalid argument 2: missing 0x prefix for hex data"}}

$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x364d385977b17b26fce6d245329c7ab992f557eb","mypasswd","0x20"],"id":67}' http://localhost:8545

{"jsonrpc":"2.0","id":67,"result":true}

```

v1.5.5 test

```
$ docker run -it -p 8545:8545 ethereum/client-go:v1.5.5 --dev --rpc --rpcaddr "0.0.0.0" --rpcapi "personal,eth,net,web3" console

instance: Geth/v1.5.5-stable-ff07d548/linux/go1.5.4
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

> personal.newAccount('mypasswd')
"0x41fdf777c1080e42a494becf13738d091eeb12af"
> personal.unlockAccount('0x41fdf777c1080e42a494becf13738d091eeb12af','mypasswd',300)
true

$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x41fdf777c1080e42a494becf13738d091eeb12af","mypasswd",300],"id":67}' http://localhost:8545
{"jsonrpc":"2.0","id":67,"result":true}
```
