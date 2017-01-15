#!/usr/bin/env node

var bitcoin = require('bitcoin-promise')
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


function bitcoinRequest(host, port) {
    var client = new bitcoin.Client({
        host: host,
        port: port,
        user: 'user',
        pass: 'pass',
        timeout: 30000
    });
    // get a new address and return details about it
    client.getNewAddress()
        .then(function(addr) {
            return client.validateAddress(addr);
        })
        .then(function(addrInfo) {
            console.log(addrInfo);
        })
        .catch(function(err) {
            console.log(err);
        });
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
            command: 'btc getNewAddress <hostname>',
            desc: 'bitcond getinfo',
            builder: (yargs) => {
                yargs.string('hostname').default('hostname', '127.0.0.1')
            },
            handler: (argv) => {
                bitcoinRequest(argv.hostname, BTCRPCPORT)
            }
        })
        .argv
}

main()
