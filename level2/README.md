#[WIP] Level2 ETH轉帳任務

環境設置好之後有vp1-vp6共計5個節點可操作，vp0為啟動節點不同步無法當成帳號使用，下面用vp1為主，以vp1/vp2為採礦點，請注意兩個ETH挖礦點需要下載約2G的資料。

## T1 取得地址

設定vp1帳號密碼vp1pass取得地址。

```
$ evp1 account --new --password vp1pass
0x0bc1996367eb944da21005bb1025c69f032a1fb6
```

## T2 取得金鑰

```
$ evp1 account --key
d2bf6561de1e476a0fc5fa69053998c7b89065b9ddd16a4260564307793bb453
```

## T3 查詢餘額
```
$ evp1 info
{
 "ethBlockNumber": 0,
 "ethGetBalance": "0",
 "ethCoinbase": "0x61c8b60e657af2f09f2a9ed1008f61b7fb8565f0",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceEther": "0"
}
```

## T4 挖礦取得ETH

目前單點私鏈挖礦有時回出現無法同步收發交易的問題，建議vp1點先進行挖礦，啟動挖礦需等候約1G的挖礦必備檔案下載，等候時間與頻寬有關，第一個區塊應該可在數十分鐘內完成，等到vp1出塊後再啟動vp2挖礦，等vp2下載完畢再關掉vp1挖礦。

```
$ evp1 miner --start
.....
$ evp2 miner --start
.....
$ evp1 info && evp2 info
{
 "ethBlockNumber": 414,
 "ethGetBalance": "1.9403125e+21",
 "ethCoinbase": "0x61c8b60e657af2f09f2a9ed1008f61b7fb8565f0",
 "ethSyncing": false,
 "netPeerCount": 4,
 "balanceEther": "1940.3125"
}
{
 "ethBlockNumber": 414,
 "ethGetBalance": "223125000000000000000",
 "ethCoinbase": "0x7e14f5d5f798a39b010a4e6d54a7d58d792557a8",
 "ethSyncing": false,
 "netPeerCount": 3,
 "balanceEther": "223.125"
}

$ evp1 miner --stop
```

## T5 轉出3個

轉帳需要對方地址，如無人練習可使用vp3節點重複T1取得地址。這裡假設vp3對方地址為0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed，轉完帳必須等產出區塊對方才能收到確認。
```
$ evp1 account --send --to 0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed --ether 3
{
 "unlock": true,
 "sendtx": "0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05"
}
$ evp1 info
```

## T6 收到2個

該任務需要提交地址請對方協助，如無練習對手可使用vp3節點，沿用上例vp3收到3個轉回2個，差額為手續費。
