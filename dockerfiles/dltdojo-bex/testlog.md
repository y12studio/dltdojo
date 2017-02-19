```
$ docker build -t y12docker/dltdojo-bex .
$ docker images | grep dltdojo-bex
y12docker/dltdojo-bex  latest  33d0030db252   4 minutes ago       110 MB
$ docker run -it --rm y12docker/dltdojo-bex bitcoind --version
Bitcoin Core Daemon version v0.13.2.0-g0d71914
Copyright (C) 2009-2016 The Bitcoin Core developers
$ docker run -it --rm y12docker/dltdojo-bex geth version
Geth
Version: 1.5.9-stable
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.6.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ docker run -it --rm y12docker/dltdojo-bex /startbtc.sh
$ docker run -it --rm y12docker/dltdojo-bex /starteth.sh
```
