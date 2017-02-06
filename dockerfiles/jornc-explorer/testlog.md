### 2017-02-06T11:34:15+0800
```
$ docker run -d -p 18080:8080 y12docker/dltdojo-jorexp /start.sh
# jornc explorer url http://host_ip:18080/
$ docker exec -it 5cfdfbee76 bash
# bitcoin-cli generate 101 && bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 5.00
# bitcoin-cli generate 1 && bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 3.00
# bitcoin-cli generate 2 && bitcoin-cli sendtoaddress mvbnrCX3bg1cDRUu8pkecrvP6vQkSLDSou 2.00
# bitcoin-cli generate 1
```
### 2017-02-06T09:39:00+0800
```
$ docker build -t y12docker/dltdojo-jorexp .
$ docker run -d -p 18080:8080 y12docker/dltdojo-jorexp
$ docker ps
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                     NAMES
8e60d8f21d11        y12docker/dltdojo-jorexp   "/docker-entrypoin..."   4 seconds ago       Up 3 seconds        0.0.0.0:18080->8080/tcp   goofy_mahavira
# jornc explorer url http://host_ip:18080/
# search -- config -- login -- configure
$ docker exec -it 8e60d8f21 bash
# find / -name 'yoghurt.conf'
/tmp/jetty/jetty-0.0.0.0-8080-ROOT.war-_-any-8716256402009773891.dir/webapp/WEB-INF/classes/yoghurt.conf
# cat /tmp/jetty/jetty-0.0.0.0-8080-ROOT.war-_-any-8716256402009773891.dir/webapp/WEB-INF/classes/yoghurt.conf
#
#Mon Feb 06 01:49:13 GMT 2017
com.yoghurt.crypto.subtitle=Simple, pure, open
com.yoghurt.crypto.password=cc7ce58688b3f02dc8c580c3a0949c92dbd6109bf09adfb388f039cf853f6f33
com.yoghurt.crypto.projectDonationAddress=39XFme16GP2FMi2TCStZ2ciNNqe19jwDJb
com.yoghurt.crypto.node.host=localhost
com.yoghurt.crypto.node.rpcUser=user
com.yoghurt.crypto.node.port=18332
com.yoghurt.crypto.hostDonationAddress=
com.yoghurt.crypto.title=Blockchain Reader
com.yoghurt.crypto.source=NODE
com.yoghurt.crypto.node.rpcPass=pass
```
### 2017-02-06T09:20:00+0800
```
$ git clone --depth=1 https://github.com/JornC/bitcoin-transaction-explorer.git
$ cd bitcoin-transaction-explorer && mvn install
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO]
[INFO] Bitcoin transaction explorer ...................... SUCCESS [11.072s]
[INFO] Bitcoin transaction explorer Shared ............... SUCCESS [2:48.772s]
[INFO] Bitcoin transaction explorer Core ................. SUCCESS [1:35.756s]
[INFO] Bitcoin transaction explorer Server ............... SUCCESS [17.977s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 4:53.712s
[INFO] Finished at: Mon Feb 06 08:28:47 CST 2017
[INFO] Final Memory: 54M/199M
$ ls -al bitcoin-transactions-server/target
total 13772
drwxrwxr-x 8 lin lin     4096 Feb  6 08:28 .
drwxrwxr-x 4 lin lin     4096 Feb  6 08:28 ..
drwxrwxr-x 6 lin lin     4096 Feb  6 08:28 bitcoin-transactions-server-0.1
-rw-rw-r-- 1 lin lin    63742 Feb  6 08:28 bitcoin-transactions-server-0.1-classes.jar
-rw-rw-r-- 1 lin lin 14001400 Feb  6 08:28 bitcoin-transactions-server-0.1.war
drwxrwxr-x 3 lin lin     4096 Feb  6 08:28 classes
drwxrwxr-x 3 lin lin     4096 Feb  6 08:28 generated-sources
drwxrwxr-x 2 lin lin     4096 Feb  6 08:28 maven-archiver
drwxrwxr-x 2 lin lin     4096 Feb  6 08:28 surefire
drwxrwxr-x 3 lin lin     4096 Feb  6 08:28 war
$ cp bitcoin-transactions-server/target/bitcoin-transactions-server-0.1.war git_path/dltdojo/dockerfiles/jornc-explorer
```
