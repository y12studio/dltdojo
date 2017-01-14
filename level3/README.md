# Level3 創立資產轉帳任務

### T1 取得帳號地址餘額
過程參考Level2，這裡使用單一節點evp1示範。
```
$ evp1 info
{
 "ethBlockNumber": 2,
 "ethCoinbase": "0xd39d4ff071756653cfbeebf863ae7276f60ad2b8",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceCoinbaseEther": "10",
 "account": {
  "name": "alice",
  "address": "0xd39d4ff071756653cfbeebf863ae7276f60ad2b8",
  "balanceEther": "10"
 }
}
```
### T2 部署資產合約
部署合約需要等候區塊完成更新，同時傳回合約地址。
```
$ evp1 hahacoin --new
0x77adb4d3609b6b3db692cf8785adc75ee68b6e72
```
### T3 查詢資產
該合約創建時預設有10000單位的資產。
```
$ evp1 hahacoin --contract 0x77adb4d3609b6b3db692cf8785adc75ee68b6e72
{ account: '0xd39d4ff071756653cfbeebf863ae7276f60ad2b8',
  contractAddress: '0x77adb4d3609b6b3db692cf8785adc75ee68b6e72',
  contractBalance: '10000' }
```
### T4 發送資產
發送完畢需要等候區塊更新才能查詢正確餘額。
```
$ evp1 hahacoin --send --contract 0x77adb4d3609b6b3db692cf8785adc75ee68b6e72 --to 0x0de51d24bd6c97564f99bb829c789b4748a3d0d7 --amount 99
0xed60cb5303a33557464b2a72b329d4581789990fb957941810c6c5952d4372a6
$ evp1 hahacoin --contract 0x77adb4d3609b6b3db692cf8785adc75ee68b6e72
{ account: '0xd39d4ff071756653cfbeebf863ae7276f60ad2b8',
  contractAddress: '0x77adb4d3609b6b3db692cf8785adc75ee68b6e72',
  contractBalance: '9901' }
```
### T5 接收資產
將合約地址傳給對方由對方依T4方式發送。
