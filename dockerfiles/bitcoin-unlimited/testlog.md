### 2017-03-20T16:53:51+0800
```
$ node txmaker.js generate localhost 18001 101
$ node txmaker.js maketx localhost 18001 10
$ node txmaker.js maketx localhost 18001 10
$ node txmaker.js generate localhost 18001 1
....
{ size: 9,
  bytes: 590522,
  usage: 703024,
  maxmempool: 300000000,
  mempoolminfee: 0 }
[ '28a2ac2253e61281af492498e15cebd3e9af0ddd8aed28317b570d864e7e249c' ]

```
### 2017-03-20T15:18:00+0800
```
$ docker tag y12docker/dltdojo-btcunlimited:latest y12docker/dltdojo-btcunlimited:1.0.0.1
$ docker build -t y12docker/dltdojo-btcunlimited .
$ docker run -it --rm y12docker/dltdojo-btcunlimited bitcoind --version
Bitcoin Unlimited Daemon version 1.0.1.1-95c594a
$ docker run -it --rm y12docker/dltdojo-btcunlimited bitcoin-cli --version
Bitcoin RPC client version 1.0.1.1-95c594a
$ source alias.sh
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
dcbtcun_abe_1      /start.sh          Up                 0.0.0.0:12750->1
                                                         2750/tcp,
                                                         18332/tcp,
                                                         18333/tcp,
                                                         18444/tcp,
                                                         8332/tcp,
                                                         8333/tcp
dcbtcun_btc1_1     /start.sh          Up                 18332/tcp,
                                                         18333/tcp
dcbtcun_btcboot_   /start.sh          Up                 18332/tcp,
1                                                        18333/tcp
$ dc exec btc1 bitcoin-cli generate 101
$ dc exec btcboot bitcoin-cli getinfo
$ dc exec btcboot bitcoin-cli getpeerinfo
[
  {
    "id": 1,
    "addr": "172.22.0.3:41385",
    "services": "000000000000000d",
    "relaytxes": true,
    "lastsend": 1489995113,
    "lastrecv": 1489995113,
    "bytessent": 58540,
    "bytesrecv": 48626,
    "conntime": 1489994993,
    "timeoffset": 0,
    "pingtime": 0.000294,
    "minping": 0.000294,
    "version": 70015,
    "subver": "/Satoshi:0.13.2/",
    "inbound": true,
    "startingheight": 0,
    "banscore": 0,
    "synced_headers": -1,
    "synced_blocks": -1,
    "inflight": [
    ],
    "whitelisted": false
  },
  {
    "id": 4,
    "addr": "172.22.0.4:40870",
    "services": "0000000000000015",
    "relaytxes": true,
    "lastsend": 1489995128,
    "lastrecv": 1489995128,
    "bytessent": 70315,
    "bytesrecv": 32941,
    "conntime": 1489995008,
    "timeoffset": 0,
    "pingtime": 0.004697,
    "minping": 0.000485,
    "version": 80002,
    "subver": "/BitcoinUnlimited:1.0.1.1(EB16; AD12)/",
    "inbound": true,
    "startingheight": 0,
    "banscore": 0,
    "synced_headers": 101,
    "synced_blocks": 101,
    "inflight": [
    ],
    "whitelisted": false
  }
]

```

### 2017-02-15T09:05:39+0800
* host_ip=192.168.2.73
* abe explorer http://192.168.2.73:12750
```
$ source alias.sh && dcup
$ dc ps
      Name           Command    State            Ports
----------------------------------------------------------------
dcbtcun_abe_1       /start.sh   Up      0.0.0.0:12750->12750/tcp
dcbtcun_btc1_1      /start.sh   Up      18332/tcp, 18333/tcp
dcbtcun_btcboot_1   /start.sh   Up      18332/tcp, 18333/tcp
$ dc logs btc1
Attaching to dcbtcun_btc1_1
btc1_1     | start bitcoind with rpcallowip 172.19.0.2/24
$ dc logs btcboot
Attaching to dcbtcun_btcboot_1
btcboot_1  | start bitcoind with rpcallowip 172.19.0.3/24

$ dc exec btcboot bitcoin-cli getinfo
$ dc exec btc1 bitcoin-cli getinfo
$ dc exec btc1 bitcoin-cli generate 101
$ dc exec btcboot bitcoin-cli getinfo
{
  "version": 1000001,
  "protocolversion": 80002,
  "walletversion": 60000,
  "balance": 0.00000000,
  "blocks": 101,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1487120717,
  "keypoolsize": 101,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ dc exec btc1 bitcoin-cli getinfo
$ dcstop
```
