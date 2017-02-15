### PROJECTS

* https://github.com/bitcoin/bitcoin
* https://github.com/BitcoinUnlimited/BitcoinUnlimited
* https://github.com/ethcore/parity
* https://github.com/bitcoin-abe/bitcoin-abe
* https://github.com/JornC/bitcoin-transaction-explorer
* https://github.com/carsenk/explorer

### PREREQUISITES

* docker >= 1.13.0
* bash

### STEP0

```
$ docker pull y12docker/dltdojo &&\
  docker pull y12docker/dltdojo-bitcoin &&\
  docker pull y12docker/dltdojo-btcunlimited &&\
  docker pull y12docker/dltdojo-ethparity
$ docker pull y12docker/dltdojo-abe &&\
  docker pull y12docker/dltdojo-jorexp &&\
  docker pull y12docker/dltdojo-carexp
// https://docs.docker.com/engine/swarm/swarm-mode/
$ HOSTIP=192.168.2.73
$ docker swarm init --advertise-addr $HOSTIP
$ docker network create --driver overlay --subnet 10.0.63.0/24 tg4net
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan4 --start \
   --network tg4net --pubhost $HOSTIP

# DLTDOJO https://github.com/y12studio/dltdojo
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service tiguan4 --stop'
BCP1=$(docker ps --format "{{.Names}}" | grep btcpeer.1)
BCP2=$(docker ps --format "{{.Names}}" | grep btcpeer.2)
BUP1=$(docker ps --format "{{.Names}}" | grep bupeer.1)
BUP2=$(docker ps --format "{{.Names}}" | grep bupeer.2)
ETHP1=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1)
ETHP2=$(docker ps --format "{{.Names}}" | grep ethpoapeer.2)
ETHP3=$(docker ps --format "{{.Names}}" | grep ethpoapeer.3)
# ---- script end ----
# DLTDOJO tiguan3
#   http://host_ip:18168/

$ docker logs $DJID

      Welcome to DLTDOJO World.
     _____  _   _______ _____   ____       _  ____
    |  __ \| | |__   __|  __ \ / __ \     | |/ __ \
    | |  | | |    | |  | |  | | |  | |    | | |  | |
    | |  | | |    | |  | |  | | |  | |_   | | |  | |
    | |__| | |____| |  | |__| | |__| | |__| | |__| |
    |_____/|______|_|  |_____/ \____/ \____/ \____/

   Project:  https://github.com/y12studio/dltdojo

   Server:  http://host_ip:18168/

$ dinfo
ethpoapeer.3.vv9q6xor2w1ewxs020nhtgi8u
btcjorexp.1.v4jt8l60mfbp07tbkxw502jiz  0.0.0.0:12752->8080/tcp
carexp.1.8otdy42tpkgxqamxtpmdvqonu  0.0.0.0:18000->8000/tcp
ethpoapeer.1.o1rhv1wc73nen77fvoaab72yp
bupeer.3.l3nbmryy8l2mwunxm895kjmgy  18332-18333/tcp
ethpoapeer.2.dvfjyrah3koijp77bopil90yb
btcpeer.3.vvuhdjv8iewdploubdbjoxdlw  18332-18333/tcp
btcboot.1.no2wdbndk9pd5rfsbh5600sfd  18332-18333/tcp
btcpeer.2.2880y5e8lgljb6mnnxr1dszvj  18332-18333/tcp
bupeer.1.bwu47jsr8dwr7chpp512exeww  18332-18333/tcp
ethpoa0.1.n5iaa497k42b4igt7v9hygrsn  0.0.0.0:8545->8545/tcp
btcpeer.1.jesyrcgvznl4bsr9buiiw3z6a  18332-18333/tcp
bupeer.2.bp1yf524tentn7u2735bknoc3  18332-18333/tcp
btcabe.1.ow3nukemzj96zlw3vq4ytma5q  0.0.0.0:12750->12750/tcp
ethpoa1.1.y1g1gnqrkhfhdfwp6t0zvulsw
dltdojo.1.9jmt17l634zm60l91k6xqj9sx  0.0.0.0:18168->18168/tcp
ID            NAME        MODE        REPLICAS  IMAGE
3w64j5uhhix9  bupeer      replicated  3/3       y12docker/dltdojo-btcunlimited:latest
9tn1emg3aucp  btcpeer     replicated  3/3       y12docker/dltdojo-bitcoin:latest
irguv5hfwetb  btcboot     replicated  1/1       y12docker/dltdojo-bitcoin:latest
onks8ckji2um  ethpoapeer  replicated  3/3       y12docker/dltdojo-ethparity:latest
p0hhwlw1n2g5  btcabe      replicated  1/1       y12docker/dltdojo-abe:latest
qkd046y392tm  ethpoa0     replicated  1/1       y12docker/dltdojo-ethparity:latest
rs97xvdbn34b  dltdojo     replicated  1/1       y12docker/dltdojo:latest
t8mw0zkrp36x  ethpoa1     replicated  1/1       y12docker/dltdojo-ethparity:latest
ttq2skzgbwis  carexp      replicated  1/1       y12docker/dltdojo-carexp:latest
w52zy2egtycy  btcjorexp   replicated  1/1       y12docker/dltdojo-jorexp:latest
```

### STEP1 Bitcoin
```
$ dj btc $BCP1 info && dj btc $BUP1 info
$ dj btc $BCP1 account --new
mszexkfWTYSFgQhuvrPECRBiDZfAfwaUmi
$ dj btc $BUP1 miner --num 101
$ dj btc $BUP1 send --to mszexkfWTYSFgQhuvrPECRBiDZfAfwaUmi --btc 1.88
$ dj btc $BUP1 miner --num 2
$ dj btc $BCP1 miner --num 1
$ dj btc $BCP1 info && dj btc $BUP1 info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 1.88,
  blocks: 104,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1487161697,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
{ version: 1000001,
  protocolversion: 80002,
  walletversion: 60000,
  balance: 198.1199616,
  blocks: 104,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1487161696,
  keypoolsize: 101,
  paytxfee: 0,
  relayfee: 0,
  errors: '' }
```
### Ethcore Parity PoA
```
$ dj eth ethpoa0 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e': { balance: '9.9e+23', ethBalance: '990000' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e': { balance: '8.8e+23', ethBalance: '880000' } }
$ dj eth $ETHP2 account --new --password pass
0xf321e68cafea55d6081a962cc4d63afb16a76d72
$ dj eth ethpoa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0xf321e68cafea55d6081a962cc4d63afb16a76d72 --eth 688.99 --password user
$ dj eth ethpoa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0xf321e68cafea55d6081a962cc4d63afb16a76d72 --eth 188.88 --password user
$ dj eth $ETHP2 account --list
{ '0xf321e68cafea55d6081a962cc4d63afb16a76d72': { balance: '877870000000000000000', ethBalance: '877.87' } }
```
