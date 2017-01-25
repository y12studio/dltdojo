## Level4A SQL/NOSQL/DLT 混合體驗

Bitcoinx10/MariaDBx1/MongoDBx1

#### T1 取得兩個比特幣地址
先依照Level1A T0設置使用的編號控制後取得兩個地址當練習。
```
$ btcp account --new
mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT
$ btcp account --new
mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy
```
#### T2 SQL Database MariaDB
MariaDB資料庫為共用並使用最高權限只供練習體驗，請建立自用的資料庫例如CREATE DATABASE mydb2等避免與他人練習衝突。
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
#### T3 NOSQL Database MongoDB
MongoDB為共用並無權限設定只供練習體驗，請建立自用的資料庫例如db.mongot2等避免與他人練習衝突。
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
