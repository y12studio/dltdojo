#### 2017-01-26T13:34:46+0800
```
$ docker network inspect devbtcnet
$ docker service create --name bitcoinx3 --network devbtcnet --replicas 3 y12docker/dltdojo-bitcoin bitcoind \
   -rpcallowip=10.0.9.0/24 -txindex -rpcport=18332 -port=18333 -addnode=bitcoin:18333
$ docker service create --name bitcoin --network devbtcnet --replicas 1 -p 18332:18332 -p 18333:18333 y12docker/dltdojo-bitcoin bitcoind \
   -rpcallowip=10.0.9.0/24 -txindex -rpcport=18332 -port=18333
$ docker ps
53aed70dc658        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcallo..."   5 seconds ago       Up 4 seconds        18332-18333/tcp     bitcoinx3.3.ubcuxkvok36j1j5n5b5l9rbqr
ed8c46cb8ea3        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcallo..."   5 seconds ago       Up 4 seconds        18332-18333/tcp     bitcoinx3.2.1050f3x0mhh28r52xjy0iw29d
d20ec4afc243        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcallo..."   5 seconds ago       Up 4 seconds        18332-18333/tcp     bitcoinx3.1.s91pynv49g006iws6v7kmc4y1
bf05d0abd537        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcallo..."   17 seconds ago      Up 16 seconds       18332-18333/tcp     bitcoin.1.4xjgiqe3g1a6qrq816uu1w1fg
$ alias bc='docker exec -it bf05d0abd537'
$ alias bc31='docker exec -it d20ec4afc243'
$ bc31 ping bitcoin
PING bitcoin (10.0.9.6): 56 data bytes
64 bytes from 10.0.9.6: seq=0 ttl=64 time=0.038 ms
$ bc31 curl --user user:pass --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }'  -H 'content-type: text/plain;' http://bitcoin:18332/ | jq .
{
  "id": "curltest",
  "error": null,
  "result": {
    "errors": "",
    "relayfee": 1e-05,
    "paytxfee": 0,
    "keypoolsize": 100,
    "keypoololdest": 1485409206,
    "testnet": false,
    "difficulty": 4.656542373906925e-10,
    "version": 130100,
    "protocolversion": 70014,
    "walletversion": 130000,
    "balance": 0,
    "blocks": 0,
    "timeoffset": 0,
    "connections": 0,
    "proxy": ""
  }
}
$ bc bitcoin-cli getinfo
{
  "version": 130100,
  "protocolversion": 70014,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 3,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1485413932,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ bc bitcoin-cli generate 101
$ bc31 bitcoin-cli generate 10
$ bc bitcoin-cli getinfo
$ bc31 bitcoin-cli getinfo
$ docker service create --name dltdojo --network devbtcnet --replicas 1 y12docker/dltdojo start
$ docker ps
$ alias dj='docker exec -it 354bd40262e2'
$ dj node index.js btc --help
index.js btc <hostname> <method>
$ dj node index.js btc bitcoinx3.1.s91pynv49g006iws6v7kmc4y1 info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 111,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1485413944,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ dj node index.js btc bitcoin info
 { version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 550,
  blocks: 111,
  timeoffset: 0,
  connections: 3,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1485413932,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```
