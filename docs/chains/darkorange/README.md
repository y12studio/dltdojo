### Darkorange chain

![#ff8c00](https://placehold.it/16/ff8c00/000000?text=+) `DARKORANGE #FF8C00` chain is a modified Kovan chain based on Ethercore Parity Proof-of-Authority(PoA) consensus engine.

### Recruiting validators
* Recruiting Period: 2017-03-03 to 2017-03-08
* Service Period: 2017-03-08 to 2017-06-08

#### Recruiting Period

Provide the following information.
* enode url
* engine_signer address

Open a terminal.
```
$ bash <(curl https://get.parity.io -Lk)
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{darkorange-init.json,node.toml}
$ mv darkorange-init.json darkorange.json
$ parity --config node.toml
```
Open another terminal.
```
$ curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
{"jsonrpc":"2.0","result":"enode://f1967fd8190c25785a7cf24cb80f0202c43c284701ec642d5f2edfc10fd42b187be73b39de4c7265c9dc09b30043c9d04dfd5d2e782a4f8a70a0a7b1e6fdfe0c@138.68.2.245:30303","id":0}

$ engine_signer_password=PASS_BLAH_BLAH
$ curl --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["'"$engine_signer_password"'"],"id":1}' -H "Content-Type: application/json" localhost:8545
{"jsonrpc":"2.0","result":"0xeb6d82ff3cfa660c6ac7f8e485d899e167353e52","id":67}

$ engine_signer=0xeb6d82ff3cfa660c6ac7f8e485d899e167353e52
$ echo $engine_signer_password > node.pwds
$ cat node.pwds
YOUR_PASS_BLAH_BLAH
$ sed -i.bak "s/#engine/engine/g" node.toml
$ sed -i.bak "s/#password/password/g" node.toml
$ sed -i.bak "s/0x0000000000000000000000000000000000000092/$engine_signer/g" node.toml
$ cat node.toml
[parity]
chain = "darkorange.json"
[network]
port = 30303
[rpc]
port = 8545
apis = ["web3", "eth", "net", "personal", "parity", "parity_set", "traces", "rpc", "parity_accounts"]
# [ui]
# port = 8180
# [dapps]
# port = 8080
[account]
password = ["node.pwds"]
[mining]
engine_signer = "0xeb6d82ff3cfa660c6ac7f8e485d899e167353e52"
reseal_on_txs = "none"
```
Stop parity and clean temporary chaindata.
```
$ rm -rf ~/.local/share/io.parity.ethereum/chains/darkorange
```

### Backing up and Restroing
Back up yours keys.
```
$ ls ~/.local/share/io.parity.ethereum/keys
darkorange
$ cd ~/.local/share/io.parity.ethereum/keys && tar czf ~/darkorange-keys-backup.tgz * && cd -
```
Restore from your backup.
```
$ cd ~/.local/share/io.parity.ethereum/keys && tar xzf ~/darkorange-keys-backup.tgz && cd -
```
#### Service Period
Starting the final darkorange chain
```
$ curl -O https://y12studio.github.io/dltdojo/chains/darkorange/darkorange.json
$ rm -rf ~/.local/share/io.parity.ethereum/chains/darkorange
$ parity --config node.toml
or
$ nohup parity --config node.toml > /dev/null 2>&1 &
```
#### web3 setup
```
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{package.json,darkorange.js}
$ npm i
$ node darkorange.js getinfo
$ node darkorange.js sendEther 4792d5fc595e237347d71acfc57948efdd7c5cf7 pass 6846497f3d3b505d7317f5890bd2dbcd9f995905 10
```

### References
* Proof of Authority Chains · ethcore/parity Wiki  https://github.com/ethcore/parity/wiki/Proof-of-Authority-Chains
* parity/kovan.json at master · ethcore/parity  https://github.com/ethcore/parity/blob/master/ethcore/res/ethereum/kovan.json
* HTML Color Name DARKORANGE   https://www.w3schools.com/colors/colors_picker.asp?colorhex=FF8C00
