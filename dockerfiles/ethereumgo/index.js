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
        r.cliNewHahaCoin = `vp1cli newHahaCoin ${coinbase.replace('0x','')} vp1pass`
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
    var r = {
        accountAddress: accountAddress,
        txHash: '',
        contractAddress: '',
        cliBalance: '',
        cliSend: ''
    }
    web3.eth.contract(resultAbi.abi).new({
            from: accountAddress,
            data: resultAbi.code,
            gas: gasEstimate
        }, (err, myContract) => {
            if (!err) {
                // NOTE: The callback will fire twice!
                // Once the contract has the transactionHash property set and once its deployed on an address.

                // e.g. check tx hash on the first call (transaction send)
                if (!myContract.address) {
                    r.txHash = myContract.transactionHash
                        // console.log(r) // The hash of the transaction, which deploys the contract
                        // check address on the second call (contract deployed)
                } else {
                    r.contractAddress = myContract.address
                    var conaddr = r.contractAddress.replace('0x', '')
                    var accaddr = r.accountAddress.replace('0x', '')
                    r.cliBalance = `vp1cli hahaCoinBalance ${conaddr} ${accaddr}`
                    r.cliSend = `vp1cli hahaCoinSend ${conaddr} ${accaddr} vp1pass <toAddress> <amount>`
                        // console.log(myContract.address) // the contract address
                    console.log(r)
                }

                // Note that the returned "myContractReturned" === "myContract",
                // so the returned "myContractReturned" object will also get the address set.
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

function saving(sname, accAddr, input) {
    var filename = `/tmp/${sname}_${accAddr}.json`
    var r = {
        input: input,
        saving:{
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
        command: 'newHahaCoin <accountAddress> <accountPassword>',
        desc: 'create a new HahaCoin',
        handler: (argv) => {
            // compiled by sloc@node_modules
            var resultAbi = CU.GetHahaCoinAbi()
                // compiled by web3@geth_rpc_install_solc
                // var resultAbi = ethCompileSolidity(CU.SOLCOIN,'HahaCoin')
            createContract(argv.accountAddress, argv.accountPassword, resultAbi)
        }
    })
    .command({
        command: 'hahacoin',
        desc: 'HahaCoin',
        handler: (argv) => {
            // compiled by sloc@node_modules
            if(argv.new){
                var sa = getLatestSaving()
                sa.resultAbi = CU.GetHahaCoinAbi()
                console.dir(sa)
                createContract(sa.input.account, sa.input.password, sa.resultAbi)
            }
        }
    })
    .command({
        command: 'hahaCoinBalance <addressDeploy> <accountAddress>',
        desc: 'read/write hahacoin',
        handler: (argv) => {
            console.log(argv)
            var resultAbi = CU.GetHahaCoinAbi()
            var hahaCoin = web3.eth.contract(resultAbi.abi).at('0x' + argv.addressDeploy)
            var theMethod = hahaCoin['balances']
            console.log(theMethod('0x' + argv.accountAddress).toString(10))
        }
    })
    .command({
        command: 'hahaCoinSend <addressDeploy> <accountAddress> <accountPass> <toAddress> <amount>',
        desc: 'read/write hahacoin',
        handler: (argv) => {
            var resultAbi = CU.GetHahaCoinAbi()
            var hahaCoin = web3.eth.contract(resultAbi.abi).at('0x' + argv.addressDeploy)
            var theMethod = hahaCoin['send']
            var unlock = web3.personal.unlockAccount(argv.accountAddress, argv.accountPass)
            theMethod.sendTransaction('0x' + argv.toAddress, argv.amount, {
                from: '0x' + argv.accountAddress
            }, (err, result) => {
                console.log(err ? err : result)
            })
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
        command: 'saving <sname> [accountAddress]',
        desc: 'save a file',
        builder: (yargs) => yargs.default('accountAddress', web3.eth.coinbase),
        handler: (argv) => {
            var r = saving(argv.sname, argv.accountAddress, getInfo(argv.debug))
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
