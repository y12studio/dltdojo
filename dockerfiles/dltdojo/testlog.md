### TODO
* http://www.grpc.io/docs/tutorials/basic/node.html

### 2017-02-22T17:08:25+0800
```
$ docker run -it --rm -p 8545:8545 ethereum/client-go --dev --rpc --rpccorsdomain="*" --rpcaddr="0.0.0.0" --rpcapi "miner,admin,db,personal,eth,net,web3" --ipcdisable
$ node index.js eth localhost account --new --password pass
0x8e4eb442389172386cca6907f602089549faf99c

$ node index.js eth localhost miner --start
$ node index.js eth localhost account --list
{ '0x8e4eb442389172386cca6907f602089549faf99c': { balance: '10000000000000000000', ethBalance: '10' } }
$ node index.js eth localhost tiguan5coin --new --address 0x8e4eb442389172386cca6907f602089549faf99c --password pass
{ tx: '0x0b3c23509b001af88e11888347bf50129450298f6641b3628cb16382738474f6',
  contractAddress: '0x737c837ceb9a33482ca89dba7652ff0612a228ed' }

$ node index.js eth localhost tiguan5coin --address 0x8e4eb442389172386cca6907f602089549faf99c --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed
{ account: '0x8e4eb442389172386cca6907f602089549faf99c',
  contractAddress: '0x737c837ceb9a33482ca89dba7652ff0612a228ed',
  contractBalance: '21000000' }
$ node index.js eth localhost tiguan5coin --address 0xef360a8b39442dc87c60aa957b07016cb396f164 --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed
{ account: '0xef360a8b39442dc87c60aa957b07016cb396f164',
  contractAddress: '0x737c837ceb9a33482ca89dba7652ff0612a228ed',
  contractBalance: '100' }
$ node index.js eth localhost tiguan5coin --address 0x0028e590fc2789a2ae4da1824780390a3bc483a8 --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed
{ account: '0x0028e590fc2789a2ae4da1824780390a3bc483a8',
  contractAddress: '0x737c837ceb9a33482ca89dba7652ff0612a228ed',
  contractBalance: '200' }
$ node index.js eth localhost tiguan5coin --send --to 0x93d5dc01a675abb8de4a810b94d24189c0359d8a --address 0x8e4eb442389172386cca6907f602089549faf99c --password pass --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed --amount 99

$ node index.js eth localhost tiguan5coin --address 0x93d5dc01a675abb8de4a810b94d24189c0359d8a --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed
99
$ node index.js eth localhost tiguan5coin --address 0xef360a8b39442dc87c60aa957b07016cb396f164 --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed
101
$ node index.js eth localhost tiguan5coin --address 0x0028e590fc2789a2ae4da1824780390a3bc483a8 --contract 0x737c837ceb9a33482ca89dba7652ff0612a228ed
202

```
### 2017-02-22T16:45:11+0800
```
$ testrpc --account="0x08e950346e37a07ffb360d32af9ff716661991f584d95159f3a1204398f826a8,1000"
Available Accounts
==================
(0) 0x93d5dc01a675abb8de4a810b94d24189c0359d8a

Private Keys
==================
(0) 08e950346e37a07ffb360d32af9ff716661991f584d95159f3a1204398f826a8

$ node index.js eth localhost tiguan5coin --contractinfo
$ node index.js eth localhost tiguan5coin --new --address 0x93d5dc01a675abb8de4a810b94d24189c0359d8a --password ''
// TBD
```

