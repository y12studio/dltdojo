### Usage

#### Faucet mode

* http://remix.ethereum.org
* host ip : 192.168.1.1
* local web3 provider url http://192.168.1.1:8545

```
$ docker run -it -p 8545:8545 --rm y12docker/dltdojo-darkorange /start.sh faucet
```

#### Normal  mode
```
$ docker run -it -p 8545:8545 --rm y12docker/dltdojo-darkorange /start.sh darkorange
```

### References
* ethereum/remix: Ethereum IDE and tools for the web https://github.com/ethereum/remix
