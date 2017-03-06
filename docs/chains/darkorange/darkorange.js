const _ = require('lodash')
const Web3 = require('web3')
const web3 = new Web3()
const eth = web3.eth;
const solc = require('solc')
const source = "pragma solidity ^0.4.6; contract Foo { function f(uint x) returns (uint) { return x * x; } }";
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

module.exports = {
    deployFoo: function(addrFrom, password) {
        if (!web3.personal.unlockAccount(addrFrom, password)) {
            return
        }
        var output = solc.compile(source, 1); // 1 activates the optimiser
        var outputContract = output.contracts[':Foo']
        // console.log(outputContract)
        var code = '0x'+outputContract.bytecode
        var abi = JSON.parse(outputContract.interface)
        var FooContract = eth.contract(abi)
        var foo = FooContract.new({from: addrFrom, gas: 1000000, data: code})
    },

    getTxReceipts: function(num=10){
        var bnum = eth.blockNumber
        var txreceipts = []
        _.range(bnum-num > 0 ? bnum - num : 0, bnum + 1).forEach(i=>{
            eth.getBlock(i).transactions.forEach(tx=>{
                // console.log(i)
                var tr = eth.getTransactionReceipt(tx)
                if(tr.contractAddress){
                    txreceipts.push(tr)
                }
            })
        })
        return txreceipts
    },

    getInfo: function() {
        var balances = {}
        eth.accounts.forEach(address => {
            balances[address] = web3.fromWei(eth.getBalance(address), 'ether').toString(10)
        })
        var r = {
            ethBlockNumber: eth.blockNumber,
            ethCoinbase: eth.coinbase,
            ethAccounts: balances,
            ethSyncing: eth.syncing,
            netPeerCount: web3.net.peerCount,
            ethMining: eth.mining
        }
        return r
    },

    newAccount: function(password) {
        web3.personal.newAccount(password)
    },

    sendEther: function(addrFrom, password, addrTo, ether) {
        if (!web3.personal.unlockAccount(addrFrom, password)) {
            return
        }
        eth.sendTransaction({
            from: addrFrom,
            to: addrTo,
            value: web3.toWei(ether, "ether")
        })
    }
};
require('make-runnable');
