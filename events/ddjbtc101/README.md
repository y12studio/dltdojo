### url

```
<script src="https://dltdojo.org/js/ddjbtc/0.13.19/ddjbtc101.js"></script>
```

### Build ddjbtc101.js
```
$ npm i bitcore-lib
$ npm i bitcore-mnemonic
$ browserify ddjbtc.module.js -s DdjBtc -o ddjbtc101.js
```

### raw tx

https://insight.bitpay.com/tx/115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986

https://insight.bitpay.com/api/tx/115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986

https://blockchain.info/rawtx/115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986

```
{
   "ver":1,
   "inputs":[
      {
         "sequence":4294967295,
         "prev_out":{
            "spent":true,
            "tx_index":61192440,
            "type":0,
            "addr":"1H9UkKPCrs6hhUetPtGzZ383S3K4uFS8od",
            "value":70000,
            "n":0,
            "script":"76a914b11c808bd40007b1afb0937969115b3d81aca7a288ac"
         },
         "script":"493046022100e8b0d491cb54f8851ece302905c87c7b0c29de262acb3348d052d3f875960c7102210085a72d6010b693ae4d57fd675eb834cccbe3100a954957c41f584fe6d07d95a7014104aead9eac9aee313e3bd597ae3bf1b76622f4e2bbf06d59ede776ffbfa4784aeeab1c5f2de4a540aa39f7c697a793fd0f51c70bcb68fcaea830ab08a76de02644"
      }
   ],
   "block_height":312929,
   "relayed_by":"127.0.0.1",
   "out":[
      {
         "spent":true,
         "tx_index":61192442,
         "type":0,
         "addr":"17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
         "value":50000,
         "n":0,
         "script":"76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac"
      }
   ],
   "lock_time":0,
   "size":225,
   "double_spend":false,
   "time":1406592016,
   "tx_index":61192442,
   "vin_sz":1,
   "hash":"115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
   "vout_sz":1
}

```