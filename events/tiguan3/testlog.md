### 2017-02-08T19:34:44+0800
8 GB Memory / 4 CPUs / 80 GB Disk / SFO2 - Ubuntu DigitalOcean
```
$ dj eth $ETHP1 info
{ hostname: 'ethpeer.1.r15qrkvy713wmjzfdalfh2ybj',
  ethBlockNumber: 94,
  ethCoinbase: '0x37fbfafea9388f583388d09c0091c8a73e80861a',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: '466.4',
  ethMining: false }
// stuck syncing
$  dj eth $ETHP2 info
{ hostname: 'ethpeer.2.21yf3fin04c1ezs4it5461mc8',
  ethBlockNumber: 0,
  ethCoinbase: null,
  ethAccounts: 0,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: 0,
  ethMining: false }
$ dj eth $EBOOT info
{ hostname: 'ethboot.1.ab6ibtf25ju6qv617ada90wbo',
  ethBlockNumber: 0,
  ethCoinbase: null,
  ethAccounts: 0,
  ethSyncing: false,
  netPeerCount: 1,
  ethBalance: 0,
  ethMining: false }

```
2 GB Memory / 2 CPUs / 40 GB Disk / SFO2 - Ubuntu DigitalOcean
```
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan3 --start \
   --network tiguan3net --pubhost 192.168.2.73
$ dj eth $ETHP1 info
index.js eth <hostname> <method>

CONNECTION ERROR: Couldn't connect to node http://ethpeer.1.g4fu7dlpyzgnm7ce7yjk9m4fh:8545.
```
### 2017-02-07T17:15:00+0800
```
$ node index.js service tiguan3 --start --network devbtcnet --pubhost 192.168.2.73
# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
EBOOT=$(docker ps --format "{{.Names}}" | grep ethboot.1)
ETHP1=$(docker ps --format "{{.Names}}" | grep ethpeer.1)
ETHP2=$(docker ps --format "{{.Names}}" | grep ethpeer.2)
ETHP3=$(docker ps --format "{{.Names}}" | grep ethpeer.3)
MYSQL=$(docker ps --format "{{.Names}}" | grep mariadb.1)
MONGO=$(docker ps --format "{{.Names}}" | grep mongo.1)
IQUEXP=$(docker ps --format "{{.Names}}" | grep btciquexp.1)
alias iquexp_index='docker exec -t $IQUEXP node scripts/sync.js index'
# ---- script end ----
# Abe Browser
#   http://host_ip:12750/
# Iquidus Explorer
#   http://host_ip:12751/
# JornC Blockchain Transaction Explorer
#   http://host_ip:12752/
# carsenk explorer
#   http://host_ip:18000/
# DLTDOJO tiguan3
#   https://github.com/y12studio/dltdojo/tree/master/events/tiguan3

{"id":"p2y9enmtvis95jpitfbzaiepo"}
{"id":"ogdqrkotbv2f5u5te4qo7wac4"}
{"id":"nd3a3ep8jd2ctpqdapz59ec5w"}
{"id":"lubqk9pso30j057akyi0z37mt"}
{"id":"w9wawvyuq9q79v50z58eto8jv"}
{"id":"43lsy4fgiv2p4i8v71ua8reco"}
{"id":"skpjzu913kdjhhfnblscx68l1"}
{"id":"7n2p5wn6u1y65bji2vw0nvcxz"}
{"id":"yeo1jpy0wdhwywq808r2xxavo"}
{"id":"hhmlvd5zp7vch1ztndyjdf48s"}
{"id":"tpjyk0c4gluumkkjoneqt6nol"}

$dinfo
btcboot.1.4yr67db308if545x50unuvtdw  18332-18333/tcp
carexp.1.jy44lmdkl9typma2sqko2zlw1  0.0.0.0:18000->8000/tcp
btciquexp.1.txyv8o6gknaxtdqufbkdxdqsa  0.0.0.0:12751->3001/tcp
ethpeer.2.plz1w0u0c8zwa1320s0idcpde  8545/tcp, 30303/tcp
btcjorexp.1.y4rcd481a17albbn0eoq1i6nj  0.0.0.0:12752->8080/tcp
btcabe.1.60px6igunq90pm41lq3tyz4ad  0.0.0.0:12750->12750/tcp
btcpeer.3.xg4i1nfhyrw1c2ioef738k6zr  18332-18333/tcp
ethpeer.3.jj7a6di4ogik549e3l3kxs36w  8545/tcp, 30303/tcp
dltdojo.1.z2po9l1rojbch0vdltokeoo52  18168/tcp
ethpeer.1.wcf9a679zsedeh6u714c6m1by  8545/tcp, 30303/tcp
ethboot.1.yt82y5yl1ghcd3br0uz36ni8c  0.0.0.0:8545->8545/tcp, 30303/tcp
mariadb.1.rcrepp0j9leucxmmwvn0wp7hk  3306/tcp
btcpeer.1.o7wk000rp0d33cs55tk3y4rkf  18332-18333/tcp
mongo.1.t8im2ruan0rvjuddaownachs3  27017/tcp
btcpeer.2.5n5f6w10v6733ititoa0pismn  18332-18333/tcp
ID            NAME       MODE        REPLICAS  IMAGE
43lsy4fgiv2p  btcjorexp  replicated  1/1       y12docker/dltdojo-jorexp:latest
7n2p5wn6u1y6  mongo      replicated  1/1       mongo:3.4
hhmlvd5zp7vc  carexp     replicated  1/1       y12docker/dltdojo-carexp
lubqk9pso30j  ethpeer    replicated  3/3       y12docker/dltdojo-ethgo:latest
nd3a3ep8jd2c  ethboot    replicated  1/1       y12docker/dltdojo-ethgo:latest
ogdqrkotbv2f  btciquexp  replicated  1/1       y12docker/dltdojo-iquexp:latest
p2y9enmtvis9  mariadb    replicated  1/1       mariadb:10.1
skpjzu913kdj  dltdojo    replicated  1/1       y12docker/dltdojo:latest
tpjyk0c4gluu  btcboot    replicated  1/1       y12docker/dltdojo-bitcoin:latest
w9wawvyuq9q7  btcpeer    replicated  3/3       y12docker/dltdojo-bitcoin:latest
yeo1jpy0wdhw  btcabe     replicated  1/1       y12docker/dltdojo-abe:latest

$ dj btc $BTCP1 info
$ dj btc $BTCP1 account --new
$ dj btc $BTCP1 miner --num 101
$ iquexp_index reindex &&  iquexp_index update

$ node index.js service tiguan3 --stop
```
