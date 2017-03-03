### 2017-03-03T08:58:19+0800
```
$ curl -O https://raw.githubusercontent.com/ethcore/parity/master/ethcore/res/ethereum/kovan.json
$ mv kovan.json darkorange-template.json
// set the initial parameters of the chain
$ mv darkorange-template.json darkorange.json
$ registrar=0xA1
$ validator=0xA2
$ user=0xA3
$ sed -i.bak "s/0x0000000000000000000000000000000000000091/$registrar/g" drakorange.json
$ sed -i.bak "s/0x0000000000000000000000000000000000000092/$validator/g" drakorange.json
$ sed -i.bak "s/0x0000000000000000000000000000000000000093/$user/g" drakorange.json
```
