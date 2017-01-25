https://github.com/hyperledger/fabric

fabric v1.0 issues : https://jira.hyperledger.org/issues/?jql=project%20%3D%20FAB%20AND%20resolution%20%3D%20Unresolved%20AND%20fixVersion%20%3D%20v1.0

https://github.com/hyperledger/fabric/blob/master/docs/dev-setup/build.md

https://jira.hyperledger.org/projects/FAB/issues/FAB-1594?filter=allopenissues

https://github.com/hyperledger/fabric-sdk-node/blob/master/test/fixtures/docker-compose.yml

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
