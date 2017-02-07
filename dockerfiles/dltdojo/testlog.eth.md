### Projects
* https://github.com/ethereum/go-ethereum
* https://github.com/carsenk/explorer
### 2017-02-07T11:41:29+0800
```
$ node index.js service eth --start --network devbtcnet --pubhost 192.168.2.73
$ dinfo
carexp.1.qa04tam39ra19cflfb88urply  0.0.0.0:18000->8000/tcp
ethpeer.1.uiyttm383zm92hhbgqd82qtgo  8545/tcp, 30303/tcp
ethpeer.3.hhcap4pkzgzpdolzlzwv8yl8g  8545/tcp, 30303/tcp
ethpeer.2.km24u9gqx65i9y6sg1c9aj0xe  8545/tcp, 30303/tcp
dltdojo.1.5fuuhl9gxknzx5fjuf2ipixly  18168/tcp
ethboot.1.1njz5wnlcrgclwvp34dht08i4  0.0.0.0:8545->8545/tcp, 30303/tcp
ID            NAME     MODE        REPLICAS  IMAGE
9n43gvcyu7ss  ethboot  replicated  1/1       y12docker/dltdojo-ethgo:latest
ewpj4ibmkks9  carexp   replicated  1/1       y12docker/dltdojo-carexp
tv7cpv5x4thn  dltdojo  replicated  1/1       y12docker/dltdojo:latest
wahl7atkommc  ethpeer  replicated  3/3       y12docker/dltdojo-ethgo:latest
// open url http://192.168.2.73:18000/
$ dj eth $EBOOT account --new --password pass
$ dj eth $EP1 account --new --password pass
$ dj eth $EP1 miner --start
// wait ... DAG ... 100%
$ docker logs $EP1
I0207 03:48:42.488239 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 43%
I0207 03:48:45.700395 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 44%
I0207 03:48:48.869085 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 45%
I0207 03:48:52.485439 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 46%
I0207 03:48:55.696877 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 47%
I0207 03:48:58.878987 vendor/github.com/ethereum/ethash/ethash.go:291] Generating DAG: 48%
...
$ dj eth $EP1 info
{ hostname: 'ethpeer.1.uiyttm383zm92hhbgqd82qtgo',
  ethBlockNumber: 27,
  ethCoinbase: '0x2595536035cea5ec7423461b9602fa3f56e70bd0',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '135',
  ethMining: true }
$ dj eth $EP1 send --to 0xaaf98a65dabd34d69769a377016a38b800cc72d6 --eth 3.6 --password pass
$ dj eth $EP1 send --to 0xaaf98a65dabd34d69769a377016a38b800cc72d6 --eth 5.8 --password pass
$ node index.js service eth --stop
```
### 2017-02-07T11:14:49+0800
```
$ // docker network create --driver overlay --subnet 10.0.9.0/24 devbtcnet
$  docker network inspect devbtcnet
$ node index.js service eth --start --network devbtcnet
// ...
$ dinfo
dltdojo.1.td6e5zxlh7f2yj1uq82c910c3  18168/tcp
ethboot.1.jawy6wryfju5ift6l7k0q6esx  8545/tcp, 30303/tcp
ethpeer.1.quttk2padzxjfjxqc9zzitsv1  8545/tcp, 30303/tcp
ethpeer.2.ljkp8jj74kmr1ntc3p5pf4cty  8545/tcp, 30303/tcp
ethpeer.3.2iwx6x9gk6yz061ozt7mut6oc  8545/tcp, 30303/tcp
ID            NAME     MODE        REPLICAS  IMAGE
88j36lc2x3xg  dltdojo  replicated  1/1       y12docker/dltdojo:latest
l0uqfjq79h8q  ethboot  replicated  1/1       y12docker/dltdojo-ethgo:latest
qjbomxenbbsx  ethpeer  replicated  3/3       y12docker/dltdojo-ethgo:latest
$ dj eth $EBOOT info
{ hostname: 'ethboot.1.jawy6wryfju5ift6l7k0q6esx',
  ethBlockNumber: 0,
  ethCoinbase: '0x69c384872ed9640dc309fabb0369fecc658c518a',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '0',
  ethMining: true }
$ dj eth $EBOOT account --new --password pass
$ dj eth $EBOOT miner --start
// wait...DAG...100%
$ dj eth $EBOOT info
{ hostname: 'ethboot.1.jawy6wryfju5ift6l7k0q6esx',
  ethBlockNumber: 51,
  ethCoinbase: '0x69c384872ed9640dc309fabb0369fecc658c518a',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '255',
  ethMining: true }
$ node index.js service eth --stop
```
