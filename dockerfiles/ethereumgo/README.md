ethereum/client-go - Docker Hub  https://hub.docker.com/r/ethereum/client-go/

Building private Ethereum networks with Docker Compose | Capgemini Engineering

https://capgemini.github.io/blockchain/ethereum-docker-compose/

Capgemini-AIE/ethereum-docker: Ethereum development and test single and multi-node clusters using Docker

https://github.com/Capgemini-AIE/ethereum-docker

Building an Ethereum playground with Docker (part 2 — Docker Image) – Medium

https://medium.com/@andrenit/buildind-an-ethereum-playground-with-docker-part-2-docker-image-928f8ceaac50

Building an Ethereum Environment with Docker

http://blog.carl.pro/2016/06/building-an-ethereum-environment-with-docker/

### 2017-02-21T16:18:29+0800
```
$ docker build -t y12docker/dltdojo-ethgo:1.4.7 -f Dockerfile.1.4.7 .
$ docker run -it --rm y12docker/dltdojo-ethgo:1.4.7 geth version
Geth
Version: 1.4.7-stable
Protocol Versions: [63 62 61]
Network Id: 1
Go Version: go1.7.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ docker push y12docker/dltdojo-ethgo:1.4.7
```
### Wed Jan 11 07:30:34 CST 2017
```
$ docker build -t y12docker/dltdojo-ethgo .
$ docker push y12docker/dltdojo-ethgo:latest
```
