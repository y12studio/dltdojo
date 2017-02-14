### 2017-02-14T15:56:12+0800

* host ip : 192.168.2.73
* dltdojo http://192.168.2.73:18168/
* carsenk explorer http://192.168.2.73:8000/
* EthereumClassic Block Explorer http://192.168.2.73:8001/

```
$ source alias.sh
$ dcup
$ dj eth poa0 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e': { balance: '9.9e+23', ethBalance: '990000' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e': { balance: '8.8e+23', ethBalance: '880000' } }
$ dj eth peer2 account --new --password pass
0x526a67d42da5dd3405ac1078cc83986d74e85e03
$ dj eth poa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x526a67d42da5dd3405ac1078cc83986d74e85e03 --eth 3688.55 --password user
$ dj eth poa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x526a67d42da5dd3405ac1078cc83986d74e85e03 --eth 188.88 --password user
$ dj eth peer2 account --list{ '0x526a67d42da5dd3405ac1078cc83986d74e85e03': { balance: '3.87743e+21', ethBalance: '3877.43' } }
```
