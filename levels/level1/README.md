## Level1A 比特幣轉帳

環境設置好之後有btcp1-btcp4共計四個節點可操作，下面用btcp1為主。

#### T1 取得地址
```
$ btcp1 account --new
n25zT2BCu3TPgp9zBgTbFsC2RKbH67kGqu
```
#### T2 取得金鑰
```
$ btcp1 account --dumpkey --address n25zT2BCu3TPgp9zBgTbFsC2RKbH67kGqu
cUHnmzspXTi7gtVTSxn8yGM8aEaTcxALKiaUeX5tA7xNx54k5RLs
```
#### T3 查詢餘額
```
$ btcp1 info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 0,
  blocks: 0,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484617860,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```
#### T4 挖礦取得50個比特幣
```
$ btcp1 miner --num 101
$ btcp1 info
```

#### T5 轉出10個比特幣

轉帳需要對方地址，如無人練習可使用btcp2節點重複T1取得地址。這裡假設對方地址為mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU，轉完帳必須有人執行產出區塊對方才能收到一個確認，新礦需要100個確認後才能使用，所以btcp1每生成一個新區塊就會有新熟成的50個比特幣可使用。手續費計算方式較複雜，現階段理解有差額即可。

```
$ btcp1 send --to mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU --btc 10
7e6223443890d468addd9fdac6202d200145c2d0bbdce02d5f3cfb580bd27528
$ btcp1 info
$ btcp2 miner --num 1
[
  "0a95959a1230abcfbaabeef669ea5b2169104d9925e0e7e0d52a983979fb8332"
]
$ btcp1 info
$ btcp2 info
```

#### T6 收到5個比特幣

該任務需要提交地址請對方協助，如無練習對手可使用vp0節點。完成後vp1會收到5個以及新熟成50個，所以餘額增加55個。

#### T7 其餘練習

將數個節點停止後重開再互相發送。


## SETUP

```
$ mkdir level1 && cd level1
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 4 --name lv1
$ source lv1-alias.sh
$ dcup
...
$ dcend
```
