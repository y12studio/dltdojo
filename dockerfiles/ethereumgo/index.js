var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()
var CU = require('./contractutils')
var _ = require('lodash')
var Promise = require("bluebird")
var request = require('request')
const RPCURL = 'http://localhost:8545'
    //var jayson = require('jayson')
var jayson = require('jayson/promise')
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
    var unlock = web3.personal.unlockAccount(accountAddress, accountPassword)
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
        ethSyncing: web3.eth.syncing,
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

function createContract(accountAddress, accountPassword, resultAbi) {
    // Creates a contract object for a solidity contract, which can be used to initiate contracts on an address.
    var gasEstimate = web3.eth.estimateGas({
        data: resultAbi.data
    });
    var web3Contract = web3.eth.contract(resultAbi.abi);
    var unlock = web3.personal.unlockAccount(accountAddress, accountPassword)
        // All binary data is serialised in hexadecimal form. Hex strings always have a hex prefix 0x.
    var instanceContract = web3Contract.new({
        from: accountAddress,
        data: resultAbi.data,
        gas: gasEstimate
    })
    return {
        txhash: instanceContract.transactionHash
    }
}


function createToken(accountAddress, accountPassword) {
    // Creates a contract object for a solidity contract, which can be used to initiate contracts on an address.

    return createContract(accountAddress, accountPassword, CU.GetHahaCoinAbi())
}

function cout(obj) {
    console.log(_.isString(obj) ? obj : JSON.stringify(obj, null, ' '))
}

require('yargs')
    .command({
        command: 'rpcreq <method> [params..]',
        desc: 'json rpc by request',
        handler: (argv) => {
            rpcPost(argv.method, argv.params)
        }
    })
    .command({
        command: 'rpc <method> [params..]',
        desc: 'json rpc interface',
        handler: (argv) => {
            //rpcPost(argv.method, argv.params)
            clientRpc.request(argv.method, argv.params).then((resp) => cout(resp)).catch((err) =>
                cout(err))
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
            var r = sendTransaction(argv.accountAddress, argv.accountPassword, argv.toAddress, argv.ether)
            cout(r)
        }
    })
    .command({
        command: 'tx <hash>',
        desc: 'tx', // issue hash parse to number Allow defining positional argument · Issue #541 · yargs/yargs  https://github.com/yargs/yargs/issues/541
        builder: (yargs) => yargs.default('receipt', false),
        handler: (argv) => {
            //console.log(argv)
            var hashstr = '0x' + argv.hash
            var r = {}
            if (argv.receipt) {
                r = web3.eth.getTransactionReceipt(hashstr)
            } else {
                var tx = web3.eth.getTransaction(hashstr)
                if (tx.value) {
                    tx.ether = web3.fromWei(tx.value, 'ether')
                }
                r = tx
            }
            cout(r)
        }
    })
    .command({
        command: 'newToken <accountAddress> <accountPassword>',
        desc: 'create a new token',
        handler: (argv) => {
            var r = createContract(argv.accountAddress, argv.accountPassword, CU.GetHahaCoinAbi())
            cout(r)
        }
    })
    .command({
        command: 'newContract <filepath> <nameContract> <accountAddress> <accountPassword>',
        desc: 'create a new contract',
        handler: (argv) => {
            var resultAbi = CU.GetAbiFromFile(argv.filepath, argv.nameContract)
            var r = createContract(argv.accountAddress, argv.accountPassword, resultAbi)
            cout(r)
        }
    })
    .command({
        command: 'solc <filepath> <nameContract>',
        desc: 'compile a sol file',
        handler: (argv) => {
            console.log(CU.GetAbiFromFile(argv.filepath, argv.nameContract))
        }
    })
    .command({
        command: 'dev <case>',
        desc: 'devmode',
        handler: (argv) => {
            console.log(argv)
            if (argv.case == 1) {
                clientRpc.request('personal_newAccount', ['vp1pass']).then((resp) => {
                    console.log(resp)
                    return clientRpc.request('miner_start', [1])
                }).then((r) => console.log(r)).catch((err) =>
                    cout(err))
            }
        }
    })
    .demandCommand(1)
    .help()
    .alias('h', 'help')
    .argv
