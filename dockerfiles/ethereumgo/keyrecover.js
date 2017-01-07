var keythereum = require("keythereum")

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
var argv = require('yargs')
    .usage('Usage: $0 --datadir=[string] --address=[string] --password=[string]')
    .demandOption(['datadir', 'address', 'password'])
    .argv

var kr = recoverKeyFromAddress(argv.datadir, argv.address, argv.password)
var r = {
    keyObject : kr.ko,
    privateKey:kr.key.toString('hex')
}
console.log(JSON.stringify(r, null, ' '))
