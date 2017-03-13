const _ = require('lodash')
const fs = require('fs')
const Web3 = require('web3')
const web3 = new Web3()
const eth = web3.eth
const solc = require('solc')
const source = 'pragma solidity ^0.4.6; contract Foo { function f(uint x) returns (uint) { return x * x; } }'
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

module.exports = {
  deployDdjtab: function (solfile, addrFrom, password) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var gas = 4000000
    var source = fs.readFileSync(solfile, 'utf8')
    var output = solc.compile(source, 1) // 1 activates the optimiser
            // console.log(contractName)
    var outputContract = output.contracts[':Ddjtab']
    if (!outputContract) {
      console.log(Object.keys(output.contracts))
      return
    }
            // console.log(outputContract)
    var code = '0x' + outputContract.bytecode
    var abi = JSON.parse(outputContract.interface)
    eth.contract(abi).new(21000000, 'DltDoJo Token AliceBlue', 'DDJTAB', {
      from: addrFrom,
      gas: gas,
      data: code
    })
  },
  deploySol: function (solfile, contractName, addrFrom, password, gas) {
    var source = fs.readFileSync(solfile, 'utf8')
        // console.log(source)
    this.deploy(source, contractName, addrFrom, password, gas)
  },

  deploy: function (src, contractName, addrFrom, password, gas) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var output = solc.compile(src, 1) // 1 activates the optimiser
        // console.log(contractName)
    var outputContract = output.contracts[contractName]
    if (!outputContract) {
      console.log(Object.keys(output.contracts))
      return
    }
        // console.log(outputContract)
    var code = '0x' + outputContract.bytecode
    var abi = JSON.parse(outputContract.interface)
    eth.contract(abi).new({
      from: addrFrom,
      gas: gas,
      data: code
    })
  },

  deployFoo: function (addrFrom, password) {
    var gas = 1000000
    this.deploy(source, ':Foo', addrFrom, password, gas)
  },

  getTxReceipts: function (num = 10) {
    var bnum = eth.blockNumber
    var txreceipts = []
    _.range(bnum - num > 0 ? bnum - num : 0, bnum + 1).forEach(i => {
      eth.getBlock(i).transactions.forEach(tx => {
                // console.log(i)
        var tr = eth.getTransactionReceipt(tx)
        if (tr.contractAddress) {
          txreceipts.push(tr)
        }
      })
    })
    return txreceipts
  },

  getDdjtabInfo: function (solfile, contractAddress, account) {
    var source = fs.readFileSync(solfile, 'utf8')
    var output = solc.compile(source, 1) // 1 activates the optimiser
        // console.log(contractName)
    var outputContract = output.contracts[':Ddjtab']
    if (!outputContract) {
      console.log(Object.keys(output.contracts))
      return
    }
        // console.log(outputContract)
    // var code = '0x' + outputContract.bytecode
    var abi = JSON.parse(outputContract.interface)
    var ddjtab = web3.eth.contract(abi).at(contractAddress)

    var accountAddress = '0x' + account

    ddjtab.totalSupply.call({from: accountAddress}, function (err, totalSupply) {
      if (err) { console.error(err) }
      console.log(totalSupply.toString(10))
    })
    //
    ddjtab.balanceOf.call(accountAddress, function (err, bal) {
      if (err) { console.error(err) }
      console.log('balance is ' + bal)
    })
  },

  getInfo: function () {
    var balances = {}
    var nonces = {}
    eth.accounts.forEach(address => {
      balances[address] = web3.fromWei(eth.getBalance(address), 'ether').toString(10)
      nonces[address] = web3.eth.getTransactionCount(address)
    })
    var r = {
      ethBlockNumber: eth.blockNumber,
      ethCoinbase: eth.coinbase,
      ethAccounts: balances,
      ethNonces: nonces,
      ethSyncing: eth.syncing,
      netPeerCount: web3.net.peerCount,
      ethMining: eth.mining
    }
    return r
  },

  newAccount: function (password) {
    web3.personal.newAccount(password)
  },

  sendEther: function (addrFrom, password, addrTo, ether, nonce) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var txopt = {
      from: addrFrom,
      to: addrTo,
      value: web3.toWei(ether, 'ether')
    }
    if (nonce) {
      txopt.nonce = nonce
    }
    eth.sendTransaction(txopt)
  }
}
require('make-runnable')
