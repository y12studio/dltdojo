parity PoA https://github.com/ethcore/parity/wiki/Demo-PoA-tutorial

### 2017-02-18T11:15:07+0800
Authority nodes run with --usd-per-tx 0 to make the transactions cheap.
```
$ docker build -t y12docker/dltdojo-ethparity .
$ source alias.sh
$ dcup
$ dc exec dltdojo node index.js eth poa0 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e': { balance: '9.9e+23', ethBalance: '990000' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e': { balance: '8.8e+23', ethBalance: '880000' } }
$ dc exec dltdojo node index.js eth peer1 account --new --password pass1
0x41a283b58e6f53a3a5788d859331ec699a3936c3
$ dc exec dltdojo node index.js eth poa0 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x41a283b58e6f53a3a5788d859331ec699a3936c3 --eth 188.55 --password user
$ dc exec dltdojo node index.js eth peer1 account --list
{ '0x41a283b58e6f53a3a5788d859331ec699a3936c3': { balance: '188550000000000000000', ethBalance: '188.55' } }
$ dc exec dltdojo node index.js eth poa0 hahacoin --new --address 0x004ec07d2329997267ec62b4166639513386f32e --password user
Error: The contract code couldn't be stored, please check your gas amount.
    at Object.callback (/opt/app/node_modules/web3/lib/web3/contract.js:147:46)
    at /opt/app/node_modules/web3/lib/web3/method.js:142:25
    at /opt/app/node_modules/web3/lib/web3/requestmanager.js:89:9
    at XMLHttpRequest.request.onreadystatechange (/opt/app/node_modules/web3/lib/web3/httpprovider.js:118:13)
// http://192.168.2.73:8000/#/block/4
// Hash #	0xd69c514477a81d5fe5e6c6f529f7f199fed1a2aaac8ea6e3ad0cf2d068d8cea0
// Contract Address	0x7ba4324585cb5597adc283024819254345cd7c62
$ dc exec dltdojo node index.js eth poa0 hahacoin --address 0x004ec07d2329997267ec62b4166639513386f32e --password user --contract 0x7ba4324585cb5597adc283024819254345cd7c62
{ account: '0x004ec07d2329997267ec62b4166639513386f32e',
  contractAddress: '0x7ba4324585cb5597adc283024819254345cd7c61',
  contractBalance: '0' }
```
### 2017-02-10T09:08:43+0800
```
$ docker run -d -p 8180:8180 y12docker/dltdojo-ethparity /dev.sh
ffdae63d73d6391c1577a641b9203d07f4b480c2f82d4941a1cb5eea933c7555
// open open http://192.168.2.73:8180/#/accounts/
$ docker exec -t ffdae63 parity signer new-token
Open: http://127.0.0.1:8180/#/auth?token=TfVf-p56g-r9YW-y2v1
to authorize your browser.
Or use the generated token:
TfVf-p56g-r9YW-y2v1

2017-02-10 02:12:29 UTC Unauthorized connection to Signer API blocked.
2017-02-10 02:12:29 UTC Received old authentication request. (1486692749 vs 1486692737)
2017-02-10 02:12:29 UTC Unauthorized connection to Signer API blocked.
```
### 2017-02-10T08:54:02+0800
Release Parity 1.5.2 · ethcore/parity  https://github.com/ethcore/parity/releases/tag/v1.5.2
```
$ docker build -t y12docker/dltdojo-ethparity .
$ docker push y12docker/dltdojo-ethparity:latest
$ source alias.sh
$ dcup
$ dc ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
devparity_dltdoj   node index.js      Up                 0.0.0.0:18168->1
o_1                start                                 8168/tcp
devparity_peer1_   /startpoa.sh       Up
1                  peer devparit
                   ...
devparity_peer2_   /startpoa.sh       Up                 0.0.0.0:8080->80
1                  peer devparit                         80/tcp, 0.0.0.0:
                   ...                                   8180->8180/tcp,
                                                         0.0.0.0:8545->85
                                                         45/tcp
devparity_poa0_1   /startpoa.sh       Up
                   node0
devparity_poa1_1   /startpoa.sh       Up
                   node1 devpari
                   ...

// open http://192.168.2.73:8180/#/accounts/
// Unable to make a connection to the Parity Secure API. To update your secure token or to generate a new one, run parity signer new-token and supply the token below
$ peer2 bash
root@4161bcb5e93b:/opt/parity# parity signer new-token
Error generating token: Error { repr: Os { code: 2, message: "No such file or directory" } }
$ dcstop
```
### 2017-02-03T10:32:50+0800
```
$ dcup
$ dc ps
       Name                      Command               State     Ports
------------------------------------------------------------------------
devparity_dltdojo_1   node index.js start              Up      18168/tcp
devparity_peer1_1     /startpoa.sh peer devparit ...   Up
devparity_peer2_1     /startpoa.sh peer devparit ...   Up
devparity_poa0_1      /startpoa.sh node0               Up
devparity_poa1_1      /startpoa.sh node1 devpari ...   Up
$ docker exec -it devparity_peer1_1 curl --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
0x3
$ yocker exec -it devparity_poa1_1 curl --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
0x3
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_poa0_1 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e': { balance: '9.9e+23', ethBalance: '990000' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e': { balance: '8.8e+23', ethBalance: '880000' } }
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_peer1_1 account --new --password pass1
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_peer1_1 account --list
{ '0x2ce5c4fec6c5d886f869e813eea2146c44bd7148': { balance: '0', ethBalance: '0' } }
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_poa0_1 send --account 0x004ec07d2329997267Ec62b4166639513386F32E --to 0x2ce5c4fec6c5d886f869e813eea2146c44bd7148 --eth 3688.55 --password user
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_poa0_1 account --list
{ '0x004ec07d2329997267ec62b4166639513386f32e':
   { balance: '9.86311449743709212275e+23',
     ethBalance: '986311.449743709212275' },
  '0x00bd138abd70e2f00903268f3db08f2d25677c9e':
   { balance: '8.80000000256290787725e+23',
     ethBalance: '880000.000256290787725' } }
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_peer1_1 account --list
{ '0x2ce5c4fec6c5d886f869e813eea2146c44bd7148': { balance: '3.68855e+21', ethBalance: '3688.55' } }
$ docker exec -t devparity_dltdojo_1 node index.js eth devparity_peer1_1 info
{ hostname: 'devparity_peer1_1',
  ethBlockNumber: 1,
  ethCoinbase: '0x0000000000000000000000000000000000000000',
  ethAccounts: 1,
  ethSyncing: false,
  netPeerCount: 3,
  ethBalance: '0',
  ethMining: false }
```
### 2017-02-02T19:34:00+0800
```
$ source alias.sh
$ build
$ docker run -it y12docker/dltdojo-ethparity:1.5.0 /startpoa.sh node0
NewAccountFromPhrase node0/node0 0x00bd138abd70e2f00903268f3db08f2d25677c9e
NewAccountFromPhrase user/user 0x004ec07d2329997267ec62b4166639513386f32e
engine-signer 0x00bd138abd70e2f00903268f3db08f2d25677c9e
2017-02-02 14:46:05 UTC Starting Parity/v1.5.0-beta-d2e6fc0-20170119/x86_64-linux-gnu/rustc1.14.0
2017-02-02 14:46:05 UTC State DB configuration: fast
2017-02-02 14:46:05 UTC Operating mode: active
2017-02-02 14:46:05 UTC Configured for DemoPoA using AuthorityRound engine
2017-02-02 14:46:06 UTC Updated conversion rate to Ξ1 = US$10.64 (11188686000 wei/gas)
2017-02-02 14:46:10 UTC Public node URL: enode://b68825a9978fb8d9fc3b426dd549d78a1aefe20241f385aef3b3b416167b8049510614d4b8e3e0543f8c05c6fb5a59812bfce9e024744c3b48a03ea1af522e51@172.17.0.2:30300
$ docker run -it y12docker/dltdojo-ethparity:1.5.0 /startpoa.sh node1
NewAccountFromPhrase node1/node1 0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2
engine-signer 0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2
$ docker run -it y12docker/dltdojo-ethparity:1.5.0 /startpoa.sh
$ dcup
$ dc ps
Name               Command         State   Ports
------------------------------------------------------
devparity_peer1_1   /startpoa.sh         Up
devparity_peer2_1   /startpoa.sh         Up
devparity_poa0_1    /startpoa.sh node0   Up
devparity_poa1_1    /startpoa.sh node1   Up
$ docker exec -it devparity_poa0_1 curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
enode://3ffcc42dff909df1833594556be8d71264f6004e43804f274f52607542cbfddcfbe7612c0b75d46efc1148b40241d56d0dae85757893d4a6c486fd7b77a9818f@172.26.0.4:30300
$ docker exec -it devparity_poa1_1 curl --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["enode://f1f4bf0bec35e3578e333287c444661aad595e3096802cda897f9fcfdd107f71870d45ed52707507e871f88e90717eb6881b4311c3cc0fd789be738e84132579@172.26.0.4:30300"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
$ docker exec -it devparity_peer1_1 curl --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["enode://f1f4bf0bec35e3578e333287c444661aad595e3096802cda897f9fcfdd107f71870d45ed52707507e871f88e90717eb6881b4311c3cc0fd789be738e84132579@172.26.0.4:30300"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
$ docker exec -it devparity_peer2_1 curl --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["enode://f1f4bf0bec35e3578e333287c444661aad595e3096802cda897f9fcfdd107f71870d45ed52707507e871f88e90717eb6881b4311c3cc0fd789be738e84132579@172.26.0.4:30300"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
$ docker exec -it devparity_poa0_1 curl --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
0x3
```
### Fri Jan 20 18:04:09 CST 2017
```
$ poadcup
$ poa0 bash initpoa0.sh
$ poa1 bash initpoa1.sh
$ docker commit devparity_poa0_1 y12docker/dltdojo-ethparity:1.5.0.poa0
$ docker commit devparity_poa1_1 y12docker/dltdojo-ethparity:1.5.0.poa1
$ poadcend
$ dcup
$ dc ps
      Name                     Command               State   Ports
------------------------------------------------------------------
devparity_peer1_1   parity --chain /opt/parity ...   Up
devparity_peer2_1   parity --chain /opt/parity ...   Up
devparity_poa0_1    parity --chain /opt/parity ...   Up
devparity_poa1_1    parity --chain /opt/parity ...   Up

$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
enode://f1f4bf0bec35e3578e333287c444661aad595e3096802cda897f9fcfdd107f71870d45ed52707507e871f88e90717eb6881b4311c3cc0fd789be738e84132579@172.26.0.3:30300

$ poa1 curl --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["enode://f1f4bf0bec35e3578e333287c444661aad595e3096802cda897f9fcfdd107f71870d45ed52707507e871f88e90717eb6881b4311c3cc0fd789be738e84132579@172.26.0.3:30300"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540

$ poa0 curl --data '{"jsonrpc":"2.0","method":"personal_signAndSendTransaction","params":[{"from":"0x004ec07d2329997267Ec62b4166639513386F32E","to":"0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e","value":"0xde0b6b3a7640000"}, "user"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540

{"jsonrpc":"2.0","result":"0x7b7eeea679de7c8f4b0de8adb262791ba2d16b15a841b692de9a707353d4f0a4","id":0}

$ poa0 curl --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e", "latest"],"id":1}' -H "Content-Type: application/json" -X POST localhost:8540

{"jsonrpc":"2.0","result":"0xde1a153d7c4ef30","id":1}

$ poa0 curl --data '{"jsonrpc":"2.0","method":"personal_signAndSendTransaction","params":[{"from":"0x004ec07d2329997267Ec62b4166639513386F32E","to":"0x00Aa39d30F0D20FF03a22cCfc30B7EfbFca597C2","value":"0xde0b6b3a7640000"}, "user"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540

{"jsonrpc":"2.0","result":"0x5c8d9fa87bd06a0d1dbd88e2a5ff5a04d038d5772300b03d24f920d68e3214d6","id":0}

$ poa1 curl --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x00Aa39d30F0D20FF03a22cCfc30B7EfbFca597C2", "latest"],"id":1}' -H "Content-Type: application/json" -X POST localhost:8540

{"jsonrpc":"2.0","result":"0xde0b6b3a7640000","id":1}

$ dcend
```

