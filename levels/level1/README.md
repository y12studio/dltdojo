## Level1A 比特幣轉帳

環境設置好之後有btcp1-btcp4共計四個節點可操作，下面用btcp1為主。

#### T0 設定使用編號
根據編號切換操作節點，這裡設定為控制節點btcp1。
```
$ DLTDOJOID=1
```
#### T1 取得地址
```
$ btcp account --new
n25zT2BCu3TPgp9zBgTbFsC2RKbH67kGqu
```
#### T2 取得金鑰
```
$ btcp account --dumpkey --address n25zT2BCu3TPgp9zBgTbFsC2RKbH67kGqu
cUHnmzspXTi7gtVTSxn8yGM8aEaTcxALKiaUeX5tA7xNx54k5RLs
```
#### T3 查詢餘額
```
$ btcp info
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
$ btcp miner --num 101
$ btcp info
```

#### T5 轉出10個比特幣

轉帳需要對方地址，如無人練習可使用btcp2節點重複T0/T1取得地址。這裡假設對方地址為mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU，轉完帳必須有人執行產出區塊對方才能收到一個確認，新礦需要100個確認後才能使用，所以btcp1每生成一個新區塊就會有新熟成的50個比特幣可使用。手續費計算方式較複雜，現階段理解有差額即可。

```
$ btcp send --to mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU --btc 10
7e6223443890d468addd9fdac6202d200145c2d0bbdce02d5f3cfb580bd27528
$ btcp info
$ btcp miner --num 1
```
#### T6 收到5個比特幣
該任務需要提交地址請對方協助，完成後btcp1會收到5個以及新熟成50個，餘額55個。
#### T7 帳本同步
將節點停止後重開再檢視是否同步並互相發送測試，注意請勿停掉或啟動道場中其他人正在練習的節點。
```
$ btcp info
$ dcstop
Stopping 1a_btcp1_1 ... done
// Waiting for some blockchain change to happen...
$ dcstart
Starting btcp1 ... done
$ btcp info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 5050,
  blocks: 212,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484976398,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```
如果無對手可以改變區塊狀態可切換為btcp2來挖礦觀察狀態變化，注意如果每次切換身份都需要先更改DLTDOJOID。
```
$ DLTDOJOID=2
$ btcp miner --num 10
$ btcp info
{ version: 130100,
  protocolversion: 70014,
  walletversion: 130000,
  balance: 550,
  blocks: 212,
  timeoffset: 0,
  connections: 1,
  proxy: '',
  difficulty: 4.656542373906925e-10,
  testnet: false,
  keypoololdest: 1484976398,
  keypoolsize: 100,
  paytxfee: 0,
  relayfee: 0.00001,
  errors: '' }
```

## Level1B Asset

* bitcoin v0.3.24 2011 network
* counterparty
* coloredcoin
* omni

## SETUP
```
$ mkdir level1 && cd level1
$ docker run -v $(pwd):/tmp y12docker/dltdojo build --dojo.btc 4 --name 1a
$ source alias1a.sh
$ dcup
// do the 1A tasks
$ dcend
```
