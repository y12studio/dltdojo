### 2017-03-02T21:10:10+0800
POA0
```
$ bash <(curl https://get.parity.io -Lk)
$ curl -OOO https://y12studio.github.io/dltdojo/api/ethpoa/{dltdojo-poa0.json,node.toml,node.pwds}
$ ls
dltdojo-poa0.json  node.pwds  node.toml
$ mv dltdojo-poa0.json dltdojo-poa.json
$ pass=helloworldpass
$ userpass=helloworlduserpass
$ parity --config node.toml &
$ curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node", "'"$pass"'"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"0x005eb3d86d6c987860fbc95ab97da69ee6b6118e","id":0}
$ validator=0x005eb3d86d6c987860fbc95ab97da69ee6b6118e
$ curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user", "'"$userpass"'"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"0x004ec07d2329997267ec62b4166639513386f32e","id":0}
$ user=0x004ec07d2329997267ec62b4166639513386f32e
// stop parity
// kill -9 `cat /tmp/parity.pid`
$ sed -i.bak "s/password/$pass/g" node.pwds
$ sed -i.bak "s/#engine/engine/g" node.toml
$ sed -i.bak "s/0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e/$validator/g" node.toml
$ sed -i.bak "s/0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e/$validator/g" dltdojo-poa.json
$ sed -i.bak "s/0x004ec07d2329997267Ec62b4166639513386F32E/$user/g" dltdojo-poa.json
$ parity --config node.toml &
Loading config file from node.toml
2017-03-02 14:53:50 UTC Starting Parity/v1.5.4-beta-74b850e-20170223/x86_64-linux-gnu/rustc1.15.1
2017-03-02 14:53:50 UTC State DB configuration: fast
2017-03-02 14:53:50 UTC Operating mode: active
2017-03-02 14:53:50 UTC Configured for DltDoJoEthPoA using AuthorityRound engine
2017-03-02 14:53:50 UTC Updated conversion rate to Ξ1 = US$18.55 (6417661000 wei/gas)
2017-03-02 14:53:56 UTC Public node URL: enode://f1967fd8190c25785a7cf24cb80f0202c43c284701ec642d5f2edfc10fd42b187be73b39de4c7265c9dc09b30043c9d04dfd5d2e782a4f8a70a0a7b1e6fdfe0c@138.197.201.69:30300

$ curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"enode://f1967fd8190c25785a7cf24cb80f0202c43c284701ec642d5f2edfc10fd42b187be73b39de4c7265c9dc09b30043c9d04dfd5d2e782a4f8a70a0a7b1e6fdfe0c@138.197.201.69:30300","id":0}

// curl --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["enode://RESULT"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540

$ curl --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["'"$user"'", "latest"],"id":1}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"0x51e410c0f93fe543000000","id":1}
```
