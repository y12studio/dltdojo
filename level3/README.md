# Level3 創立資產轉帳任務

### T1 取得帳號地址餘額
過程參考Level2，這裡使用單一節點evp1示範。
```
$ evp1 info
{
 "ethBlockNumber": 5,
 "ethGetBalance": "25000000000000000000",
 "ethCoinbase": "0xfdf43968f7bbfe1297769c3a03cbf8a130d13302",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceEther": "25"
}
```
### T2 部署資產合約
部署合約需要等候區塊完成更新。
```
$ evp1 hahacoin --new
0x03e426f36bb2bfe4234d02b0e45337987c04617b
```
### T3 查詢資產
該合約創建時預設有10000單位的資產。
```
$ evp1 hahacoin
{ account: '0xfdf43968f7bbfe1297769c3a03cbf8a130d13302',
  balance: '10000' }
```
### T4 發送資產
發送完畢需要等候區塊更新才能查詢正確餘額。
```
$ evp1 hahacoin --send --to 0x0de51d24bd6c97564f99bb829c789b4748a3d0d7 --amount 99
0xed60cb5303a33557464b2a72b329d4581789990fb957941810c6c5952d4372a6
$ evp1 hahacoin
{ account: '0xdcdbfc8b1a34caebb678de043e83cd980d70e6b4',
  balance: '9901' }
```
### T5 接收資產
接收資產的作法如上。[TODO]
