#!/usr/bin/env node

const chalk = require('chalk')
const log = console.log
const DBTC = require('./lib/dltbtc')
const DDOCKER = require('./lib/dltdocker')
const DIPFS = require('./lib/dltipfs')
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
        client.request('add', [1, 2, 3, 4, 5])
        // client.request('rejection', [])
    ];
    Promise.all(reqs).then(function(responses) {
        console.log(responses)
    });
}

function clog(r) {
    console.log(r)
}

function startServer(argv) {
    // jayson.server(rpcMethods).http().listen(RPCPORT);
    var jsonParser = require('body-parser').json;
    var jserver = jayson.server(rpcMethods)
    var express = require('express')
    var serveStatic = require('serve-static')
    var app = express()
    app.use(serveStatic('public/', {
        'index': ['index.html']
    }))
    app.use(jsonParser())
    app.use(jserver.middleware())
    showServerMsg(argv.pubhost||'host_ip')
    app.listen(RPCPORT)
}

function showServerMsg(pubhost) {
    log('')
    log(chalk.red('      Welcome to DLTDOJO World.'))
    log(chalk.green('     _____  _   _______ _____   ____       _  ____  '))
    log(chalk.green('    |  __ \\| | |__   __|  __ \\ / __ \\     | |/ __ \\ '))
    log(chalk.green('    | |  | | |    | |  | |  | | |  | |    | | |  | |'))
    log(chalk.green('    | |  | | |    | |  | |  | | |  | |_   | | |  | |'))
    log(chalk.green('    | |__| | |____| |  | |__| | |__| | |__| | |__| |'))
    log(chalk.green('    |_____/|______|_|  |_____/ \\____/ \\____/ \\____/ '))
    log('');
    log(chalk.blue('   Project:  https://github.com/y12studio/dltdojo'))
    log('');
    log(chalk.yellow(`   Server:  http://${pubhost}:18168/`))
    log('')
}


function main() {
    require('yargs')
        .command({
            command: 'start',
            desc: 'start file/rpc server',
            handler: startServer
        })
        .command({
            command: 'rpc',
            desc: 'rpc client',
            handler: (yargs) => {
                testRpc()
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
        .command({
            command: 'ipfs <method>',
            desc: 'ipfs',
            handler: DIPFS.Args
        })
        .command({
            command: 'service <serviceName>',
            desc: 'docker service',
            builder: (yargs) => {
                //yargs.demandOption(['network'])
            },
            handler: DDOCKER.ServiceArgs
        })
        .command({
            command: 'docker <cmd1> [cmd2] [cmd3]',
            desc: 'docker',
            handler: DDOCKER.Args
        })
        .argv
}

main()
