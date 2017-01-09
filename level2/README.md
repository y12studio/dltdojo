# Level2 ETH轉帳任務

環境設置好之後有vp1-vp6共計5個節點可操作，vp0為啟動節點不同步無法當成帳號使用，下面用vp1為主，以vp1/vp2為採礦點，請注意兩個ETH挖礦點需要下載約2G的資料。

# T1 取得地址

設定vp1帳號密碼vp1pass取得地址。

```
$ vp1cli rpc personal_newAccount vp1pass
{"jsonrpc":"2.0","id":"6025300e-c2bc-478f-97ed-0e9a65c6d074","result":"0x61c8b60e657af2f09f2a9ed1008f61b7fb8565f0"}
```

# T2 取得金鑰

注意地址需要去除0x。

```
$ vp1cli keyrecover 61c8b60e657af2f09f2a9ed1008f61b7fb8565f0 vp1pass
f26c2a5839f1c1066694c27c0f87c170e452cead2dceb76dea0943cc015b6aa0
```

# T3 查詢餘額
```
$ vp1cli info
{
 "ethBlockNumber": 0,
 "ethGetBalance": "0",
 "ethCoinbase": "0x61c8b60e657af2f09f2a9ed1008f61b7fb8565f0",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceEther": "0"
}
```

# T4 挖礦取得ETH

目前單點私鏈挖礦有時回出現無法同步收發交易的問題，建議vp1點先進行挖礦，啟動挖礦需等候約1G的挖礦必備檔案下載，等候時間與頻寬有關，第一個區塊應該可在數十分鐘內完成，等到vp1出塊後再啟動vp2挖礦，等vp2下載完畢再關掉vp1挖礦。

```
$ vp1cli rpc miner_start
.....
$ vp2cli rpc miner_start
.....
$ vp1cli info && vp2cli info
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

$ vp1cli rpc miner_stop
```

# T5 轉出3個

轉帳需要對方地址，如無人練習可使用vp3節點重複T1取得地址。這裡假設vp3對方地址為ae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5，轉完帳必須等產出區塊對方才能收到確認。
```
$ vp1cli sendeth 61c8b60e657af2f09f2a9ed1008f61b7fb8565f0 vp1pass ae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5 3
{
 "unlock": true,
 "sendtx": "0x163cdb1863db09a1371937d079502e73d04ccc6bd5ba308d7cf2f936725cee05"
}
$ vp3cli info && vp1cli info
```

# T6 收到2個

該任務需要提交地址請對方協助，如無練習對手可使用vp3節點，沿用上例vp3收到3個轉回2個，差額為手續費。

```
$ vp3cli sendeth ae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5 vp3pass 61c8b60e657af2f09f2a9ed1008f61b7fb8565f0 2
$ vp3cli info && vp1cli info
{
 "ethBlockNumber": 2626,
 "ethGetBalance": "999580000000000000",
 "ethCoinbase": "0xae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5",
 "ethSyncing": false,
 "netPeerCount": 4,
 "balanceEther": "0.99958"
}
{
 "ethBlockNumber": 2626,
 "ethGetBalance": "2.39271833e+21",
 "ethCoinbase": "0x61c8b60e657af2f09f2a9ed1008f61b7fb8565f0",
 "ethSyncing": false,
 "netPeerCount": 5,
 "balanceEther": "2392.71833"
}
```
# SETUP

```
$ mkdir level2 && cd level2
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.4 --name level2 --peers 6 --level 2
$ source level2-alias.sh
$ dcup
$ dc stop && dc rm
```
