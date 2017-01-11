## ethcore/parity

```
$ docker run ethcore/parity:stable-release --version
2017-01-11 03:09:19 UTC Parity
  version Parity/v1.4.10-stable-4107a9f-20170110/x86_64-linux-gnu/rustc1.14.0
$ docker run -it ethcore/parity:stable-release --help | grep test
                           or testnet (default: homestead).
$ docker run -it ethcore/parity:beta-release --help | grep test
                          or testnet (default: homestead).
// where is the --chain dev ?

$ docker run -it -p 8545:8545 ethcore/parity:stable-release --chain dev

$ npm install web3
From then on you just need to run node and require the web3 module:

$ node
> Web3 = require("web3")
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
After this point, you'll be able to use the web3 API from with this environment, e.g.:

> web3.eth.blockNumber
743397
```
