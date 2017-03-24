const _ = require('lodash')
const fs = require('fs')
const ipfs = require('ipfs-js')
const Web3 = require('web3')
const web3 = new Web3()
const eth = web3.eth
const solc = require('solc')
const jayson = require('jayson/promise')

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

function getRpcClient () {
  return jayson.client.http('http://localhost:8545')
}

module.exports = {
  deploy: function () {
    var addrFrom = eth.accounts[0]
    var password = 'pass'
    var src = fs.readFileSync('redfoo.sol', 'utf8')
    var contractName = ':RedFoo'
    var gas = 300000
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
    var cb = function (err, myContract) {
      if (!err) {
                // NOTE: The callback will fire twice!
        if (!myContract.address) {
          console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
        } else {
          console.log(myContract.address) // the contract address
          fs.writeFileSync('ethcontract.json', JSON.stringify(myContract), 'utf8')
        }
      }
    }
    eth.contract(abi).new({
      from: addrFrom,
      gas: gas,
      data: code
    }, cb)
  },

  deployInfo: function () {
    var addrFrom = eth.accounts[0]
    var contract = JSON.parse(fs.readFileSync('ethcontract.json', 'utf8'))
        // console.log(contract)
        // console.log(contract.abi)
    var redfoo = web3.eth.contract(contract.abi).at(contract.address)
        // console.log(redfoo)
    redfoo.balanceOf.call(addrFrom, function (err, bal) {
      if (err) {
        console.error(err)
      }
      console.log('balance is ' + bal)
    })
  },

  sendRedFoo: function (addrTo, amount, hashHex) {
        // 0xaaf98a65dabd34d69769a377016a38b800cc72d6
    var addrFrom = eth.accounts[0]
    var password = 'pass'
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var gas = 800000
    var contract = JSON.parse(fs.readFileSync('ethcontract.json', 'utf8'))
    var redfoo = web3.eth.contract(contract.abi).at(contract.address)
    redfoo.sendFoo.sendTransaction('0x' + addrTo, amount, '0x' + hashHex, {
      from: addrFrom,
      gas: gas
    }, (err, result) => console.log(err, result))
  },

  info: function () {
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
    console.log(r)
  },

  newAccount: function (password) {
    web3.personal.newAccount(password)
  },

  init: function () {
    web3.personal.newAccount('pass')
    getRpcClient().request('miner_start', [1]).then(console.log)
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
