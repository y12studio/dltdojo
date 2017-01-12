# Level3 創立資產轉帳任務

如要避免實際部署Level2網路太花時間，可使用--dojo.eth 2設定開啟雙點獨立開發模式。

# T1 取得帳號地址餘額
過程參考Level2。
```
$ vp1cli info
{
 "ethBlockNumber": 10,
 "ethGetBalance": "50000000000000000000",
 "ethCoinbase": "0x8a5d334b7a21dc10e2f2c00693f91ab9b101394d",
 "ethSyncing": false,
 "netPeerCount": 0,
 "balanceEther": "50"
}
```

# T1 編寫資產合約

```
$ dcp1 /opt/app/hahacoin.sol .
$ cat hahacoin.sol
$ dnc1 hahacoin.sol HahaCoin 8a5d334b7a21dc10e2f2c00693f91ab9b101394d vp1pass
{
 "txhash": "0xaedde398191c39c285da23b7eca426cdef0097f8b629289c7f996d6ee7d03dca"
}
$ vp1cli tx aedde398191c39c285da23b7eca426cdef0097f8b629289c7f996d6ee7d03dca --receipt
{
 "contractAddress": "0xbbbdd8a054da77258bac42de4d1cb656a0c96bc3",
}
```


# T1 取得地址
# T1 取得地址
# T1 取得地址
# T1 取得地址
# T1 取得地址


Contract Tutorial · ethereum/go-ethereum Wiki
 https://github.com/ethereum/go-ethereum/wiki/Contract-Tutorial
