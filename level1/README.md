# Level1 比特幣轉帳

環境設置好之後有vp0-vp3共計四個節點可操作，下面用vp1為主。

# T1 取得地址

```
$ vp1cli getnewaddress
n1ScKpzdRQ3rq3sRxReLKNx4u2Vwma69SY
```

# T2 取得金鑰
```
$ vp1cli dumpprivkey n1ScKpzdRQ3rq3sRxReLKNx4u2Vwma69SY
cVYZkVvQupWkiWe5QwJgqgNfrHePdTAmyUP9oLHsiYn6woirgx1S
```

# T3 查詢餘額
```
$ vp1cli getbalance
0.00000000
```

# T4 挖礦取得50個比特幣

```
$ vp1cli generate 101
....
$ vp1cli getbalance
50.00000000
```

# T5 轉出10個比特幣

轉帳需要對方地址，如無人練習可使用vp0節點重複T1取得地址。這裡假設對方地址為mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU，轉完帳必須有人執行產出區塊對方才能收到一個確認，新礦需要100個確認後才能使用，所以vp1每生成一個新區塊就會有新熟成的50個比特幣可使用。

手續費計算方式較複雜，現階段理解有差額即可，該案例為 50-10-39.99996160=0.0000384

```
$ vp1cli sendtoaddress mgUMfoXL57yH9s1WjwB3CE3MeDWZNxzexU 10
7e6223443890d468addd9fdac6202d200145c2d0bbdce02d5f3cfb580bd27528
$ vp1cli getbalance
39.99996160
$ vp1cli generate 1
[
  "0a95959a1230abcfbaabeef669ea5b2169104d9925e0e7e0d52a983979fb8332"
]
$ vp1cli getbalance
89.99996160
```

# T6 收到5個比特幣

該任務需要提交地址請對方協助，如無練習對手可使用vp0節點。完成後vp1會收到5個以及新熟成50個，所以餘額增加55個。

```
$ vp1cli getbalance
144.99996160
```
