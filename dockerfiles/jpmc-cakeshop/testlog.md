### 2017-02-08T23:20:55+0800
Cakeshop geth unmanaged mode : java.lang.IndexOutOfBoundsException
```
$ docker build -t y12docker/dltdojo-cakeshop .
$ docker run -p 8080:8080 y12docker/dltdojo-cakeshop
INFO 2017-02-08 15:22:08,946 [main] (BlockchainInitializerTask.java:88 ) Storing existing wallet account balances
ERROR 2017-02-08 15:22:08,947 [main] (GethHttpServiceImpl.java:129) RPC call failed - ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:8545
ERROR 2017-02-08 15:22:08,949 [main] (BlockchainInitializerTask.java:95 ) Error reading local wallet
com.jpmorgan.cakeshop.error.APIException: RPC call failed
        at com.jpmorgan.cakeshop.service.impl.GethHttpServiceImpl.executeGethCallInternal(GethHttpServiceImpl.java:130)
        at com.jpmorgan.cakeshop.service.impl.GethHttpServiceImpl.executeGethCall(GethHttpServiceImpl.java:150)
        at com.jpmorgan.cakeshop.service.impl.GethHttpServiceImpl.executeGethCall(GethHttpServiceImpl.java:144)
// geth.url=http\://ethboot\:8545
$ dcup
$ dc ps
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
jpmccake_cakesho   /bin/tini --       Up                 0.0.0.0:8080->80
p_1                /usr/local/bi                         80/tcp, 8102/tcp
                   ...
jpmccake_ethdev_   /start.sh dev      Up                 30303/tcp, 0.0.0
1                                                        .0:8545->8545/tcp
$ dc logs cakeshop
cakeshop_1  | ERROR 2017-02-08 15:34:19,385 [main] (SpringApplication.java:827) Application startup failed
cakeshop_1  | java.lang.IndexOutOfBoundsException: Index: 0, Size: 0
cakeshop_1  |   at java.util.ArrayList.rangeCheck(ArrayList.java:653)
cakeshop_1  |   at java.util.ArrayList.get(ArrayList.java:429)
cakeshop_1  |   at com.jpmorgan.cakeshop.service.impl.ContractServiceImpl.getAddress(ContractServiceImpl.java:326)
```
### 2017-02-08T22:59:33+0800
```
$ docker pull jpmc/cakeshop
$ docker run -p 8080:8080 jpmc/cakeshop
Defaulting to spring profile: local
Extracting geth to /opt/cakeshop/data/geth
 INFO 2017-02-08 15:02:46,818 [main] (StartupInfoLogger.java:48 ) Starting SpringBootApplication on 8aa7bcb1db28 with PID 6 (started by cakeshop in /opt/cakeshop)
 INFO 2017-02-08 15:02:46,820 [main] (SpringApplication.java:670) The following profiles are active: container,spring-boot,local
 INFO 2017-02-08 15:02:48,733 [main] (AppConfig.java:113) eth.config.dir=/opt/cakeshop/data/local
 INFO 2017-02-08 15:02:48,734 [main] (AppConfig.java:96 ) Initializing new config from file:/opt/cakeshop/cakeshop.war!/WEB-INF/classes!/config/application-local.properties
 INFO 2017-02-08 15:02:48,738 [main] (AppConfig.java:144) Loading config from /opt/cakeshop/data/local/application.properties


********************************************************************************
Running pre-flight checks...

Testing ethereum data dir path
/opt/cakeshop/data/local/ethereum
OK

Testing db path
/opt/cakeshop/data/local/db
OK

Testing geth server binary
OK

Testing solc compiler binary
OK

ALL TESTS PASSED!
********************************************************************************

 INFO 2017-02-08 15:02:55,956 [main] (AppStartup.java:110) Autostarting geth node
I0208 15:02:55.996793 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /opt/cakeshop/data/local/ethereum/geth/chaindata
I0208 15:02:56.016969 ethdb/database.go:176] closed db:/opt/cakeshop/data/local/ethereum/geth/chaindata
I0208 15:02:56.017581 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /opt/cakeshop/data/local/ethereum/geth/chaindata
I0208 15:02:56.027345 cmd/geth/main.go:255] successfully wrote genesis block and/or chain rule set: d93b8da4c2f48c98e2cb76bef403ec22cada28331946218487b0fd1335e52bdd
 INFO 2017-02-08 15:02:56,120 [main] (ProcessUtils.java:199) Creating pid file: /opt/cakeshop/data/local/geth.pid
I0208 15:02:56.154162 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /opt/cakeshop/data/local/ethereum/geth/chaindata
I0208 15:02:56.166875 ethdb/database.go:176] closed db:/opt/cakeshop/data/local/ethereum/geth/chaindata
I0208 15:02:56.167648 node/node.go:176] instance: Geth/cakeshop/v1.5.4-stable-b70acf3c/linux/go1.7
I0208 15:02:56.167756 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /opt/cakeshop/data/local/ethereum/geth/chaindata
I0208 15:02:56.175727 eth/db_upgrade.go:346] upgrading db log bloom bins
I0208 15:02:56.175843 eth/db_upgrade.go:354] upgrade completed in 131.581µs
I0208 15:02:56.175870 eth/backend.go:189] Protocol Versions: [63 62], Network Id: 1006
...
I0208 15:03:09.383206 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 3%
I0208 15:03:12.334386 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 4%
I0208 15:03:15.256730 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 5%
```
