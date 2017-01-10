var solc = require('solc')

function ContractUtils() {
}

ContractUtils.SOLCOIN = `pragma solidity ^0.4.0;

contract Coin {
    // The keyword "public" makes those variables
    // readable from outside.
    address public minter;
    mapping (address => uint) public balances;

    // Events allow light clients to react on
    // changes efficiently.
    event Sent(address from, address to, uint amount);

    // This is the constructor whose code is
    // run only when the contract is created.
    function Coin() {
        minter = msg.sender;
    }

    function mint(address receiver, uint amount) {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }
}`

ContractUtils.GetAbiFromSrc = function(source, nameContract) {
    // https://github.com/ethereum/solc-js
    // var output = solc.compile(input, 1); // 1 activates the optimiser
    var compiledContract = solc.compile(source, 1);
    var abi = compiledContract.contracts[nameContract].interface;
    var bytecode = compiledContract.contracts[nameContract].bytecode;
    return {abi:JSON.parse(abi), data: '0x'+bytecode}
}
ContractUtils.GetCoinAbi = function(){
    return ContractUtils.GetAbiFromSrc(ContractUtils.SOLCOIN,'Coin')
}
module.exports = ContractUtils
