### 2017-01-25T21:32:04+0800
16 CPUs / 48 GB / DigitalOcean
```
# docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 20 --dojo.eth 20 --dojo.fab 20 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
# docker run -v $(pwd):/tmp y12docker/dltdojo build --bulkuser --num 20 --prefix tg --dojoname tiguan1
# chmod a+x djsetup.sh ; ./djsetup.sh
# source aliastiguan1.sh
# docker pull yeasy/hyperledger-fabric-base:latest
# docker tag yeasy/hyperledger-fabric-base hyperledger/fabric-ccenv:x86_64-0.7.0-snapshot-75a4c82
# dcup

// ethp miner --start
# ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -n 20
  PID  PPID CMD                         %MEM %CPU
13461  8567 /geth --networkid=680256 --  2.4 41.2
14050 12741 /geth --networkid=680256 --  2.4 55.9
13112  6521 /geth --networkid=680256 --  0.3  2.6
13963 12268 /geth --networkid=680256 --  0.3  3.5
13767 10828 /geth --networkid=680256 --  0.3  3.0
13210  8772 /geth --networkid=680256 --  0.3  2.8
13605 12488 /geth --networkid=680256 --  0.3  3.3
 9079  5169 /geth --networkid=680256 --  0.3  2.2
13427 11684 /geth --networkid=680256 --  0.3  2.7
11911 10460 /geth --networkid=680256 --  0.3  1.6
 7459  7377 mysqld                       0.3  0.0
 7511  7455 /geth --networkid=680256 --  0.2  4.2
13861 12594 /geth --networkid=680256 --  0.2  3.8
10796  7045 /geth --networkid=680256 --  0.2  3.3
13746 12088 /geth --networkid=680256 --  0.2  3.7
10590  5355 /geth --networkid=680256 --  0.2  1.8
12849 10837 /geth --networkid=680256 --  0.2  3.3
 1566     1 /usr/bin/dockerd -H fd://    0.2  1.1
13823  9318 /geth --networkid=680256 --  0.2  1.6
```
### 2017-01-25T18:14:20+0800
4 CPUs / 8 GB / DigitalOcean / fabp issue
```
# docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 15 --dojo.eth 15 --dojo.fab 15 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
# source aliastiguan1.sh
# dcup
# fabp peer channel create -c ch1
# fabp peer channel join -b ch1.block
# fabp peer chaincode deploy -C ch1 -n mycc1 -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","1000","b","2000"]}'

2017-01-25 10:17:00.724 UTC [msp] Setup -> INFO 019 MSP manager setup complete, setup 1 msps
Error: Error endorsing chaincode: rpc error: code = 2 desc = Failed to deploy chaincode spec(Error creating image: %!s(<nil>))
# dc logs
fabp1_1     | 2017-01-25 10:21:09.889 UTC [chaincode] Deploy -> DEBU 11e deploying chaincode mycc1:0/ch1(networkid:dev,peerid:fabp1)
fabp1_1     | 2017-01-25 10:21:10.874 UTC [dockercontroller] deployImage -> ERRO 11f Error building images: manifest for hyperledger/fabric-ccenv:x86_64-0.7.0-snapshot-75a4c82 not found
fabp1_1     | 2017-01-25 10:21:10.874 UTC [dockercontroller] deployImage -> ERRO 120 Image Output:
fabp1_1     | ********************
fabp1_1     | Step 1/4 : FROM hyperledger/fabric-ccenv:x86_64-0.7.0-snapshot-75a4c82
fabp1_1     |
fabp1_1     | ********************

// https://github.com/yeasy/docker-compose-files/tree/master/hyperledger/1.0
# docker pull yeasy/hyperledger-fabric-base:latest
# docker tag yeasy/hyperledger-fabric-base hyperledger/fabric-ccenv:x86_64-0.7.0-snapshot-75a4c82

// y12docker/dltdojo-fabric:dev host
~/git/dltdojo$ docker images | grep fabric-ccenv
hyperledger/fabric-ccenv  latest                          1a77263b1b1c        7 days ago          1.264 GB
hyperledger/fabric-ccenv  x86_64-0.7.0-snapshot-75a4c82   1a77263b1b1c        7 days ago          1.264 GB
hyperledger/fabric-ccenv  x86_64-1.0.0-preview            267ced313da1        11 days ago         790.8 MB
```
### 2017-01-25T15:29:26+0800
4 CPUs / 8 GB / DigitalOcean
```
# docker pull y12docker/dltdojo
# docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 15 --dojo.eth 15 --dojo.fab 15 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
# docker run -v $(pwd):/tmp y12docker/dltdojo build --bulkuser --num 15 --prefix tg --dojoname tiguan1
# chmod a+x djsetup.sh ; ./djsetup.sh

// ethp miner --start
# ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -n 20
  PID  PPID CMD                         %MEM %CPU
 7960  4641 /geth --networkid=323509 -- 14.8 61.9
 9331  9225 mysqld                       1.9  0.0
 8952  4646 /geth --networkid=323509 --  1.8  3.0
 9801  4272 /geth --networkid=323509 --  1.8  2.8
10158  8273 /geth --networkid=323509 --  1.8  3.2
 7453  5008 /geth --networkid=323509 --  1.8  3.6
 9045  3318 /geth --networkid=323509 --  1.7  3.3
10087  7042 /geth --networkid=323509 --  1.5  3.6
 9813  6226 /geth --networkid=323509 --  1.5  2.9
10194  8494 /geth --networkid=323509 --  1.4  3.7
10301  8790 /geth --networkid=323509 --  1.4  2.9
10009  9594 /geth --networkid=323509 --  1.4  3.6
10080  8316 /geth --networkid=323509 --  1.4  3.5
10379  9383 /geth --networkid=323509 --  1.4  2.6
 8802  4320 /geth --networkid=323509 --  1.4  3.3
10174  5538 /geth --networkid=323509 --  1.4  1.7
 9781  8618 /geth --networkid=323509 --  1.4  3.7
 9082  9051 /geth --networkid=323509 --  1.1  3.7
 7824  7767 node index.js start          1.0  0.1
```
### 2017-01-25T11:12:36+0800
2 GB / 40 GB Disk / SFO2 - Ubuntu 16.04.1 x64 / DigitalOcean
```
# apt-get update ; apt-get install -y git curl jq linux-image-extra-$(uname -r) linux-image-extra-virtual apt-transport-https ca-certificates
# curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -
# add-apt-repository "deb https://apt.dockerproject.org/repo/ ubuntu-$(lsb_release -cs) main"
# apt-get update ; apt-get -y install docker-engine
# curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# chmod +x /usr/local/bin/docker-compose
# docker -v ; docker-compose --version
Docker version 1.13.0, build 49bf474
docker-compose version 1.10.0, build 4bd6f1a
# docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 2 --dojo.eth 2 --dojo.fab 2 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
# source aliastiguan1.sh
# dcup
# dcend
# apt-get upgrade
# shutdown -h now
// make a snapshot
```
Change to 2 CUPs4 GB Memory / 60 GB Disk / SFO2 / snapshot image
```
# docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 5 --dojo.eth 5 --dojo.fab 5 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
# docker run -v $(pwd):/tmp y12docker/dltdojo build --bulkuser --num 5 --prefix tg --dojoname tiguan1
# ls
aliastiguan1.sh  djsetup.sh  peerstiguan1.yml  userinfo.txt
# chmod a+x djsetup.sh ; ./djsetup.sh
# cat userinfo.txt
# source aliastiguan1.sh
# dcup
# su - tg1dlt
$ btcp info
$ exit
# ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -n 20
  PID  PPID CMD                         %MEM %CPU
 4129  4057 mysqld                       3.7  0.0
 5669  5276 /geth --networkid=964186 --  2.9  3.8
 5615  2921 /geth --networkid=964186 --  2.7  3.6
 5588  3186 /geth --networkid=964186 --  2.7  4.1
 5484  4015 /geth --networkid=964186 --  2.6  3.9
 5056  4988 /geth --networkid=964186 --  2.2  3.6
 4371  4096 node index.js start          2.0  0.4
 5718  3184 /geth --networkid=964186 --  2.0  3.6
 5514  3282 /geth --networkid=964186 --  2.0  3.4
 1461     1 /usr/bin/dockerd -H fd://    1.6  0.3
 5004  4932 mongod                       1.5  0.4
 3607  3448 peer node start --peer-defa  0.6  0.8
 3181  2975 peer node start --peer-defa  0.6  0.9
 1520  1461 docker-containerd -l unix:/  0.5  0.1
 4583  4389 peer node start --peer-defa  0.5  0.8
 4711  4415 peer node start --peer-defa  0.5  0.9
 5032  3440 bitcoind -regtest -txindex   0.4  0.2
 5112  5061 peer node start --peer-defa  0.4  0.8
 5604  5026 bitcoind -regtest -txindex   0.4  0.1
```
