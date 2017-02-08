### PROJECTS

* https://github.com/bitcoin/bitcoin
* https://github.com/ethereum/go-ethereum
* https://github.com/bitcoin-abe/bitcoin-abe
* https://github.com/iquidus/explorer
* https://github.com/JornC/bitcoin-transaction-explorer
* https://github.com/carsenk/explorer
* https://github.com/MariaDB/server
* https://github.com/mongodb/mongo

### 環境要求 Prerequisites

* docker >= 1.13.0
* bash

### STEP0
```
$ docker pull y12docker/dltdojo &&\
  docker pull y12docker/dltdojo-bitcoin &&\
  docker pull y12docker/dltdojo-ethgo &&\
  docker pull y12docker/dltdojo-ethparity:1.5.0
$ docker pull mariadb:10.1 &&\
  docker pull mongo:3.4
$ docker pull y12docker/dltdojo-abe &&\
  docker pull y12docker/dltdojo-iquexp &&\
  docker pull y12docker/dltdojo-jorexp &&\
  docker pull y12docker/dltdojo-carexp
$
// https://docs.docker.com/engine/swarm/swarm-mode/
$ docker swarm init --advertise-addr 192.168.2.73
$ docker network create --driver overlay --subnet 10.0.63.0/24 tiguan3net
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan3 --start \
   --network tiguan3net --pubhost 192.168.2.73

# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan3 --stop'
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
# DLTDOJO tiguan3
#   http://host_ip:18168/
```
copy and paste script
```
$ dinfo
dltdojo.1.iuw6mwngguds9qisdxebfe41r  0.0.0.0:18168->18168/tcp
ethpeer.1.g4fu7dlpyzgnm7ce7yjk9m4fh  8545/tcp, 30303/tcp
btcabe.1.x1vwxdbuevkysws791quj3kat  0.0.0.0:12750->12750/tcp
mongo.1.d60h42hw8a6qso6clc5jiu6t4  27017/tcp
btcjorexp.1.i15so2mha0olkevbkexpbesev  0.0.0.0:12752->8080/tcp
ethpeer.2.t5r28u0bp6l2v5iy2k1efsrls  8545/tcp, 30303/tcp
ethboot.1.tl73tj5xv74vpilq4t369eth7  0.0.0.0:8545->8545/tcp, 30303/tcp
btcpeer.3.b18gmpk6w3z463q2hn5o1c2d2  18332-18333/tcp
ethpeer.3.gfswzo5bjfv0ioej13nvb4vn4  8545/tcp, 30303/tcp
btciquexp.1.r365qmvqfgd9ku664yy73dqut  0.0.0.0:12751->3001/tcp
mariadb.1.ertmlnc9wbn40dl875u6c2zbr  3306/tcp
carexp.1.dwp079yps62v09u9jxoklpuuy  0.0.0.0:18000->8000/tcp
btcpeer.2.3ri9bn9oxl4mvl0pnqocrzvlg  18332-18333/tcp
btcpeer.1.sdt9pt40bhuuo52y0ru7o02mj  18332-18333/tcp
btcboot.1.pdsakj6aa5e2ab14ab2okhrh0  18332-18333/tcp
ID            NAME       MODE        REPLICAS  IMAGE
5m5a735i1wsf  btcabe     replicated  1/1       y12docker/dltdojo-abe:latest
amvvyu59pfcs  carexp     replicated  1/1       y12docker/dltdojo-carexp:latest
bjny76u3fxar  ethboot    replicated  1/1       y12docker/dltdojo-ethgo:latest
iyddbhfvjc9i  mariadb    replicated  1/1       mariadb:10.1
lb1ofz6gtu29  btcjorexp  replicated  1/1       y12docker/dltdojo-jorexp:latest
mb50x2hp9klw  btcpeer    replicated  3/3       y12docker/dltdojo-bitcoin:latest
mqcnntoxw4df  btciquexp  replicated  1/1       y12docker/dltdojo-iquexp:latest
p1mhjg32vw0e  ethpeer    replicated  3/3       y12docker/dltdojo-ethgo:latest
pzkcc7qa18hv  mongo      replicated  1/1       mongo:3.4
rwk5iyqnr6jl  dltdojo    replicated  1/1       y12docker/dltdojo:latest
wq915412ydsj  btcboot    replicated  1/1       y12docker/dltdojo-bitcoin:latest

$ docker logs $DJID

      Welcome to DLTDOJO World.
     _____  _   _______ _____   ____       _  ____
    |  __ \| | |__   __|  __ \ / __ \     | |/ __ \
    | |  | | |    | |  | |  | | |  | |    | | |  | |
    | |  | | |    | |  | |  | | |  | |_   | | |  | |
    | |__| | |____| |  | |__| | |__| | |__| | |__| |
    |_____/|______|_|  |_____/ \____/ \____/ \____/

   Project:  https://github.com/y12studio/dltdojo

   Server:  http://host_ip:18168/
```
### STEP1 Bitcoin && Explorer
```
$ dj btc $BTCP1 info
$ dj btc $BTCP2 info
$ dj btc $BTCP1 account --new
mg71123GT5TDYnkZmA4f8Rrw3BBm3X4hRp
$ dj btc $BTCP2 account --new
mo6EvPqBF5CULCsmA8PFy6MG9PrtHD2pFn
$ dj btc $BTCP1 account --dumpkey --address mg71123GT5TDYnkZmA4f8Rrw3BBm3X4hRp
cU9dHBWp2BrYXqh78QzceAszXdxz1ztnj1GAjnMMhBqpT6Ax5AXb
$ dj btc $BTCP1 miner --num 101
$ dj btc $BTCP1 send --to mo6EvPqBF5CULCsmA8PFy6MG9PrtHD2pFn --btc 1.88
$ dj btc $BTCP1 miner --num 2
$ dj btc $BTCP2 miner --num 1
$ dj btc $BTCP1 info && dj btc $BTCP2 info
$ iquexp_index reindex && iquexp_index update
```
### STEP2 Ethereum && Explorer
```
$ dj eth $ETHP1 account --new --password pass1
0xc71292e561bc8be28482da08379b43172477561d
$ dj eth $ETHP1 info && dj eth $ETHP2 info
$ docker exec -t $ETHP1 /keyfind.sh
$ dj eth $ETHP1 miner --start
$ docker logs $ETHP1
// wait.... DAG .. 100%
$ dj eth $ETHP1 info
$ dj eth $ETHP1 send --to 0xaaf98a65dabd34d69769a377016a38b800cc72d6 --eth 3.6 --password pass1
$ dj eth $ETHP2 info
```
### STEP3 Ethereum Token && Explorer
```
$ dj eth $ETHP1 hahacoin --new --address 0x545e04946b11cf128dec2bde9ec34e670041513e --password pass1
{ tx: '0x41310497cb84b011ce70bd40c8dd88260aa225a91d20844ceccd1e74a2dbf9a8',
  contractAddress: '0x70983a9057aa2cde195a61a8b8832689a3bb4dad' }
$ dj eth $ETHP1 hahacoin --address 0x545e04946b11cf128dec2bde9ec34e670041513e --password pass1 \
    --contract 0x70983a9057aa2cde195a61a8b8832689a3bb4dad
{ account: '0x545e04946b11cf128dec2bde9ec34e670041513e',
  contractAddress: '0x70983a9057aa2cde195a61a8b8832689a3bb4dad',
  contractBalance: '10000' }
$ dj eth $ETHP1 hahacoin --send --address 0x545e04946b11cf128dec2bde9ec34e670041513e --password pass1 \
     --contract 0x70983a9057aa2cde195a61a8b8832689a3bb4dad --to 0xaaf98a65dabd34d69769a377016a38b800cc72d6 \
     --amount 99
0x20eef134da8b834673df5b2bebe8e7387ca3e7784210fe71df7c1a591b43ca49
$ dj eth $ETHP1 hahacoin --address 0x545e04946b11cf128dec2bde9ec34e670041513e --password pass1 \
    --contract 0x70983a9057aa2cde195a61a8b8832689a3bb4dad
{ account: '0x545e04946b11cf128dec2bde9ec34e670041513e',
  contractAddress: '0x70983a9057aa2cde195a61a8b8832689a3bb4dad',
  contractBalance: '9901' }
$ dj eth $ETHP1 info
{ hostname: 'ethpeer.1.wb048u7pqd9rjfuh6dly3qeni',
  ethBlockNumber: 168,
  ethCoinbase: '0x545e04946b11cf128dec2bde9ec34e670041513e',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 2,
  ethBalance: '836.4',
  ethMining: true }
$ dj eth $ETHP2 hahacoin --address 0xaaf98a65dabd34d69769a377016a38b800cc72d6 --password pass2 \
    --contract 0x70983a9057aa2cde195a61a8b8832689a3bb4dad
{ account: '0xaaf98a65dabd34d69769a377016a38b800cc72d6',
  contractAddress: '0x70983a9057aa2cde195a61a8b8832689a3bb4dad',
  contractBalance: '99' }
$ dj eth $ETHP2 info
{ hostname: 'ethpeer.2.zncbno1w1qxhpctsapibikcku',
  ethBlockNumber: 175,
  ethCoinbase: '0xaaf98a65dabd34d69769a377016a38b800cc72d6',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '3.6',
  ethMining: false }
```
### STEP4 MariaDB(SQL)
```
$ docker exec -it $MYSQL mysql -u root -proot
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 2
Server version: 10.1.21-MariaDB-1~jessie mariadb.org binary distribution
MariaDB [(none)]> CREATE DATABASE mydb1;
Query OK, 1 row affected (0.00 sec)

MariaDB [(none)]> USE mydb1;
Database changed
MariaDB [mydb1]> CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );
Query OK, 0 rows affected (0.02 sec)

MariaDB [mydb1]> INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);
Query OK, 1 row affected (0.01 sec)

MariaDB [mydb1]> INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);
Query OK, 1 row affected (0.01 sec)

MariaDB [mydb1]> SELECT * FROM mytable;
+----+------------------------------------+---------+
| id | name                               | balance |
+----+------------------------------------+---------+
|  1 | mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT |    1000 |
|  2 | mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy |    2000 |
+----+------------------------------------+---------+
2 rows in set (0.00 sec)

MariaDB [mydb1]> START TRANSACTION; UPDATE mytable SET balance=balance-80 WHERE id=1; UPDATE mytable SET balance=balance+80 WHERE id=2; COMMIT;
Query OK, 0 rows affected (0.00 sec)

Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

Query OK, 0 rows affected (0.00 sec)

MariaDB [mydb1]> SELECT * FROM mytable;
+----+------------------------------------+---------+
| id | name                               | balance |
+----+------------------------------------+---------+
|  1 | mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT |     920 |
|  2 | mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy |    2080 |
+----+------------------------------------+---------+
2 rows in set (0.00 sec)

MariaDB [mydb1]> exit
Bye
```
### STEP5 Mongo(NOSQL)
```
$ docker exec -it $MONGO mongo
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.1
Welcome to the MongoDB shell.
> use test
switched to db test
> db.mongot1.insert({address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT', balance:1000})
WriteResult({ "nInserted" : 1 })
> db.mongot1.insert({address:'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy', balance:2000})
WriteResult({ "nInserted" : 1 })
> db.mongot1.findAndModify({query:{address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT'},update:{ $inc: { balance: -100 } }})
{
        "_id" : ObjectId("58930bf178a1ac37cab8200e"),
        "address" : "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT",
        "balance" : 1000
}
> db.mongot1.findAndModify({query:{address:'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy'},update:{ $inc: { balance: 100 } }})
{
        "_id" : ObjectId("58930bf678a1ac37cab8200f"),
        "address" : "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy",
        "balance" : 2000
}
>  db.mongot1.find()
{ "_id" : ObjectId("58930bf178a1ac37cab8200e"), "address" : "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", "balance" : 900 }
{ "_id" : ObjectId("58930bf678a1ac37cab8200f"), "address" : "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", "balance" : 2100 }
> exit
bye
```
