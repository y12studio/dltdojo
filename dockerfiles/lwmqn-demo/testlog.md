### 2017-02-21T12:38:45+0800
* lwmqndemo btcboot http://192.168.2.73:13000
* lwmqndemo btc1 http://192.168.2.73:13001
* lwmqndemo btc2 http://192.168.2.73:13002
* Bitcoin Abe Explorer http://192.168.2.73:12750

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
