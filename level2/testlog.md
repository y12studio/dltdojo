# LOG0106

```
$ date
Fri Jan  6 23:51:06 CST 2017
$ node index.js --path ./level2 --name=level2 --peers=6 --level=2
$ cd level2
$ source level2-alias.sh
$ dcup
No stopped containers
Creating network "level2_default" with the default driver
Creating level2_evp0_1
Creating level2_evp1_1
Creating and starting level2_evp1_2 ... done
Creating and starting level2_evp1_3 ... done
Creating and starting level2_evp1_4 ... done
Creating and starting level2_evp1_5 ... done
$ dc ps
    Name                   Command               State          Ports
----------------------------------------------------------------------------
level2_evp0_1   /geth --datadir=~/.ethereu ...   Up      30303/tcp, 8545/tcp
level2_evp1_1   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_2   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_3   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_4   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
level2_evp1_5   /start.sh --datadir=~/.eth ...   Up      30303/tcp, 8545/tcp
$ vp1 bash
bash-4.3#  curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:8545
{"jsonrpc":"2.0","id":67,"result":"Geth/v1.5.5-stable-ff07d548/linux/go1.5.4"}

bash-4.3#  exit

$ vp1 curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}' http://localhost:8545
{"jsonrpc":"2.0","id":67,"result":"919717"}

$ vp1 /curlrpc.sh net_version
{"jsonrpc":"2.0","method":"net_version","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "919717"
}
$ vp1 /curlrpc.sh web3_clientVersion
{"jsonrpc":"2.0","method":"web3_clientVersion","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "Geth/v1.5.5-stable-ff07d548/linux/go1.5.4"
}

$ vp1 /curlrpc.sh net_peerCount
{"jsonrpc":"2.0","method":"net_peerCount","params":[""],"id":67}
{
  "jsonrpc": "2.0",
  "id": 67,
  "result": "0x4"
}

```
