### TEST PORTS
* lwmqndemo btcboot http://192.168.2.73:13000
* lwmqndemo btc1 http://192.168.2.73:13001
* lwmqndemo btc2 http://192.168.2.73:13002
* Bitcoin abe explorer http://192.168.2.73:12750
* Bitcoin jornc explorer http://192.168.2.73:12751

### 2017-02-22T09:11:17+0800
```
$ dj btc btcboot miner --num 101
$ dj btc btc1 account --new
n2jDg7q5fNB1VSffNY3Qvc92xY8Yd8HsL6
$ dj btc btc2 account --new
mxxLs6pZZBfRYuFWGb4gMceihXWNcEBPyy
$ dj btc btcboot send --to n2jDg7q5fNB1VSffNY3Qvc92xY8Yd8HsL6 --btc 20
$ dj btc btcboot send --to mxxLs6pZZBfRYuFWGb4gMceihXWNcEBPyy --btc 20
$ dj btc btcboot miner --num 1
$ dj btc btc1 info
$ dj btc btc2 info
// http://192.168.2.73:13000
```
### 2017-02-21T21:08:00+0800
```
$ dc exec btcboot /initbtc.sh
$ dc exec btcboot bitcoin-cli getbalance
126.99995480
$ dc exec btc1 bitcoin-cli getbalance
11.00000000
$ dc exec btc2 bitcoin-cli getbalance
12.00000000
```
### 2017-02-21T20:56:25+0800
```
$ dc exec btcboot bitcoin-cli generate 101
$ dc exec btcboot bitcoin-cli getbalance
50.00000000
$ dc exec btcboot bitcoin-cli sendmany "" "{\"ms7X9LdUS4BYw3eLhzQiP7GEZVfFigNYdn\":2.1,\"mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG\":2.2}"
$ dc exec btcboot bitcoin-cli generate 2
$ dc exec btc1 bitcoin-cli getbalance
2.10000000
$ dc exec btc2 bitcoin-cli getbalance
2.20000000
```

### 2017-02-21T20:33:53+0800
Import Private key(s)
```
$ docker run -it --rm y12docker/dltdojo-bex bash
# btc.sh &

// btcboot
# bitcoin-cli getnewaddress
miKzyJGWFhjmoRfuh4apDvoVdvSe2HbEh3
# bitcoin-cli dumpprivkey miKzyJGWFhjmoRfuh4apDvoVdvSe2HbEh3
cNPEeLLePksC3Fc3myz52Bzk8rab8VaNm6m3W3RJLPi73gGAVVAu

// btc1
# bitcoin-cli getnewaddress
ms7X9LdUS4BYw3eLhzQiP7GEZVfFigNYdn
# bitcoin-cli dumpprivkey ms7X9LdUS4BYw3eLhzQiP7GEZVfFigNYdn
cN88RdiGQWr99xH6mN2wFabPmKhF1etvskg4ZCDKvXS512b3ZDbF

// btc2
# bitcoin-cli getnewaddress
mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG
# bitcoin-cli dumpprivkey mgNR7BhR6bVasbgxmy22qzQXmzXzkLmtcG
cQfSMfwyNnqpJNpoJvdV9A1vTSPCyLeBMDjFChBywmFj8bxdAQap

//btc3
# bitcoin-cli getnewaddress
mo5Fp2mBywktMQ7QKmnRU7M1uesW5zaRtb
# bitcoin-cli dumpprivkey mo5Fp2mBywktMQ7QKmnRU7M1uesW5zaRtb
cTfWi8XpsidbmUruvinRiEiAELPJH2uXZ6ZHghCEmCLFtPwxy34W

//btc4
# bitcoin-cli getnewaddress
mxZdBuC2s1CtConfPb35rct4rCaeyetTHd
# bitcoin-cli dumpprivkey mxZdBuC2s1CtConfPb35rct4rCaeyetTHd
cP3aoPgyEhxgktzJWdstTAwVeJV6mVp2nL2wbsdZSu1Loyuur3hf

// btc5
# bitcoin-cli getnewaddress
mxA83qEQjRbpV4L8D64bL8JvTi7qL18ddM
# bitcoin-cli dumpprivkey mxA83qEQjRbpV4L8D64bL8JvTi7qL18ddM
cRWVswzJQwqt9EdFjXkQUKgAe3o3AoGN9L6URDsa3fBP8biAisNg
# exit
$ docker run -it --rm y12docker/dltdojo-bex bash
# btc.sh &
# bitcoin-cli importprivkey cRWVswzJQwqt9EdFjXkQUKgAe3o3AoGN9L6URDsa3fBP8biAisNg
# bitcoin-cli listreceivedbyaddress 0 true
[
  {
    "address": "mi3GacKhCeEHmrWqTz2PBwtSgUKJhTYQL8",
    "account": "",
    "amount": 0.00000000,
    "confirmations": 0,
    "label": "",
    "txids": [
    ]
  },
  {
    "address": "mkxFtKRwu3kGLWXiDtZVa7X6LYJM5FNPwg",
    "account": "",
    "amount": 0.00000000,
    "confirmations": 0,
    "label": "",
    "txids": [
    ]
  },
  {
    "address": "mxA83qEQjRbpV4L8D64bL8JvTi7qL18ddM",
    "account": "",
    "amount": 0.00000000,
    "confirmations": 0,
    "label": "",
    "txids": [
    ]
  }
]
# exit
```
### 2017-02-21T17:03:08+0800
```
$ source alias.sh
$ dcup
$ dc exec btc1 redis-cli ping
PONG
$ dcstop
```
### 2017-02-21T12:38:45+0800
```
$ source alias.sh
$ dcup
$ dc exec btc2 bitcoin-cli generate 101
$ dc exec btc1 bitcoin-cli getinfo
{
  "version": 130200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 50.00000000,
  "blocks": 101,
  "timeoffset": 0,
  "connections": 1,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1487652439,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
$ dcstop
```
### 2017-02-21T12:30:42+0800
```
$ docker run -it --rm -p 13000:3000 -p 13030:3030 y12docker/dltdojo-lwmqndemo /start.sh 13030
start bitcoind with rpcallowip 172.17.0.2/24
Home Bitcoin Address=mzp98iZhZhopxWb3rwqq4htrBi8o2mY3by
socket.io port=13030

> lwmqn-demo@0.3.0 start /lwmqn-demo
> NODE_ENV=production node main

==> Listening on port 3000.
==> Open up http://0.0.0.0:3000/ in your browser.

```
### 2017-02-21T11:14:53+0800
```
$ docker build -t y12docker/dltdojo-lwmqndemo .
$ docker run -it --rm -p 13000:3000 -p 13030:3030 y12docker/dltdojo-lwmqndemo bash
bash-4.3#  grep -rEo build -e '.{0,10}3030.{0,10}'
build/main-5548af6b59a58fa7341d.min.js:ostname+":3030"),y.defau
#  grep -rEo app -e '.{0,10}3030.{0,10}'
app/server.js:er.listen(3030);
# socketport=13030
# sed -i.bak "s/:3030/:$socketport/g" build/main-5548af6b59a58fa7341d.min.js
# grep -rEo build -e '.{0,10}3030.{0,10}'
build/main-5548af6b59a58fa7341d.min.js.bak:ostname+":3030"),y.defau
build/main-5548af6b59a58fa7341d.min.js:ostname+"13030"),y.defau
# npm start
```
