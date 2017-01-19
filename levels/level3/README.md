# [WIP] Level3 創立資產轉帳任務

## T1 取得帳號地址餘額
過程參考Level2，這裡使用單一節點evp1示範，密碼為pass1。
```
$ ethp1 info
{ hostname: 'ethp1',
  ethBlockNumber: 3,
  ethCoinbase: '0x757967a94e7d63f828067a8b0ba5790f670c239d',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: '15',
  ethMining: true }
```
## T2 部署資產合約
部署合約需要等候區塊完成更新，同時傳回合約地址。
```
$ ethp1 hahacoin --new --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1
{ tx: '0xad9e6cf16b85f509550140fc563f1c07e54d6aa5f842094d5314b7a967fd5d58',
  contractAddress: '0xcf0999df518328f49be2ecadec910961da44ff59' }
```
## T3 查詢資產
該合約創建時預設有10000單位的資產。
```
$ ethp1 hahacoin --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1 --contract 0xcf0999df518328f49be2ecadec910961da44ff59
{ account: '0x757967a94e7d63f828067a8b0ba5790f670c239d',
  contractAddress: '0xcf0999df518328f49be2ecadec910961da44ff59',
  contractBalance: '10000' }
```
## T4 發送資產
發送完畢需要等候區塊更新才能查詢正確餘額，注意是資產餘額不是帳戶ETH餘額。
```
$ ethp1 hahacoin --send --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1 --contract 0xcf0999df518328f49be2ecadec910961da44ff59 --to 0x0de51d24bd6c97564f99bb829c789b4748a3d0d7 --amount 99

$ ethp1 hahacoin --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1 --contract 0xcf0999df518328f49be2ecadec910961da44ff59
{ account: '0x757967a94e7d63f828067a8b0ba5790f670c239d',
  contractAddress: '0xcf0999df518328f49be2ecadec910961da44ff59',
  contractBalance: '9901' }

```
## T5 接收資產
將合約地址傳給對方由對方依T4方式發送。
