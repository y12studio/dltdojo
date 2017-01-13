var sh = require('shelljs');
var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()
var jsonfile = require('jsonfile')
var CU = require('./contractutils')
var _ = require('lodash')
var Promise = require("bluebird")
var request = require('request')
const RPCURL = 'http://localhost:8545'
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
        balanceEther: web3.fromWei(balance, 'ether')
    }
    if (debug) {
        r.ethMining = web3.eth.mining
        r.ethGetBlockPending = web3.eth.getBlock("pending")
            //r.cliNewHahaCoin = `vp1cli newHahaCoin ${coinbase.replace('0x','')} vp1pass`
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


// TODO
function hahaCoinMint(resultAbi, addressAccount, addressDeploy, amount, addressTo) {
    web3.eth.contract(resultAbi).at(addressDeploy).mint(addressTo, amount, {
        from: addressFrom
    }, (err, result) => {
        console.log(result)
    })
}

function createContract(accountAddress, accountPassword, resultAbi) {
    // console.log(resultAbi)
    // Creates a contract object for a solidity contract, which can be used to initiate contracts on an address.
    var unlock = web3.personal.unlockAccount(accountAddress, accountPassword)
    var gasEstimate = web3.eth.estimateGas({
        data: resultAbi.code
    });
    // All binary data is serialised in hexadecimal form. Hex strings always have a hex prefix 0x.
    web3.eth.contract(resultAbi.abi).new({
            from: accountAddress,
            data: resultAbi.code,
            gas: gasEstimate
        }, (err, myContract) => {
            if (!err) {
                // NOTE: The callback will fire twice!
                // Once the contract has the transactionHash property set and once its deployed on an address.

                // e.g. check tx hash on the first call (transaction send)
                if (myContract.address) {

                    // r.contractAddress = myContract.address
                    // console.log(myContract.address) // the contract address
                    // console.log(r)
                    appendSaving('contract', {
                        tx: myContract.transactionHash,
                        address: myContract.address,
                        resultAbi: resultAbi
                    })
                    console.log(getLatestSaving())
                }

                // Note that the returned "myContractReturned" === "myContract",
                // so the returned "myContractReturned" object will also get the address set.
            } else {
                console.log(err)
            }
        })
        //return { txhash: instanceContract.transactionHash }
}

// TODO : install solc and link to geth
function ethCompileSolidity(source, name) {
    // compiled by web3@geth_rpc
    // Linking your compiler in Geth
    // admin.setSolc("path/to/solc")
    // eth.getCompilers()
    var compiled = web3.eth.compile.solidity(source);
    var contract = compiled[name]
    return {
        abi: contract.info.abiDefinition,
        code: contract.code
    }
}

function getLatestSaving() {
    return jsonfile.readFileSync('/tmp/saving-latest.json')
}

function createToken(accountAddress, accountPassword) {
    // Creates a contract object for a solidity contract, which can be used to initiate contracts on an address.

    return createContract(accountAddress, accountPassword, CU.GetHahaCoinAbi())
}

function appendSaving(name, obj) {
    var sr = getLatestSaving()
    var x = sr.input
    x[name] = obj
    x.info = getInfo()
    saving(sr.saving.sname, sr.saving.address, x)
}

function saving(sname, accAddr, input) {
    var filename = `/tmp/${sname}_${accAddr}.json`
    var r = {
        input: input,
        saving: {
            sname: sname,
            address: accAddr,
            file: filename
        }
    }
    jsonfile.writeFileSync(filename, r, {
        spaces: 2
    })
    sh.cp(filename, '/tmp/saving-latest.json')
    return r
}

function cout(obj) {
    console.log(_.isString(obj) ? obj : JSON.stringify(obj, null, ' '))
}

function handleAccountNew(argv) {
    var x = {
        name: argv.name,
        password: argv.password
    }
    clientRpc.request('personal_newAccount', [argv.password]).then((resp) => {
        //console.log(resp)
        x.account = resp.result
        x.keyrecover = recoverKeyFromAddress('/root/.ethereum/devchain', x.account, argv.password)
        x.info = getInfo()
        var sr = saving(argv.name, x.account, x)
        if (argv.debug) {
            console.log(getLatestSaving())
        } else {
            console.log(x.account)
        }
    }).catch((err) => {
        console.log(err)
    })
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
        command: 'account [name]',
        desc: 'command account',
        builder: (yargs) => {
            yargs.string('to').default('name','t1')
        },
        handler: (argv) => {
            if (argv.new && argv.password) {
                handleAccountNew(argv)
            } else if (argv.key) {
                var sa = getLatestSaving()
                console.log(sa.input.keyrecover.keyhex)
            } else if (argv.send && argv.to && argv.ether) {
                //console.log('SEND', argv)
                var sa = getLatestSaving()
                var account = sa.input.account
                var password = sa.input.password
                var r = sendTransaction(account, password, argv.to, argv.ether)
                cout(r)
            } else {
                var sa = getLatestSaving()
                if (sa.input.account) {
                    console.log(sa.input.account)
                } else {
                    console.log(`${argv.name} key not found.`)
                }
            }
        }
    })
    .command({
        command: 'hahacoin',
        desc: 'HahaCoin',
        builder: (yargs) => {
            yargs.implies('send', 'to').string('to')
        },
        handler: (argv) => {
            // compiled by sloc@node_modules
            var sa = getLatestSaving()
            if (argv.new) {
                var resultAbi = CU.GetHahaCoinAbi()
                    //console.dir(sa)
                createContract(sa.input.account, sa.input.password, resultAbi)
            } else if (sa.input.contract) {
                // show balance
                var sc = sa.input.contract
                var account = sa.input.account
                var password = sa.input.password
                var hahaCoin = web3.eth.contract(sc.resultAbi.abi).at(sc.address)
                if (argv.send && argv.amount && argv.to) {
                    var unlock = web3.personal.unlockAccount(account, password)
                    hahaCoin.send('0x' + argv.to, argv.amount, {
                        from: account
                    }, (err, result) => {
                        console.log(err ? err : result)
                    })
                } else {
                    var balance = hahaCoin.balances(account).toString(10)
                    console.log({
                        account: account,
                        balance: balance
                    })
                }
            } else {
                console.log('contract not found.')
            }
        }
    })
    .command({
        command: 'newContract <filepath> <nameContract> <accountAddress> <accountPassword>',
        desc: 'create a new contract',
        handler: (argv) => {
            var resultAbi = CU.GetAbiFromFile(argv.filepath, argv.nameContract)
            createContract(argv.accountAddress, argv.accountPassword, resultAbi)
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
        command: 'latest',
        desc: 'get the latest saving file',
        handler: (argv) => {
            console.log(getLatestSaving())
        }
    })
    .command({
        command: 'miner',
        desc: 'miner command',
        handler: (argv) => {
            if (argv.start) {
                clientRpc.request('miner_start', [1]).then((r) => console.log(r))
            } else if (argv.stop) {
                clientRpc.request('miner_stop').then((r) => console.log(r))
            }
        }
    })
    .command({
        command: 'dev <case> <password>',
        desc: 'devmode',
        handler: (argv) => {
            //console.log(argv)
            if (argv.case == 1) {
                var x = {
                    name: 'dev mode 1',
                    password: argv.password
                }
                clientRpc.request('personal_newAccount', [argv.password]).then((resp) => {
                    //console.log(resp)
                    x.account = resp.result
                    return clientRpc.request('miner_start', [1])
                }).then((r) => {
                    x.info = getInfo()
                    var sr = saving('dev1', x.account, x)
                    console.log(getLatestSaving())
                }).catch((err) =>
                    cout(err))
            }
        }
    })
    .demandCommand(1)
    .help()
    .alias('h', 'help')
    .argv
