const DU = require('./dltutils')
const _ = require('lodash')
const fs = require('fs')
const YAML = require('yamljs')
const bitcorelib = require('bitcore-lib')
const Networks = bitcorelib.Networks;

function Dltbuilder() {}

Dltbuilder.prototype.buildHead = function(title, sep) {
        var time = new Date().toISOString()
        return `# Distributed Ledger Technology Dojo (DLTDOJO) ${sep}# https://github.com/y12studio/dltdojo${sep}# ${title}${sep}# DATETIME:${time}${sep}`
    },

    Dltbuilder.prototype.buildAlias = function(name, peers) {
        return [
            `DCNAME=${name}`, `alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'`, `alias dcup='dc stop ; dc rm -f; dc up -d'`, `alias dcend='dc stop ; dc rm -f'`, `alias dojoexec='docker exec -it $\{DCNAME\}_dltdojo_1'`, `alias ddj='dojoexec node index.js'`
        ]
    }

Dltbuilder.prototype.btcDojoAlias = function() {
    var name = this.name
    var peers = this.peers
    var r = this.buildAlias(name, peers)
    var vpid = 'btcp'
        //r.push('ddjbtc() { ddj btc "$2" "$1"; }')
    _.range(peers).forEach(function(e, i, a) {
        var vpname = i == 0 ? `${vpid}` : `${vpid}${i}`
        r.push(`alias ${vpid}${i}exec='docker exec -t $\{DCNAME\}_${vpname}_1'`)
        r.push(`alias ${vpid}${i}='ddj btc ${vpname}'`)
            //r.push(`alias ${vpid}${i}cli='vp${i} bitcoin-cli -conf=/opt/btc/bitcoin.conf -regtest -rpcport=18332'`)
    })
    return this.buildHead(`BitcoinCore alias script, name:${name}, peers:${peers}`, '\r\n') + r.join('\n')
}

Dltbuilder.prototype.ethDojoAlias = function() {
    var name = this.name
    var peers = this.peers
    var r = this.buildAlias(name, peers)
    var vpid = 'ethp'
        //r.push('dsolc() { docker cp "$2" "$1":/tmp/; docker exec -it "$1" node index.js solc /tmp/"$2" "$3"; }')
        //r.push('dnc() { docker cp "$2" "$1":/tmp/; docker exec -it "$1" node index.js newContract /tmp/"$2" "$3" "$4" "$5"; }')
        //r.push('dcp() { docker cp "$1":${2} ${3}; }')
    _.range(peers).forEach(function(e, i, a) {
        // vp1 /curlrpc.sh
        //r.push(`alias dnc${i}='dnc $VPID${i}'`)
        //r.push(`alias dsolc${i}='dsolc $VPID${i}'`)
        var vpname = i == 0 ? `${vpid}` : `${vpid}${i}`
        r.push(`alias ${vpname}exec='docker exec -t $\{DCNAME\}_${vpname}_1'`)
            // r.push(`alias ${vpname}key='${vpname}exec find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -exec cat {} \\; | jq .'`)
        r.push(`alias ${vpname}='ddj eth ${vpname}'`)
    })
    return this.buildHead(`EthereumGo alias script, name:${name}, peers:${peers}`, '\r\n') + r.join('\n')
}

Dltbuilder.prototype.btcDojoPeers = function() {
    var name = this.name
    var peers = this.peers
    var img = this.img
    var dc = {
        version: '2',
        services: {
            dltdojo: {
                image: 'y12docker/dltdojo',
                command: 'start'
            },
            btcp: {
                image: img,
                expose: ['18332', '18333'],
                command: '/start.sh -regtest -txindex -port=18333 -conf=/opt/btc/bitcoin.conf -datadir=/opt/btc/data -rpcallowip=DLTDOJOSUBNETinSTARTSH -rpcport=18332 -addnode=btcp:18333'
            }
        }
    }
    _.range(peers).forEach(function(e, i, a) {
        var vpid = `btcp${i+1}`
        dc.services[vpid] = {
            extends: 'btcp',
            hostname: vpid
        }
    })
    return this.buildHead(`BitcoinCore peers yml file ,name:${name}, peers:${peers}`, '\r\n') + YAML.stringify(dc, 6, 2)
}

Dltbuilder.prototype.buildBtcDojo = function(img, path, name, peers) {
    this.name = name
    this.peers = peers
    this.img = img
    var strPeers = this.btcDojoPeers()
    var strAlias = this.btcDojoAlias()
    fs.writeFileSync(`${path}/peers${name}.yml`, strPeers);
    fs.writeFileSync(`${path}/alias${name}.sh`, strAlias);
}


