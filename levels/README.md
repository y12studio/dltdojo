## Deprecated

### SETUP

#### Level1
```
$ mkdir level1 && cd level1
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 4 --name 1a
$ source alias1a.sh
$ dcup
// do the 1A tasks
$ dcend
```

#### Level2
如要避免實際部署網路下載DAG檔時間，可使用--dojo.eth 2設定開啟雙點獨立開發模式，不需另外下載DAG檔，開發模式節點不互通無法做跨節點轉帳練習。
```
$ mkdir level2 && cd level2
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.eth 6 --name 2a
$ source alias2a.sh
$ dcup
// do the 2A tasks
$ dcend
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.eth 2 --name 2b
$ source alias2b.sh
$ dcup
// do the 2B tasks
$ dcend
```

#### Level3
```
$ mkdir level3 ; cd level3
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.fab 6 --name 3a
$ source alias3a.sh
$ dcup
// do the 3A tasks
$ dcend
```

#### Level4
```
$ mkdir level4 ; cd level4
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 2 --dojo.mariadb 1 --dojo.mongo 1 --name 4a
$ source alias4a.sh
$ dcup
// do the 4A tasks...
$ dcend
```
