### Usage
* docker image y12docker/dltdojo-darkorange
* MyEtherWallet http://hostip:9081
* browser-solidity http://hostip:9080
* local web3 provider url http://hostip:8545
* darkorange block explorer http://128.199.124.120/

#### NewAccountFromPhrase Mode
```
$ docker run -it -p 8545:8545 -p 9080:9080 -p 9081:9081 --rm y12docker/dltdojo-darkorange /start.sh unlock YOURPASSHERE
...
NewAccountFromPhrase YOURPASSHERE is 0x00f1667771080c41e6cdff68342f85494c5f3417
...
```
Get darkorange ether from Parity Phrase Account (faucet) on local MyEtherWallet.
```
http://hostip:9081 - Send Ether & Tokens - Parity Phrase - faucet - send ether to 0x00f1667771080c41e6cdff68342f85494c5f3417
```

Test contract on local browser-solidity.
```
http://hostip:9080/ - Web Provider - http://hostip:8545
```

#### Faucet Mode
```
$ docker run -it -p 8545:8545 -p 9080:9080 -p 9081:9081 --rm y12docker/dltdojo-darkorange /start.sh faucet
```

contract address 0x23e86c78a19ef1acb7762d1b5c54fd9ce162bb38

Faucet.sol
```
pragma solidity ^0.4.8;
contract Faucet {
    address owner;
    uint256 public sendAmount;

    function Faucet() payable {
        owner = msg.sender;
        sendAmount = 1 ether;
    }

    function getEther() returns (bool) {
        return msg.sender.send(sendAmount);
    }

    function sendEther(address toWhom) payable returns (bool) {
        return toWhom.send(sendAmount);
    }

    function killMe() {
        if (msg.sender == owner) {
            suicide(owner);
        }
    }

    function () payable {}
}
```
#### Peer Mode
```
$ docker run -it -p 8545:8545 -p 8545:8545 -p 9080:9080 -p 9081:9081 --rm y12docker/dltdojo-darkorange
```

### References
* MyEtherWallet kvhnuke/etherwallet https://github.com/kvhnuke/etherwallet
* ethereum/browser-solidity: Browser-Only Solidity IDE and Runtime Environment https://github.com/ethereum/browser-solidity
* Cannot connect to my local geth node · Issue #136 · ethereum/browser-solidity https://github.com/ethereum/browser-solidity/issues/136
