### 2017-02-07T10:08:07+0800
```
$ source alias.sh
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
dccarexp_carexp_   /start.sh          Up                 0.0.0.0:8000->80
1                  192.168.2.73                          00/tcp
dccarexp_ethboot   /start.sh boot     Up                 30303/tcp, 0.0.0
_1                                                       .0:8545->8545/tc
                                                         p
dccarexp_ethdev_   /start.sh dev      Up                 30303/tcp, 0.0.0
1                                                        .0:8547->8545/tc
                                                         p
dccarexp_ethpeer   /start.sh peer     Up                 30303/tcp, 0.0.0
_1                 ethboot                               .0:8546->8545/tc
$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["vp1pass"],"id":67}' 192.168.2.73:8545
$ curl -X POST --data '{"jsonrpc":"2.0","method":"miner_start","params":[],"id":74}' 192.168.2.73:8545
$ dc logs ethboot
Attaching to dccarexp_ethboot_1
ethboot_1  | I0207 02:10:31.910895 cmd/utils/flags.go:608] WARNING: No etherbase set and no accounts found as default
ethboot_1  | I0207 02:10:31.910985 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /root/.ethereum/devchain/geth/chaindata
ethboot_1  | I0207 02:10:31.918668 ethdb/database.go:176] closed db:/root/.ethereum/devchain/geth/chaindata
ethboot_1  | I0207 02:10:31.918910 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /root/.ethereum/devchain/geth/chaindata
ethboot_1  | I0207 02:10:31.927636 cmd/geth/chaincmd.go:132] successfully wrote genesis block and/or chain rule set: f960006369ad25cb663b27785c823c68d9acd62c9d2aa36642e510c77df65339
ethboot_1  | boot mode
ethboot_1  | I0207 02:10:31.982647 cmd/utils/flags.go:608] WARNING: No etherbase set and no accounts found as default
ethboot_1  | I0207 02:10:31.983026 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /root/.ethereum/devchain/geth/chaindata
ethboot_1  | I0207 02:10:32.004068 ethdb/database.go:176] closed db:/root/.ethereum/devchain/geth/chaindata
ethboot_1  | I0207 02:10:32.004732 node/node.go:176] instance: Geth/v1.5.8-stable-f58fb322/linux/go1.5.4
ethboot_1  | I0207 02:10:32.004973 ethdb/database.go:83] Allotted 128MB cache and 1024 file handles to /root/.ethereum/devchain/geth/chaindata
ethboot_1  | I0207 02:10:32.027303 eth/db_upgrade.go:346] upgrading db log bloom bins
ethboot_1  | I0207 02:10:32.027483 eth/db_upgrade.go:354] upgrade completed in 213.441µs
ethboot_1  | I0207 02:10:32.027926 eth/backend.go:187] Protocol Versions: [63 62], Network Id: 636393
ethboot_1  | I0207 02:10:32.028205 eth/backend.go:215] Chain config: {ChainID: 0 Homestead: <nil> DAO: <nil> DAOSupport: false EIP150: <nil> EIP155: <nil> EIP158: <nil>}
ethboot_1  | I0207 02:10:32.030269 core/blockchain.go:219] Last header: #0 [f9600063…] TD=262144
ethboot_1  | I0207 02:10:32.030304 core/blockchain.go:220] Last block: #0 [f9600063…] TD=262144
ethboot_1  | I0207 02:10:32.030314 core/blockchain.go:221] Fast block: #0 [f9600063…] TD=262144
ethboot_1  | I0207 02:10:32.032848 p2p/server.go:340] Starting Server
ethboot_1  | I0207 02:10:34.137861 p2p/discover/udp.go:227] Listening, enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@[::]:30303
ethboot_1  | I0207 02:10:34.138746 p2p/server.go:608] Listening on [::]:30303
ethboot_1  | I0207 02:10:34.139747 node/node.go:411] HTTP endpoint opened: http://0.0.0.0:8545
ethboot_1  | I0207 02:12:32.090681 eth/backend.go:385] Cannot start mining without etherbase address: etherbase address must be explicitly specified
ethboot_1  | I0207 02:12:32.090923 eth/backend.go:473] Automatic pregeneration of ethash DAG ON (ethash dir: /root/.ethash)
ethboot_1  | I0207 02:12:32.091335 eth/backend.go:480] checking DAG (ethash dir: /root/.ethash)
ethboot_1  | I0207 02:13:55.038565 miner/miner.go:136] Starting mining operation (CPU=4 TOT=5)
ethboot_1  | I0207 02:13:55.038926 miner/worker.go:514] commit new work on block 1 with 0 txs & 0 uncles. Took 227.085µs
ethboot_1  | I0207 02:13:55.038980 vendor/github.com/ethereum/ethash/ethash.go:259] Generating DAG for epoch 0 (size 1073739904) (0000000000000000000000000000000000000000000000000000000000000000)
ethboot_1  | I0207 02:13:55.767178 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 0%
ethboot_1  | I0207 02:13:59.084489 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 1%
ethboot_1  | I0207 02:14:02.294013 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 2%
ethboot_1  | I0207 02:14:05.520672 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 3%
ethboot_1  | I0207 02:14:08.772820 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 4%
ethboot_1  | I0207 02:14:12.050168 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 5%
ethboot_1  | I0207 02:14:15.278209 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 6%
$ cat /sys/fs/cgroup/cpu/docker/cpu.shares
1024
// cpu_shares: 100 about 10%
$ dcend
```
### 2017-02-06T22:32:41+0800
```
$ docker build -t y12docker/dltdojo-carexp .
$ docker-compose up -d
$ docker ps
CONTAINER ID        IMAGE                      COMMAND             CREATED             STATUS              PORTS                               NAMES
a099e5eaaf51        y12docker/dltdojo-ethgo    "/startdev.sh"      4 seconds ago       Up 3 seconds        0.0.0.0:8545->8545/tcp, 30303/tcp   carsenkexplorer_ethdev_1
f782b002c6b2        y12docker/dltdojo-carexp   "/start.sh"         5 minutes ago       Up 3 seconds        0.0.0.0:8000->8000/tcp              carsenkexplorer_carexp_1
$ docker exec -it a099e5eaaf51 /geth version
Geth
Version: 1.5.8-stable
Git Commit: f58fb32283fe04cd1d416040c6692b4a7352d556
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.5.4
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["vp1pass"],"id":67}' 192.168.2.73:8545
$ curl -X POST --data '{"jsonrpc":"2.0","method":"miner_start","params":[],"id":74}' 192.168.2.73:8545
```
### 2017-02-06T18:45:08+0800
```
$ docker build -t y12docker/dltdojo-carexp .
$ docker-compose up -d
$ docker-compose logs carexp
carexp_1  | Starting up http-server, serving ./app
carexp_1  | Available on:
carexp_1  |   http://127.0.0.1:8000
carexp_1  |   http://192.168.176.3:8000
carexp_1  | Hit CTRL-C to stop the server
carexp_1  | [Mon Feb 06 2017 11:39:12 GMT+0000 (UTC)] "GET /" "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
carexp_1  | _http_outgoing.js:370
carexp_1  |     throw new TypeError('The header content contains invalid characters');
carexp_1  |     ^
carexp_1  |
carexp_1  | TypeError: The header content contains invalid characters
carexp_1  |     at ServerResponse.setHeader (_http_outgoing.js:370:11)
carexp_1  |     at module.exports.ResponseStream.(anonymous function) [as setHeader] (/usr/local/lib/node_modules/http-server/node_modules/union/lib/response-stream.js:100:34)
carexp_1  |     at serve (/usr/local/lib/node_modules/http-server/node_modules/ecstatic/lib/ecstatic.js:241:13)
carexp_1  |     at /usr/local/lib/node_modules/http-server/node_modules/ecstatic/lib/ecstatic.js:159:11
carexp_1  |     at FSReqWrap.oncomplete (fs.js:112:15)
$ docker-compose stop
```
