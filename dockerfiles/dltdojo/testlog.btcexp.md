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
