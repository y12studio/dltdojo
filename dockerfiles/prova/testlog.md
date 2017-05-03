### 2017-05-03T09:13:02+0800

* prova/install-guide.md at master · BitGo/prova https://github.com/BitGo/prova/blob/master/docs/install-guide.md

```
$ curl -fsSL https://test.docker.com/ | sh
$ docker -v
Docker version 17.05.0-ce-rc3, build 90d35ab
$ docker build -t y12docker/dltdojo-prova .
$ docker images | grep prova
y12docker/dltdojo-prova latest  4c9450196539   5 minutes ago       21MB
$ docker run -it --rm y12docker/dltdojo-prova

Error creating a default config file: open /app/sample-prova.conf: no such file or directory
01:46:54 2017-05-03 [WRN] PRVA: open /root/.prova/prova.conf: no such file or directory
01:46:54 2017-05-03 [INF] PRVA: Version 0.1.0-beta
01:46:54 2017-05-03 [INF] PRVA: Loading block database from '/root/.prova/data/mainnet/blocks_ffldb'
01:46:54 2017-05-03 [INF] PRVA: Block database loaded
01:46:54 2017-05-03 [INF] CHAN: Chain state (height 0, hash 4152761adb859914822d48cbec042093908fccd5ee3c3345f99d852dee295e7b, totaltx 1, work 4295032833)
01:46:54 2017-05-03 [INF] AMGR: Loaded 0 addresses from file '/root/.prova/data/mainnet/peers.json'
01:46:54 2017-05-03 [INF] CMGR: Server listening on 0.0.0.0:7979
01:46:54 2017-05-03 [INF] CMGR: Server listening on [::]:7979
01:46:54 2017-05-03 [INF] CMGR: 3 addresses found from DNS seed mainnet.rmgchain.info
01:47:00 2017-05-03 [INF] BMGR: New valid peer 34.223.244.91:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: Syncing to block height 12661 from peer 34.223.244.91:7979
01:47:00 2017-05-03 [INF] BMGR: New valid peer 52.34.241.254:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: New valid peer 34.223.244.91:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: New valid peer 34.223.244.91:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: New valid peer 34.223.244.91:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: New valid peer 52.34.241.254:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: New valid peer 34.223.244.91:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:00 2017-05-03 [INF] BMGR: New valid peer 52.34.241.254:7979 (outbound) (/btcwire:0.5.0/Prova:0.1.0/)
01:47:04 2017-05-03 [INF] CHAN: Adding orphan block 0000006d7c6b983bbe2dab1693a4ef4d01832c1e0807caf8f95133eaef3bee2d with parent 0000003ccf8910b16eda0adc2a8dcf9786cd1c9f754186b3a6ba1d084053e68a
01:47:05 2017-05-03 [INF] BMGR: Processed 501 blocks in the last 11.31s (501 transactions, height 501, 2017-04-11 04:16:42 +0000 UTC)
01:47:16 2017-05-03 [INF] BMGR: Processed 1507 blocks in the last 10.41s (1507 transactions, height 2008, 2017-04-14 12:01:33 +0000 UTC)

```
regtest
```
$ docker-compose up -d
$ docker-compose exec bitcoind bitcoin-cli getnewaddress
muUtfTYAJRnVg1KEjYjzABqAEg22iqgCyP
$ docker-compose exec bitcoind bitcoin-cli getnewaddress
n2oLSTEZRGMtHJ2AJPtbjBosZsiZmFZGn4
$ docker-compose exec bitcoind bitcoin-cli getnewaddress
mh9kPxLh9bZAtUjzBs2P1WcjwadATGQciD

$ docker-compose exec bitcoind bitcoin-cli dumpprivkey muUtfTYAJRnVg1KEjYjzABqAEg22iqgCyP
cQuU3zG4tp5g3iKCtAUKLdnX3E3NipV5aJjG6yU8g5jAEr2vdD6d
$ docker-compose exec bitcoind bitcoin-cli dumpprivkey n2oLSTEZRGMtHJ2AJPtbjBosZsiZmFZGn4
cSQwGrJ4X7Su7eakxtdpMEFpyQhZxK3PEofkyNvCN8zr3XMEk3G1
$ docker-compose exec bitcoind bitcoin-cli dumpprivkey mh9kPxLh9bZAtUjzBs2P1WcjwadATGQciD
cQxAPCbhdP6hj8f6JvQqZX3uNL81rKQqW2YkpTZBdtVwP9zGcgAo

$ docker-compose exec bitcoind bitcoin-cli addmultisigaddress 2 '["muUtfTYAJRnVg1KEjYjzABqAEg22iqgCyP","n2oLSTEZRGMtHJ2AJPtbjBosZsiZmFZGn4","mh9kPxLh9bZAtUjzBs2P1WcjwadATGQciD"]'

2MsmwBACRnGodKTLLb3SSHHpm3NqZRJuqAe

$ docker-compose exec prova2 ./provactl -s 127.0.0.1:18334 getinfo
{
  "version": 10000,
  "protocolversion": 70002,
  "blocks": 0,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 1,
  "testnet": false,
  "relayfee": 0,
  "errors": ""
}

$ docker-compose exec prova2 ./provactl -s 127.0.0.1:18334 generate 101
-32603: No validate keys provided via --setvalidatekeys or PROVA_VALIDATE_KEYS environment variable
```
