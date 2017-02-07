### Projects
* https://github.com/bitcoin/bitcoin
* https://github.com/bitcoin-abe/bitcoin-abe
* https://github.com/iquidus/explorer
* https://github.com/JornC/bitcoin-transaction-explorer

TODO

* https://github.com/bitpay/insight-ui
* https://github.com/mhanne/block_browser
* https://github.com/anders94/blockchain-demo/

### 2017-02-06T15:37:41+0800
```
// docker network create --driver overlay --subnet 10.0.9.0/24 devbtcnet
$  docker network inspect devbtcnet
$ node index.js service btcexp --start --network devbtcnet
# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
IQUEXP=$(docker ps --format "{{.Names}}" | grep btciquexp.1)
alias iquexp_index='docker exec -t $IQUEXP node scripts/sync.js index'
alias btcinfo='dj btc $BTCP1 info ; dj btc $BTCP2 info ; dj btc $BTCP3 info'
# ---- script end ----
# Abe Browser http://host_ip:12750/
# Iquidus Explorer http://host_ip:12751/
# JornC Blockchain Transaction Explorer http://host_ip:12752/
#

$ dinfo
btcpeer.2.n0uvmj3tsi182kx8u0jpr1sps  18332-18333/tcp
btcpeer.3.efxpkee5jg98hrn44qdcx5ym6  18332-18333/tcp
btcjorexp.1.oqsng6452tft27oi32x3334tf  0.0.0.0:12752->8080/tcp
btcpeer.1.q59eqt3rwwbs2s1naujsrz7ym  18332-18333/tcp
btcabe.1.u3c7logmjhefyhpq6ta2xlb4a  0.0.0.0:12750->12750/tcp
btciquexp.1.ch3u2w1i56k0nvgal4n365i5m  0.0.0.0:12751->3001/tcp
btcboot.1.tbhd1hsigjakomzvnv735oxfv  18332-18333/tcp
dltdojo.1.j6vry2lrxvkfemi4lf0f6ydv3  18168/tcp
ID            NAME       MODE        REPLICAS  IMAGE
0awyciplcta0  btciquexp  replicated  1/1       y12docker/dltdojo-iquexp:latest
dnvhygul1qyz  btcpeer    replicated  3/3       y12docker/dltdojo-bitcoin:latest
eiubxt9kne9d  btcjorexp  replicated  1/1       y12docker/dltdojo-jorexp:latest
f6reijtdudqq  dltdojo    replicated  1/1       y12docker/dltdojo:latest
gv5sx2a1xi74  btcabe     replicated  1/1       y12docker/dltdojo-abe:latest
p3i6yts64yp4  btcboot    replicated  1/1       y12docker/dltdojo-bitcoin:latest
$ dj btc $BTCP1 account --new && dj btc $BTCP1 miner --num 101
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 1.88
$ iquexp_index reindex
$ dj btc $BTCP1 miner --num 1
$ dj btc $BTCP2 miner --num 2
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 2.88
$ iquexp_index update
$ node index.js service btcexp --stop
```
### 2017-02-05T16:02:34+0800
```
$ node index.js service btcexp --start --network devbtcnet
# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
IQUEXP=$(docker ps --format "{{.Names}}" | grep btciquexp.1)
alias iquexp_index='docker exec -t $IQUEXP node scripts/sync.js index'
alias btcinfo='dj btc $BTCP1 info ; dj btc $BTCP2 info ; dj btc $BTCP3 info'
# ---- script end ----
# Abe Browser http://host_ip:12750/
# Iquidus Explorer http://host_ip:12751/
#
$ dinfo
btciquexp.1.ysef4871nnp14nw0cng3uuqdh 0.0.0.0:12751->3001/tcp
dltdojo.1.wtqxscpf3r70etaumgim35ypk 18168/tcp
btcpeer.1.n7jfp8l3usm3fzxjk7j3ev7u6 18332-18333/tcp
btcabe.1.t76fqciotqew5d5yz18ari0xi 0.0.0.0:12750->12750/tcp
btcpeer.2.rpdv0xf9go9vse6ag6w5cqjr1 18332-18333/tcp
btcboot.1.paoavgpplou3m7rfjv65ks68q 18332-18333/tcp
btcpeer.3.r5gzgork80bmnn9bl8pboc8h7 18332-18333/tcp
ID            NAME       MODE        REPLICAS  IMAGE
2ka9crii7a87  btcpeer    replicated  3/3       y12docker/dltdojo-bitcoin:latest
4hg3ufamf4tj  btciquexp  replicated  1/1       y12docker/dltdojo-iquexp:latest
m2prxy033s81  dltdojo    replicated  1/1       y12docker/dltdojo:latest
xajumae0eq78  btcboot    replicated  1/1       y12docker/dltdojo-bitcoin:latest
ywbo8sf0fxd3  btcabe     replicated  1/1       y12docker/dltdojo-abe:latest
$ dj btc $BTCP1 account --new && dj btc $BTCP1 miner --num 101
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 1.88
$ iquexp_index reindex
$ dj btc $BTCP1 miner --num 1
$ dj btc $BTCP2 miner --num 2
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 2.88
$ dj btc $BTCP1 miner --num 1
$ iquexp_index update
$ node index.js service btcexp --stop
```
