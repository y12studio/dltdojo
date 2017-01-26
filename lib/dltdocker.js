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

Dltdocker.prototype.dltdojo = function(argv) {
    // docker service create --name dltdojo --network devbtcnet --replicas 1 --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock y12docker/dltdojo start
    var network = 'devbtcnet'
    var opts = {
        "Name": "dltdojo",
        "Networks": [{
            "Target": network,
            "Aliases": []
        }],
        "TaskTemplate": {
            "ContainerSpec": {
                "Image": "y12docker/dltdojo",
                "Command": ["node","index.js","start"],
                "Mounts": [{
                    Source: '/var/run/docker.sock',
                    Target: '/var/run/docker.sock',
                    Type: 'bind'
                }],
                "Args": []
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
                "Replicas": 1
            }
        },
        "UpdateConfig": {
            "Parallelism": 1
        },
        "EndpointSpec": {}
    }

    this.docker.createService(opts, DU.log)

}

Dltdocker.prototype.bitcoin = function(argv) {
    // https://docs.docker.com/engine/api/v1.25/#operation/ServiceCreate
    // https://godoc.org/github.com/docker/docker/api/types/swarm#ContainerSpec
    // docker service create --name bitcoinx3 --network devbtcnet --replicas 3 y12docker/dltdojo-bitcoin bitcoind \
    //   -rpcallowip=10.0.9.0/24 -txindex -rpcport=18332 -port=18333 -addnode=bitcoin:18333
    var rpcallowip = '10.0.9.0'
    var network = 'devbtcnet'
    var num = 3
    var optsPeer = {
        "Name": "btcpeer",
        "Networks": [{
            "Target": network,
            "Aliases": []
        }],
        "TaskTemplate": {
            "ContainerSpec": {
                "Image": "y12docker/dltdojo-bitcoin",
                "Command": ["bitcoind"],
                "Args": ["-rpcport=18332", "-port=18333", "-txindex", `-rpcallowip=${rpcallowip}/24`, "-addnode=btcboot:18333"]
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
                "Replicas": num
            }
        },
        "UpdateConfig": {
            "Parallelism": 1
        },
        "EndpointSpec": {}
    }

    // docker service create --name bitcoin --network devbtcnet --replicas 1 -p 18332:18332 -p 18333:18333 y12docker/dltdojo-bitcoin bitcoind \
    //   -rpcallowip=10.0.9.0/24 -txindex -rpcport=18332 -port=18333
    var optsBoot = {
        "Name": "btcboot",
        "Networks": [{
            "Target": network,
            "Aliases": []
        }],
        "TaskTemplate": {
            "ContainerSpec": {
                "Image": "y12docker/dltdojo-bitcoin",
                "Command": ["bitcoind"],
                "Args": ["-rpcport=18332", "-port=18333", "-txindex", `-rpcallowip=${rpcallowip}/24`]
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
                "Replicas": 1
            }
        },
        "UpdateConfig": {
            "Parallelism": 1
        },
        "EndpointSpec": {
            "Ports": [{
                "Protocol": "tcp",
                "PublishedPort": 18332,
                "TargetPort": 18332
            }, {
                "Protocol": "tcp",
                "PublishedPort": 18333,
                "TargetPort": 18333
            }]
        }
    }
    this.docker.createService(optsBoot, DU.log)
    this.docker.createService(optsPeer, DU.log)
}

Dltdocker.prototype.redis = function() {
    // https://docs.docker.com/engine/api/v1.25/#operation/ServiceCreate
    // https://godoc.org/github.com/docker/docker/api/types/swarm#ContainerSpec
    var opts = {
        "Name": "redis",
        "TaskTemplate": {
            "ContainerSpec": {
                "Image": "redis"
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
                "Replicas": 1
            }
        },
        "UpdateConfig": {
            "Parallelism": 1
        },
        "EndpointSpec": {
            "ExposedPorts": [{
                "Protocol": "tcp",
                "Port": 6379
            }]
        }
    }
    this.docker.createService(opts, DU.log)
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

Dltdocker.Args = function(argv) {
    var dd = new Dltdocker()
    if (argv.method == 'ps') {
        // console.log(argv)
        dd.info()
    } else if (argv.method == 'bitcoin') {
        dd.bitcoin(argv)
    } else if (argv.method == 'dltdojo') {
        dd.dltdojo(argv)
    }
}

module.exports = Dltdocker
