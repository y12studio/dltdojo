### Usage

#### Faucet mode

* host ip : 192.168.1.1
* MyEtherWallet http://hostip:9081
* browser-solidity http://hostip:9080
* local web3 provider url http://hostip:8545
* darkorange block explorer http://128.199.124.120/

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
#### Normal  mode
```
$ docker run -it -p 8545:8545 --rm y12docker/dltdojo-darkorange /start.sh darkorange
```

### References
* ethereum/remix: Ethereum IDE and tools for the web https://github.com/ethereum/remix
