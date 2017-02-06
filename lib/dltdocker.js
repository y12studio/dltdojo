var Docker = require('dockerode')
const DU = require('./dltutils')
var fs = require('fs')
//var docker = new Docker({socketPath: '/var/run/docker.sock'})
function Dltdocker() {
    var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
    var stats = fs.statSync(socket);

    if (!stats.isSocket()) {
        throw new Error('Are you sure the docker is running?')
    }
    this.docker = new Docker({
        socketPath: socket
    })
}

Dltdocker.prototype.createDltdojo = function(argv) {
    // docker service create --name dltdojo --network devbtcnet --replicas 1 --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock y12docker/dltdojo start
    var image = 'y12docker/dltdojo'
    var name = 'dltdojo'
    var network = argv.network
    var replicas = 1
    var command = ['node', 'index.js', 'start']
    var args = []
    var ports = []
    var mounts = [{
        'Source': '/var/run/docker.sock',
        'Target': '/var/run/docker.sock',
        'Type': 'bind'
    }]
    this.createService(image, name, network, command, args, replicas, ports, mounts)
}

Dltdocker.prototype.createBitcoinboot = function(argv) {
    var image = 'y12docker/dltdojo-bitcoin'
    var rpcallowip = argv.subnet
    var network = argv.network
    var replicas = 1
    var name = 'btcboot'
    var command = ["bitcoind"]
    var args = ["-rpcport=18332", "-port=18333", "-txindex", `-rpcallowip=${rpcallowip}`]
    var ports = []
    this.createService(image, name, network, command, args, replicas, ports)
}

Dltdocker.prototype.createService = function(image, name, network, command, args, replicas, ports, mounts, env) {
    // https://docs.docker.com/engine/api/v1.25/#operation/ServiceCreate
    // https://godoc.org/github.com/docker/docker/api/types/swarm#ContainerSpec
    ports = ports || []
    mounts = mounts || []
    env = env || []
    var opts = {
        "Name": name,
        "Networks": [{
            "Target": network,
            "Aliases": []
        }],
        "TaskTemplate": {
            "ContainerSpec": {
                "Image": image,
                "Command": command,
                "Mounts": mounts,
                "Env": env,
                "Args": args
            },
            "Resources": {
                "Limits": {},
                "Reservations": {}
            },
            "RestartPolicy": {},
            "Placement": {}
        },
        "Mode": {
            "Replicated": {
                "Replicas": replicas
            }
        },
        "UpdateConfig": {
            "Parallelism": 1
        },
        "EndpointSpec": {
            "Ports": ports
        }
    }
    this.docker.createService(opts, DU.callback)
}

Dltdocker.prototype.createBitcoinpeer = function(argv) {
    // docker service create --name bitcoinx3 --network devbtcnet --replicas 3 y12docker/dltdojo-bitcoin bitcoind \
    //   -rpcallowip=10.0.9.0/24 -txindex -rpcport=18332 -port=18333 -addnode=bitcoin:18333
    var image = 'y12docker/dltdojo-bitcoin'
    var rpcallowip = argv.subnet
    var network = argv.network
    var replicas = argv.dojo.btc || 1
    var name = 'btcpeer'
    var command = ["bitcoind"]
    var args = ["-rpcport=18332", "-port=18333", "-txindex", `-rpcallowip=${rpcallowip}`, '-addnode=btcboot:18333']
    this.createService(image, name, network, command, args, replicas)
}

Dltdocker.prototype.createMariadb = function(argv) {
    var image = 'mariadb:10.1'
    var network = argv.network
    var replicas = 1
    var name = 'mariadb'
    var command = []
    var args = []
    var env = ['MYSQL_ROOT_PASSWORD=root']
    var ports = []
    var mounts = []
    this.createService(image, name, network, command, args, replicas, ports, mounts, env)
}

Dltdocker.prototype.createMongo = function(argv) {
    var image = 'mongo:3.4'
    var network = argv.network
    var replicas = 1
    var name = 'mongo'
    var command = []
    var args = []
    var env = []
    var ports = []
    var mounts = []
    this.createService(image, name, network, command, args, replicas, ports, mounts, env)
}

Dltdocker.prototype.createEthereumboot = function(argv) {
    // ethboot
    // --dev --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --nodekeyhex=091bd6067cb4612df85d9c1ff85cc47f259ced4d4cd99816b14f35650f59c322
    // ethpeer
    // --dev --networkid=636393 --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable --datadir=~/.ethereum/devchain --bootnodes="enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@${BOOTNODE_IP}:30303"
    var image = 'y12docker/dltdojo-ethgo'
    var network = argv.network
    var replicas = 1
    var name = 'ethboot'
    var command = ['/startboot.sh']
    var args = []
    this.createService(image, name, network, command, args, replicas)
}