### Fri Jan 20 16:57:53 CST 2017
```
$ poadcup
$ poa1 bash
// Creates new account from the given phrase using standard brainwallet mechanism. ["node1", "node1"] = 0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2
# curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node1", "node1"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2
exit

$ poa0 bash
# curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node0", "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
0x00bd138abd70e2f00903268f3db08f2d25677c9e
# curl -s --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user", "user"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result
0x004ec07d2329997267ec62b4166639513386f32e
# cat /opt/parity/poa-init-spec.json | jq '.engine.authorityRound.params.validators.list |= .+ ["0x00bd138abd70e2f00903268f3db08f2d25677c9e","0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2"]' | jq '.accounts |= .+ {"0x004ec07d2329997267ec62b4166639513386f32e":{"balance":"10000000000000000000000"}}'
```

### Fri Jan 20 15:14:37 CST 2017
```
$ poadcup
$ poadc ps
$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node0", "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result

0x00bd138abd70e2f00903268f3db08f2d25677c9e

$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user", "user"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result

0x004ec07d2329997267ec62b4166639513386f32e

$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result

enode://ee089ced9a4a3fbf090e679e61a01804d3413e113a4b06d38a699a133145da72615508b63682563578ae24f081e784d295a4bc4f6770565b5298ac194bd9a605@172.26.0.3:30300

$ docker commit devparity_poa0_1 y12docker/dltdojo-ethparity:1.5.0.poa0

$ poa1 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node1", "node1"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result

0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2

$ poa1 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user1", "user1"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq -r .result

0x00d695cd9b0ff4edc8ce55b493aec495b597e235

$ docker commit devparity_poa1_1 y12docker/dltdojo-ethparity:1.5.0.poa1

$ poadcend

$ cat poa-init-spec.json | jq '.engine.authorityRound.params.validators.list |= .+ ["0xaaaaaa","0xbbbbbb"]' | jq '.accounts |= .+ {"0xaaaaa":{"balance":"999999"}}'

{
  "name": "DemoPoA",
  "engine": {
    "authorityRound": {
      "params": {
        "gasLimitBoundDivisor": "0x400",
        "stepDuration": "5",
        "validators": {
          "list": [
            "0xaaaaaa",
            "0xbbbbbb"
          ]
        }
      }
    }
  },
  "params": {
    "maximumExtraDataSize": "0x20",
    "minGasLimit": "0x1388",
    "networkID": "0x2323"
  },
  "genesis": {
    "seal": {
      "authorityRound": {
        "step": "0x0",
        "signature": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      }
    },
    "difficulty": "0x20000",
    "gasLimit": "0x5B8D80"
  },
  "accounts": {
    "0xaaaaa": {
      "balance": "999999"
    },
    "0x0000000000000000000000000000000000000001": {
      "balance": "1",
      "builtin": {
        "name": "ecrecover",
        "pricing": {
          "linear": {
            "base": 3000,
            "word": 0
          }
        }
      }
    },
    "0x0000000000000000000000000000000000000002": {
      "balance": "1",
      "builtin": {
        "name": "sha256",
        "pricing": {
          "linear": {
            "base": 60,
            "word": 12
          }
        }
      }
    },
    "0x0000000000000000000000000000000000000003": {
      "balance": "1",
      "builtin": {
        "name": "ripemd160",
        "pricing": {
          "linear": {
            "base": 600,
            "word": 120
          }
        }
      }
    },
    "0x0000000000000000000000000000000000000004": {
      "balance": "1",
      "builtin": {
        "name": "identity",
        "pricing": {
          "linear": {
            "base": 15,
            "word": 3
          }
        }
      }
    },
    "0x0000000000000000000000000000000000000009": {
      "balance": "10000000000000000000000"
    }
  }
}
```
### Fri Jan 20 14:24:54 CST 2017
```
$ poadcup
$ poadc ps
      Name                    Command               State   Ports
-----------------------------------------------------------------
devparity_poa0_1   parity --chain /opt/parity ...   Up
devparity_poa1_1   parity --chain /opt/parity ...   Up
$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node0", "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"0x00bd138abd70e2f00903268f3db08f2d25677c9e","id":0}
$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["user", "user"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"0x004ec07d2329997267ec62b4166639513386f32e","id":0}

$ poa0 curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"enode://2dccd999bb0300d21c8bf7e1052b56eb7b45ab333086919c7166b4761f13b9cc9c252999780af70425f326358113ee8c43dccda14963ad43b5d496c130496000@172.26.0.2:30300","id":0}

$ poa1 curl --data '{"jsonrpc":"2.0","method":"parity_newAccountFromPhrase","params":["node1", "node1"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"0x00aa39d30f0d20ff03a22ccfc30b7efbfca597c2","id":0}

$ poa1 curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540
{"jsonrpc":"2.0","result":"enode://c14e677a0167d867f19332276796bc398fe15b6471e0d4f2f633eb34ec820f4b97b9f1983557ba0d1248cf557909c06463294a78bfc6eda73996c6046f9a9225@172.26.0.3:30300","id":0}

$ docker commit devparity_poa0_1 y12docker/dltdojo-ethparity:1.5.0.poa0
$ docker commit devparity_poa1_1 y12docker/dltdojo-ethparity:1.5.0.poa1
$ docker images | grep poa
y12docker/dltdojo-ethparity poa1                      74959d5d0f49        7 seconds ago       248.8 MB
y12docker/dltdojo-ethparity poa0                      4bddeeb7819a        51 seconds ago      248.8 MB

```

