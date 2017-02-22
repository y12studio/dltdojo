// https://github.com/seegno/bitcoin-core
const Client = require('bitcoin-core')
const _ = require('lodash')

function Dltdojo() {}

Dltdojo.getClient = function(hostname) {
    return new Client({
        host: hostname,
        network: 'regtest',
        port: 18332,
        username: 'user',
        password: 'pass'
    })
}

// [  dltdojoEvent ] {"oid":"illuminance","iid":"1","rid":"sensorValue","data":40}
// [  dltdojoEvent ] {"oid":"presence","iid":"0","rid":"dInState","data":1}
// [  dltdojoEvent ] {"oid":"presence","iid":"0","rid":"dInState","data":0}
// [  dltdojoEvent ] {"oid":"dOut","iid":"0","rid":"dOutState","data":1}
// [  dltdojoEvent ] {"oid":"dOut","iid":"0","rid":"dOutState","data":0}

Dltdojo.Event = function(data) {
    console.log('[  dltdojoEvent ] ' + JSON.stringify(data));
    if(!data) return
    if (data.oid == 'presence' && data.data == 1) {
        var bc = Dltdojo.getClient('localhost')
        var target = {
            ms7X9LdUS4BYw3eLhzQiP7GEZVfFigNYdn: _.random(50, 150) / 100,
            mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG: _.random(10, 50) / 100,
            mo5Fp2mBywktMQ7QKmnRU7M1uesW5zaRtb: 0.3
        }
        console.log('[  dltdojoBitcoin ] sendMany ' + JSON.stringify(target));
        bc.sendMany('', target).then((r)=>{
            bc.generate(1)
        })
    } else if(data.oid == 'dOut' && data.data ==1){
        var bc = Dltdojo.getClient('localhost')
        var target = {
            mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG: 0.1,
            mo5Fp2mBywktMQ7QKmnRU7M1uesW5zaRtb: 0.1
        }
        console.log('[  dltdojoBitcoin ] sendMany ' + JSON.stringify(target));
        bc.sendMany('', target).then((r)=>{
            bc.generate(1)
        })
    }
}

module.exports = Dltdojo