### 2017-02-02T13:05:06+0800
```
$ node index.js service tiguan2 --start --network devbtcnet
$ docker ps --format "{{.Names}}"
ethpeer.1.jq9ikh269iz5bzr9a7q48a83i
btcpeer.1.emg5k0rbg6xxgbi51a34vz55b
mongo.1.szarzs9wh77nzl3bs3e5jxj96
ethboot.1.yhcrrnrvysk7q4so59jvsz68n
ethpeer.2.u5fncawzrsqy39z9uv3ney6g9
dltdojo.1.erw7z1nf3gkbre9g777pvbr6r
mariadb.1.vh5hzv5jmlxy16d8sc2p6ck5r
btcpeer.2.ckippelc65gb5icj1wiog92wq
btcboot.1.5vkdzffwfm3yahod8sbbhqfv3
ethpeer.3.kzfab7rux5gdfm4ycd6pi35r3
btcpeer.3.trwc7308o56350ioc9jz6pry7
$ DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
$ BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
$ BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
$ alias dj='docker exec -t $DJID node index.js'
$ dj btc $BTCP1 info
$ dj btc $BTCP1 account --new
$ dj btc $BTCP1 account --dumpkey --address mw6U8Rg6nMJa1kpdKz2rjrPh6tDcYDGiMa
$ dj btc $BTCP1 miner --num 101
$ dj btc $BTCP1 send --to mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT --btc 1.88
$ dj btc $BTCP2 miner --num 1
$ dj btc $BTCP1 info
$ dj btc $BTCP2 info
$ ETHP1=$(docker ps --format "{{.Names}}" | grep ethpeer.1)
$ ETHP2=$(docker ps --format "{{.Names}}" | grep ethpeer.2)
$ dj eth $ETHP1 account --new --password pass1
$ dj eth $ETHP1 info
//  ethpexec /keyfind.sh
$ docker exec -t $ETHP1 /keyfind.sh
$ dj eth $ETHP1 miner --start
$ dj eth $ETHP1 send --to 0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed --eth 3.6 --password pass1
$ dj eth $ETHP1 hahacoin --new --address 0x79c7af8103562bf3740ef40171decfb1d525b0aa --password pass1
$ node index.js service tiguan2 --stop
```
### 2017-02-02T12:58:23+0800
```
$ node index.js service mariadb --start --network devbtcnet
$ docker ps --format "{{.Names}}"
mariadb.1.08qo72gee6xvw76g50cmy7cw3
$ docker exec -it mariadb.1.08qo72gee6xvw76g50cmy7cw3 mysql -u root -proot
$ node index.js service mariadb --stop
$ node index.js service mongo --start --network devbtcnet
$ docker ps --format "{{.Names}}"
mongo.1.hz4lztdngjl6w1ftr2rmqukll
$ docker exec -it mongo.1.hz4lztdngjl6w1ftr2rmqukll mongo --version
MongoDB shell version v3.4.1
git version: 5e103c4f5583e2566a45d740225dc250baacfbd7
OpenSSL version: OpenSSL 1.0.1t  3 May 2016
allocator: tcmalloc
modules: none
build environment:
    distmod: debian81
    distarch: x86_64
    target_arch: x86_64
$ node index.js service mongo --stop
```
### 2017-02-01T19:51:56+0800
```
$ node index.js service dojo --start --network devbtcnet --dojo.btc 5 --dojo.eth 3
{"id":"j9pgsm0vdox4c9bn61glrdfbf"}
{"id":"hbzwh8h2s2xc633easj00zyf9"}
{"id":"2tm3dkwyk05mkjoflv5b6jw9z"}
{"id":"kyylndxvjq1q9b35e4dyudp3w"}
{"id":"qg442650dqe9pifjmjufp1j7d"}
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
2tm3dkwyk05m  ethboot  replicated  1/1       y12docker/dltdojo-ethgo:latest
hbzwh8h2s2xc  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
j9pgsm0vdox4  dltdojo  replicated  1/1       y12docker/dltdojo:latest
kyylndxvjq1q  btcpeer  replicated  5/5       y12docker/dltdojo-bitcoin:latest
qg442650dqe9  ethpeer  replicated  3/3       y12docker/dltdojo-ethgo:latest
$ node index.js service dojo --stop
```
### 2017-02-01T09:06:32+0800
```
$ node index.js service dltdojo --start --network devbtcnet
$ node index.js service dojo --start --network devbtcnet --dojo.btc 5 --dojo.eth 3
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
6354n5wwwped  ethboot  replicated  1/1       y12docker/dltdojo-ethgo:latest
ilek011p8uxp  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
m7zopcnvrhxr  ethpeer  replicated  3/3       y12docker/dltdojo-ethgo:latest
pvcmyhs3oz9i  dltdojo  replicated  1/1       y12docker/dltdojo:latest
tdzlgl7o2mm0  btcpeer  replicated  5/5       y12docker/dltdojo-bitcoin:latest
$ node index.js service btc --stop
$ node index.js service eth --stop
// node index.js service dojo --stop
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
pvcmyhs3oz9i  dltdojo  replicated  1/1       y12docker/dltdojo:latest
$ docker build -t y12docker/dltdojo .
$ docker push y12docker/dltdojo:latest
$ djrun service dltdojo --start --network devbtcnet
$ djexec service dojo --start --network devbtcnet --dojo.btc 4 --dojo.eth 3
$ docker ps --format '{{.Names}}'
ethpeer.3.2m1qktfz3ultufox0xlcb7vui
ethboot.1.gewy7v7bak8k3w8msonqvlz3b
ethpeer.1.zhd0xrp4wuu1pb8e6k12vxb5j
ethpeer.2.y6nbwe9ru45jtslgej3nottbg
btcpeer.3.k7uezs7snjbur9xu4500bdskk
btcpeer.4.tv1g73q1m60cw4i4kgokc3uyv
btcpeer.2.6zix0f0n4faygxtelabnc4ggo
btcboot.1.lutk7mzrni829s298oj999kaj
btcpeer.1.ir687j3z9wcvka28r3qso584o
dltdojo.1.n8t8ylenpl0jpxazufhmi5mg3
$ djexec btc btcpeer.3.k7uezs7snjbur9xu4500bdskk account --new
mpYTkserNKwrGKHMNVKF8qLeG3ShNp6KMB
$ djexec eth ethpeer.2.y6nbwe9ru45jtslgej3nottbg account --new --password pass2
0x75c509a0947f31c7e07d38e40697ef66cb1f2157
$ djexec eth ethpeer.2.y6nbwe9ru45jtslgej3nottbg info
{ hostname: 'ethpeer.2.y6nbwe9ru45jtslgej3nottbg',
  ethBlockNumber: 0,
  ethCoinbase: '0x75c509a0947f31c7e07d38e40697ef66cb1f2157',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '0',
  ethMining: false }
$ djexec service dojo --stop
$ docker service rm dltdojo
```
### 2017-01-31T19:10:24+0800
```
$ node index.js service dltdojo --start --network devbtcnet
$ node index.js service ethboot --start --network devbtcnet
$ node index.js service ethpeer --start --network devbtcnet --dojo.eth 6
$ docker ps --format '{{.Names}}'
ethpeer.4.yp41c6dc38xsfck815i6cfrbc
ethpeer.3.xxw39oi49h04by1ug4x5fxmkh
ethpeer.2.d1po8um6pkts5afp7njwu6m0o
ethpeer.6.anxd6sa2d34q3xgkxmz0bij4z
ethpeer.5.jwc7k597oocta87fi5kq9y8to
ethpeer.1.yh6op19jak3sd5o06jfc0ujwo
dltdojo.1.ozeqe4t2cc23fil8qpg2u1w5c
ethboot.1.unqn4cop3i79ryju3ye6xr9v6
$ djexec eth ethpeer.5.jwc7k597oocta87fi5kq9y8to info
{ hostname: 'ethpeer.5.jwc7k597oocta87fi5kq9y8to',
  ethBlockNumber: 0,
  ethCoinbase: null,
  ethAccounts: 0,
  ethSyncing: false,
  netPeerCount: 2,
  ethBalance: 0,
  ethMining: false }
$ djexec eth ethpeer.5.jwc7k597oocta87fi5kq9y8to account --new --password pass5
$ djexec eth ethpeer.5.jwc7k597oocta87fi5kq9y8to miner --start
$ djexec eth ethpeer.5.jwc7k597oocta87fi5kq9y8to info
$ djexec eth ethpeer.2.d1po8um6pkts5afp7njwu6m0o info
$ node index.js service eth --start --network devbtcnet --dojo.eth 3
{"id":"j8zp13ofcgazbrtkmk1ibwjsh"}
{"id":"xnlh1mgcefjznpwjfeuka6spb"}
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
j8zp13ofcgaz  ethboot  replicated  1/1       y12docker/dltdojo-ethgo:latest
soo0c7vpr25x  dltdojo  replicated  1/1       y12docker/dltdojo:latest
xnlh1mgcefjz  ethpeer  replicated  3/3       y12docker/dltdojo-ethgo:latest
$ node index.js service eth --stop
```
### 2017-01-31T18:22:02+0800
```
$ node index.js service dltdojo --start --network devbtcnet
$ node index.js service btc --start --network devbtcnet --dojo.btc 6
$ node index.js service btc --stop
$ node index.js service dltdojo --stop
$ docker build -t y12docker/dltdojo .
$ docker push y12docker/dltdojo:latest
$ source alias.sh
$ djrun service dltdojo --start --network devbtcnet
$ djrun service btc --start --network devbtcnet --dojo.btc 6
$ djrun service btc --stop
$ djrun service dltdojo --stop
```
### 2017-01-31T09:09:11+0800
```
$ node index.js service dltdojo --new --network devbtcnet
{"id":"mkqpz246g3tgysmad45imcfnm"}

$ node index.js service btcboot --new --network devbtcnet
{"id":"hkl8sdsxj1g3sn5vw4wyg4muz"}
$ node index.js service btcpeer --new --network devbtcnet --dojo.btc 6
{"id":"qz8upiyjoc0df50oukct3nb4l"}
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
hkl8sdsxj1g3  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
mkqpz246g3tg  dltdojo  replicated  1/1       y12docker/dltdojo:latest
qz8upiyjoc0d  btcpeer  replicated  6/6       y12docker/dltdojo-bitcoin:latest
$ source alias.sh
$ djexec docker ps | jq .[].Names
...
[
  "/btcpeer.1.sn8z8rdf7x8zwy9co9a4g7jrb"
]
[
  "/btcpeer.4.vwwb0aresqufu85kyqk854dbq"
]
...
$ djexec btc btcpeer.1.sn8z8rdf7x8zwy9co9a4g7jrb account --new
$ djexec btc btcpeer.1.sn8z8rdf7x8zwy9co9a4g7jrb miner --num 5
$ djexec btc btcpeer.4.vwwb0aresqufu85kyqk854dbq info
```
### 2017-01-27T15:03:20+0800
```
$ docker network inspect devbtcnet
[
    {
        "Name": "devbtcnet",
        "Id": "ucne49s491tv53uhnlgxfjntx",
        "Created": "0001-01-01T00:00:00Z",
        "Scope": "swarm",
        "Driver": "overlay",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "10.0.9.0/24",
                    "Gateway": "10.0.9.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Containers": null,
        "Options": {
            "com.docker.network.driver.overlay.vxlanid_list": "4096"
        },
        "Labels": null
    }
]
$ source alias.sh
$ node index.js docker service create dltdojo
$ node index.js docker service create btcboot
$ node index.js docker service create btcpeer --dojo.btc 6
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
180nbspyct7m  btcpeer  replicated  6/6       y12docker/dltdojo-bitcoin:latest
kxf23rjfwe33  dltdojo  replicated  1/1       y12docker/dltdojo:latest
vp5n0udrr2dg  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
$ docker service rm btcpeer
$ docker service rm btcboot
$ docker service rm dltdojo
$ docker push y12docker/dltdojo:latest
$ djrun docker service create dltdojo
$ djrun docker service create btcboot
$ djrun docker service create btcpeer --dojo.btc 8
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
exmo6xccpett  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
v8adsisnqj07  btcpeer  replicated  8/8       y12docker/dltdojo-bitcoin:latest
zhqplyzq8b79  dltdojo  replicated  1/1       y12docker/dltdojo:latest
$ djexec docker ps | jq .[].Names
[
  "/btcpeer.2.l4vcnx4165xicf9cm0eykfqc7"
]
[
  "/btcpeer.4.g8xue371xd704qewtgt3emec0"
]
[
  "/btcpeer.3.yum10jbasrs18dxbr72sii3lv"
]
[
  "/btcpeer.5.kb8zfjkjtq306ehgmibuntb73"
]
[
  "/btcpeer.8.16lmlayl6d0tuiozxebwb8usg"
]
[
  "/btcpeer.6.up65qizfjfep5jt4vi58r9vky"
]
[
  "/btcpeer.7.rpvplpefdyyw1ka22gk95n8fc"
]
[
  "/btcpeer.1.i910digj3m4wd3c5s0ykyyivp"
]
[
  "/btcboot.1.tna9sia1hp8qlhdfui552fgbe"
]
[
  "/dltdojo.1.okxnlcqsefasya3vydl80p3bn"
]
$ djexec btc btcpeer.7.rpvplpefdyyw1ka22gk95n8fc account --new
$ djexec btc btcpeer.7.rpvplpefdyyw1ka22gk95n8fc miner --num 5
$ djexec btc btcpeer.8.16lmlayl6d0tuiozxebwb8usg info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 5,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1485503570,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```
### 2017-01-26T23:15:46+0800
```
// docker service create --name dltdojo --network devbtcnet --replicas 1 --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock y12docker/dltdojo start
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo docker dltdojo
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
ua1kepyvok3y  dltdojo  replicated  1/1       y12docker/dltdojo:latest
$ docker ps --format '{{.Names}}'
dltdojo.1.ske5vehcvyhzknbhnrt8p70sz
$ DJID=$(docker ps --format '{{.Names}}' | grep dltdojo.1)
$ docker exec -it $DJID node index.js docker bitcoin
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
jg8at751m6ab  btcpeer  replicated  3/3       y12docker/dltdojo-bitcoin:latest
o7g2kf8x3k7t  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
ua1kepyvok3y  dltdojo  replicated  1/1       y12docker/dltdojo:latest
$ docker ps --format '{{.Names}}'
btcpeer.1.uvp8sd9ln9lt9bvkpjopl905l
btcboot.1.w3qrfpvl8dvnvzqp1pzu0szsy
btcpeer.2.o2cyx8rka63fdtgp16jw5awl0
btcpeer.3.ieo0giz0nusggejdz56vdh4ku
dltdojo.1.ske5vehcvyhzknbhnrt8p70sz
$ B31=$(docker ps --format '{{.Names}}' | grep btcpeer.1)
$ B32=$(docker ps --format '{{.Names}}' | grep btcpeer.2)
$ docker exec -it $B31 bitcoin-cli getinfo
$ docker exec -it $DJID node index.js btc $B31 miner --num 19
$ docker exec -it $B31 bitcoin-cli getinfo
```
### 2017-01-26T23:02:48+0800
```
$ node index.js docker bitcoin
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
gtqya9rgbukr  btcpeer  replicated  3/3       y12docker/dltdojo-bitcoin:latest
t2t29zfv2otb  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
$  docker ps --format '{{.Names}}'
btcpeer.3.yphd9dvxm1e37msph69srzx7j
btcpeer.1.6gqudq6d9gjn0klj2v00sjilj
btcpeer.2.jvsey2gc97lo1osfl06j9x2rs
btcboot.1.okrl0lm97vt8lvwykpwspiduv
$ B31=$(docker ps --format '{{.Names}}' | grep btcpeer.1)
$ B32=$(docker ps --format '{{.Names}}' | grep btcpeer.2)
$ docker exec -it $B31 bitcoin-cli getinfo
{
  "version": 130100,
  "protocolversion": 70014,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1485443006,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ docker exec -it $B31 bitcoin-cli generate 5
[
  "62b844736606fc75991765a0f6dfd1006b2c16e7a2e446d828cfe2fd812f54de",
  "49529fa5793d84764e0725e1d12e97ad005bc7e8f3e1848cc44474e107cd54ef",
  "0bb0456eac0f622e2fabc581bc5644f1d1da000ebb9edc4cc44e774341fa1f4d",
  "039c5be9699badcd188b423790361658aeaeaee92fc92a4e090995fb2572c9f9",
  "4958a2a4c897b164d074931565a4d374b3f607c3f15ff0035456d99033197be5"
]
$ docker exec -it $B32 bitcoin-cli generate 2
[
  "028058596d311b099533dff17f014fcbab5c638ebd51b0cad22373bdbc551811",
  "6eae38eb677d5431ea146deccc5d6552e912ad5fd0352e07c40de83c1d2f6e0e"
]
$ docker exec -it $B32 bitcoin-cli getinfo
{
  "version": 130100,
  "protocolversion": 70014,
  "walletversion": 130000,
  "balance": 0.00000000,
  "blocks": 7,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1485443006,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ docker service rm btcpeer
btcpeer
$ docker service rm btcboot
btcboot
```
### 2017-01-26T20:20:38+0800
```
$ npm i dockerode -S
$ source alias.sh
$ build
$ drun docker ps | jq .[].Names
[
  "/dreamy_euclid"
]
[
  "/2b_ethp2_1"
]
[
  "/2b_bootnode_1"
]
[
  "/2b_dltdojo_1"
]
[
  "/2b_ethp0_1"
]
[
  "/2b_ethp1_1"
]


```
### 2017-01-26T08:31:56+0800
tag v0.0.1
```
$ git log --pretty=oneline | head -n 3
ec1467cd8d60680417eb6739efab8045d39e1bee updated tiguan1 event
1361e29dd0e89ef433c01a87843adbe5f4d3c920 updated events tiguan1 hyperledger/fabric-ccenv:x86_64-0.7.0-snapshot-75a4c82 not found issue
bc3ad104f724cc1e1ebe3bd4a1b55467e549e3c4 updated levels readme
$ git tag -a v0.0.1 ec1467cd8d -m 'TiGuan1'
$ git push --tags origin master
```
https://docs.docker.com/engine/reference/commandline/service_create/
```
$ docker version
Client:
 Version:      1.13.0
 API version:  1.25
 Go version:   go1.7.3
 Git commit:   49bf474
 Built:        Tue Jan 17 09:50:17 2017
 OS/Arch:      linux/amd64

Server:
 Version:      1.13.0
 API version:  1.25 (minimum version 1.12)
 Go version:   go1.7.3
 Git commit:   49bf474
 Built:        Tue Jan 17 09:50:17 2017
 OS/Arch:      linux/amd64
 Experimental: false

$ docker swarm init
Swarm initialized: current node (dttwth4v7hkgrw9lm02uxcdjb) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-55o1i56cacdocz5e8qcy210h5ud3yyozfbqjveom8bfnqnoal8-19uguutg4ewghnh442oq6zxz7 \
    192.168.2.73:2377

$ docker swarm join-token manager
To add a manager to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-55o1i56cacdocz5e8qcy210h5ud3yyozfbqjveom8bfnqnoal8-3yyorggqxl1lgmda30kpubanr \
    192.168.2.73:2377
$ docker node ls
ID                           HOSTNAME  STATUS  AVAILABILITY  MANAGER STATUS
dttwth4v7hkgrw9lm02uxcdjb *  ubuntu73  Ready   Active        Leader
$ docker service create --name redis --replicas 2 --publish 6379:6379 redis
$ docker service ls
ID            NAME   REPLICAS  IMAGE  COMMAND
2udmmowcy0ir  redis  2/2       redis
$ docker service ps 2udmm
ID                         NAME     IMAGE  NODE      DESIRED STATE  CURRENT STATE           ERROR
33hs2kgqe4ebo5kx9vaq37xvr  redis.1  redis  ubuntu73  Running        Running 22 minutes ago
23p0ounnzpagsn8vavqeyh4jj  redis.2  redis  ubuntu73  Running        Running 22 minutes ago
$ docker service rm redis
redis
$ docker service create --name dltdojo -p 18168:18168 y12docker/dltdojo start
$ ds ls
ID            NAME     MODE        REPLICAS  IMAGE
jidxc7ddg5ox  dltdojo  replicated  1/1       y12docker/dltdojo:latest
$ ds ps jidx
ID            NAME       IMAGE                     NODE      DESIRED STATE  CURRENT STATE          ERROR  PORTS
tbahum1v0qfr  dltdojo.1  y12docker/dltdojo:latest  ubuntu73  Running        Running 2 minutes ago
// https://github.com/docker/docker/issues/23710
$ docker inspect --format "{{.Status.ContainerStatus.ContainerID}}" tbahum1v0qfr
5f7d3c1b60f37505b0c54211f062d22d85477ff3bbf3a00b258798a8a3b74c03
$ docker logs 5f7d3c1b60f3750
$ $ curl http://192.168.2.73:18168/
Method Not Allowed
$ ds rm dltdojo
$ curl http://192.168.2.73:18168/
curl: (7) Failed to connect to 192.168.2.73 port 18168: Connection refused
```
### 2017-01-25T12:04:08+0800
```
$ node index.js build --bulkuser --num 3 --prefix tx --dojoname tiguan1 | jq -r .accounts[].script
useradd -m tx1dlt; echo -e "L1vc3tAhuMCi5YJB\nL1vc3tAhuMCi5YJB" | passwd tx1dlt
usermod -s /bin/bash tx1dlt;  usermod -aG docker tx1dlt
sed -e 's/DLTDOJOID=1/DLTDOJOID=1/g' aliastiguan1.sh >> /home/tx1dlt/.bashrc
cp peerstiguan1.yml /home/tx1dlt/
$ su - tx1dlt
$ docker info
```
### 2017-01-24T17:46:43+0800
```
$ node index.js build --bulkuser --num 30 --prefix tg --dojoname tiguan1 | jq .
$ node index.js build --bulkuser --num 30 --prefix tg --dojoname tiguan1 | jq -r .accounts[].script
$ cat /tmp/djsetup.sh
$ cat /tmp/userinfo.txt
$ cp events/tiguan1/aliastiguan1.sh /tmp/
$ cp events/tiguan1/peerstiguan1.yml /tmp/
$ docker run -it -v /tmp:/tmp/host ubuntu
# cd /tmp/host
# ls
djsetup.sh         peerstiguan1.yml
aliastiguan1.sh  npm-5890-67f05cfc  userinfo.txt
#
useradd -m tg28dlt; echo -e "Kx2Z5CZZXToDmHuP\nKx2Z5CZZXToDmHuP" | passwd tg28dlt
sed -e 's/DLTDOJOID=1/DLTDOJOID=28/g' aliastiguan1.sh >> /home/tg28dlt/.bashrc
cp peerstiguan1.yml /home/tg28dlt/
# su - tg28dlt
$ ls
peerstiguan1.yml
$ alias btcp
alias btcp='ddj btc btcp${DLTDOJOID}'
$ echo $DLTDOJOID
28
exit

// test djsetup.sh
$ docker run -it -v /tmp:/tmp/host ubuntu
# cd /tmp/host
# chmod a+x djsetup.sh ; ./djsetup.sh
# su - tg16dlt
$ ls
peerstiguan1.yml
$ echo $DLTDOJOID
16
```

