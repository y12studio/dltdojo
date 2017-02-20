### runkit
* https://runkit.com/y12/58aabd484771880014ce31a0

### 2017-02-20T17:28:28+0800

```
$ docker build -t y12docker/dltdojo-colu .
$ docker run -it -p 18080:80 --rm y12docker/dltdojo-colu colu
// getAsset
$ docker run -it --rm y12docker/dltdojo-colu node /colutest.js
REDIS not found: Installing REDIS will make the SDK run faster (http://redis.io/topics/quickstart)
Body:  [ { address: 'msoUP7MF3JJGewSL62gPf5nSJtFRBkfTwg',
    txid: '478ddc02d6461f370b3f6f727f984b13da765759da43a17a9ffac64483774946',
    index: 0,
    assetId: 'La3PJ9Bwh6WsZhkdCgDECHuJ6Q2dz1nE1TJ88S',
    amount: 10000,
    issueTxid: '478ddc02d6461f370b3f6f727f984b13da765759da43a17a9ffac64483774946',
    divisibility: 0,
    lockStatus: true,
    aggregationPolicy: 'aggregatable',
    assetIndex: 0 },
  { address: 'n3ksdqfZWvRyMTr2FwhXMiYW876m9x7UTg',
    txid: 'e15d1fcd034b01d8e0a80cf63fd049b19643d41fdce2e3c202e3550eb9165a9a',
    index: 0,
    assetId: 'La75S1HAG6SMJs1xobSiK7gwEyMwadGD8UEAmR',
    amount: 10000,
    issueTxid: 'e15d1fcd034b01d8e0a80cf63fd049b19643d41fdce2e3c202e3550eb9165a9a',
    divisibility: 0,
    lockStatus: true,
    aggregationPolicy: 'aggregatable',
    assetIndex: 0 },
  { address: 'miaJW144yvaGnhdfJpTdF4jq1ps4vomo4r',
    txid: 'b5501c27315d26dae0cb1c5121e82874262bb10349fbea8ac5274f719024d446',
    index: 0,
    assetId: 'La2oERgsQyvyPXUjL8hfdpggAL6PkWddX5p1HZ',
    amount: 10000,
    issueTxid: 'b5501c27315d26dae0cb1c5121e82874262bb10349fbea8ac5274f719024d446',
    divisibility: 0,
    lockStatus: true,
    aggregationPolicy: 'aggregatable',
    assetIndex: 0 } ]

```
