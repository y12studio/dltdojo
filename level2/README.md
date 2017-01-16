#Level2 ETH轉帳任務

環境設置好之後有vp1-vp6共計5個節點可操作，vp0為啟動節點不同步無法當成帳號使用，下面用vp1為主，以vp1/vp2為採礦點，請注意兩個ETH挖礦點需要下載約2G的資料。

## T1 取得地址

設定vp1帳號密碼vp1pass取得地址。

```
$ ethp1 account --new --password vp1pass
0x4f227dd841d7389318fd6f1f8d0a2c140124f569
```

## T2 取得金鑰

```
$ ethp1key
{
  "version": 3,
  "id": "0191a9ea-c675-4996-854c-28e9ae41aa70",
  "crypto": {
    "mac": "dc7e41d0f6d82bdb02be2c3bcc51753820ccace0aa70d4338b9140a7b2f436ae",
    "kdfparams": {
      "salt": "6259548c01ffc1ebb0cd71290b4e46d01aaa57071697323a17e4b68cf6212b87",
      "r": 8,
      "p": 1,
      "n": 262144,
      "dklen": 32
    },
    "kdf": "scrypt",
    "cipherparams": {
      "iv": "74716023a7d1697b595922dc689beb9f"
    },
    "ciphertext": "67224b9243f61bc3d55cf0bc9f0e8545444cbda62803284769c686012305b0f9",
    "cipher": "aes-128-ctr"
  },
  "address": "4f227dd841d7389318fd6f1f8d0a2c140124f569"
}
```

## T3 查詢餘額
```
$ ethp1 info
{ hostname: 'ethp1',
  ethBlockNumber: 0,
  ethCoinbase: '0x4f227dd841d7389318fd6f1f8d0a2c140124f569',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: '0',
  ethMining: false }
```

## T4 挖礦取得ETH

目前單點私鏈挖礦有時回出現無法同步收發交易的問題，建議ethp1點先進行挖礦，啟動挖礦需等候約1G的挖礦必備檔案下載，等候時間與頻寬有關，第一個區塊應該可在數十分鐘內完成，等到ethp1出塊後再啟動ethp2挖礦，等ethp2下載完畢再關掉ethp1挖礦。

```
$ ethp1 miner --start
$ ethp1 info
{ hostname: 'ethp1',
  ethBlockNumber: 2,
  ethCoinbase: '0x4f227dd841d7389318fd6f1f8d0a2c140124f569',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: '10',
  ethMining: true }
$ ethp1 miner --stop
```

## T5 轉出3個

轉帳需要對方地址，如無人練習可使用ethp2節點重複T1取得地址。這裡假設對方地址為0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed，轉完帳必須等產出區塊對方才能收到確認。
```
$ ethp1 send --to 0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed --eth 3.6 --password vp1pass
$ ethp1 info
```

## T6 收到2個

該任務需要提交地址請對方協助，如無練習對手可使用ethp2節點，沿用上例ethp2收到3個轉回2個，差額為手續費。