Dltdocker.prototype.createEthereumpeer = function(argv) {
    var image = 'y12docker/dltdojo-ethgo'
    var network = argv.network
    var replicas = argv.dojo.eth || 1
    var name = 'ethpeer'
    var command = ['/startpeer.sh']
    var args = []
    this.createService(image, name, network, command, args, replicas)
}

Dltdocker.prototype.createEthparitypoa = function(argv) {
    var image = 'y12docker/dltdojo-ethparity:1.5.0'
    var network = argv.network
    var replicas = 1
    var name = 'ethpoa0'
    var command = ['/startpoa.sh', 'node0']
    var args = []
    this.createService(image, name, network, command, args, replicas)
    name = 'ethpoa1'
    command = ['/startpoa.sh', 'node1', 'ethpoa0']
    this.createService(image, name, network, command, args, replicas)
}

Dltdocker.prototype.createEthparitypeer = function(argv) {
    var image = 'y12docker/dltdojo-ethparity:1.5.0'
    var network = argv.network
    var replicas = argv.dojo.eth || 1
    var name = 'ethpoapeer'
    var command = ['/startpoa.sh', 'peer', 'ethpoa0']
    var args = []
    this.createService(image, name, network, command, args, replicas)
}

Dltdocker.prototype.createBtcAbe = function(argv) {
    var image = 'y12docker/dltdojo-abe'
    var network = argv.network
    var replicas = 1
    var name = 'btcabe'
    var command = ["/start.sh"]
    var args = []
    var ports = [{
        "Protocol": "tcp",
        "PublishedPort": 12750,
        "TargetPort": 12750,
        "PublishMode": "host"
    }]
    this.createService(image, name, network, command, args, replicas, ports)
}

Dltdocker.prototype.createBtcIquexp = function(argv) {
    var image = 'y12docker/dltdojo-iquexp'
    var network = argv.network
    var replicas = 1
    var name = 'btciquexp'
    var command = ["/start.sh"]
    var args = []
    var ports = [{
        "Protocol": "tcp",
        "PublishedPort": 12751,
        "TargetPort": 3001,
        "PublishMode": "host"
    }]
    this.createService(image, name, network, command, args, replicas, ports)
}

Dltdocker.prototype.createBtcJorexp = function(argv) {
    var image = 'y12docker/dltdojo-jorexp'
    var network = argv.network
    var replicas = 1
    var name = 'btcjorexp'
    var command = ["/start.sh"]
    var args = []
    var ports = [{
        "Protocol": "tcp",
        "PublishedPort": 12752,
        "TargetPort": 8080,
        "PublishMode": "host"
    }]
    this.createService(image, name, network, command, args, replicas, ports)
}

Dltdocker.prototype.createNetwork = function(serviceName) {
    // https://docs.docker.com/engine/api/v1.25/#operation/NetworkCreate
    // { Error: (HTTP code 403) unexpected - The network bridge cannot be used with services. Only networks scoped to the swarm can be used, such as those created with the overlay driver.
    var opt = {
        "Name": serviceName,
        "Driver": "overlay",
        "Scope": "swarm",
        "IPAM": {
            "Driver": "default",
             "Config": [{
                 "Subnet": "10.0.67.0/24",
                 "Gateway": "10.0.67.1"
             }]
         }
    }
    console.log(opt)
    return new Promise((resolve, reject)=>{
        this.docker.createNetwork(opt, function(err, network) {
            if(!err){
                network.inspect((err,resp)=>{
                    if (!err) {
                        resolve(resp)
                    } else {
                        reject(err)
                    }
                })
            }else{
                reject(err)
            }
        })
    })

}

Dltdocker.prototype.getNetwork = function(id) {
    return new Promise((resolve, reject) => {
        this.docker.getNetwork(id).inspect((err, resp) => {
            if (!err) {
                resolve(resp)
            } else {
                reject(err)
            }
        })
    })
}

Dltdocker.prototype.info = function(r) {
    this.docker.listContainers({
        all: false
    }, (err, containers) => {
        DU.logj(containers)
        //console.log(err, containers);
        //console.log('ALL: ' + containers.length);
        //containers.forEach(containerInfo => {
        // docker.getContainer(containerInfo.Id).stop(cb);
        // console.log(containerInfo)
        //});
    })
}

Dltdocker.ShowScript = function(name) {
    console.log(fs.readFileSync(`scripts/${name}.sh`, "utf8"))
}

