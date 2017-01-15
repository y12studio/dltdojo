#!/usr/bin/env node

var bitcoin = require('bitcoin-promise');


function bitcoinRequest(host,port) {
    var client = new bitcoin.Client({
        host: host,
        port: port,
        user: 'user',
        pass: 'pass',
        timeout: 30000
    });
    // get a new address and return details about it
    client.getNewAddress()
        .then(function(addr) {
            return client.validateAddress(addr);
        })
        .then(function(addrInfo) {
            console.log(addrInfo);
        })
        .catch(function(err) {
            console.log(err);
        });
}


function main() {
    require('yargs')
        .command({
            command: 'btc',
            desc: 'bitcond getinfo',
            builder: (yargs) => {
                yargs.string('name').default('name', 'alice')
            },
            handler: (argv) => {
                console.log(argv)
                console.log(bitcoinRequest('127.0.0.1',18332))
            }
        })
        .argv
}

main()
