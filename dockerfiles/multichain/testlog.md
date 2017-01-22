### Sun Jan 22 11:17:32 CST 2017
```
$ dcup
$ dc ps
           Name                    Command         State   Ports
----------------------------------------------------------------
devmultichain_multichain1_1   multichaind chain1   Up
devmultichain_multichain2_1   multichaind chain1   Up
$ mcli1 chain1 getinfo
{"method":"getinfo","params":[],"id":1,"chain_name":"chain1"}

error: incorrect rpcuser or rpcpassword (authorization failed)
$ dcend
```
#### Sat Jan 21 12:25:24 UTC 2017
```
$ build
$ drun multichaind --version
MultiChain Core Daemon build 1.0 alpha 27 protocol 10007
```
