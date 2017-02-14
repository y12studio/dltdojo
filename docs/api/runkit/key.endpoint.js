// 
// https://runkit.com/58a270fb3928da0014b26990/58a2718de1af40001418a714
//
var bitcoreLib = require("bitcore-lib")
var bitcoinJs = require('bitcoinjs-lib')
var ethutil = require('ethereumjs-util')

function getKeys() {
    var aliceKey = new bitcoreLib.PrivateKey()
    console.log(aliceKey)
    var bobKey = bitcoinJs.ECPair.makeRandom()
    console.log(bobKey)
    var ethKey = ethutil.sha3('hello eth world')
    console.log(ethKey)
    var ethAddr = ethutil.privateToAddress(ethKey).toString('hex')
    console.log(ethAddr)
    return {
        alice: {
            key: aliceKey.toWIF(),
            address: aliceKey.toAddress().toString()
        },
        bob: {
            key: bobKey.toWIF(),
            address: bobKey.getAddress().toString()
        },
        eth: {
            key: ethKey.toString('hex'),
            address: ethAddr
        }
    }
}
var keys = getKeys()
console.log(keys)
exports.endpoint = function(request, response) {
    // https://runkit.io/58a270fb3928da0014b26990/58a2718de1af40001418a714/branches/master
    response.end(JSON.stringify(keys));
}
