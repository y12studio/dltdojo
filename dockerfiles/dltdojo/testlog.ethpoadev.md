### Projects
* https://github.com/ethcore/parity

TODO
* https://github.com/carsenk/explorer

### 2017-02-06T17:18:32+0800
```
$ node index.js service ethpoadev --start --network devbtcnet
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias dinfo='docker ps --format "{{.Names}}  {{.Ports}}" ; docker service ls'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service ethpoadev --stop'
EPA0=$(docker ps --format "{{.Names}}" | grep ethpoa0.1)
EPA1=$(docker ps --format "{{.Names}}" | grep ethpoa1.1)
EP1=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1)
EP2=$(docker ps --format "{{.Names}}" | grep ethpoapeer.2)
EP3=$(docker ps --format "{{.Names}}" | grep ethpoapeer.3)
alias poainfo='dj eth $EPA0 account --list ; dj eth $EPA1 account --list'
# ---- script end ----
# DLTDOJO https://github.com/y12studio/dltdojo
$ dinfo
ethpoa0.1.myoms7d8r7bjd0kfug01dyhhy  0.0.0.0:18180->8180/tcp
ethpoa1.1.uzbfamwsbmcnbjmwxzw8n3gwk
ethpoapeer.3.2ktwrslu9c9lujkvud38nqlyu
ethpoapeer.2.5gkxwl30uat5lb5k8209upp0l
dltdojo.1.tk65lovgivzsyfvthmwu8u9iw  18168/tcp
ethpoapeer.1.iolobuqy69x1j1rgc99g8ro89
ID            NAME        MODE        REPLICAS  IMAGE
339rrc79pfp1  dltdojo     replicated  1/1       y12docker/dltdojo:latest
8tu2uphwpkde  ethpoapeer  replicated  3/3       y12docker/dltdojo-ethparity:1.5.0
va8oi5zz9it5  ethpoa0     replicated  1/1       y12docker/dltdojo-ethparity:1.5.0
x0lch9ofanma  ethpoa1     replicated  1/1       y12docker/dltdojo-ethparity:1.5.0
// http://192.168.2.73:18180/#/accounts/
$ docker exec -it $EPA0 parity signer new-token
Error generating token: Error { repr: Os { code: 2, message: "No such file or directory" } }
$ node index.js service ethpoadev --stop
```
### 2017-02-03T14:45:46+0800
```
$ docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service ethpoadev --start --network devbtcnet
# ---- script start ----
DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1)
alias dj='docker exec -t $DJID node index.js'
alias djstop='docker run -t -v /var/run/docker.sock:/var/run/docker.sock y12docker/dltdojo service ethpoadev --stop'
EPA0=$(docker ps --format "{{.Names}}" | grep ethpoa0.1)
EPA1=$(docker ps --format "{{.Names}}" | grep ethpoa1.1)
EP1=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1)
EP2=$(docker ps --format "{{.Names}}" | grep ethpoapeer.2)
EP3=$(docker ps --format "{{.Names}}" | grep ethpoapeer.3)
docker ps --format "{{.Names}}"
docker service ls
dj eth $EPA0 account --list
dj eth $EPA1 account --list

# ---- script end ----
$ dj eth $EPA0 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e': { balance: '9.9e+23', ethBalance: '990000' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e': { balance: '8.8e+23', ethBalance: '880000' } }
$ dj eth $EPA1 account --list
{ '0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2': { balance: '0', ethBalance: '0' } }
$ dj eth $EP1 account --new --password pass1 ; dj eth $EP1 account --list
{ '0x0adfe528a87d32c4d63940cf2ce495f0029942d3': { balance: '0', ethBalance: '0' } }
$ dj eth $EPA0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x0adfe528a87d32c4d63940cf2ce495f0029942d3 --eth 3688.55 --password user
$ dj eth $EP1 account --list ; dj eth $EP1 info
{ '0x0adfe528a87d32c4d63940cf2ce495f0029942d3': { balance: '3.68855e+21', ethBalance: '3688.55' } }
{ hostname: 'ethpoapeer.1.nqbjovywi2gerlaiskddjh7t5',
  ethBlockNumber: 1,
  ethCoinbase: '0x0000000000000000000000000000000000000000',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 4,
  ethBalance: '0',
  ethMining: false }
$ djstop
```
### 2017-02-03T14:23:30+0800
```
$ node index.js service ethpoadev --start --network devbtcnet
$ docker service ls
ID            NAME        MODE        REPLICAS  IMAGE
qtmree7u34yc  ethpoa1     replicated  1/1       y12docker/dltdojo-ethparity:1.5.0
rmaansbw67s3  ethpoa0     replicated  1/1       y12docker/dltdojo-ethparity:1.5.0
vtswclra9vjc  ethpoapeer  replicated  3/3       y12docker/dltdojo-ethparity:1.5.0
vu7liw4xl83z  dltdojo     replicated  1/1       y12docker/dltdojo:latest
$ docker ps --format "{{.Names}}"
ethpoapeer.1.1398z2sya576k5uk8jr3vqwj7
ethpoa0.1.ordlethmk2cywh1u9rgufsmz0
ethpoapeer.2.qe8cy35zf5mrtltsvfxhde6t1
ethpoapeer.3.uacip1i7zo7835wfbya46euqz
ethpoa1.1.jfdxjw8rpkh2p3paeoh5d4auq
dltdojo.1.p4m98xctxzcip5ybwykpvlc57
$ DJID=$(docker ps --format "{{.Names}}" | grep dltdojo.1) ; alias dj='docker exec -t $DJID node index.js'
$ EPA0=$(docker ps --format "{{.Names}}" | grep ethpoa0.1) ; EPA1=$(docker ps --format "{{.Names}}" | grep ethpoa1.1)
$ EP1=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1) ; EP2=$(docker ps --format "{{.Names}}" | grep ethpoapeer.1)
$ dj eth $EPA0 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e': { balance: '9.9e+23', ethBalance: '990000' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e': { balance: '8.8e+23', ethBalance: '880000' } }
$ dj eth $EPA1 account --list
{ '0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2': { balance: '0', ethBalance: '0' } }
$ dj eth $EP1 account --new --password pass1
$ dj eth $EP1 account --list
{ '0x894fb381ed285734165f506a49bd95a8a3869833': { balance: '0', ethBalance: '0' } }
$ dj eth $EPA0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x894fb381ed285734165f506a49bd95a8a3869833 --eth 3688.55 --password user
$ dj eth $EP1 account --list
{ '0x894fb381ed285734165f506a49bd95a8a3869833': { balance: '3.68855e+21', ethBalance: '3688.55' } }
$ dj eth $EP1 info
{ hostname: 'ethpoapeer.1.1398z2sya576k5uk8jr3vqwj7',
  ethBlockNumber: 1,
  ethCoinbase: '0x0000000000000000000000000000000000000000',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 4,
  ethBalance: '0',
  ethMining: false }

$ dj eth $EPA0 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e':
   { balance: '9.86311449743470160896e+23',
     ethBalance: '986311.449743470160896' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e':
   { balance: '8.80000000256529839104e+23',
     ethBalance: '880000.000256529839104' } }
$ node index.js service ethpoadev --stop
```
