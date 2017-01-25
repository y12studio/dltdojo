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
# shutdown -h now
// Take snapshot
```
Change to 4 GB Memory / 60 GB Disk / SFO2 / snapshot image
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
