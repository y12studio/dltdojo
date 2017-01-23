## Level4A SQL/NOSQL/DLT 混合體驗

Bitcoin/MariaDB/MongoDB

#### T1 進行 Level 1A 後取得兩個地址
```
$ btcp1 account --new
mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT
$ btcp1 account --new
mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy
```
#### T1 SQL Database MariaDB
```
$ dmysql -u root -proot
> CREATE DATABASE mydb1;
> CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );
> INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);
> INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);
> SELECT * FROM mytable;
> START TRANSACTION; UPDATE mytable SET balance=balance-80 WHERE id=1; UPDATE mytable SET balance=balance+80 WHERE id=2; COMMIT;
> SELECT * FROM mytable;
exit
```
#### T2 NOSQL Database MongoDB
```
$ dmongo
> use test
> db.mongot1.insert({address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT', balance:1000})
> db.mongot1.insert({address:'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy', balance:2000})
> db.mongot1.findAndModify({query:{address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT'},update:{ $inc: { balance: -100 } }})
> db.mongot1.findAndModify({query:{address:'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy'},update:{ $inc: { balance: 100 } }})
> db.mongot1.find()
{ "_id" : ObjectId("588313f8397926cb54d0cee9"), "address" : "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", "balance" : 900 }
{ "_id" : ObjectId("588313fd397926cb54d0ceea"), "address" : "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", "balance" : 2100 }
> exit
```
#### SETUP Level4A

```
$ mkdir level4 ; cd level4
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 6 --dojo.mariadb 1 --dojo.mongo 1 --name 4a
$ source alias4a.sh
$ dcup
...
$ dcend
```
