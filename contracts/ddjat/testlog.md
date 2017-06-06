### truffle and zeppelin

* Issue #96 · OpenZeppelin/zeppelin-solidity https://github.com/OpenZeppelin/zeppelin-solidity/issues/96
* Token Factory https://tokenfactory.surge.sh/#/factory

```
$ truffle init
$ truffle install zeppelin
$ npm i truffle-hdwallet-provider 
//
// visual studio 2015 build tools 
// npm i truffle-hdwallet-provider  --msvs_version=2015
$ truffle test
```

### DDJAT Contract deployment on rinkeby network

```
TEST_MNEMONIC="rinkeby foo bar blah ..."
truffle migrate --network rinkeby --verbose-rpc
// Windows
// $env:TEST_MNEMONIC="rinkeby foo bar blah ..." ; truffle migrate --network rinkeby --verbose-rpc
```

### TEST 1 Rinkeby

DLTDOJO Alice Token T1 https://tokenfactory.surge.sh/#/token/0x63edDA05A27258748cc73fFD19FD95697D8b5749

### References

* [TEST Rinkeby] DLTDOJO Alice Token T1 https://rinkeby.etherscan.io/address/0x63edda05a27258748cc73ffd19fd95697d8b5749
* wallet.ethereum.org