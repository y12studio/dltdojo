const _ = require('lodash')
const fs = require('fs')
const ipfs = require('ipfs-js')
const Web3 = require('web3')
const web3 = new Web3()
const eth = web3.eth
const solc = require('solc')
const fetch = require('node-fetch')
const source = 'pragma solidity ^0.4.6; contract Foo { function f(uint x) returns (uint) { return x * x; } }'
// https://github.com/oraclekit/smart_oracle/tree/master/lib/assets/contracts
const oracleSol = `pragma solidity ^0.4.6;
contract Owned {
  address public owner;

  event UpdatedOwner(address to, address from);

  modifier onlyOwner {
    if (msg.sender == owner) _;
  }

  function Owned() {
    owner = msg.sender;
  }

  function setOwner(address newOwner) onlyOwner {
    if (newOwner != address(0)) {
      address oldOwner = owner;
      owner = newOwner;
      UpdatedOwner(newOwner, oldOwner);
    }
  }
}
contract Uint256Oracle is Owned {
  uint256 public current;
  uint public updatedAt;
  uint requestCounter;

  event Updated(uint256 current);

  function Uint256Oracle() {
  }

  function update(uint256 newCurrent) onlyOwner {
    current = newCurrent;
    updatedAt = block.number;
    Updated(current);
  }
}
`
const oracleAbi=`[{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"updatedAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newCurrent","type":"uint256"}],"name":"update","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"current","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"current","type":"uint256"}],"name":"Updated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"from","type":"address"}],"name":"UpdatedOwner","type":"event"}]`

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

function getDdjtabCode (solfile) {
  var source = fs.readFileSync(solfile, 'utf8')
  var output = solc.compile(source, 1) // 1 activates the optimiser
    // console.log(contractName)
  var outputContract = output.contracts[':Ddjtab']
  if (!outputContract) {
    console.log(Object.keys(output.contracts))
    return
  }
    // console.log(outputContract)
  return {
    code: '0x' + outputContract.bytecode,
    abi: JSON.parse(outputContract.interface)
  }
}

function getOracleCode () {
  var output = solc.compile(oracleSol, 1) // 1 activates the optimiser
    // console.log(contractName)
  var outputContract = output.contracts[':Uint256Oracle']
  if (!outputContract) {
    console.log(Object.keys(output.contracts))
    return
  }
    // console.log(outputContract)
  //console.log(outputContract.interface)
  return {
    code: '0x' + outputContract.bytecode,
    abi: JSON.parse(outputContract.interface)
  }
}

module.exports = {
  deployDdjtab: function (solfile, addrFrom, password) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var gas = 2000000
    var ddjtabcode = getDdjtabCode(solfile)
    var code = ddjtabcode.code
    var abi = ddjtabcode.abi
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

  deployOracle: function (addrFrom, password) {
    var gas = 2000000
    this.deploy(oracleSol, ':Uint256Oracle', addrFrom, password, gas)
  },

  updateOracle: function (contractAddress, addrFrom, password, value) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var gas = 1000000
    var abi = JSON.parse(oracleAbi)
    var oc = web3.eth.contract(abi).at(contractAddress)
    oc.update.sendTransaction(value, {from: '0x' + addrFrom, gas: gas})
  },

  updateOracleBtcTwd: function (contractAddress, addrFrom, password) {
    var root = this
    fetch('https://blockchain.info/ticker?cors=true').then(r => {
      return r.json()
    }).then(res => {
      root.updateOracle(contractAddress, addrFrom, password, Math.round(res.TWD.last))
      console.log(res.TWD)
    })
  },

  getOracleValue: function (contractAddress, account) {
    var abi = JSON.parse(oracleAbi)
    var oc = web3.eth.contract(abi).at(contractAddress)

    var accountAddress = '0x' + account

    oc.current.call({
      from: accountAddress
    }, function (err, current) {
      if (err) {
        console.error(err)
      }
      console.log('oracle.current is ' + current.toString(10))
    })
    // updatedAt
    oc.updatedAt.call({
      from: accountAddress
    }, function (err, res) {
      if (err) {
        console.error(err)
      }
      console.log('oracle.updateAt blocknum is ' + res.toString(10))
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

  transferDdjtab: function (solfile, contractAddress, addrFrom, password, addrTo, amount) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var gas = 1000000
    var ddjtabcode = getDdjtabCode(solfile)
    var abi = ddjtabcode.abi
    var ddjtab = web3.eth.contract(abi).at(contractAddress)
    ddjtab.transfer.sendTransaction('0x' + addrTo, amount, {from: '0x' + addrFrom, gas: gas})
  },

  sendDdjtab: function (solfile, contractAddress, addrFrom, password, addrTo, amount, certid, ipfsHashB58) {
    if (!web3.personal.unlockAccount(addrFrom, password)) {
      return
    }
    var gas = 1000000
    var ddjtabcode = getDdjtabCode(solfile)
    var abi = ddjtabcode.abi
    var ddjtab = web3.eth.contract(abi).at(contractAddress)
    var ipfsHashHex = '0x' + ipfs.utils.base58ToHex(ipfsHashB58)
    console.log(ipfsHashB58, ipfsHashHex)
    // function sendAliceBlue(address _to, uint16 _certid , uint256 _value, bytes _ipfsHash) returns (bool success) {
    // event SendAliceBlue(address indexed _from, address indexed _to, uint16 indexed _certid , uint256 _value, bytes _ipfsHash , uint _timestamp);
    ddjtab.sendAliceBlue.sendTransaction('0x' + addrTo, certid, amount, ipfsHashHex, {from: '0x' + addrFrom, gas: gas})
  },

  getDdjtabInfo: function (solfile, contractAddress, account) {
    var ddjtabcode = getDdjtabCode(solfile)
    var abi = ddjtabcode.abi
    var ddjtab = web3.eth.contract(abi).at(contractAddress)

    var accountAddress = '0x' + account

    ddjtab.totalSupply.call({
      from: accountAddress
    }, function (err, totalSupply) {
      if (err) {
        console.error(err)
      }
      console.log('totalSupply is ' + totalSupply.toString(10))
    })
        //
    ddjtab.balanceOf.call(accountAddress, function (err, bal) {
      if (err) {
        console.error(err)
      }
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