### 2017-01-24T12:25:55+0800
```
$ docker run -t y12docker/dltdojo ipfs hello
{ _: [ 'ipfs' ], '$0': 'index.js', method: 'hello' }
DLTDOJO hello world!
```
### Thu Jan 19 11:26:24 CST 2017
```
$ node index.js build --bulkuser --num 3 --prefix ha --dojoname d119 | jq .
$ node index.js build --bulkuser --num 3 --prefix ha --dojoname d119 | jq -r .accounts[].script
useradd -m ha1dlt; echo -e "KweR4viGkCrx4sRC\nKweR4viGkCrx4sRC" | passwd ha1dlt ; echo -e "alias ddjexec='docker exec -t d119_dltdojo_1'\nalias ddj='ddjexec node index.js'\nalias btcp1exec='docker exec -t d119_btcp1_1'\nalias btcp1='ddj btc btcp1'\nalias etcp1exec='docker exec -t d119_etcp1_1'\nalias etcp1='ddj etc etcp1'\nalias fabp1exec='docker exec -t d119_fabp1_1'\nalias fabp1='ddj fab fabp1'" > /home/ha1dlt/.bashrc
useradd -m ha2dlt; echo -e "L4wyyd1BSiotB3pb\nL4wyyd1BSiotB3pb" | passwd ha2dlt ; echo -e "alias ddjexec='docker exec -t d119_dltdojo_1'\nalias ddj='ddjexec node index.js'\nalias btcp2exec='docker exec -t d119_btcp2_1'\nalias btcp2='ddj btc btcp2'\nalias etcp2exec='docker exec -t d119_etcp2_1'\nalias etcp2='ddj etc etcp2'\nalias fabp2exec='docker exec -t d119_fabp2_1'\nalias fabp2='ddj fab fabp2'" > /home/ha2dlt/.bashrc
useradd -m ha3dlt; echo -e "KzwhsDTghBjcQZyA\nKzwhsDTghBjcQZyA" | passwd ha3dlt ; echo -e "alias ddjexec='docker exec -t d119_dltdojo_1'\nalias ddj='ddjexec node index.js'\nalias btcp3exec='docker exec -t d119_btcp3_1'\nalias btcp3='ddj btc btcp3'\nalias etcp3exec='docker exec -t d119_etcp3_1'\nalias etcp3='ddj etc etcp3'\nalias fabp3exec='docker exec -t d119_fabp3_1'\nalias fabp3='ddj fab fabp3'" > /home/ha3dlt/.bashrc

$ docker run -it ubuntu bash
// run script
root@6e25a6fc85fe:/# su - ha1dlt
$ cat .bashrc
alias btcp1='docker exec -t d119_btcp1_1'
alias etcp1='docker exec -t d119_etcp1_1'
alias fabp1='docker exec -t d119_fabp1_1'

$ docker run -t y12docker/dltdojo build --bulkuser --num 3 --prefix ha | jq .

```
### Tue Jan 17 19:25:07 CST 2017
```
$ fdcup
$ fabp1peer version
Fabric peer server version 1.0.0-preview
$ fabp1peer chaincode deploy -n test_cc -p github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02 -c '{"Args":["init","a","100","b","200"]}'
$ fabp1peer chaincode invoke -n test_cc -c '{"Args":["query","a"]}'
$ fdc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
ddj_cop_1          cop server start   Up                 0.0.0.0:8888->88
                   -ca testd ...                         88/tcp
ddj_dltdojo_1      node index.js      Up
                   start
ddj_fabp1_1        peer node start    Up                 0.0.0.0:7051->70
                                                         51/tcp
ddj_fabp2_1        peer node start    Up
ddj_fabp_1         peer node start    Up
ddj_orderer_1      orderer            Up                 0.0.0.0:7050->70
                                                         50/tcp
```
### Tue Jan 17 14:28:16 CST 2017
```
$ edcup
$ node index.js eth localhost dev --case 1
$ node index.js eth localhost info --hahacoin
$ node index.js eth localhost hahacoin --new --address 0x631e86b905f9c118524660d379cfe5dacd489c33 --password passAlice
$ node index.js eth localhost hahacoin --address 0x631e86b905f9c118524660d379cfe5dacd489c33 --password passAlice --contract 0xa17e49072ac8b4dd1ae37ee5d5e6c9fbbe09cfad
$ node index.js eth localhost hahacoin send --address 0x631e86b905f9c118524660d379cfe5dacd489c33 --password passAlice --contract 0xa17e49072ac8b4dd1ae37ee5d5e6c9fbbe09cfad --to 0x8b8c1c00dc15980434ff4d679103fb21be205816 --amount 3.6
```
### Tue Jan 17 09:40:04 CST 2017
```
$ bdcup
$ node index.js btc localhost info
$ node index.js btc localhost account --new
$ node index.js btc localhost account --dumpkey --address xxxxx
$ node index.js btc localhost miner --num 10
$ node index.js btc localhost send --to mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT --btc 1.88
```
### Mon Jan 16 14:16:38 CST 2017
```
$ edcup
$ edc ps
Name             Command             State              Ports
-------------------------------------------------------------------------
ddj_bootnode_1     /geth --dev        Up                 30303/tcp,
             --networkid=88                        8545/tcp
             ...
ddj_dltdojo_1      node index.js      Up
             start
ddj_ethp1_1        /start.sh --dev    Up                 30303/tcp, 127.0
             --networki ...                        .0.1:8545->8545/
                                                   tcp
ddj_ethp_1         /start.sh --dev    Up                 30303/tcp,
             --networki ...                        8545/tcp

$ node index.js eth localhost account --password pass1 --new
$ node index.js eth localhost miner --start
$ node index.js eth localhost info
$ node index.js eth localhost send --to 0x8b8c1c00dc15980434ff4d679103fb21be205816 --eth 3.6 --password pass1
$ node index.js eth localhost info
$ ethp1exec ls /root/.ethereum/devchain/keystore | sort -n
$ ethp1exec find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -print -exec cat {} \;

```
### Mon Jan 16 09:06:15 CST 2017
```
$ bdcup
$ node index.js btc localhost getInfo
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 2,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484529019,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ node index.js btc localhost getNewAddress
muWbBzvgXPmBoUw7Cc7ziTySqXgCK3ooU3
$ node index.js btc localhost dumpPrivKey --address muWbBzvgXPmBoUw7Cc7ziTySqXgCK3ooU3
cPB7Yuq17uvCchZefXmXkW7PMGajhuWi6mocBxcmCev7Sd344niU

$ ddj btc btcp1 getInfo
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484529019,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ ddj btc getNewAddress btcp1
n2Niyx2H1ereJoSg4JwTguC2dKa3ruNwKu
$ ddj btc getNewAddress btcp2
n2z4DEQgkZadkb4d4WrQRzsJAAeSYak2yi

```
### Sun Jan 15 21:33:18 CST 2017
```
$ dcup
$ dc ps
Name             Command             State              Ports
-------------------------------------------------------------------------
ddj_bvp0_1         bitcoind           Up                 18332/tcp,
             -regtest                              18333/tcp
             -txindex ...
ddj_bvp1_1         bitcoind           Up                 127.0.0.1:18332-
             -regtest                              >18332/tcp, 127.
             -txindex ...                          0.0.1:18333->183
                                                   33/tcp
ddj_dltdojo_1      node index.js      Up
             start

$ dojo btc getNewAddress bvp0
{ _: [ 'btc' ], hostname: 'bvp0', '$0': 'index.js' }
{ isvalid: true,
  address: 'mnL8GKxsbWgEGQzMhBHPLUTuLyNUsna5v8',
  scriptPubKey: '76a9144abca0ad1d794c5b084ce959d8a783b1d128db5188ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02e9167493d77233c59e9dc0a98721350e24ee9f9f5b29d8dc519df76cfbe5bb34',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: '22085000d477b8daf93c4287a12ecbd0f24d00dd' }
$ dojo btc getNewAddress bvp1
{ _: [ 'btc' ], hostname: 'bvp1', '$0': 'index.js' }
{ isvalid: true,
  address: 'mkRG1399uD7wBKe6yVJHaWfjWPQ51RHccV',
  scriptPubKey: '76a91435c4e9f4769bacc79fee46aca5024f10db4b8fe388ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02067bf2683a57f2ac0674060475751f33c883e82aa570afbbe0d1896d7eb01d4f',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: 'f1b647617df3f74c35dadc527399eeb2ee5ceb76' }
```

