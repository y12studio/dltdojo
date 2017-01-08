var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()
var _ = require('lodash')
var request = require('request')
const RPCURL = 'http://localhost:8545'
var jayson = require('jayson')
var clientRpc = jayson.client.http(RPCURL);

web3.setProvider(new web3.providers.HttpProvider(RPCURL))

var rpcId = 0

function rpcPost(method, params) {
    var requestData = {
        jsonrpc: "2.0",
        id: rpcId++,
        method: method,
        params: params
    }
    request({
        url: RPCURL,
        method: 'POST',
        json: requestData
    }, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    });
}

function getInfo() {
    var coinbase = web3.eth.coinbase;
    var balance = web3.eth.getBalance(coinbase)
        // var value = web3.fromWei('21000000000000', 'finney');
        // https://github.com/ethereum/web3.js/issues/388
        // https://github.com/ethereum/web3.js/blob/master/lib/web3/methods/personal.js
    return {
        netPeerCount: web3.net.peerCount,
        ethGetBalance: balance,
        ethCoinbase: coinbase,
        ethBlockNumber: web3.eth.blockNumber,
        ethMining: web3.eth.mining,
        ethDefaultAccount: web3.eth.defaultAccount,
        ether: web3.fromWei(balance, 'ether')
    }
}

function recoverKeyFromAddress(datadir, address, password) {
    // --datadir=~/.ethereum/devchain
    // var datadir = "/root/.ethereum/devchain"
    var keyObject = keythereum.importFromFile(address, datadir)
    var privateKey = keythereum.recover(password, keyObject)
    return {
        ko: keyObject,
        key: privateKey
    }
}

function cout(obj) {
    console.log(_.isString(obj) ? obj : JSON.stringify(obj, null, ' '))
}

function logResponse(err, response) {
    if (err) {
        console.log('err: ', JSON.stringify(err))
    } else {
        console.log('response: ', JSON.stringify(response))
    }
}

require('yargs')
    .command({
        command: 'rpc <method> [params..]',
        desc: 'json rpc interface',
        handler: (argv) => {
            //rpcPost(argv.method, argv.params)
            clientRpc.request(argv.method, argv.params, logResponse);
        }
    })
    .command({
        command: 'info',
        desc: 'info',
        handler: (argv) => {
            cout(getInfo())
        }
    })
    .demandCommand(1)
    .help()
    .alias('h', 'help')
    .argv
