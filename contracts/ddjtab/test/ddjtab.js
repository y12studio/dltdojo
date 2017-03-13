var Ddjtab = artifacts.require('./Ddjtab.sol')
var SolidityCoder = require('web3/lib/solidity/coder.js')

contract('Ddjtab', function (accounts) {
  it('deploy', function () {
    return Ddjtab.deployed().then(function (instance) {
      assert.isOk(instance)
      return instance.balanceOf(accounts[0])
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 21000000, "21000000 wasn't in the first account")
    })
  })

  it('should send coin correctly', function () {
    var ta
        // Get initial balances of first and second account.
    var account_one = accounts[0]
    var account_two = accounts[1]

    var account_one_starting_balance
    var account_two_starting_balance
    var account_one_ending_balance
    var account_two_ending_balance

    var amount = 199

    return Ddjtab.deployed().then(function (instance) {
      assert.isOk(instance)
      ta = instance
      return ta.balanceOf(account_one)
    }).then(function (balance) {
      account_one_starting_balance = balance.toNumber()
      return ta.balanceOf(account_two)
    }).then(function (balance) {
      account_two_starting_balance = balance.toNumber()
      return ta.transfer(account_two, amount)
    }).then(function () {
      return ta.balanceOf(account_one)
    }).then(function (balance) {
      account_one_ending_balance = balance.toNumber()
      return ta.balanceOf(account_two)
    }).then(function (balance) {
      account_two_ending_balance = balance.toNumber()

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender")
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver")
    })
  })

  it('should check Transfer Events', function (done) {
    var ta
    Ddjtab.deployed().then(function (instance) {
      ta = instance
      var event = ta.allEvents()
      var amount = 10
      event.watch(function (error, result) {
        if (error) {
          console.err(error)
        } else {
          console.log('[event] ', result)
                    // now we'll check that the events are correct
          assert.equal(result.event, 'Transfer')
          assert.equal(result.args._from, accounts[0])
          assert.equal(result.args._to, accounts[1])
          assert.equal(result.args._value.valueOf(), amount)
          event.stopWatching()
          var tr = web3.eth.getTransactionReceipt(result.transactionHash)
                    // console.log(tr)
          var log1 = tr.logs[0]
                    // console.log(log1.topics)
                    // topics[0] is the hash of the signature of the event.
                    // sha3("Transfer(address indexed _from, address indexed _to, uint256 _value)")
          assert.equal(web3.toDecimal(log1.topics[1]), web3.toDecimal(accounts[0]))
          assert.equal(web3.toDecimal(log1.topics[2]), web3.toDecimal(accounts[1]))
                    // console.log(web3.toDecimal(log1.data), amount)
          done()
        }
      })
      ta.transfer(accounts[1], amount)
    })
  })

  it('should check sendAliceBlue Events', function () {
        // Since Truffle v3 you get the logs in the callback result.
        // https://github.com/trufflesuite/truffle-contract#processing-transaction-results
    var ta
    var amount = 1
    var certid = 9
    var ipfsHash = '0x4afeb08a2bf63b8e42f4b67bd92dbf7e4a23f991c7acf0236a9d1c04462db278'
    var result = {}
    var balance0_starting = 0
    var balance0_ending = 0
    var balance1_starting = 0
    var balance1_ending = 0
    return Ddjtab.deployed().then(instance => {
      ta = instance
      return ta.balanceOf(accounts[0])
    }).then(r => {
      balance0_starting = r.toNumber()
      return ta.balanceOf(accounts[1])
    }).then(r => {
      balance1_starting = r.toNumber()
      return ta.sendAliceBlue(accounts[1], certid, amount, ipfsHash)
    }).then(r => {
      result = r
      return ta.balanceOf(accounts[0])
    }).then(r => {
      balance0_ending = r.toNumber()
      return ta.balanceOf(accounts[1])
    }).then(r => {
      balance1_ending = r.toNumber()
            // result.tx => transaction hash, string
            // result.receipt => receipt object
            // console.log(result.receipt)
      var log1 = result.receipt.logs[0]
      console.log(log1)
            // console.log(log1.topics[1])
            // console.log(web3.toDecimal(log1.topics[1]))

            // topics[0] is the hash of the signature of the event.
            // sha3("Transfer(address indexed _from, address indexed _to, uint256 _value)")
      var addrFrom = SolidityCoder.decodeParams(['address'], log1.topics[1].replace('0x', ''))
      var addrTo = SolidityCoder.decodeParams(['address'], log1.topics[2].replace('0x', ''))
      assert.equal(addrFrom, accounts[0])
      assert.equal(addrTo, accounts[1])
      assert.equal(web3.toDecimal(log1.topics[3]), certid)
      assert.equal(balance0_ending, balance0_starting + amount)
      assert.equal(balance1_ending, balance1_starting + amount)
            // console.log(web3.toDecimal(log1.data), amount)
            // uint256 _value, bytes _ipfsHash , uint _timestamp
      var data = SolidityCoder.decodeParams(['uint256', 'bytes', 'uint'], log1.data.replace('0x', ''))
      var decodeAmount = data[0].toNumber()
      var decodeIpfsHash = data[1]
      var decodeTime = data[2].toNumber()
      assert.equal(decodeAmount, amount)
      assert.equal(decodeIpfsHash, ipfsHash)
      assert.isTrue(decodeTime < Date.now())
      console.log(decodeAmount, decodeIpfsHash, decodeTime, Date.now())
    })
  })
})
