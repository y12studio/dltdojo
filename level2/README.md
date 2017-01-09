# Level2 ETH轉帳任務

環境設置好之後有vp0-vp6共計6個節點可操作，下面用vp1為主，由於ETH挖礦需要下載約1G的資料，這裡只以vp1為採礦點，其他節點需要從vp1帳號取得ETH。

# T1 取得地址

設定vp1帳號密碼vp1pass取得地址。

```
$ vp1cli rpc personal_newAccount vp1pass
response:  {"jsonrpc":"2.0","id":"dc2023e4-172e-475e-964d-ea5568e0f6f9","result":"0xeb8850832535c05bc3e8ec37b1acd4073d4161fb"}
```

# T2 取得金鑰

注意地址需要去除0x。

```
$ vp1cli keyrecover eb8850832535c05bc3e8ec37b1acd4073d4161fb vp1pass
f7735c898ebe695457d5a055d853e710c3bb7efcccf9365b1214c8ce3a817e9d

```

# T3 查詢餘額
```
$ vp1cli info
{
 "ethGetBalance": "0",
 "ethCoinbase": "0x8a3ce4e4eb17d147b8a2a625a7b58934f3cb3fcf",
 "balanceEther": "0"
}

```

# T4 挖礦取得ETH

挖礦只選vp1點進行，啟動挖礦需等候約1G的挖礦必備檔案下載，等候時間與頻寬有關，第一個區塊應該可在數十分鐘內完成。

```
$ vp1cli rpc miner_start
{"jsonrpc":"2.0","id":"02600afd-6ac0-4e0b-ba7c-165e6be4ffae","result":true}

.......

$ vp1cli info
{
 "ethGetBalance": "210937500000000000000",
 "ethCoinbase": "0x8a3ce4e4eb17d147b8a2a625a7b58934f3cb3fcf",
 "balanceEther": "210.9375"
}
```

# T5 轉出10個

轉帳需要對方地址，如無人練習可使用vp0節點重複T1取得地址。這裡假設對方地址為mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU，轉完帳必須有人執行產出區塊對方才能收到一個確認，

# T6 收到5個

該任務需要提交地址請對方協助，如無練習對手可使用vp0節點。完成後vp1會收到5個以及新熟成50個，所以餘額增加55個。

# SETUP

```
$ mkdir level2 && cd level2
$ docker run -v $(pwd):/tmp y12docker/dltdojo:0.0.4 --name level2 --peers 6 --level 2
$ source level2-alias.sh
$ dcup
$ dc stop && dc rm
```