Dltbuilder.prototype.buildEthDojo = function(img, path, name, peers) {
    this.name = name
    this.peers = peers
    this.img = img
        //var strPeer = this.buildDojoPeer()
    var strPeers = this.ethDojoPeers()
    var strAlias = this.ethDojoAlias()
        //fs.writeFileSync(`${path}/${name}-peer.yml`, strPeer);
    fs.writeFileSync(`${path}/peers${name}.yml`, strPeers);
    fs.writeFileSync(`${path}/alias${name}.sh`, strAlias);
}

Dltbuilder.prototype.ethDojoPeers = function() {
    var name = this.name
    var peers = this.peers
    var img = this.img
    var devmod = peers <= 2 ? '--dev' : ''
        // bootnodes url IP address only. DNS name(evp0) are not allowed.
        // "tail -f /dev/null" keep evp running for all time
    var rpcopts = '--rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable'
    var networkid = _.random(100001, 999999)
        // NOTE: bootnode is hardcode in start.sh@y12docker/ethgo
        // BOOTNODE_IP=`getent hosts bootnode | cut -d" " -f1`
        // GETH_OPTS=${@/XXX/$BOOTNODE_IP}
    var dc = {
        version: '2',
        services: {
            dltdojo: {
                image: 'y12docker/dltdojo',
                command: 'start'
            },
            bootnode: {
                image: img,
                command: `${devmod} --networkid=${networkid} ${rpcopts} --datadir=~/.ethereum/devchain --nodekeyhex=091bd6067cb4612df85d9c1ff85cc47f259ced4d4cd99816b14f35650f59c322`
            },
            ethp: {
                image: img,
                entrypoint: '/start.sh',
                command: `${devmod} --networkid=${networkid} ${rpcopts} --datadir=~/.ethereum/devchain --bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@XXX:30303"`
            }
        }
    }
    _.range(peers).forEach(function(e, i, a) {
        var vpid = `ethp${i+1}`
        dc.services[vpid] = {
            extends: 'ethp',
            hostname: vpid
        }
    })
    return this.buildHead(`EthereumGo peers yml file ,name:${name}, peers:${peers}`, '\r\n') + YAML.stringify(dc, 4, 2)
}

Dltbuilder.BuildMethod = function(argv) {
    var db = new Dltbuilder()
    var dojo = argv.dojo
    if (dojo && argv.name) {
        if (dojo.btc) {
            db.buildBtcDojo(argv.btcimg, argv.path, argv.name, dojo.btc)
        } else if (dojo.eth) {
            db.buildEthDojo(argv.ethimg, argv.path, argv.name, dojo.eth)
        }
    } else if (argv.bulkuser && argv.num && argv.prefix && argv.dojoname) {
        DU.logj(Dltbuilder.BuildBulkUserWithBitconHdKey(argv.num, argv.prefix, argv.dojoname))
    } else {
        console.log(argv)
    }
}

Dltbuilder.BuildBulkUserWithBitconHdKey = function(n, usernamePrefix, dojoname) {
    // create one user and set its initial password:
    // 'useradd newuser; echo -e "passwdofuser\npasswdofuser" | passwd newuser'
    var HDPrivateKey = bitcorelib.HDPrivateKey
    var hdPrivateKey = new HDPrivateKey()
    var accounts = []
    var derivedRoot = hdPrivateKey.derive(1989)
    _.times(n, (i) => {
        var index = i + 1
        var dhdkey = derivedRoot.derive(index, true)
        var pkey = dhdkey.privateKey
        var username = `${usernamePrefix}${index}dlt`
        var password = pkey.toWIF(Networks.testnet).substring(0, 16)
        var useraddscript = `useradd -m ${username}; echo -e "${password}\\n${password}" | passwd ${username}`
        var cmdlines = [`alias ddjexec='docker exec -t ${dojoname}_dltdojo_1'`, `alias ddj='ddjexec node index.js'`]
        _.forEach(['btc', 'etc', 'fab'], function(v) {
            var vpname = `${v}p${index}`
            cmdlines.push(`alias ${vpname}exec='docker exec -t ${dojoname}_${vpname}_1'`)
            cmdlines.push(`alias ${vpname}='ddj ${v} ${vpname}'`)
        });
        var bashalias = `echo -e "${cmdlines.join('\\n')}" > /home/${username}/.bashrc`
        accounts.push({
            username: username,
            address: pkey.toAddress(Networks.testnet).toString(),
            password: password,
            script: `${useraddscript} ; ${bashalias}`
        })
    })
    return {
        dojoname: dojoname,
        hdkey: hdPrivateKey.privateKey.toWIF(Networks.testnet),
        accounts: accounts
    }
}

module.exports = Dltbuilder
