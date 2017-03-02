### 2017-03-02T21:10:10+0800
POA0
```
$ bash <(curl https://get.parity.io -Lk)
$ curl http://https://y12studio.github.io/dltdojo/api/ethpoa/{dltdojo-poa0.json,node.toml,node.pwds} -o "#1"
$ mv dltdojo-poa0.json dltdojo-poa.json
$ pass=helloworldpass
$ userpass=helloworlduserpass
$ parity daemon /tmp/parity.pid --config node.toml
$ curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node", "'"$pass"'"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
$ validator=xxxxxx
$ curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user", "'"$userpass"'"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
$ user=xxxxxx
// stop parity
$ kill -9 `cat /tmp/parity.pid`
$ sed -i.bak "s/password/$pass/g" node.pwds
$ sed -i.bak "s/0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e/$validator/g" dltdojo-poa.json
$ sed -i.bak "s/0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e/$validator/g" node.toml
$ sed -i.bak "s/0x004ec07d2329997267Ec62b4166639513386F32E/$user/g" dltdojo-poa.json
$ parity --config node.toml
```
