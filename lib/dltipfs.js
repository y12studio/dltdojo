// https://www.npmjs.com/package/ipfs-mini
const DU = require('./dltutils')
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
});

function Dltipfs() {}

Dltipfs.HelloWorld = function() {
    //ipfs.add('DLTDOJO hello world!', (err, result) => {
    //    console.log(err, result);
    //})
    // null 'QmQnj7XBy4ph8Tq1BjTbRWN3KHznUNDQbyFGHxFA8NTXVy'
    ipfs.cat('QmQnj7XBy4ph8Tq1BjTbRWN3KHznUNDQbyFGHxFA8NTXVy', DU.callback)
}

Dltipfs.Args = function(argv) {
    console.log(argv)
    if(argv.method=='hello'){
        Dltipfs.HelloWorld()
    }
}

module.exports = Dltipfs
