var fs = require('fs');
var sh = require('shelljs');
var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()
var jsonfile = require('jsonfile')
var CU = require('./contractutils')
var _ = require('lodash')
var Promise = require("bluebird")
var request = require('request')
var jayson = require('jayson/promise')

const RPCURL = 'http://localhost:8545'
const SAVINGPATH = '/tmp/saving-latest.json'
    //
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

function getInfo(argv) {
    var debug = argv.debug
    var coinbase = web3.eth.coinbase;
    var balanceCoinbase = web3.eth.getBalance(coinbase)
        // var value = web3.fromWei('21000000000000', 'finney');
        // https://github.com/ethereum/web3.js/issues/388
        // https://github.com/ethereum/web3.js/blob/master/lib/web3/methods/personal.js
    var r = {
        ethBlockNumber: web3.eth.blockNumber,
        ethCoinbase: coinbase,
        ethSyncing: web3.eth.syncing,
        netPeerCount: web3.net.peerCount,
        balanceCoinbaseEther: web3.fromWei(balanceCoinbase, 'ether')
    }
    var sa = getLatestSaving()
    if (sa[argv.name]) {
        var c = sa[argv.name]
        var addr = c.init.address
        var balanceAcc = web3.eth.getBalance(addr)
        r.account = {
            name: argv.name,
            address: addr,
            balanceEther: web3.fromWei(balanceAcc, 'ether')
        }
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

function createContract(name, accountAddress, accountPassword, resultAbi) {
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
                    appendSaving(name, 'contract', {
                        tx: myContract.transactionHash,
                        address: myContract.address,
                        resultAbi: resultAbi
                    })
                    console.log(myContract.address)
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


function createToken(accountAddress, accountPassword) {
    // Creates a contract object for a solidity contract, which can be used to initiate contracts on an address.

    return createContract(accountAddress, accountPassword, CU.GetHahaCoinAbi())
}

function appendSaving(acname, key, obj) {
    var sr = getLatestSaving()
    var ac = sr[acname]
    if (ac) {
        ac[key] = obj
        saving(sr)
    }
}

function getLatestSaving() {
    return fs.existsSync(SAVINGPATH) ? jsonfile.readFileSync(SAVINGPATH) : {}
}

function saving(obj) {
    jsonfile.writeFileSync('/tmp/saving-latest.json', obj, {
        spaces: 2
    })
}

function savingX(sname, accAddr, input) {
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
    var accountName = argv.name
    return clientRpc.request('personal_newAccount', [argv.password]).then((resp) => {
        //console.log(resp)
        var r = {}
        r.address = resp.result
        r.password = argv.password
        r.keyrecover = recoverKeyFromAddress('/root/.ethereum/devchain', r.address, r.password)
        var sa = getLatestSaving()
        if (sa[accountName]) {
            sa[accountName].init = r
        } else {
            sa[accountName] = {
                init: r
            }
        }
        saving(sa)
        return r.address
    })
}

function handleAccountSend(argv) {
    //console.log('SEND', argv)
    var sa = getLatestSaving()
    if (sa[argv.name]) {
        var account = sa[argv.name]
            //console.log(account)
        var address = account.init.address
        var password = account.init.password
            // console.log(address,password)
        var unlock = web3.personal.unlockAccount(address, password)
        if (unlock) {
            var r = web3.eth.sendTransaction({
                from: address,
                to: argv.to,
                value: web3.toWei(argv.ether, "ether")
            })
            cout(r)
        }
    }
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
        command: 'info [name]',
        desc: 'info',
        builder: (yargs) => {
            yargs.string('name').default('name', 'alice')
        },
        handler: (argv) => {
            cout(getInfo(argv))
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
            yargs.string('to').default('name', 'alice')
        },
        handler: (argv) => {
            if (argv.new && argv.password) {
                handleAccountNew(argv).then((resp) => console.log(resp))
            } else if (argv.key) {
                var sa = getLatestSaving()
                console.log(sa[argv.name].init.keyrecover.keyhex)
            } else if (argv.send && argv.to && argv.ether) {
                handleAccountSend(argv)
            } else {
                var sa = getLatestSaving()
                console.log(sa[argv.name])
            }
        }
    })
    .command({
        command: 'hahacoin [name]',
        desc: 'HahaCoin',
        builder: (yargs) => {
            yargs.implies('send', 'to').string('to').default('name', 'alice')
        },
        handler: (argv) => {
            // compiled by sloc@node_modules
            var sa = getLatestSaving()
            var ac = sa[argv.name]
            if (ac && argv.new) {
                var resultAbi = CU.GetHahaCoinAbi()
                    //console.dir(sa)
                createContract(argv.name, ac.init.address, ac.init.password, resultAbi)
            } else if (ac && ac.contract) {
                // show balance
                var sc = ac.contract
                var accountAddress = ac.init.address
                var password = ac.init.password
                var hahaCoin = web3.eth.contract(sc.resultAbi.abi).at(sc.address)
                if (argv.send && argv.amount && argv.to) {
                    var unlock = web3.personal.unlockAccount(accountAddress, password)
                    hahaCoin.send(argv.to, argv.amount, {
                        from: accountAddress
                    }, (err, result) => {
                        console.log(err ? err : result)
                    })
                } else {
                    var balance = hahaCoin.balances(accountAddress).toString(10)
                    console.log({
                        account: accountAddress,
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
        command: 'dev <case>',
        desc: 'devmode',
        handler: (argv) => {
            //console.log(argv)
            if (argv.case == 1) {
                argv.name = 'alice'
                argv.password = 'passAlice'
                handleAccountNew(argv).then((resp) => {
                    return clientRpc.request('miner_start', [1])
                }).then((resp) => {
                    argv.name = 'bob'
                    argv.password = 'passBob'
                    return handleAccountNew(argv)
                })
            }
        }
    })
    .demandCommand(1)
    .help()
    .alias('h', 'help')
    .argv
