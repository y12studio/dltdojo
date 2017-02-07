## Tiguan2 踢館貳之轉帳與查帳

練習比特幣/以太坊/以太坊智能合約代幣的紀錄交易轉帳，並與SQL/NOSQL簡單對比其差異。

### 環境要求 Prerequisites

* docker >= 1.13.0
* bash

### 環境設置 Setup
```
$ docker network create --driver overlay --subnet 10.0.66.0/24 tiguan2net
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan2 --start --network tiguan2net
$ docker ps --format "{{.Names}}"
ethboot.1.zgm8iw1orv1i4pibrq8qzujch
mongo.1.op713wxvbiyoh1hqmsc8xk070
ethpeer.2.zncbno1w1qxhpctsapibikcku
dltdojo.1.8scu1fxpd106dh2loewucu9mg
ethpeer.1.wb048u7pqd9rjfuh6dly3qeni
ethpeer.3.wty5yl9h8db63rpwbfjy3kith
btcboot.1.jcuy9g3znuk1qlnipwrnwvpo3
mariadb.1.vguk8jenil48mohs582651owh
btcpeer.3.w8964jjmgv5bfqjos4qmtdbjd
btcpeer.1.ydm59buz4527vlwyxddn6qlpb
btcpeer.2.gdyqjd7wdrreec40b3dsmft0v
$ DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
$ alias dj='docker exec -t $DJID node index.js'
$ BTCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1) ; BTCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
$ ETHP1=$(docker ps --format "{{.Names}}" | grep ethpeer.1) ; ETHP2=$(docker ps --format "{{.Names}}" | grep ethpeer.2)
$ MYSQL=$(docker ps --format "{{.Names}}" | grep mariadb.1)
$ MONGO=$(docker ps --format "{{.Names}}" | grep mongo.1)
```
### BTC 比特幣轉帳
建立金鑰與地址後先挖礦取得比特幣後轉出並查帳無誤。
```
$ dj btc $BTCP1 info
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
  keypoololdest: 1486029541,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ dj btc $BTCP2 info
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
  keypoololdest: 1486029541,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ dj btc $BTCP1 account --new
mwTZdHU59gp94PGbLdBTcvxNQ3F2GeuZWH
$ dj btc $BTCP2 account --new
moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB
$ dj btc $BTCP1 account --dumpkey --address mwTZdHU59gp94PGbLdBTcvxNQ3F2GeuZWH
cSp9Nkyft1cByFDEodMBCKPrixJaysT7aZmcv72cuwUiiATN2f3E
$ dj btc $BTCP1 miner --num 101
...
'3ddb79d26d964446334d6d80f77ffba29300773b35d313f27e294b6a22f874bd',
 '50ccb9063abd62a1e83c224d8f52834d69398d01d03ade12b4a95dfd3c4abb64',
 '275814a7f815af53a95fbd0253f5add4cdc2d3563838814dfe4f3f48a4ffc10d',
 '159c2af26116008ee423c2c88d45e5ebf6f741eefa9cc97830ba4801c8ec6ea8',
 '09761e71f8968433103b80aab261b3dac5aa46a810986c0b12dbec993767d5c2',
 '557e8e78476fcfbc428ec657adbf1e3bf7e94655f0d7f770355b18d8e7a3741b',
...
$ dj btc $BTCP1 send --to moyx67cxJBFAnEGj1CxUTTWadpZGQHUmqB --btc 1.88
f72f2c15c733aec249e5be477121fea4e93dcdb616b8bce6e0cd2455df4def83
$ dj btc $BTCP2 miner --num 1
[ '2bf17e291b82a08c0e72586e64dac4ae22c38fb59b0fa374ee51e2d574159d14' ]
$ dj btc $BTCP1 info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 98.1199616,
  blocks: 102,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1486029541,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
$ dj btc $BTCP2 info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 1.88,
  blocks: 102,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1486029541,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```
### ETH 以太坊轉帳
建立金鑰密碼與地址後先挖礦取得以太幣後轉出並查帳無誤。請注意ETH挖礦需要下載約1G的資料並等候下載完成，視狀況可能需要等候數十分鐘。
```
$ dj eth $ETHP1 account --new --password pass1
0x545e04946b11cf128dec2bde9ec34e670041513e
$ dj eth $ETHP2 account --new --password pass2
0xaaf98a65dabd34d69769a377016a38b800cc72d6
$ dj eth $ETHP1 info
{ hostname: 'ethpeer.1.wb048u7pqd9rjfuh6dly3qeni',
  ethBlockNumber: 0,
  ethCoinbase: '0x545e04946b11cf128dec2bde9ec34e670041513e',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 2,
  ethBalance: '0',
  ethMining: false }
$ dj eth $ETHP2 info
{ hostname: 'ethpeer.2.zncbno1w1qxhpctsapibikcku',
  ethBlockNumber: 0,
  ethCoinbase: '0xaaf98a65dabd34d69769a377016a38b800cc72d6',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '0',
  ethMining: false }
$ docker exec -t $ETHP1 /keyfind.sh
{
  "address": "545e04946b11cf128dec2bde9ec34e670041513e",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "ce9d4647f17895eb161a4a2314f5e72cce586450d816c5bca5fb266fffd696a2",
    "cipherparams": {
      "iv": "45d0f7e9c27df90a163e4e3305c5d488"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "8b8615db6fefdbbadd4ba44e7a3db7166d68a3412b8520c9f8579d62bb9b4fc1"
    },
    "mac": "df0bc8f216cc75a0bb5bc343d69af1ab05a6af4c3d4a50509f8c72d1bc2fd6f3"
  },
  "id": "b010c0d1-6745-4fa2-b8f8-8fbcf8962162",
  "version": 3
}
$ dj eth $ETHP1 miner --start
// wait....
$ dj eth $ETHP1 info
{ hostname: 'ethpeer.1.wb048u7pqd9rjfuh6dly3qeni',
  ethBlockNumber: 8,
  ethCoinbase: '0x545e04946b11cf128dec2bde9ec34e670041513e',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 2,
  ethBalance: '40',
  ethMining: true }
$ dj eth $ETHP1 send --to 0xaaf98a65dabd34d69769a377016a38b800cc72d6 --eth 3.6 --password pass1
0x422684efa203d907cac097be2dc6d5790e8415853e1e27c579cf073b9347360a
$ dj eth $ETHP2 info
{ hostname: 'ethpeer.2.zncbno1w1qxhpctsapibikcku',
  ethBlockNumber: 23,
  ethCoinbase: '0xaaf98a65dabd34d69769a377016a38b800cc72d6',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '3.6',
  ethMining: false }
```
### ETH 智能合約代幣轉帳
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
### MariaDB(MySQL)
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
### MongoDB(NOSQL)
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

