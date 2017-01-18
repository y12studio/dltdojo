https://github.com/hyperledger/fabric

https://github.com/hyperledger/fabric/blob/master/docs/dev-setup/build.md

https://jira.hyperledger.org/projects/FAB/issues/FAB-1594?filter=allopenissues

```
$ cd $GOPATH/src/github.com/hyperledger
$ git clone --single-branch -b master --depth 1 http://gerrit.hyperledger.org/r/fabric
$ cd fabric
$ make dist-clean docker
$ docker images | grep hyperledger
// cd dltdojo/dockerfiles/fabric
$ docker build -t y12docker/dltdojo-fabgopeer:dev .
$ docker build -f Dockerfile.orderer -t y12docker/dltdojo-fabgoorderer:dev .
```
