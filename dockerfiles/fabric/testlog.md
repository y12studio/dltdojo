## TESTLOG

### Wed Jan 18 12:26:56 CST 2017

https://github.com/hyperledger/fabric/blob/master/docs/channel-setup.md

build y12docker/dltdojo-fabgopeer with examples
```
$ docker build -t y12docker/dltdojo-fabgopeer:dev .
$ dcup
$ vp1 peer channel create -c myc1
$ vp1 ls -al
-rw-r--r--    1 0        0             5904 Jan 18 07:09 myc1.block
$ vp1 peer channel join -b myc1.block
$ vp1 peer chaincode deploy -C myc1 -n mycc -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'
$ vp1 peer chaincode invoke -C myc1 -n mycc -c '{"Args":["invoke","a","b","10"]}'
$ vp1 peer chaincode query -C myc1 -n mycc -c '{"Args":["query","a"]}'
$ vp0 peer chaincode query -C myc1 -n mycc -c '{"Args":["query","a"]}'
Error: Error endorsing query: rpc error: code = 2 desc = Failed to deserialize creator identity, err MSP DEFAULT is unknown
// Join a channel by vp1
$ vp1 sh
# CORE_PEER_ADDRESS=peer0:7051 peer channel join -b myc1.block
# exit
// vp1 sh -c "export CORE_PEER_ADDRESS=peer0:7051 ; peer channel join -b myc1.block"
$ vp0 peer chaincode query -C myc1 -n mycc -c '{"Args":["query","a"]}'
Query Result: 90

```
mount host's examples

