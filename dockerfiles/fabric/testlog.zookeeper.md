### 2017-04-17T15:37:58+0800

* https://github.com/hyperledger/fabric/tree/master/images/zookeeper
* https://zookeeper.apache.org/doc/r3.3.3/zookeeperStarted.html
* numbcoder/node-redis-failover: A redis failover solution based on ZooKeeper https://github.com/numbcoder/node-redis-failover

```
$ docker run -it --rm --entrypoint bash hyperledger/fabric-zookeeper:x86_64-1.0.0-alpha
# bin/zkServer.sh start
# bin/zkCli.sh -server 127.0.0.1:2181
[zk: 127.0.0.1:2181(CONNECTED) 0] help
ZooKeeper -server host:port cmd args
        stat path [watch]
        set path data [version]
        ls path [watch]
        delquota [-n|-b] path
        ls2 path [watch]
        setAcl path acl
        setquota -n|-b val path
        history
        redo cmdno
        printwatches on|off
        delete path [version]
        sync path
        listquota path
        rmr path
        get path [watch]
        create [-s] [-e] path data acl
        addauth scheme auth
        quit
        getAcl path
        close
        connect host:port
[zk: 127.0.0.1:2181(CONNECTED) 1] ls /
[zookeeper]
[zk: 127.0.0.1:2181(CONNECTED) 2] create /zk_test my_data
Created /zk_test
[zk: 127.0.0.1:2181(CONNECTED) 3] ls /
[zookeeper, zk_test]
[zk: 127.0.0.1:2181(CONNECTED) 4] get /zk_test
my_data
cZxid = 0x2
ctime = Mon Apr 17 07:53:02 UTC 2017
mZxid = 0x2
mtime = Mon Apr 17 07:53:02 UTC 2017
pZxid = 0x2
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 7
numChildren = 0
[zk: 127.0.0.1:2181(CONNECTED) 5] set /zk_test dltdojo
cZxid = 0x2
ctime = Mon Apr 17 07:53:02 UTC 2017
mZxid = 0x3
mtime = Mon Apr 17 07:53:58 UTC 2017
pZxid = 0x2
cversion = 0
dataVersion = 1
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 7
numChildren = 0
[zk: 127.0.0.1:2181(CONNECTED) 6] get /zk_test
dltdojo
cZxid = 0x2
ctime = Mon Apr 17 07:53:02 UTC 2017
mZxid = 0x3
mtime = Mon Apr 17 07:53:58 UTC 2017
pZxid = 0x2
cversion = 0
dataVersion = 1
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 7
numChildren = 0

```
