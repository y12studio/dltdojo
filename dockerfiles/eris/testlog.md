### 2017-03-02T19:01:34+0800
```
$ sudo add-apt-repository https://apt.monax.io
$ curl -L https://apt.monax.io/APT-GPG-KEY | sudo apt-key add -
$ sudo apt-get update && sudo apt-get install -y eris
$ eris init
....
$ eris services ls --known
compilers.toml   geth.toml        keys.toml        logspout.toml
do_not_use.toml  ipfs.toml        logrotate.toml   watchtower.toml

$ docker images | grep eris
quay.io/eris/db 0.12.0                          e3b80ea22b27        3 months ago        298 MB
quay.io/eris/pm 0.12.0                          0ee110b571dd        3 months ago        250 MB
quay.io/eris/compilers 0.12.0                          835987f96390        3 months ago        236 MB
quay.io/eris/cm 0.12.0                          22ccb5bd128d        3 months ago        250 MB
quay.io/eris/keys 0.12.0                          9ef1670e7e1b        3 months ago        244 MB
quay.io/eris/data 0.12.0                          c0a903b871cd        4 months ago        205 MB
quay.io/eris/ipfs latest                          a660d3b2494f        9 months ago        354 MB

$ eris chains make tchain
$ eris chains start tchain
$ eris chains ls
CHAIN      ON     CONTAINER ID     DATA CONTAINER
tchain     *      20716eba60       9e12a5608c

$ eris chains logs tchain
....
NOTE[03-02|11:25:36] Finalizing commit of block with 0 txs    module=consensus height=40 hash=2A4B677F883C7BA541ED90D8CC982F44A51E30F4
INFO[03-02|11:25:36] Block{
  Header{
    ChainID:        tchain
    Height:         40
    Time:           2017-03-02 11:25:36.907 +0000 UTC
    NumTxs:         0
    LastBlock:      4615BDCC422F27B6CCF4A118F2F27D6ED9B92F4C
    LastBlockParts: PartSet{T:1 F246EA6BDBD0}
    LastCommit:     C73916B34984D1B47CEBCCD2E90DF40494920B21
    Data:
    Validators:     134B0EA2B176F5BBF9C6B6DDA5FFC9CE219E7C7C
    App:            E138DFAB75D67054F26188CA23A4FDACD29C4A88
  }#2A4B677F883C7BA541ED90D8CC982F44A51E30F4
...

$ eris chains stop tchain
$ docker ps
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS               NAMES
f89cc97efe4d        quay.io/eris/keys:0.12.0   "eris-keys server ..."   3 minutes ago       Up 3 minutes        4767/tcp    keys-91dee2e2-8cd7-46db-bc92-68ea476d5168

$ eris chains rm -xf tchain
$ eris clean -y
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES

```
