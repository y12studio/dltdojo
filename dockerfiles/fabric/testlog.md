## TESTLOG

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
