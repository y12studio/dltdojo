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
