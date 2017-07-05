### Create 4 Accounts

```
$ docker run -it --rm dltdojo/geth:1.6.6 ./testaccount.sh
```

### Referneces
* 使用 go-ethereum 1.6 Clique PoA consensus 建立 Private chain (1)  https://medium.com/taipei-ethereum-meetup/%E4%BD%BF%E7%94%A8-go-ethereum-1-6-clique-poa-consensus-%E5%BB%BA%E7%AB%8B-private-chain-1-4d359f28feff

### Testlog

```
$ docker build -t foo .
$ docker run -it -v v:/data foo ./buildchain.sh
/data
└── foo
    ├── node0
    │   ├── UTC--2017-07-05T11-24-25.508347444Z--57c3b7e51dc31b4c64fce643ab56da5b9fc09994
    │   └── passfile
    ├── node1
    │   ├── UTC--2017-07-05T11-24-26.269572630Z--bfab9e8792ade077bca9341dbb8cafea23cf4a89
    │   └── passfile
    └── node2
        ├── UTC--2017-07-05T11-24-27.028481758Z--e6d6bb7e5f35d4045b6030cb8c17c024c47bcba1
        └── passfile

4 directories, 6 files
```