#!/usr/bin/env node

const Client = require('bitcoin-core')
var _ = require('lodash')
var Promise = require("bluebird")
var jayson = require('jayson/promise')
var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()
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

function recoverKeyFromAddress(datadir, address, password) {
    // var datadir = "/root/.ethereum/devchain"
    var keyObject = keythereum.importFromFile(address, datadir)
    var privateKey = keythereum.recover(password, keyObject)
    return {
        ko: keyObject,
        key: privateKey,
        keyhex: privateKey.toString('hex')
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

function getEthRpcUrl(hostname) {
    return `http://${hostname}:8545`
}

function getEthClient(hostname) {
    return jayson.client.http(getEthRpcUrl(hostname));
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
            if (argv.to && argv.btc) {
                bc.sendToAddress(argv.to, argv.btc).then(clog)
            }
            break;
        default:
            console.log(argv)
    }
}

function ethMethod(argv) {
    web3.setProvider(new web3.providers.HttpProvider(getEthRpcUrl(argv.hostname)))
    var accounts = web3.eth.accounts;
    switch (argv.method) {
        case 'info':
            var r = {
                hostname: argv.hostname,
                ethBlockNumber: web3.eth.blockNumber,
                ethCoinbase: accounts.length > 0 ? web3.eth.coinbase : null,
                ethAccounts: accounts.length,
                ethSyncing: web3.eth.syncing,
                netPeerCount: web3.net.peerCount,
                ethBalance: accounts.length > 0 ? web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), 'ether').toString(10) : 0,
                ethMining: web3.eth.mining
            }
            clog(r)
            break;
        case 'account':
            if (argv.new && argv.password) {
                clog(web3.personal.newAccount(argv.password))
            }
            break;
        case 'send':
            if (argv.to && argv.eth && argv.password) {
                var address = argv.account ? argv.account : accounts[0]
                var password = argv.password
                var unlock = web3.personal.unlockAccount(address, password)
                if (unlock) {
                    var r = web3.eth.sendTransaction({
                        from: address,
                        to: argv.to,
                        value: web3.toWei(argv.eth, "ether")
                    })
                    clog(r)
                }
            }
            break;
        case 'miner':
            clientRpc = getEthClient(argv.hostname)
            if (argv.start) {
                clientRpc.request('miner_start', [1]).then(clog)
            } else if (argv.stop) {
                clientRpc.request('miner_stop', []).then(clog)
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
            command: 'btc <hostname> <method>',
            desc: 'bitcond getinfo',
            builder: (yargs) => {
                yargs.string('to')
            },
            handler: btcMethod
        })
        .command({
            command: 'eth <hostname> <method>',
            desc: 'geth getinfo',
            builder: (yargs) => {
                yargs.string('to').string('address').string('account')
            },
            handler: ethMethod
        })
        .argv
}

main()
