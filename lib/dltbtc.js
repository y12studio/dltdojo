const Client = require('bitcoin-core')
const DU = require('./dltutils')
function Dltbtc(){
}

Dltbtc.BTCRPCPORT = 18332

Dltbtc.getClient = function(hostname){
    return new Client({
        host: hostname,
        network: 'regtest',
        port: Dltbtc.BTCRPCPORT,
        username: 'user',
        password: 'pass'
    })
}

Dltbtc.BtcMethod = function(argv){
    // https://github.com/seegno/bitcoin-core
    var bc = Dltbtc.getClient(argv.hostname)
    switch (argv.method) {
        case 'info':
            bc.getInfo().then(DU.log)
            break;
        case 'account':
            if(argv.new){
                bc.getNewAddress().then(DU.log)
            }else if(argv.dumpkey && argv.address){
                bc.dumpPrivKey(argv.address).then(DU.log)
            }
            break;
        case 'getBalance':
            bc.getBalance().then(DU.log)
            break;
        case 'miner':
            bc.generate(argv.num ? argv.num : 1).then(DU.log)
            break;
        case 'send':
            if (argv.to && argv.btc) {
                bc.sendToAddress(argv.to, argv.btc).then(DU.log)
            }
            break;
        default:
            console.log(argv)
    }
}

module.exports = Dltbtc
