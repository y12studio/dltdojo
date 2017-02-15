### 2017-02-15T16:58:59+0800
* host_ip 192.168.2.73
* btc abe http://192.168.2.73:12750/
* btc jorexp http://192.168.2.73:12752/
* eth carexp http://192.168.2.73:18000/

```
$ node index.js service tiguan4 --start --network devbtcnet --pubhost 192.168.2.73
$ dinfo
btcabe.1.w37qf5imi4qmedfr48xwp3ly4  0.0.0.0:12750->12750/tcp
ethpoa0.1.d5gj95u0vc2cfwxdsbnh18kew  0.0.0.0:8545->8545/tcp
ethpoa1.1.7qjiaqpv9exsxzs1t6z9kq2uu
bupeer.2.y0frd2czgnafunn1fy8ffnxix  18332-18333/tcp
btcpeer.3.5ttvqo0nx37z98v8xsn5q530z  18332-18333/tcp
btcpeer.2.jmawvasmsrnw4orc6ifmt6tz2  18332-18333/tcp
bupeer.1.rr8lgwec5e35ljmckwbs9yori  18332-18333/tcp
dltdojo.1.zk8qrj7qdo6ybvft0qffyy40s  0.0.0.0:18168->18168/tcp
ethpoapeer.1.v2v14dzg4xrxngzy5gbd8wsdy
btcpeer.1.xpdk8i1nde0a1sm4okfrxl2kq  18332-18333/tcp
carexp.1.9zwahhk1qywci25iew0gj6px0  0.0.0.0:18000->8000/tcp
btcjorexp.1.iy5exlienkbpwsyag1jrg0v6s  0.0.0.0:12752->8080/tcp
ethpoapeer.3.vkz3c7w98jedad3s53tkg0fej
bupeer.3.5pqgf2bfppqyjby9nonmfbhhf  18332-18333/tcp
ethpoapeer.2.fvz8ysjkwtuzeh4utlmk916g4
btcboot.1.oh7afrrgzv6ita6to7awhxbwv  18332-18333/tcp
ID            NAME        MODE        REPLICAS  IMAGE
0jxdxh56v9zj  bupeer      replicated  3/3       y12docker/dltdojo-btcunlimited:latest
5d6u2ywmonme  ethpoa0     replicated  1/1       y12docker/dltdojo-ethparity:latest
cl4z5agxaboj  carexp      replicated  1/1       y12docker/dltdojo-carexp:latest
o3ucx50gwz8r  ethpoa1     replicated  1/1       y12docker/dltdojo-ethparity:latest
pe2ah1kmxtpc  btcjorexp   replicated  1/1       y12docker/dltdojo-jorexp:latest
q7gfnnnhy47e  dltdojo     replicated  1/1       y12docker/dltdojo:latest
sj9ozkoz8aqq  btcboot     replicated  1/1       y12docker/dltdojo-bitcoin:latest
tveklo22n1cn  ethpoapeer  replicated  3/3       y12docker/dltdojo-ethparity:latest
vhwo61lhfryn  btcpeer     replicated  3/3       y12docker/dltdojo-bitcoin:latest
whpslnrh4bp9  btcabe      replicated  1/1       y12docker/dltdojo-abe:latest

$ dj btc $BUP1 info
$ dj btc $BCP1 info
$ dj btc $BUP1 miner --num 101
$ dj eth ethpoa0 account --list
$ dj eth $ETHP2 account --new --password pass
0x526a67d42da5dd3405ac1078cc83986d74e85e03
$ dj eth ethpoa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x526a67d42da5dd3405ac1078cc83986d74e85e03 --eth 3688.55 --password user
$ dj eth ethpoa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x526a67d42da5dd3405ac1078cc83986d74e85e03 --eth 188.88 --password user
$ dj eth $ETHP2 account --list
$ node index.js service tiguan4 --stop
```