### TiGuan2 End
```
$ docker service ls
ID            NAME     MODE        REPLICAS  IMAGE
8gimqt7zw8mc  dltdojo  replicated  1/1       y12docker/dltdojo:latest
9ci6nu72qgf9  btcpeer  replicated  3/3       y12docker/dltdojo-bitcoin:latest
ak9wdibqoo8h  btcboot  replicated  1/1       y12docker/dltdojo-bitcoin:latest
iz47x6jfn72e  mongo    replicated  1/1       mongo:3.4
niqw6b25ltnp  ethboot  replicated  1/1       y12docker/dltdojo-ethgo:latest
wosqe3uh97f9  ethpeer  replicated  3/3       y12docker/dltdojo-ethgo:latest
xvpe0fax40lx  mariadb  replicated  1/1       mariadb:10.1
$ docker ps
CONTAINER ID        IMAGE                                                                                               COMMAND                  CREATED             STATUS              PORTS                 NAMES
8043a34d940d        y12docker/dltdojo-ethgo@sha256:7165ca334b4bb308e8e19b78178fc69a48900b299576f48298fa0569c9dfb073     "/startboot.sh"          About an hour ago   Up About an hour    8545/tcp, 30303/tcp   ethboot.1.zgm8iw1orv1i4pibrq8qzujch
aab352a3190f        mongo@sha256:aff0c497cff4f116583b99b21775a8844a17bcf5c69f7f3f6028013bf0d6c00c                       "/entrypoint.sh mo..."   About an hour ago   Up About an hour    27017/tcp             mongo.1.op713wxvbiyoh1hqmsc8xk070
1b639e19fd86        y12docker/dltdojo-ethgo@sha256:7165ca334b4bb308e8e19b78178fc69a48900b299576f48298fa0569c9dfb073     "/startpeer.sh"          About an hour ago   Up About an hour    8545/tcp, 30303/tcp   ethpeer.2.zncbno1w1qxhpctsapibikcku
4b65c87817ad        y12docker/dltdojo@sha256:4a198f61009dc3c6eba7a06024008257223d0bac5d3cdbab33b812702f788ba3           "node index.js start"    About an hour ago   Up About an hour    18168/tcp             dltdojo.1.8scu1fxpd106dh2loewucu9mg
6d5c4c2a784f        y12docker/dltdojo-ethgo@sha256:7165ca334b4bb308e8e19b78178fc69a48900b299576f48298fa0569c9dfb073     "/startpeer.sh"          About an hour ago   Up About an hour    8545/tcp, 30303/tcp   ethpeer.1.wb048u7pqd9rjfuh6dly3qeni
33afc91ce73f        y12docker/dltdojo-ethgo@sha256:7165ca334b4bb308e8e19b78178fc69a48900b299576f48298fa0569c9dfb073     "/startpeer.sh"          About an hour ago   Up About an hour    8545/tcp, 30303/tcp   ethpeer.3.wty5yl9h8db63rpwbfjy3kith
c2458d3e0c9a        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcport..."   About an hour ago   Up About an hour    18332-18333/tcp       btcboot.1.jcuy9g3znuk1qlnipwrnwvpo3
6786e61fe9de        mariadb@sha256:ed04792bb13c111cbd1743c2921ea6cf777051a7f7f51f7b134efec9af7afdad                     "docker-entrypoint..."   About an hour ago   Up About an hour    3306/tcp              mariadb.1.vguk8jenil48mohs582651owh
6c32009bbad5        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcport..."   About an hour ago   Up About an hour    18332-18333/tcp       btcpeer.3.w8964jjmgv5bfqjos4qmtdbjd
2007f2a1dc83        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcport..."   About an hour ago   Up About an hour    18332-18333/tcp       btcpeer.1.ydm59buz4527vlwyxddn6qlpb
ac4df4651a59        y12docker/dltdojo-bitcoin@sha256:c0b3c3e85dd6b3f52aa6046022655b09a2dc915c45217b63e917402133b45a92   "bitcoind -rpcport..."   About an hour ago   Up About an hour    18332-18333/tcp       btcpeer.2.gdyqjd7wdrreec40b3dsmft0v
$ dj service tiguan2 --stop
```
