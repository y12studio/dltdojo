#!/usr/bin/env node

const DBTC = require('./lib/dltbtc')
const DETH = require('./lib/dlteth')
const DU = require('./lib/dltutils')
const DBUILDER = require('./lib/dltbuilder')
var _ = require('lodash')
var Promise = require("bluebird")
var jayson = require('jayson/promise')
const RPCPORT = 18168

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
            command: 'btc <hostname> <method>',
            desc: 'bitcond getinfo',
            builder: (yargs) => {
                yargs.string('to')
            },
            handler: DBTC.BtcMethod
        })
        .command({
            command: 'eth <hostname> <method>',
            desc: 'geth getinfo',
            builder: (yargs) => {
                yargs.string('to').string('address').string('account').string('contract')
            },
            handler: DETH.EthMethod
        })
        .command({
            command: 'build',
            desc: 'build dojo',
            builder: (yargs) => {
                yargs.default('path', '/tmp')
                    .default('btcimg', 'y12docker/dltdojo-bitcoin')
                    .default('fabimg', 'y12docker/dltdojo-fabgopeer:dev')
                    .default('ethimg', 'y12docker/dltdojo-ethgo')
            },
            handler: DBUILDER.BuildMethod
        })
        .argv
}

main()
