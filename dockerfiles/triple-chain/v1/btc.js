const Client = require('bitcoin-core')

function getClient() {
    return new Client({
        host: 'localhost',
        network: 'regtest',
        port: 18332,
        username: 'user',
        password: 'pass'
    })
}
module.exports = {
    info: function() {
        var c = getClient()
        c.getInfo().then(console.log)
    },
    init: function() {
        var c = getClient()
        c.generate(101).then(r => {
            c.getInfo().then(console.log)
        })
        // c.getMempoolInfo().then(console.log)
    },
    generate: function(num) {
        var c = getClient()
        c.generate(num).then(console.log)
        c.getMempoolInfo().then(console.log)
    },
    sendBtc: function(num) {
        var c = getClient()
        // console.log(destarr)
        c.sendToAddress('mmXgiR6KAhZCyQ8ndr2BCfEq1wNG2UnyG6', num).then(r => {
            c.generate(num).then(console.log)
        })
    }
}
require('make-runnable')