```
# ./examples/:/opt/gopath/src/github.com/hyperledger/fabric/examples/
$ dccup
$ dcc run cli
/opt/gopath/src/github.com/hyperledger/fabric/peer #

CORE_PEER_COMMITTER_LEDGER_ORDERER=orderer:5005 peer channel create -c myc1

CORE_PEER_COMMITTER_LEDGER_ORDERER=orderer:5005 CORE_PEER_ADDRESS=peer0:7051 peer channel join -b myc1.block

CORE_PEER_ADDRESS=peer0:7051 CORE_PEER_COMMITTER_LEDGER_ORDERER=orderer:5005 peer chaincode deploy -C myc1 -n mycc -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'

CORE_PEER_ADDRESS=peer0:7051 CORE_PEER_COMMITTER_LEDGER_ORDERER=orderer:5005 peer chaincode invoke -C myc1 -n mycc -c '{"Args":["invoke","a","b","10"]}'

CORE_PEER_ADDRESS=peer0:7051 CORE_PEER_COMMITTER_LEDGER_ORDERER=orderer:5005 peer chaincode query -C myc1 -n mycc -c '{"Args":["query","a"]}'
```
### Wed Jan 18 10:35:01 CST 2017
```
$ cd /tmp
$ curl -O https://storage.googleapis.com/golang/go1.7.4.linux-amd64.tar.gz
$ tar -C /usr/local -xzf go1.7.4.linux-amd64.tar.gz
$ echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile
$ echo 'export GOPATH=$HOME/work' >> $HOME/.profile
$ mkdir -p $GOPATH/src/github.com/y12studio/hello
$ cat $GOPATH/src/github.com/y12studio/hello/hello.go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
$ go install github.com/y12studio/hello
$ ls $GOPATH/bin/
hello
$ $GOPATH/bin/hello
hello, world
$ mkdir -p $GOPATH/src/github.com/hyperledger
$ cd $GOPATH/src/github.com/hyperledger
$ git clone --single-branch -b master --depth 1 http://gerrit.hyperledger.org/r/fabric
$ cd $GOPATH/src/github.com/hyperledger/fabric
// 'make dist-clean all' time-consuming
$ make dist-clean docker
$ docker images | grep hyperledger
hyperledger/fabric-testenv latest                          55893c1a7c60        26 seconds ago      1.281 GB
hyperledger/fabric-testenv x86_64-0.7.0-snapshot-75a4c82   55893c1a7c60        26 seconds ago      1.281 GB
hyperledger/fabric-orderer latest                          b30d966e470e        31 seconds ago      20.93 MB
hyperledger/fabric-orderer x86_64-0.7.0-snapshot-75a4c82   b30d966e470e        31 seconds ago      20.93 MB
hyperledger/fabric-peer latest                          02314639973b        38 seconds ago      25.9 MB
hyperledger/fabric-peer x86_64-0.7.0-snapshot-75a4c82   02314639973b        38 seconds ago      25.9 MB
hyperledger/fabric-runtime latest                          c29acc79c3bc        40 seconds ago      5.055 MB
hyperledger/fabric-runtime x86_64-0.7.0-snapshot-75a4c82   c29acc79c3bc        40 seconds ago      5.055 MB
$ dcup
$ dc ps
     Name                 Command             State           Ports
----------------------------------------------------------------------------
devhf_vp1_1      /bin/sh -c peer node start   Up
fabric-orderer   orderer                      Up      0.0.0.0:7050->7050/tcp

$ vp1 peer version
2017-01-18 03:54:18.294 UTC [msp] getPemMaterialFromDir -> INFO 001 Reading directory /etc/hyperledger/fabric/msp/sampleconfig/cacerts
2017-01-18 03:54:18.295 UTC [msp] getPemMaterialFromDir -> INFO 002 Inspecting file /etc/hyperledger/fabric/msp/sampleconfig/cacerts/cacert.pem
2017-01-18 03:54:18.295 UTC [msp] getPemMaterialFromDir -> INFO 003 Reading directory /etc/hyperledger/fabric/msp/sampleconfig/signcerts
2017-01-18 03:54:18.295 UTC [msp] getPemMaterialFromDir -> INFO 004 Inspecting file /etc/hyperledger/fabric/msp/sampleconfig/signcerts/peer.pem
2017-01-18 03:54:18.296 UTC [msp] getPemMaterialFromDir -> INFO 005 Reading directory /etc/hyperledger/fabric/msp/sampleconfig/admincerts
2017-01-18 03:54:18.296 UTC [msp] getPemMaterialFromDir -> INFO 006 Inspecting file /etc/hyperledger/fabric/msp/sampleconfig/admincerts/admincert.pem
2017-01-18 03:54:18.296 UTC [msp] getPemMaterialFromDir -> INFO 007 Reading directory /etc/hyperledger/fabric/msp/sampleconfig/keystore
2017-01-18 03:54:18.296 UTC [msp] getPemMaterialFromDir -> INFO 008 Inspecting file /etc/hyperledger/fabric/msp/sampleconfig/keystore/key.pem
2017-01-18 03:54:18.297 UTC [msp] NewBccspMsp -> INFO 009 Creating BCCSP-based MSP instance
2017-01-18 03:54:18.297 UTC [peer] GetLocalMSP -> INFO 00a Created new local MSP
2017-01-18 03:54:18.297 UTC [msp] Setup -> INFO 00b Setting up MSP instance DEFAULT
2017-01-18 03:54:18.298 UTC [msp] newIdentity -> INFO 00c Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 03:54:18.298 UTC [msp] newIdentity -> INFO 00d Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 03:54:18.298 UTC [msp] newIdentity -> INFO 00e Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 03:54:18.315 UTC [msp] newSigningIdentity -> INFO 00f Creating signing identity instance for ID &{DEFAULT DEFAULT}
2017-01-18 03:54:18.315 UTC [peer] GetManagerForChain -> INFO 010 Created new msp manager for chain **TEST_CHAINID**
2017-01-18 03:54:18.315 UTC [msp] Setup -> INFO 011 Setting up the MSP manager (1 msps)
2017-01-18 03:54:18.315 UTC [msp] Setup -> INFO 012 Setting up MSP
2017-01-18 03:54:18.315 UTC [msp] NewBccspMsp -> INFO 013 Creating BCCSP-based MSP instance
2017-01-18 03:54:18.316 UTC [msp] Setup -> INFO 014 Setting up MSP instance DEFAULT
2017-01-18 03:54:18.316 UTC [msp] newIdentity -> INFO 015 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 03:54:18.316 UTC [msp] newIdentity -> INFO 016 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 03:54:18.317 UTC [msp] newIdentity -> INFO 017 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 03:54:18.317 UTC [msp] newSigningIdentity -> INFO 018 Creating signing identity instance for ID &{DEFAULT DEFAULT}
2017-01-18 03:54:18.317 UTC [msp] Setup -> INFO 019 MSP manager setup complete, setup 1 msps
Fabric peer server version 0.7.0-snapshot-75a4c82

$ vp1 peer chaincode deploy -n test_cc -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'
panic: runtime error: index out of range
```
### Wed Jan 18 10:35:01 CST 2017
```
$ source alias.sh
$ bdev
$ fab peer --help
2017-01-18 01:38:53.002 UTC [msp] getPemMaterialFromDir -> INFO 001 Reading directory msp/sampleconfig/cacerts
2017-01-18 01:38:53.003 UTC [msp] getPemMaterialFromDir -> INFO 002 Inspecting file msp/sampleconfig/cacerts/cacert.pem
2017-01-18 01:38:53.004 UTC [msp] getPemMaterialFromDir -> INFO 003 Reading directory msp/sampleconfig/signcerts
2017-01-18 01:38:53.004 UTC [msp] getPemMaterialFromDir -> INFO 004 Inspecting file msp/sampleconfig/signcerts/peer.pem
2017-01-18 01:38:53.005 UTC [msp] getPemMaterialFromDir -> INFO 005 Reading directory msp/sampleconfig/admincerts
2017-01-18 01:38:53.005 UTC [msp] getPemMaterialFromDir -> INFO 006 Inspecting file msp/sampleconfig/admincerts/admincert.pem
2017-01-18 01:38:53.005 UTC [msp] getPemMaterialFromDir -> INFO 007 Reading directory msp/sampleconfig/keystore
2017-01-18 01:38:53.006 UTC [msp] getPemMaterialFromDir -> INFO 008 Inspecting file msp/sampleconfig/keystore/key.pem
2017-01-18 01:38:53.006 UTC [msp] NewBccspMsp -> INFO 009 Creating BCCSP-based MSP instance
2017-01-18 01:38:53.006 UTC [peer] GetLocalMSP -> INFO 00a Created new local MSP
2017-01-18 01:38:53.006 UTC [msp] Setup -> INFO 00b Setting up MSP instance DEFAULT
2017-01-18 01:38:53.007 UTC [msp] newIdentity -> INFO 00c Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 01:38:53.007 UTC [msp] newIdentity -> INFO 00d Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 01:38:53.007 UTC [msp] newIdentity -> INFO 00e Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 01:38:53.023 UTC [msp] newSigningIdentity -> INFO 00f Creating signing identity instance for ID &{DEFAULT DEFAULT}
2017-01-18 01:38:53.023 UTC [peer] GetManagerForChain -> INFO 010 Created new msp manager for chain **TEST_CHAINID**
2017-01-18 01:38:53.023 UTC [msp] Setup -> INFO 011 Setting up the MSP manager (1 msps)
2017-01-18 01:38:53.023 UTC [msp] Setup -> INFO 012 Setting up MSP
2017-01-18 01:38:53.023 UTC [msp] NewBccspMsp -> INFO 013 Creating BCCSP-based MSP instance
2017-01-18 01:38:53.023 UTC [msp] Setup -> INFO 014 Setting up MSP instance DEFAULT
2017-01-18 01:38:53.024 UTC [msp] newIdentity -> INFO 015 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 01:38:53.025 UTC [msp] newIdentity -> INFO 016 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 01:38:53.025 UTC [msp] newIdentity -> INFO 017 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-18 01:38:53.025 UTC [msp] newSigningIdentity -> INFO 018 Creating signing identity instance for ID &{DEFAULT DEFAULT}
2017-01-18 01:38:53.025 UTC [msp] Setup -> INFO 019 MSP manager setup complete, setup 1 msps
Usage:
  peer [flags]
  peer [command]

Available Commands:
  chaincode   chaincode specific commands.
  channel     channel specific commands.
  logging     logging specific commands.
  node        node specific commands.
  version     Print fabric peer version.

Flags:
      --logging-level string       Default logging level and overrides, see core.yaml for full syntax
      --test.coverprofile string   Done (default "coverage.cov")
  -v, --version                    Display current version of fabric peer server

Use "peer [command] --help" for more information about a command.
2017-01-18 01:38:53.026 UTC [main] main -> INFO 01a Exiting.....
```
### Sat Jan 14 21:42:35 CST 2017

