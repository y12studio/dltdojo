#!/usr/bin/env node

const Client = require('bitcoin-core')
var _ = require('lodash')
var Promise = require("bluebird")
var jayson = require('jayson/promise')
const RPCPORT = 18168
const BTCRPCPORT = 18332

var rpcMethods = {
    btcinfo: function(args) {
        return new Promise(function(resolve, reject) {
            var sum = _.reduce(args, function(sum, value) {
                return sum + value;
            }, 0);
            resolve(sum);
        });
    },

    add: function(args) {
        return new Promise(function(resolve, reject) {
            var sum = _.reduce(args, function(sum, value) {
                return sum + value;
            }, 0);
            resolve(sum);
        });
    },

    // example on how to reject
    rejection: function(args) {
        return new Promise(function(resolve, reject) {
            // server.error just returns {code: 501, message: 'not implemented'}
            reject(server.error(501, 'not implemented'));
        });
    }
}

function getBtcClient(hostname) {
    return new Client({
        host: hostname,
        network: 'regtest',
        port: BTCRPCPORT,
        username: 'user',
        password: 'pass'
    })
}

function testRpc() {
    var client = jayson.client.http({
        port: RPCPORT
    });

    var reqs = [
        client.request('add', [1, 2, 3, 4, 5]),
        client.request('rejection', [])
    ];

    Promise.all(reqs).then(function(responses) {
        console.log(responses)
    });
}

function clog(r) {
    console.log(r)
}

function btcMethod(argv) {
    // https://github.com/seegno/bitcoin-core
    var bc = getBtcClient(argv.hostname)
    switch (argv.method) {
        case 'getInfo':
            bc.getInfo().then(clog)
            break;
        case 'getNewAddress':
            bc.getNewAddress().then(clog)
            break;
        case 'getBalance':
            bc.getBalance().then(clog)
            break;
        case 'dumpPrivKey':
            if (argv.address) {
                bc.dumpPrivKey(argv.address).then(clog)
            }
            break;
        case 'generate':
            bc.generate(argv.num ? argv.num : 1).then(clog)
            break;
        case 'sendToAddress':
            if(argv.to && argv.btc){
                bc.sendToAddress(argv.to, argv.btc).then(clog)
            }
            break;
        default:
            console.log(argv)
    }
}

function main() {
    require('yargs')
        .command({
            command: 'start',
            desc: 'start rpc server',
            handler: (argv) => {
                jayson.server(rpcMethods).http().listen(RPCPORT);
            }
        })
        .command({
            command: 'rpctest',
            desc: 'test rpc',
            handler: (argv) => {
                testRpc()
            }
        })
        .command({
            command: 'btc <hostname> <method>',
            desc: 'bitcond getinfo',
            builder: (yargs) => {
                yargs.string('hostname')
            },
            handler: btcMethod
        })
        .argv
}

main()
