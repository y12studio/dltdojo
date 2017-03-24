### TRUFFLE 3.2.0 TEST

```
$ testrpc -h 0.0.0.0
EthereumJS TestRPC v3.0.3

$ mkdir foo && cd foo
$ truffle init webpack
Build Frontend: npm run build
Run Linter:     npm run lint
Run Dev Server: npm run dev

Hint: Run the dev server via `npm run dev` to have your changes rebuilt automatically.

Make sure you have an Ethereum client like the ethereumjs-testrpc running on http://localhost:8545.

$ truffle test
$ truffle compile && truffle migrate
$ npm run build
Time: 1546ms
     Asset       Size  Chunks                    Chunk Names
    app.js    1.04 MB       0  [emitted]  [big]  main
index.html  925 bytes          [emitted]
$ sed -i.bak 's/"dev": "webpack-dev-server"/"dev": "webpack-dev-server --host 0.0.0.0"/g' package.json
$ hostip=192.168.2.73
$ sed -i.bak "s|http://localhost:8545|http://$hostip:8545|g" app/javascripts/app.js
$ npm run dev
```

### References
* TruffleFramework.com | Truffle Framework  http://truffleframework.com/blog/truffle-320-released
* trufflesuite/truffle-init-webpack: Example webpack-based app for Truffle (boilerplate)  https://github.com/trufflesuite/truffle-init-webpack
