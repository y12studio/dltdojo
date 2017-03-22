const Client = require('bitcoin-core')
var bitcore = require('bitcore-lib')
var Networks = bitcore.Networks
var PrivateKey = bitcore.PrivateKey
const _ = require('lodash')

function randomSendMany (num) {
    // { 'mtYraH42UnT4jXsEMMp7LxwrAswU2fUuHB': 0.01, 'mmXgiR6KAhZCyQ8ndr2BCfEq1wNG2UnyG6': 0.01, 'mjSk1Ny9spzU2fouzYgLqGUD8U41iR35QN': 0.011, 'mgnucj8nYqdrPFh2JfZSB1NmUThUGnmsqe': 0.012 }
  var r = {}
  _.range(num).forEach((e, i, a) => {
    var key = PrivateKey(Networks.testnet)
    var addr = key.toAddress().toString()
    r[addr] = _.random(50, 200) / 10000
  })
  return r
}

function getClient (host, port) {
  return new Client({
    host: host,
    network: 'regtest',
    port: port,
    username: 'user',
    password: 'pass'
  })
}
module.exports = {
  debug: function () {
    // getRandomAddress(10)
  },
  info: function (host, port) {
    var c = getClient(host, port)
    c.getInfo().then(console.log)
  },
  peerinfo: function (host, port) {
    var c = getClient(host, port)
    c.getPeerInfo().then(r=>{
        r.forEach((e,i,a)=>{
            console.log(`${e.addr} ${e.subver}`)
        })
    })
  },
  generate: function (host, port, num) {
    var c = getClient(host, port)
    c.generate(num).then(console.log)
    c.getMempoolInfo().then(console.log)
  },
  maketx: function (host, port, seconds) {
      // client.sendToAddress('mmXgiR6KAhZCyQ8ndr2BCfEq1wNG2UnyG6', 0.1,  'sendtoaddress example', 'Nemo From Example.com');
    // client.sendMany('test1', { mjSk1Ny9spzU2fouzYgLqGUD8U41iR35QN: 0.1, mgnucj8nYqdrPFh2JfZSB1NmUThUGnmsqe: 0.2 }, 6, 'Example Transaction');
    var c = getClient(host, port)

    var destarr = _.times(3, r => randomSendMany(_.random(1500, 2000)))

    // console.log(destarr)

    c.generate(50).then(r => {
      console.log(r)
      var intervalSend = setInterval(() => {
        // c.sendToAddress('mmXgiR6KAhZCyQ8ndr2BCfEq1wNG2UnyG6', 0.01).then(console.log)
        c.sendMany('', _.sample(destarr)).then(console.log)
    }, 1000)

      setTimeout(() => {
        clearTimeout(intervalSend)
        // c.generate(1).then(console.log)
        // c.getMempoolInfo().then(console.log)
      }, 1000 * (seconds + 2))
    })
  }
}
require('make-runnable')
