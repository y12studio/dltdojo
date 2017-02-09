### 2017-02-09T11:15:14+0800
```
$ source alias.sh
$ build
$ dcup
$ dc logs chaincore1
Attaching to devccore_chaincore1_1
chaincore1_1  | Initializing Chain Core...
chaincore1_1  | Listening on: http://localhost:1999
chaincore1_1  | Client access token: client:a287b9968d97a094c36fcbf2af15b6323b57906824ec0bc79adecad07e2f0758
chaincore1_1  | Chain Core is online!
// open http://127.0.0.1:1999/ and login - Create new blockchain network - Create Network
$ dexec1 node index.js
$ dcend
```
#### 2017-01-24T15:54:23+0800
```
$ build
$ dcup
// create a token and setup blockchain
$ dexec1 corectl create-token tokena
tokena:9cdbd4e857159a26b50665ec82e04adb61abfdd66a50b8375970c1befb8a8848
// open http://127.0.0.1:1999/ and login - Create new blockchain network - Create Network
$ dexec1 node index.js
// check http://127.0.0.1:1999
$ dcend
```