### Sun Jan 15 16:26:36 CST 2017
```
// docker-compose -p $DCNAME -f dockerfiles/dltdojo/btc.yml
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
ddltdojo_bvp0_1    bitcoind           Up                 18332/tcp,
                   -regtest                              18333/tcp
                   -txindex ...
ddltdojo_bvp1_1    bitcoind           Up                 127.0.0.1:18332-
                   -regtest                              >18332/tcp, 127.
                   -txindex ...                          0.0.1:18333->183
                                                         33/tcp
$ sh1 ifconfig
eth0      Link encap:Ethernet  HWaddr 02:42:AC:63:00:02
          inet addr:172.99.0.2  Bcast:0.0.0.0  Mask:255.255.0.0
          inet6 addr: fe80::42:acff:fe63:2/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:27 errors:0 dropped:0 overruns:0 frame:0
          TX packets:28 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:2379 (2.3 KiB)  TX bytes:2373 (2.3 KiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:14 errors:0 dropped:0 overruns:0 frame:0
          TX packets:14 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:720 (720.0 B)  TX bytes:720 (720.0 B)

$ curl --user user --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:18332/
$ node index.js info
{ _: [ 'info' ],
  name: 'alice',
  '$0': '/usr/bin/nodejs index.js' }
undefined
{ isvalid: true,
  address: 'mfYNDVTY1VbtxCtiPiTA5miZxZ2ngZMEKj',
  scriptPubKey: '76a9140044626dba504f8db1bb3eb009cbb0d731f02b6588ac',
  ismine: true,
  iswatchonly: false,
  isscript: false,
  pubkey: '02ac066f7cc057a64b45cdd1306f66426768e0aa9f45b8d8957c661081d9fb2cdc',
  iscompressed: true,
  account: '',
  hdkeypath: 'm/0\'/0\'/1\'',
  hdmasterkeyid: '5cf3f4394cd0b324e8f831ce16c20bb835e77c83' }
```
