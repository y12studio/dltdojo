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
$ curl -OO https://y12studio.github.io/dltdojo/chains/darkorange/{darkorange-init.json,node.toml}
$ mv darkorange-init.json darkorange.json
$ parity --config node.toml
...
Public node URL: enode://df31c08a5797e2aae633ba09682fadad838221aa33f9f5d458977015a8c5fef7128da27eb027b2f25a6bbf2e10c7ca93574f97337f5347ce265d3a8eaad74a4f@192.168.2.73:30303
```
Open another terminal.
```
$ engine_signer_password=PASS_BLAH_BLAH
$ user_password=PASS_BLAH_BLAH
$ curl --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["'"$engine_signer_password"'"],"id":1}' -H "Content-Type: application/json" localhost:8545
{"jsonrpc":"2.0","result":"0xeb6d82ff3cfa660c6ac7f8e485d899e167353e52","id":67}
$ curl --data '{"jsonrpc":"2.0","method":"personal_newAccount","params":["'"$user_password"'"],"id":1}' -H "Content-Type: application/json" localhost:8545
$ {"jsonrpc":"2.0","result":"0x8d190b974311339e9018031f16886333168a707f","id":67}
$ engine_signer=0xeb6d82ff3cfa660c6ac7f8e485d899e167353e52
$ user=0x8d190b974311339e9018031f16886333168a707f

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
$ parity db kill --config node.toml
Loading config file from node.toml
2017-03-04 12:44:19  Database deleted.
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
$ parity --config node.toml
or
$ nohup parity --config node.toml > /dev/null 2>&1 &
```

### References
* Proof of Authority Chains · ethcore/parity Wiki  https://github.com/ethcore/parity/wiki/Proof-of-Authority-Chains
* parity/kovan.json at master · ethcore/parity  https://github.com/ethcore/parity/blob/master/ethcore/res/ethereum/kovan.json
* HTML Color Name DARKORANGE   https://www.w3schools.com/colors/colors_picker.asp?colorhex=FF8C00
