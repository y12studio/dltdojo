# Level3 創立資產轉帳任務

### T1 取得帳號地址餘額
過程參考Level2。
```
$ vp1cli info
{
 "ethBlockNumber": 216,
 "ethGetBalance": "1.08e+21",
 "ethCoinbase": "0x4a3d9afc6fa0df1f9341b96ae36db586fe8bac9d",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceEther": "1080"
}
```

### T2 部署資產合約

```
$ vp1 cat hahacoin.sol
$ vp1cli newHahaCoin 4a3d9afc6fa0df1f9341b96ae36db586fe8bac9d vp1pass
{ accountAddress: '4a3d9afc6fa0df1f9341b96ae36db586fe8bac9d',
  txHash: '0x5197d4a4818126d6fe93142f40c38313ac47f6eea5edb2497b50427cd0a59931',
  contractAddress: '0x865b1bbacbfafd6f631edf38f60f9f4e8fbe8630',
  cliBalance: 'vp1cli hahaCoinBalance 865b1bbacbfafd6f631edf38f60f9f4e8fbe8630 4a3d9afc6fa0df1f9341b96ae36db586fe8bac9d' }
```


### T3 查詢資產
該合約創建時預設有10000單位的資產。
```
$ vp1cli hahaCoinBalance 865b1bbacbfafd6f631edf38f60f9f4e8fbe8630 4a3d9afc6fa0df1f9341b96ae36db586fe8bac9d
10000
```
### T4 發送資產
```
$ vp1cli hahaCoinSend 04b34b4b5fd1012a025d0de27829bf3d32fcb0d3 138ddf52657d804e92047429e70e1951a7fb590d vp1pass 0b54f84fdd1f2e423ed7cfdd9738750c5c2fa729 10
{ _: [ 'hahaCoinSend' ],
  help: false,
  h: false,
  '$0': 'index.js',
  addressDeploy: '04b34b4b5fd1012a025d0de27829bf3d32fcb0d3',
  accountAddress: '138ddf52657d804e92047429e70e1951a7fb590d',
  accountPass: 'vp1pass',
  toAddress: '0b54f84fdd1f2e423ed7cfdd9738750c5c2fa729',
  amount: 10 }
0x20b1e85050179a127cdcb9f64f20c378ab2b2638d1212fac89c074d03120114f
```
### T5 接收資產
```
```

Contract Tutorial · ethereum/go-ethereum Wiki
 https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial
