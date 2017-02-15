### Projects
* https://github.com/bitcoin/bitcoin
* https://github.com/bitcoin-abe/bitcoin-abe

### 2017-02-15T15:35:04+0800
```
$ node index.js service btc --start --network devbtcnet
$ dinfo
btcabe.1.zkozt5ikoln82e35rdc4qj7c8  0.0.0.0:12750->12750/tcp
dltdojo.1.zgt4mrnxvcpgpd4eo5l78flwi  0.0.0.0:18168->18168/tcp
btcpeer.2.cor4edvs354udqggiyw0hbkze  18332-18333/tcp
btcboot.1.rk6s5vigsjnns3dchknbqmn1z  18332-18333/tcp
btcpeer.1.uwatosj2kcw7nlbt7l6tknqvu  18332-18333/tcp
btcpeer.3.neivgi7sybalaregn7xawqcwb  18332-18333/tcp
ID            NAME     MODE        REPLICAS  IMAGE
5hko8l5icivz  dltdojo  replicated  1/1       y12docker/dltdojo:latest
tpk1jpynqerx  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
vbo817n7d4k8  btcabe   replicated  1/1       y12docker/dltdojo-abe:latest
vfybz3h5ja0w  btcpeer  replicated  3/3       y12docker/dltdojo-bitcoin:latest
$ dj btc $BTCP1 account --new && dj btc $BTCP1 miner --num 101
// Open the Abe url http://host_ip:12750/ in the browser.
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 1.88
$ dj btc $BTCP1 miner --num 1
$ dj btc $BTCP1 info
$ dj btc $BTCP2 info
$ djstop
```
### 2017-02-04T17:19:42+0800
```
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --start --network devbtcnet
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
alias btcinfo='dj btc $BTCP1 info ; dj btc $BTCP2 info ; dj btc $BTCP3 info'

# ---- script end ----
$ dinfo
dltdojo.1.vxgqpqg1ppob2g20kfytp1dr7
btcpeer.3.guiy0hkn1v3epdm83nx50dhlf
btcpeer.2.k1e6tywsyua7zbezmbl4mlcbo
btcpeer.1.uyo3rw2alxpr2tvey5lrh7v73
btcboot.1.jljzglo2efhly4h3szpi8nobb
btcabe.1.mjy97sdelfkgptdl0t59pmenr
ID            NAME     MODE        REPLICAS  IMAGE
nl235bg706gm  btcpeer  replicated  3/3       y12docker/dltdojo-bitcoin:latest
opw5bdc5pfbn  btcabe   replicated  1/1       y12docker/dltdojo-abe:latest
so6oju83yp3j  dltdojo  replicated  1/1       y12docker/dltdojo:latest
zgi4enpxfifg  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
$ dj btc $BTCP1 account --new && dj btc $BTCP1 miner --num 101
// Open the Abe url http://host_ip:12750/ in the browser.
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 1.88
$ dj btc $BTCP1 miner --num 1
$ dj btc $BTCP1 info
$ djstop
```
### 2017-02-04T10:53:19+0800
```
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --start --network devbtcnet
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service btc --stop'
BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BTCP3=$(docker ps --format "{{.Names}}" | grep btcpeer.3)
alias btcinfo='dj btc $BTCP1 info ; dj btc $BTCP2 info ; dj btc $BTCP3 info'

# ---- script end ----
$ dinfo
btcboot.1.yqj7dvwymq4exkm7wryyglseq
btcpeer.2.iv2smahxr9w8kk7xbuntnd3ev
btcpeer.1.s6otneenlgpfwlt7gle26tuna
dltdojo.1.wh70gz7lwekhil20me1emwm76
btcpeer.3.rxo2ohp2cq3psr7277hafp28c
ID            NAME     MODE        REPLICAS  IMAGE
2d0l6zjg2amh  dltdojo  replicated  1/1       y12docker/dltdojo:latest
73qfmbk0fr4i  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
9gpzj6vcsw13  btcpeer  replicated  3/3       y12docker/dltdojo-bitcoin:latest
$ dj btc $BTCP1 account --new
$ dj btc $BTCP1 miner --num 101
$ dj btc $BTCP1 info
$ djstop
```
