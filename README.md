# DLTDOJO 熵熱踢道場

![DLTDOJO](dltdojo.png "DLT DOJO")

熵熱踢道場 Distributed Ledger Technology Dojo (DLTDOJO) 提供快速練習驗證分散式帳本區塊鏈概念的環境，道場設計為不需背景知識都可練習實做。

# SETUP

## [Level1](level1) Bitcoin 比特幣轉帳

```
$ mkdir foo && cd foo
$ docker run -v $(pwd):/tmp y12docker/dltdojo --dojo.btc 4 --name lv1
$ source lv1-alias.sh
$ dcup
...
...
$ dc stop && dc rm
```

## [Level2](level2) Ethereum 轉帳

```
--dojo.eth 6 --name lv2
```

## WIP [Level3](level3) Ethereum 資產轉移

```
--dojo.eth 6 --name lv3
```

## WIP Level4 Hyperledger Fabric 資產轉移

```
--dojo.fabric 6 --name lv4
```

# 參考連結

<https://github.com/bitcoin/bitcoin>

<https://github.com/ethereum/>

<https://github.com/yeasy/docker-compose-files/tree/master/hyperledger/1.0>

<https://github.com/corda/corda>

y12docker/dltdojo - Docker Hub <https://hub.docker.com/r/y12docker/dltdojo/>

y12docker/dltdojo-ethgo - Docker Hub <https://hub.docker.com/r/y12docker/dltdojo-ethgo/>

y12docker/dltdojo-bitcoin - Docker Hub <https://hub.docker.com/r/y12docker/dltdojo-bitcoin/>
