## Level2A ETH 轉帳任務

環境設置好之後有ethp1-ethp6共計5個節點可操作，下面用ethp1為主，以ethp1/ethp2為採礦點，請注意兩個ETH挖礦點需要下載約2G的資料。

#### T1 取得地址

先依照Level1A T0設置使用的編號，設定ethp1帳號密碼vp1pass取得地址。

```
$ ethp account --new --password vp1pass
0x4f227dd841d7389318fd6f1f8d0a2c140124f569
```

#### T2 取得金鑰

```
$ ethpexec /keyfind.sh
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
#### T3 查詢餘額
```
$ ethp info
{ hostname: 'ethp1',
  ethBlockNumber: 0,
  ethCoinbase: '0x4f227dd841d7389318fd6f1f8d0a2c140124f569',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: '0',
  ethMining: false }
```
#### T4 挖礦取得ETH

注意目前私鏈挖礦即使難度低還是會吃去大部分的CPU效能，建議一次只開一個挖礦節點輪流測試，否則其他節點會有嚴重延遲的問題發生。

目前單點私鏈挖礦有時回出現無法同步收發交易的問題，建議ethp1點先進行挖礦，啟動挖礦需等候約1G的挖礦必備檔案下載，等候時間與頻寬有關，第一個區塊應該可在數十分鐘內完成，等到ethp1出塊後再啟動ethp2挖礦，等ethp2下載完畢再關掉ethp1挖礦。

```
$ ethp miner --start
$ ethp info
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
#### T5 轉出3個
轉帳需要對方地址，如無人練習可使用ethp2節點重複T1取得地址。這裡假設對方地址為0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed，轉完帳必須等產出區塊對方才能收到確認。
```
$ ethp send --to 0xa58e7d2b366de5fb352d8f08b1620f226a9c1fed --eth 3.6 --password vp1pass
$ ethp info
```
#### T6 收到2個
該任務需要提交地址請對方協助，如無練習對手可使用ethp2節點，切換方式參閱Level1A T7，沿用上例ethp2收到3個轉回2個，差額為手續費。

## Level2B 創立資產轉帳任務

#### T1 取得帳號地址餘額
過程參考Level2A，這裡使用單一節點etp1示範，密碼為pass1。
```
$ ethp info
{ hostname: 'ethp1',
  ethBlockNumber: 3,
  ethCoinbase: '0x757967a94e7d63f828067a8b0ba5790f670c239d',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 0,
  ethBalance: '15',
  ethMining: true }
```
#### T2 部署資產合約
部署合約需有餘額的帳號如上，執行後需等候區塊完成更新，同時傳回合約地址。
```
$ ethp hahacoin --new --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1
{ tx: '0xad9e6cf16b85f509550140fc563f1c07e54d6aa5f842094d5314b7a967fd5d58',
  contractAddress: '0xcf0999df518328f49be2ecadec910961da44ff59' }
```
#### T3 查詢資產
該合約0xcf0999df518328f49be2ecadec910961da44ff59創建時預設有10000單位的資產。
```
$ ethp hahacoin --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1 --contract 0xcf0999df518328f49be2ecadec910961da44ff59
{ account: '0x757967a94e7d63f828067a8b0ba5790f670c239d',
  contractAddress: '0xcf0999df518328f49be2ecadec910961da44ff59',
  contractBalance: '10000' }
```
#### T4 發送資產
發送完畢需要等候區塊更新才能查詢正確餘額，注意是資產餘額不是帳戶ETH餘額。
```
$ ethp hahacoin --send --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1 --contract 0xcf0999df518328f49be2ecadec910961da44ff59 --to 0x0de51d24bd6c97564f99bb829c789b4748a3d0d7 --amount 99

$ ethp hahacoin --address 0x757967a94e7d63f828067a8b0ba5790f670c239d --password pass1 --contract 0xcf0999df518328f49be2ecadec910961da44ff59
{ account: '0x757967a94e7d63f828067a8b0ba5790f670c239d',
  contractAddress: '0xcf0999df518328f49be2ecadec910961da44ff59',
  contractBalance: '9901' }

```
#### T5 接收資產
將合約地址傳給對方由對方依T4方式發送。

## Level2C 非POW共識鏈代幣與資產轉帳
TODO Proof of Authority Chains https://github.com/ethcore/parity/wiki/Proof-of-Authority-Chains
## Level2D TheDAO
TODO slockit/DAO: The Standard DAO Framework  https://github.com/slockit/DAO
