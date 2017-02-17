### 2017-02-17T10:18:55+0800
* http://beautifuldata.net/2015/01/querying-the-bitcoin-blockchain-with-r/
* fetch blockchain info from local bitcoind · jangorecki/Rbitcoin https://github.com/jangorecki/Rbitcoin/issues/8
* R interface to bitcoin daemon https://github.com/jangorecki/rbitcoind
* https://github.com/simonstey/BTCAnalysis

```
$ docker run -ti --rm y12docker/dltdojo-r
$ library(Rbitcoin)
Loading required package: data.table
data.table 1.10.4
  The fastest way to learn (by data.table authors): https://www.datacamp.com/courses/data-analysis-the-data-table-way
  Documentation: ?data.table, example(data.table) and browseVignettes("data.table")
  Release notes, videos and slides: http://r-datatable.com
You are using Rbitcoin 0.9.7, in case of migrating from CRAN release 0.9.2 see NEWS file for potentially breaking changes.
> library(Rbitcoin)
> wallet <- blockchain.api.process('15Mb2QcgF3XDMeVn6M7oCG6CQLw4mkedDi')
> seed <- '1NfRMkhm5vjizzqkp2Qb28N7geRQCa4XqC'
> genesis <- '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
> singleaddress <- blockchain.api.query(method = 'Single Address', bitcoin_address = seed, limit=100)
> txs <- singleaddress$txs
> names(txs)
 [1] "ver"          "inputs"       "block_height" "relayed_by"   "out"
 [6] "lock_time"    "result"       "size"         "time"         "tx_index"
[11] "vin_sz"       "hash"         "vout_sz"
> str(txs, max.level=1)
'data.frame':   12 obs. of  13 variables:
 $ ver         : int  1 1 1 1 1 1 1 1 1 1 ...
 $ inputs      :List of 12
 $ block_height: int  334180 334177 334166 333907 333896 333866 333574 320316 320315 318609 ...
 $ relayed_by  : chr  "127.0.0.1" "127.0.0.1" "127.0.0.1" "127.0.0.1" ...
 $ out         :List of 12
 $ lock_time   : int  0 0 0 0 0 0 0 0 0 0 ...
 $ result      : int  0 -12980000 10000000 1000000 -10000 990000 -48969 1000000 -9631031 9680000 ...
 $ size        : int  3751 4541 436 438 616 797 259 438 226 619 ...
 $ time        : int  1418496271 1418495547 1418489051 1418334140 1418322738 1418312323 1418139701 1410523432 1410523326 1409577163 ...
 $ tx_index    : int  71808139 71809362 71800299 71660519 71648810 71635833 71460909 64332190 64332023 63553438 ...
 $ vin_sz      : int  20 25 2 2 3 4 1 2 1 3 ...
 $ hash        : chr  "04699d66ed4f8b00db8ffc8c1763e6f94c057705daa54064bd166a5397711b9b" "88c85e6fda0a0d3bd15b4070016429da97f5a764d45b98270eb798b0fc9a3099" "1bf8c211c3f9cb5b1df05b5afccc44ff5df9d4669e11e4356f0ab367f624ef6f" "2416f0582a0334f3d2ae85efbf563d84db474dadb1dfbd9da242c84c81d25dfc" ...
 $ vout_sz     : int  4 15 2 2 2 2 2 2 2 2 ...
> txs[1,3]
[1] 334180
> txs[1,5]
[[1]]
  spent tx_index type                               addr     value n
1  TRUE 71808139    0 1JygMEn42dRJCYQ4s9sjk3Mi5AFvTvpNbA 156009091 0
2  TRUE 71808139    0 1Adb94GTLUMEVCc1czbG5S7dFyqpLRe8iU 144240909 1
3  TRUE 71808139    0 1LKMY5rNdk6jGTvyW1DJrsE9CD6oghjQ73 152406583 2
4  TRUE 71808139    0 1P18JptJSKo7TL4uuG8kKRZibrMKbXWQr2     10000 3
                                              script
1 76a914c532476d4608ac2a4fe19319347e3321f3f76dd488ac
2 76a91469a49ab9df7cc3325943f98e878f6309194a850288ac
3 76a914d3e3050d1365ca92de810322d15f3d9824288bd088ac
4 76a914f158ddfa5dfe4a1d3893ac13fb14c551bb3ba35188ac
> txs[3,12]
[1] "1bf8c211c3f9cb5b1df05b5afccc44ff5df9d4669e11e4356f0ab367f624ef6f"
> txs[3,]$hash
[1] "1bf8c211c3f9cb5b1df05b5afccc44ff5df9d4669e11e4356f0ab367f624ef6f"
> txs[3,]["hash"]
                                                              hash
3 1bf8c211c3f9cb5b1df05b5afccc44ff5df9d4669e11e4356f0ab367f624ef6f

> for (i in 1:nrow(txs)) { print(txs[i,12]) }
[1] "04699d66ed4f8b00db8ffc8c1763e6f94c057705daa54064bd166a5397711b9b"
[1] "88c85e6fda0a0d3bd15b4070016429da97f5a764d45b98270eb798b0fc9a3099"
[1] "1bf8c211c3f9cb5b1df05b5afccc44ff5df9d4669e11e4356f0ab367f624ef6f"
[1] "2416f0582a0334f3d2ae85efbf563d84db474dadb1dfbd9da242c84c81d25dfc"
[1] "1ed38485c277cd107234ec0d5018076576a5ba1cd9ec916ac4034d89453d0dd0"
[1] "1475ed552e71450eb6f69f3c4125f96289337d0ef75c4ba4051b3e61635e57d9"
[1] "aa66619a9310ff74a0621ea8973c7c25572d7961b7e3a2d8bf6c72ccc530d3de"
[1] "a7ed067a747d38bdf5e8fac158dced20c2c44d6c2e1ba5584550c5c1afbe93b6"
[1] "4a8656b4fd0f70ba45103f36c418574ffa3f3fb04eace84713618528663cd5ad"
[1] "15b03591d92ef5369839c99afa5b4848bc53c4e0130472d6212e6529ad1b78f0"
[1] "419b25c2725ca3230756b766c78bffaf345154adc21e4ff3bdd0e6bfde972147"
[1] "933ab59aad4bad17809822b827d546df3b9d6965b5da0724842a6d6fabb9f92a"

>  for (i in 1:nrow(txs)) { print(txs[i,]$hash) }
[1] "04699d66ed4f8b00db8ffc8c1763e6f94c057705daa54064bd166a5397711b9b"
[1] "88c85e6fda0a0d3bd15b4070016429da97f5a764d45b98270eb798b0fc9a3099"
[1] "1bf8c211c3f9cb5b1df05b5afccc44ff5df9d4669e11e4356f0ab367f624ef6f"
[1] "2416f0582a0334f3d2ae85efbf563d84db474dadb1dfbd9da242c84c81d25dfc"
[1] "1ed38485c277cd107234ec0d5018076576a5ba1cd9ec916ac4034d89453d0dd0"
[1] "1475ed552e71450eb6f69f3c4125f96289337d0ef75c4ba4051b3e61635e57d9"
[1] "aa66619a9310ff74a0621ea8973c7c25572d7961b7e3a2d8bf6c72ccc530d3de"
[1] "a7ed067a747d38bdf5e8fac158dced20c2c44d6c2e1ba5584550c5c1afbe93b6"
[1] "4a8656b4fd0f70ba45103f36c418574ffa3f3fb04eace84713618528663cd5ad"
[1] "15b03591d92ef5369839c99afa5b4848bc53c4e0130472d6212e6529ad1b78f0"
[1] "419b25c2725ca3230756b766c78bffaf345154adc21e4ff3bdd0e6bfde972147"
[1] "933ab59aad4bad17809822b827d546df3b9d6965b5da0724842a6d6fabb9f92a"

> bc <- data.frame()
> for (i in 1:nrow(txs)) {
+   t <- txs[i,]
+   hash <- t$hash
+   for (inputs in t$inputs) {
+     from <- inputs$prev_out$addr
+     str(from, max.level=1)
+     for (out in t$out) {
+       to <- out$addr
+       va <- out$value
+       str(to, max.level=1)
+       str(va, max.level=1)
+       data <- data.frame(from=from,to=to,value=va, stringsAsFactors=F)
+       str(data, max.level=1)
+     }
+   }
+ }
 chr [1:20] "16zSpkt8KrpeAootkSR22vPAm2dtWP6Lav" ...
 chr [1:4] "1JygMEn42dRJCYQ4s9sjk3Mi5AFvTvpNbA" ...
 int [1:4] 156009091 144240909 152406583 10000
'data.frame':   20 obs. of  3 variables:
 $ from : chr  "16zSpkt8KrpeAootkSR22vPAm2dtWP6Lav" "1FWzb8Qdd8aUjBdMVqLiwPhTtsPba8eGph" "1JdcGEavVt79iZ3xMiHW8nnzngqA5phN9H" "1BsFoY3PeBfjnzEGyY186FW7veaZwjy3fm" ...
 $ to   : chr  "1JygMEn42dRJCYQ4s9sjk3Mi5AFvTvpNbA" "1Adb94GTLUMEVCc1czbG5S7dFyqpLRe8iU" "1LKMY5rNdk6jGTvyW1DJrsE9CD6oghjQ73" "1P18JptJSKo7TL4uuG8kKRZibrMKbXWQr2" ...
 $ value: int  156009091 144240909 152406583 10000 156009091 144240909 152406583 10000 156009091 144240909 ...
 chr [1:25] "1NApy7zHJpJu8oddHhyM6wcsresGf39MSK" ...
 chr [1:15] "1NaWzKfVj4nDTSFUzSX53gFN3x1k928ZTW" ...
 int [1:15] 9900000 10000000 9348165 10000000 10000000 10000000 10000000 10000000 10000000 10000000 ...
Error in data.frame(from = from, to = to, value = va, stringsAsFactors = F) :
  arguments imply differing number of rows: 25, 15

$ q()
```
### 2017-02-17T10:00:26+0800
* https://github.com/jangorecki/Rbitcoin
* http://jangorecki.gitlab.io/Rbitcoin/library/Rbitcoin/doc/introduction.html
* http://askubuntu.com/questions/359267/cannot-find-curl-config-in-ubuntu-13-04

```
$ docker run -ti --rm r-base

R version 3.3.2 (2016-10-31) -- "Sincere Pumpkin Patch"
Copyright (C) 2016 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)

install.packages("Rbitcoin", repos=c("https://jangorecki.gitlab.io/Rbitcoin","https://cran.rstudio.com"))

* installing *source* package ‘RCurl’ ...
** package ‘RCurl’ successfully unpacked and MD5 sums checked
checking for curl-config... no
Cannot find curl-config
ERROR: configuration failed for package ‘RCurl’
```