peerx3
```
$ peer1 chaincode deploy -n test_cc -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'
$ peer1 chaincode invoke -n test_cc -c '{"Args":["query","a"]}'
$ peer2 chaincode invoke -n test_cc -c '{"Args":["query","a"]}'
$ peer1 chaincode invoke -n test_cc -c '{"Args":["query","b"]}'
$ peer2 chaincode invoke -n test_cc -c '{"Args":["query","b"]}'

$ peer2 chaincode invoke -n test_cc -c '{"Args":["invoke","a","b","10"]}'
$ peer2 chaincode invoke -n test_cc -c '{"Args":["query","a"]}'
$ peer1 chaincode invoke -n test_cc -c '{"Args":["query","b"]}'
```
### Sat Jan 14 16:18:58 CST 2017

https://github.com/yeasy/docker-compose-files/tree/master/hyperledger/1.0

```
$ docker pull yeasy/hyperledger-fabric-base:latest \
  && docker pull yeasy/hyperledger-fabric-peer:latest \
  && docker pull yeasy/hyperledger-fabric-orderer:latest \
  && docker pull yeasy/hyperledger-fabric-cop:latest \
  && docker pull yeasy/blockchain-explorer:latest \
  && docker tag yeasy/hyperledger-fabric-peer hyperledger/fabric-peer \
  && docker tag yeasy/hyperledger-fabric-orderer hyperledger/fabric-orderer \
  && docker tag yeasy/hyperledger-fabric-cop hyperledger/fabric-cop \
  && docker tag yeasy/hyperledger-fabric-base hyperledger/fabric-baseimage \
  && docker tag yeasy/hyperledger-fabric-base hyperledger/fabric-ccenv:x86_64-1.0.0-preview
$ source alias.sh
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
fabric-cop         cop server start   Up                 0.0.0.0:8888->88
                   -ca testd ...                         88/tcp
fabric-orderer     orderer            Up                 0.0.0.0:7050->70
                                                         50/tcp
fabric-vp0         peer node start    Up                 7050/tcp, 0.0.0.
                                                         0:7051->7051/tcp
                                                         , 7052/tcp,
                                                         7053/tcp,
                                                         7054/tcp,
                                                         7055/tcp,
                                                         7056/tcp,
                                                         7057/tcp,
                                                         7058/tcp,
                                                         7059/tcp
x
$ sh1 peer --version
2017-01-14 10:17:07.580 UTC [msp] getPemMaterialFromDir -> INFO 001 Reading directory msp/sampleconfig/cacerts
2017-01-14 10:17:07.580 UTC [msp] getPemMaterialFromDir -> INFO 002 Inspecting file msp/sampleconfig/cacerts/cacert.pem
2017-01-14 10:17:07.580 UTC [msp] getPemMaterialFromDir -> INFO 003 Reading directory msp/sampleconfig/signcerts
2017-01-14 10:17:07.580 UTC [msp] getPemMaterialFromDir -> INFO 004 Inspecting file msp/sampleconfig/signcerts/peer.pem
2017-01-14 10:17:07.580 UTC [msp] getPemMaterialFromDir -> INFO 005 Reading directory msp/sampleconfig/admincerts
2017-01-14 10:17:07.580 UTC [msp] getPemMaterialFromDir -> INFO 006 Inspecting file msp/sampleconfig/admincerts/admincert.pem
2017-01-14 10:17:07.581 UTC [msp] getPemMaterialFromDir -> INFO 007 Reading directory msp/sampleconfig/keystore
2017-01-14 10:17:07.581 UTC [msp] getPemMaterialFromDir -> INFO 008 Inspecting file msp/sampleconfig/keystore/key.pem
2017-01-14 10:17:07.581 UTC [msp] NewBccspMsp -> INFO 009 Creating BCCSP-based MSP instance
2017-01-14 10:17:07.581 UTC [peer] GetLocalMSP -> INFO 00a Created new local MSP
2017-01-14 10:17:07.581 UTC [msp] Setup -> INFO 00b Setting up MSP instance DEFAULT
2017-01-14 10:17:07.581 UTC [msp] newIdentity -> INFO 00c Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-14 10:17:07.582 UTC [msp] newIdentity -> INFO 00d Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-14 10:17:07.582 UTC [msp] newIdentity -> INFO 00e Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-14 10:17:07.597 UTC [msp] newSigningIdentity -> INFO 00f Creating signing identity instance for ID &{DEFAULT DEFAULT}
2017-01-14 10:17:07.598 UTC [peer] GetManagerForChain -> INFO 010 Created new msp manager for chain **TEST_CHAINID**
2017-01-14 10:17:07.598 UTC [msp] Setup -> INFO 011 Setting up the MSP manager (1 msps)
2017-01-14 10:17:07.598 UTC [msp] Setup -> INFO 012 Setting up MSP
2017-01-14 10:17:07.598 UTC [msp] NewBccspMsp -> INFO 013 Creating BCCSP-based MSP instance
2017-01-14 10:17:07.598 UTC [msp] Setup -> INFO 014 Setting up MSP instance DEFAULT
2017-01-14 10:17:07.598 UTC [msp] newIdentity -> INFO 015 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-14 10:17:07.598 UTC [msp] newIdentity -> INFO 016 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-14 10:17:07.598 UTC [msp] newIdentity -> INFO 017 Creating identity instance for ID &{DEFAULT IDENTITY}
2017-01-14 10:17:07.599 UTC [msp] newSigningIdentity -> INFO 018 Creating signing identity instance for ID &{DEFAULT DEFAULT}
2017-01-14 10:17:07.599 UTC [msp] Setup -> INFO 019 MSP manager setup complete, setup 1 msps
2017-01-14 10:17:07.599 UTC [logging] InitFromViper -> DEBU 01a Setting default logging level to DEBUG for command 'peer'
Fabric peer server version 1.0.0-preview
2017-01-14 10:17:07.599 UTC [main] main -> INFO 01b Exiting.....
```
