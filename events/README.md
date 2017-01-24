## DLTDOJO TEST 2017

#### TiGuan1 踢館一

* Bitcoin x30
* Ethereum x30
* Hyperledger Fabric x30
* MariaDB x1
* MongoDB x1

```
$ mkdir tiguan1 ; cd tiguan1
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 30 --dojo.eth 30 --dojo.fab 30 --dojo.mariadb 1 --dojo.mongo 1 --name tiguan1
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --bulkuser --num 30 --prefix tg --dojoname tiguan1
$ cat djsetup.sh
$ cat userinfo.txt
$ chmod a+x djsetup.sh ; ./djsetup.sh
```
