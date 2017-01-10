## LOG0110_1

newToken
```
// --dojo.eth 2 --name lv3
$ dcup
$ vp1cli rpc personal_newAccount vp1pass       
{"jsonrpc":"2.0","id":"a08dbf1d-5553-4b86-8f29-9fab9b5417db","result":"0x3b012875d4bb633e0b822fb8fa68ffcacb5f998e"}

$ vp1cli rpc miner_start                       
{"jsonrpc":"2.0","id":"c103b03b-dfea-4dac-a68c-19c4d4cd622d","result":true}

$ vp1cli newToken 3b012875d4bb633e0b822fb8fa68ffcacb5f998e vp1pass
```

issue : cannot unmarshal non-string as hex data

```
$ vp1cli sendeth 61c8b60e657af2f09f2a9ed1008f61b7fb8565f0 vp1pass ae2ca9068453af6fa0995fa3bfc65fb8bd2d79a5 3
index.js sendeth <accountAddress> <accountPassword> <toAddress> <ether>

Options:
  -h, --help  Show help                                                [boolean]

invalid argument 2: cannot unmarshal non-string as hex data

$ vp1 /geth version
Geth
Version: 1.5.6-stable
Git Commit: 2a609af51873204c940a9b2a7215e6b5a97b0656
Protocol Versions: [63 62]
Network Id: 1
Go Version: go1.7.3
OS: linux
GOPATH=
GOROOT=/usr/lib/go
$ vp1 cat node_modules/web3/package.json | jq .version
"0.18.0"

```
