const DU = require('./dltutils')
var jayson = require('jayson/promise')
var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()
function Dlteth(){
}

Dlteth.GetEthRpcUrl = function(hostname) {
    return `http://${hostname}:8545`
}

Dlteth.GetEthClient = function(hostname) {
    return jayson.client.http(Dlteth.GetEthRpcUrl(hostname));
}

Dlteth.RecoverKeyFromAddress = function(datadir, address, password) {
    // var datadir = "/root/.ethereum/devchain"
    var keyObject = keythereum.importFromFile(address, datadir)
    var privateKey = keythereum.recover(password, keyObject)
    return {
        ko: keyObject,
        key: privateKey,
        keyhex: privateKey.toString('hex')
    }
}

Dlteth.EthMethod = function(argv) {
    web3.setProvider(new web3.providers.HttpProvider(Dlteth.GetEthRpcUrl(argv.hostname)))
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
            DU.log(r)
            break;
        case 'account':
            if (argv.new && argv.password) {
                DU.log(web3.personal.newAccount(argv.password))
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
                    DU.log(r)
                }
            }
            break;
        case 'miner':
            clientRpc = Dlteth.GetEthClient(argv.hostname)
            if (argv.start) {
                clientRpc.request('miner_start', [1]).then(DU.log)
            } else if (argv.stop) {
                clientRpc.request('miner_stop', []).then(DU.log)
            }
            break;
        default:
            console.log(argv)
    }
}

module.exports = Dlteth
