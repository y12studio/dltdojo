var keythereum = require("keythereum")
var Web3 = require('web3')
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase)
// var value = web3.fromWei('21000000000000', 'finney');
// https://github.com/ethereum/web3.js/issues/388
// https://github.com/ethereum/web3.js/blob/master/lib/web3/methods/personal.js

var r = {
    ethGetBalance:balance,
    ethCoinbase:coinbase,
    ethBlockNumber : web3.eth.blockNumber,
    ethMining:web3.eth.mining,
    ethDefaultAccount: web3.eth.defaultAccount,
    ether:web3.fromWei(balance,'ether')
}
console.log(JSON.stringify(r, null, ' '))
