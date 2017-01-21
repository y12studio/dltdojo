### Sat Jan 21 15:14:56 CST 2017
```
$ dcup
$ mongo1 --version
MongoDB shell version v3.4.1
git version: 5e103c4f5583e2566a45d740225dc250baacfbd7
OpenSSL version: OpenSSL 1.0.1t  3 May 2016
allocator: tcmalloc
modules: none
build environment:
    distmod: debian81
    distarch: x86_64
    target_arch: x86_64
$ mongo1
> use test
> db.accounts.insert({address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT', balance:1000})
> db.accounts.insert({address:'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy', balance:2000})
// 	$inc : Increments the value of the field by the specified amount.
> db.accounts.findAndModify({query:{address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT'},update:{ $inc: { balance: -100 } }})
> db.accounts.findAndModify({query:{address:'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy'},update:{ $inc: { balance: 100 } }})
//  db.accounts.update({address:'mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT'}, { $set: { balance: balance-100} })
//  db.accounts.update({ address: 'mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy'}, { $set: { balance: 2100} })
> db.accounts.find()
{ "_id" : ObjectId("588313f8397926cb54d0cee9"), "address" : "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", "balance" : 900 }
{ "_id" : ObjectId("588313fd397926cb54d0ceea"), "address" : "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", "balance" : 2100 }
> exit

$ mongo1 test --eval 'db.accounts.find()'
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017/test
MongoDB server version: 3.4.1
{ "_id" : ObjectId("588313f8397926cb54d0cee9"), "address" : "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", "balance" : 900 }
{ "_id" : ObjectId("588313fd397926cb54d0ceea"), "address" : "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", "balance" : 2100 }

$ mongo1 test --eval 'printjson(db.getCollectionNames())'
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017/test
MongoDB server version: 3.4.1
[ "accounts" ]
```
