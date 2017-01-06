#!/usr/bin/env node

const _ = require('lodash')
const fs = require('fs')
const YAML = require('yamljs')

function buildDojoAlias(name, nodeNum) {
    var r = [`DCN=${name}`, `alias dc='docker-compose -p ${name} -f ${name}-peers.yml'`,"alias dcup='dc stop && dc rm && dc up -d'"]
    _.range(nodeNum).forEach(function(e, i, a) {
        // alias vp0sh='docker exec -i -t ${DCN}_vp0_1'
        r.push(`alias vp${i}='docker exec -i -t ${name}_vp${i}_1'`)
        r.push(`alias vp${i}cli='vp${i} bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'`)
    })
    return r.join('\n')
}

function buildDojoPeer(name) {
    var dc = {
        version: '2',
        services: {
            vpsrv: {
                image: 'y12docker/dltdojo-bitcoin:0.13.1.core',
                expose: ['18332', '18333'],
                command: 'bitcoind -regtest -txindex -port=18333 -conf=/opt/btc/bitcoin.conf -datadir=/opt/btc/data -rpcport=18332 -addnode=vp0:18333'
            }
        }
    }
    return YAML.stringify(dc, 4, 2)
}

function buildDojoPeers(name, peers) {
    var dc = {
        version: '2',
        services: {}
    }
    _.range(peers).forEach(function(e, i, a) {
        var vpid = `vp${i}`
        var peerfile = `${name}-peer.yml`
        dc.services[vpid] = {
            extends: {
                file: peerfile,
                service: 'vpsrv'
            },
            hostname: vpid
        }
    })
    return YAML.stringify(dc, 4, 2)
}

function buildDojo(path, name, peers) {
    var strPeer = buildDojoPeer(name)
    fs.writeFileSync(`${path}/${name}-peer.yml`, strPeer);
    var strPeers = buildDojoPeers(name, peers)
    fs.writeFileSync(`${path}/${name}-peers.yml`, strPeers);
    var strAlias = buildDojoAlias(name, peers)
    fs.writeFileSync(`${path}/${name}-alias.sh`, strAlias);
}

function mainx() {
    var argv = require('yargs')
        .usage('Usage: $0 -w [num] -h [num]')
        .demandOption(['w', 'h'])
        .argv;

    console.log("The area is:", argv.w * argv.h);
}

buildDojo('./dockerfiles/dltdojo/examples', 'levelx', 6)