test parity
```
$ git clone https://github.com/keorn/parity-poa-tutorial.git && cd parity-poa-tutorial
$ parity --version
  version Parity/v1.5.0-beta-d2e6fc0-20170119/x86_64-linux-gnu/rustc1.14.0
$ parity  --chain demo-spec.json -d /tmp/parity0 --port 30300 --jsonrpc-port 8540 --ui-port 8180 --dapps-port 8080 --jsonrpc-apis web3,eth,net,personal,parity,parity_set,traces,rpc,parity_accounts
```
### Fri Jan 20 11:25:34 CST 2017

```
$ docker pull ethcore/parity:stable-release
$ docker images | grep parity
ethcore/parity stable-release                  de015adab685        31 hours ago        1.534 GB
$ docker run ethcore/parity:stable-release --version
2017-01-20 03:34:26 UTC Parity
  version Parity/v1.4.10-stable-4e6329a-20170118/x86_64-linux-gnu/rustc1.14.0
Copyright 2015, 2016 Ethcore (UK) Limited
$ docker run ethcore/parity:beta-release --version
2017-01-20 03:36:54 UTC Parity
  version Parity/v1.4.9-beta-306081d-20170109/x86_64-linux-gnu/rustc1.14.0
Copyright 2015, 2016 Ethcore (UK) Limited


$ build .
// docker build -t y12docker/dltdojo-ethparity
$ dparity --version | grep version
  version Parity/v1.5.0-beta-d2e6fc0-20170119/x86_64-linux-gnu/rustc1.14.0

```

### v1.4.10

```
$ docker run ethcore/parity:stable-release --version
2017-01-11 03:09:19 UTC Parity
  version Parity/v1.4.10-stable-4107a9f-20170110/x86_64-linux-gnu/rustc1.14.0
$ docker run -it ethcore/parity:stable-release --help | grep test
                           or testnet (default: homestead).
$ docker run -it ethcore/parity:beta-release --help | grep test
                          or testnet (default: homestead).
// where is the --chain dev ?

$ docker run -it -p 8545:8545 ethcore/parity:stable-release --chain dev

$ npm install web3
From then on you just need to run node and require the web3 module:

$ node
> Web3 = require("web3")
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
After this point, you'll be able to use the web3 API from with this environment, e.g.:

> web3.eth.blockNumber
743397
```