#### 2017-01-26T12:40:29+0800
```
$ docker network create --driver overlay --subnet 10.0.9.0/24 devbtcnet
$ docker service create --name bitcoinx3 --network devbtcnet --replicas 3 y12docker/dltdojo-bitcoin
$ docker service create --name bitcoin --network devbtcnet --replicas 1 y12docker/dltdojo-bitcoin
$ docker ps
CONTAINER ID        IMAGE                                                                                               COMMAND             CREATED             STATUS              PORTS               NAMES
651b8552a23f        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          10 seconds ago      Up 9 seconds        18332-18333/tcp     bitcoin.1.doqy4duaxk1owbc27dai1tlm5
3f1efee70cea        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          20 seconds ago      Up 18 seconds       18332-18333/tcp     bitcoinx3.2.hyd8b8fvryx04gf3qca7vnrub
3cffb236cc64        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          20 seconds ago      Up 18 seconds       18332-18333/tcp     bitcoinx3.3.kokkkqijubnh0o070niv4em1f
4a81638c13d5        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          20 seconds ago      Up 18 seconds       18332-18333/tcp     bitcoinx3.1.qp4um2fcgu3tpp1nq00gwdc1t
$ docker exec -it 4a81638c13d5 ping bitcoin
PING bitcoin (10.0.9.6): 56 data bytes
64 bytes from 10.0.9.6: seq=0 ttl=64 time=0.055 ms
64 bytes from 10.0.9.6: seq=1 ttl=64 time=0.062 ms
```
#### 2017-01-26T12:05:43+0800
```
$ docker network create --driver overlay --subnet 10.0.9.0/24 devbtcnet
$ docker service create --name bitcoin --network devbtcnet --replicas 3 y12docker/dltdojo-bitcoin
$ ds ps bitcoin
ID            NAME       IMAGE                             NODE      DESIRED STATE  CURRENT STATE          ERROR  PORTS
pvsi75026588  bitcoin.1  y12docker/dltdojo-bitcoin:latest  ubuntu73  Running        Running 6 seconds ago
84hi953lew9e  bitcoin.2  y12docker/dltdojo-bitcoin:latest  ubuntu73  Running        Running 6 seconds ago
zvshwbqtfuu9  bitcoin.3  y12docker/dltdojo-bitcoin:latest  ubuntu73  Running        Running 6 seconds ago
$ docker ps
CONTAINER ID        IMAGE  COMMAND             CREATED             STATUS              PORTS               NAMES
fb928830e5d2        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          28 seconds ago      Up 26 seconds       18332-18333/tcp     bitcoin.3.zvshwbqtfuu9udy85q4kn1bl8
cac77a6dd115        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          28 seconds ago      Up 27 seconds       18332-18333/tcp     bitcoin.1.pvsi75026588t29hgy8rxx04s
8362e1ef1ac8        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind"          28 seconds ago      Up 27 seconds       18332-18333/tcp     bitcoin.2.84hi953lew9e9k0dw047zx1cu
$ docker network inspect devbtcnet
$ docker exec -it fb928830e5d2 bitcoin-cli generate 10
$ docker exec -it fb928830e5d2 ping bitcoin.2.84hi953lew9e9k0dw047zx1cu
PING bitcoin.2.84hi953lew9e9k0dw047zx1cu (10.0.9.4): 56 data bytes
64 bytes from 10.0.9.4: seq=0 ttl=64 time=0.146 ms
64 bytes from 10.0.9.4: seq=1 ttl=64 time=0.067 ms
$ docker service rm bitcoin
```
#### 2017-01-26T11:00:40+0800
```
$ docker tag y12docker/dltdojo-bitcoin:latest y12docker/dltdojo-bitcoin:v0.0.1
$ docker push y12docker/dltdojo-bitcoin:v0.0.1
$ docker build -t y12docker/dltdojo-bitcoin .
$ docker push y12docker/dltdojo-bitcoin:latest
// Docker: Swarm worker nodes not finding locally built image - Stack Overflow
// http://stackoverflow.com/questions/39370925/docker-swarm-worker-nodes-not-finding-locally-built-image
// docker service = ds
$ ds create --name bitcoin y12docker/dltdojo-bitcoin
ovquit833y93sjcluj8zr53l6
$ ds ls
ID            NAME     MODE        REPLICAS  IMAGE
ovquit833y93  bitcoin  replicated  1/1       y12docker/dltdojo-bitcoin:latest
$ ds ps ovquit
ID            NAME       IMAGE                             NODE      DESIRED STATE  CURRENT STATE           ERROR  PORTS
svp8ng6fpb6v  bitcoin.1  y12docker/dltdojo-bitcoin:latest  ubuntu73  Running        Running 12 seconds ago
$ docker ps
CONTAINER ID        IMAGE                                                                                               COMMAND             CREATED             STATUS              PORTS               NAMES
ba4a8bd86963        y12docker/dltdojo-bitcoin@sha256:d93124e8fc5d0daddede52adf97808ec76eceefe1268cba677c9cec43aa1f7c9   "bitcoind"          50 seconds ago      Up 49 seconds                           bitcoin.1.svp8ng6fpb6vp5gsydw7k3d7g
$ docker exec -it bitcoin.1.svp8ng6fpb6vp5gsydw7k3d7g bitcoin-cli getinfo
$ docker exec -it bitcoin.1.svp8ng6fpb6vp5gsydw7k3d7g bitcoin-cli generate 101
$ ds rm bitcoin
```
#### Logs
```
// node index.js build --dojo.btc 18 --dojo.mariadb 1 --dojo.mongo 1 --name 4a --path levels/level4
$ dcup
$ dc logs btcp0
Attaching to 4a_btcp0_1
btcp0_1     | Error: Invalid -rpcallowip subnet specification: /24. Valid are a single IP (e.g. 1.2.3.4), a network/netmask (e.g. 1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24).
btcp0_1     | Error: Unable to start HTTP server. See debug log for details.
btcp0_1     | Assertion failed: nThreadsServicingQueue == 0 (scheduler.cpp: ~CScheduler: 19)
btcp0_1     | /start.sh: line 6:     9 Aborted                 (core dumped) bitcoind $BITCOIND_OPTS
```