Dltdocker.prototype.start = function(argv) {
    var dd = this
    switch (argv.serviceName) {
        case 'dojo':
            dd.createDltdojo(argv)
            if (argv.dojo.btc) {
                dd.createBitcoinboot(argv)
                dd.createBitcoinpeer(argv)
            }
            if (argv.dojo.eth) {
                dd.createEthereumboot(argv)
                dd.createEthereumpeer(argv)
            }
            break;
        case 'tiguan2':
            dd.createDltdojo(argv)
            argv.dojo.btc = argv.dojo.btc || 3
            argv.dojo.eth = argv.dojo.eth || 3
            dd.createBitcoinboot(argv)
            dd.createBitcoinpeer(argv)
            dd.createEthereumboot(argv)
            dd.createEthereumpeer(argv)
            dd.createMariadb(argv)
            dd.createMongo(argv)
            break;
        case 'ethpoadev':
            Dltdocker.ShowScript('ethpoadev')
            dd.createDltdojo(argv)
            argv.dojo.eth = argv.dojo.eth || 3
            dd.createEthparitypoa(argv)
            dd.createEthparitypeer(argv)
            break;
        case 'dltdojo':
            dd.createDltdojo(argv)
            break;
        case 'btc':
            Dltdocker.ShowScript('btc')
            dd.createDltdojo(argv)
            argv.dojo.btc = argv.dojo.btc || 3
            dd.createBitcoinboot(argv)
            dd.createBitcoinpeer(argv)
            dd.createBtcAbe(argv)
            break;
        case 'btcexp':
            Dltdocker.ShowScript('btcexp')
            dd.createDltdojo(argv)
            argv.dojo.btc = argv.dojo.btc || 3
            dd.createBitcoinboot(argv)
            dd.createBitcoinpeer(argv)
            dd.createBtcAbe(argv)
            dd.createBtcIquexp(argv)
            dd.createBtcJorexp(argv)
            break;
        case 'eth':
            dd.createEthereumboot(argv)
            dd.createEthereumpeer(argv)
            break;
        case 'btcpeer':
            dd.createBitcoinpeer(argv)
            break;
        case 'btcboot':
            dd.createBitcoinboot(argv)
            break;
        case 'ethboot':
            dd.createEthereumboot(argv)
            break;
        case 'ethpeer':
            dd.createEthereumpeer(argv)
            break;
        case 'mariadb':
            dd.createMariadb(argv)
            break;
        case 'mongo':
            dd.createMongo(argv)
            break;
        default:
            console.log('Default:', argv)
    }
}

Dltdocker.prototype.networkStart = function(net, argv){
    var config0 = net.IPAM.Config[0]
    argv.subnet = config0.Subnet
    argv.dojo = argv.dojo || {}
    console.log(argv)
    this.start(argv)
}

Dltdocker.ServiceArgs = function(argv) {
    var dd = new Dltdocker()
    var docker = dd.docker
    if (argv.start) {
        if(argv.network){
            dd.getNetwork(argv.network).then(net => {
                dd.networkStart(net, argv)
            }).catch(err => console.log(err))
        }else{
            // create new network
            // Error 403  unexpected - The network bridge cannot be used with services. Only networks scoped to the swarm can be used, such as those created with the overlay driver.
            //dd.createNetwork(argv.serviceName).then(net=>{
            //    dd.networkStart(net, argv)
            //}).catch(err => console.log(err))
        }
    } else if (argv.stop) {
        switch (argv.serviceName) {
            case 'dojo':
                ['dltdojo', 'btcboot', 'btcpeer', 'ethboot', 'ethpeer'].forEach((e, i, a) => {
                    docker.getService(e).remove(DU.callback)
                })
                break;
            case 'tiguan2':
                ['dltdojo', 'btcboot', 'btcpeer', 'ethboot', 'ethpeer', 'mariadb', 'mongo'].forEach((e, i, a) => {
                    docker.getService(e).remove(DU.callback)
                })
                break;
            case 'ethpoadev':
                ['dltdojo', 'ethpoa0', 'ethpoa1', 'ethpoapeer'].forEach((e, i, a) => {
                    docker.getService(e).remove(DU.callback)
                })
                break;
            case 'btc':
                ['dltdojo', 'btcboot', 'btcpeer', 'btcabe'].forEach((e, i, a) => {
                    docker.getService(e).remove(DU.callback)
                })
                break;
            case 'btcexp':
                ['dltdojo', 'btcboot', 'btcpeer', 'btcabe', 'btciquexp','btcjorexp'].forEach((e, i, a) => {
                    docker.getService(e).remove(DU.callback)
                })
                break;
            case 'eth':
                ['ethboot', 'ethpeer'].forEach((e, i, a) => {
                    docker.getService(e).remove(DU.callback)
                })
                break;
            default:
                docker.getService(argv.serviceName).remove(DU.callback)
                break;
        }
    }
}

Dltdocker.Args = function(argv) {
    var dd = new Dltdocker()

    switch (argv.cmd1) {
        case 'ps':
            dd.info()
            break;
        case 'network':
            if (argv.cmd2) {
                dd.getNetwork(argv.cmd2).then(netresp => {
                    var config0 = netresp.IPAM.Config[0]
                    console.log(argv.debug ? netresp : config0)
                })
            } else {
                console.log(argv)
            }
            break;
        default:
            console.log(argv)

    }
}

module.exports = Dltdocker
