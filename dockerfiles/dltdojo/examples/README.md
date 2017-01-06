# log

```
$ date && docker -v
Fri Jan  6 11:35:35 CST 2017
Docker version 1.12.5, build 7392c3b

$ source levelx-alias.sh
$ dcup
No stopped containers
Creating network "levelx_default" with the default driver
Creating levelx_vp0_1
Creating levelx_vp5_1
Creating levelx_vp4_1
Creating levelx_vp1_1
Creating levelx_vp2_1
Creating levelx_vp3_1
$ dc ps
    Name                  Command               State          Ports
----------------------------------------------------------------------------
levelx_vp0_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
levelx_vp1_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
levelx_vp2_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
levelx_vp3_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
levelx_vp4_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
levelx_vp5_1   bitcoind -regtest -txindex ...   Up      18332/tcp, 18333/tcp
$ vp4cli getpeerinfo
[
  {
    "id": 1,
    "addr": "vp0:18333",
    "services": "000000000000000d",
    "relaytxes": true,
    "lastsend": 1483673669,
    "lastrecv": 1483673669,
    "bytessent": 485,
    "bytesrecv": 368,
    "conntime": 1483673549,
    "timeoffset": 0,
    "pingtime": 0.000343,
    "minping": 0.000343,
    "version": 70014,
    "subver": "/Satoshi:0.13.1/",
    "inbound": false,
    "startingheight": 0,
    "banscore": 0,
    "synced_headers": -1,
    "synced_blocks": -1,
    "inflight": [
    ],
    "whitelisted": false,
    "bytessent_per_msg": {
      "getaddr": 24,
      "getheaders": 93,
      "ping": 64,
      "pong": 64,
      "sendcmpct": 66,
      "sendheaders": 24,
      "verack": 24,
      "version": 126
    },
    "bytesrecv_per_msg": {
      "ping": 64,
      "pong": 64,
      "sendcmpct": 66,
      "sendheaders": 24,
      "verack": 24,
      "version": 126
    }
  }
]

```
