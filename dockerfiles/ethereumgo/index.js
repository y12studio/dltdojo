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

function sendTransaction(accountAddress, accountPassword, toAddress, ether) {
    var unlock = web3.personal.unlockAccount(accountAddress, accountPassword, 300)
    var sendtx = web3.eth.sendTransaction({
        from: accountAddress,
        to: toAddress,
        value: web3.toWei(ether, "ether")
    })
    return {
        unlock: unlock,
        sendtx: sendtx
    }
}

function getInfo(debug) {
    var coinbase = web3.eth.coinbase;
    var balance = web3.eth.getBalance(coinbase)
        // var value = web3.fromWei('21000000000000', 'finney');
        // https://github.com/ethereum/web3.js/issues/388
        // https://github.com/ethereum/web3.js/blob/master/lib/web3/methods/personal.js
    var r = {
        ethBlockNumber: web3.eth.blockNumber,
        ethGetBalance: balance,
        ethCoinbase: coinbase,
        ethSyncing : web3.eth.syncing,
        netPeerCount: web3.net.peerCount,
        ethDefaultAccount: web3.eth.defaultAccount,
        balanceEther: web3.fromWei(balance, 'ether')
    }
    if (debug) {
        r.ethMining = web3.eth.mining
        r.ethGetBlockPending = web3.eth.getBlock("pending")
    }
    return r
}

function recoverKeyFromAddress(datadir, address, password) {
    // --datadir=~/.ethereum/devchain
    // var datadir = "/root/.ethereum/devchain"
    var keyObject = keythereum.importFromFile(address, datadir)
    var privateKey = keythereum.recover(password, keyObject)
    return {
        ko: keyObject,
        key: privateKey,
        keyhex: privateKey.toString('hex')
    }
}

function cout(obj) {
    console.log(_.isString(obj) ? obj : JSON.stringify(obj, null, ' '))
}

require('yargs')
    .command({
        command: 'rpc <method> [params..]',
        desc: 'json rpc interface',
        handler: (argv) => {
            //rpcPost(argv.method, argv.params)
            clientRpc.request(argv.method, argv.params, function(err, resp) {
                err ? console.log(JSON.stringify(err)) : console.log(JSON.stringify(resp))
            });
        }
    })
    .command({
        command: 'info',
        desc: 'info',
        handler: (argv) => {
            cout(getInfo(argv.debug))
        }
    })
    .command({
        command: 'keyrecover <address> <password> [datadir]',
        desc: 'keyrecover',
        builder: (yargs) => yargs.default('datadir', '/root/.ethereum/devchain'),
        handler: (argv) => {
            var r = recoverKeyFromAddress(argv.datadir, argv.address, argv.password)
            argv.debug ? cout(r) : console.log(r.keyhex)
        }
    })
    .command({
        command: 'sendeth <accountAddress> <accountPassword> <toAddress> <ether>',
        desc: 'sendeth',
        handler: (argv) => {
            var r = sendTransaction(argv.accountAddress,argv.accountPassword, argv.toAddress, argv.ether)
            cout(r)
        }
    })
    .command({
        command: 'tx <hash>',
        desc: 'tx',
        handler: (argv) => {
            var transaction = web3.eth.getTransaction(argv.hash)
            if(transaction) {
                transaction.ether = web3.fromWei(r.value, 'ether')
            }
            cout(r)
        }
    })
    .demandCommand(1)
    .help()
    .alias('h', 'help')
    .argv
