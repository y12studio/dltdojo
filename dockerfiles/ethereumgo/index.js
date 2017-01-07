var keythereum = require("keythereum")
var Web3 = require('web3')
var web3 = new Web3()

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

function getInfo() {
    var coinbase = web3.eth.coinbase;
    var balance = web3.eth.getBalance(coinbase)
        // var value = web3.fromWei('21000000000000', 'finney');
        // https://github.com/ethereum/web3.js/issues/388
        // https://github.com/ethereum/web3.js/blob/master/lib/web3/methods/personal.js
    return {
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

function cout(obj){
    console.log(JSON.stringify(obj, null, ' '))
}

require('yargs')
    .command({
        command: 'newAccount <password>',
        desc: 'Create a new account',
        handler: (argv) => {
            cout(web3.personal.newAccount(argv.password))
        }
    })
    .command({
        command: 'info',
        desc: 'info type',
        handler: (argv) => {
            cout(getInfo())
        }
    })
    .command({
        command: 'foo <key>',
        desc: 'Set a config variable',
        builder: (yargs) => {
            yargs.default('value', 'true')
        },
        handler: (argv) => {
            console.log(`setting ${argv.key} to ${argv.value}`)
        }
    })
    .demandCommand(1)
    .help()
    .alias('h', 'help')
    .argv
