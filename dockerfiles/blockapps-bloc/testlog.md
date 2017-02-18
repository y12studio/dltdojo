### 2017-02-18T13:39:41+0800
```
$ docker build -t y12docker/dltdojo-bloc .
$ docker run -it --rm y12docker/dltdojo-bloc bash
# bloc init
prompt: Enter the name of your app:  foo
prompt: Enter your name:  foo
prompt: Enter your email so BlockApps can reach you:
prompt: apiURL:  (http://strato-dev4.blockapps.net)
prompt: Enter the blockchain profile you wish to use.  Options: strato-dev, ethereum:  (strato-dev)
Wrote: /opt/app/foo/.bowerrc
Wrote: /opt/app/foo/app.js
Wrote: /opt/app/foo/bower.json
Wrote: /opt/app/foo/gulpfile.js
Wrote: /opt/app/foo/marko-taglib.json
Wrote: /opt/app/foo/package.json
Wrote: /opt/app/foo/test/common.js
Wrote: /opt/app/foo/test/top.js
Wrote: /opt/app/foo/app/contracts/Greeter.sol
Wrote: /opt/app/foo/app/contracts/MultiContract.sol
Wrote: /opt/app/foo/app/contracts/Payout.sol
Wrote: /opt/app/foo/app/contracts/SimpleDataFeed.sol
Wrote: /opt/app/foo/app/contracts/SimpleMultiSig.sol
Wrote: /opt/app/foo/app/contracts/SimpleStorage.sol
Wrote: /opt/app/foo/app/contracts/Stake.sol
Wrote: /opt/app/foo/app/contracts/template.marko
Wrote: /opt/app/foo/app/lib/abi.js
Wrote: /opt/app/foo/app/lib/analytics.js
Wrote: /opt/app/foo/app/lib/cmd.js
Wrote: /opt/app/foo/app/lib/codegen.js
Wrote: /opt/app/foo/app/lib/compile.js
Wrote: /opt/app/foo/app/lib/contract-helpers.js
Wrote: /opt/app/foo/app/lib/icon.js
Wrote: /opt/app/foo/app/lib/keygen.js
Wrote: /opt/app/foo/app/lib/prompt-schema.js
Wrote: /opt/app/foo/app/lib/scaffold.js
Wrote: /opt/app/foo/app/lib/upload.js
Wrote: /opt/app/foo/app/lib/yaml-config.js
Wrote: /opt/app/foo/app/routes/addresses.js
Wrote: /opt/app/foo/app/routes/contract.js
Wrote: /opt/app/foo/app/routes/examples.js
Wrote: /opt/app/foo/app/routes/home.js
Wrote: /opt/app/foo/app/routes/users.js
Wrote: /opt/app/foo/test/config/config.test.js
Wrote: /opt/app/foo/test/contract/contract.test.js
Wrote: /opt/app/foo/test/keygen/keygen.test.js
Wrote: /opt/app/foo/test/multi/multi.test.js
Wrote: /opt/app/foo/app/components/contractFunctions/template.marko
Wrote: /opt/app/foo/app/components/contractFunctionsCall/template.marko
Wrote: /opt/app/foo/app/components/contractJS/template.marko
Wrote: /opt/app/foo/app/components/contractNameList/template.marko
Wrote: /opt/app/foo/app/components/contractStatus/template.marko
Wrote: /opt/app/foo/app/components/contracts/template.marko
Wrote: /opt/app/foo/app/components/globalKeystore/template.marko
Wrote: /opt/app/foo/app/components/header/template.marko
Wrote: /opt/app/foo/app/components/home/home.marko
Wrote: /opt/app/foo/app/components/keyModal/template.marko
Wrote: /opt/app/foo/app/components/keyStatus/template.marko
Wrote: /opt/app/foo/app/components/login/template.marko
Wrote: /opt/app/foo/app/components/loginStatus/template.marko
Wrote: /opt/app/foo/app/components/navTemplate/template.marko
Wrote: /opt/app/foo/app/components/selectUser/template.marko
Wrote: /opt/app/foo/app/static/css/styles.css
project initiated!
now type `cd foo && npm install`
# cat foo/config.yaml
appName: foo
developer: foo
email: ''
apiURL: 'http://strato-dev4.blockapps.net'
profile: strato-dev
```
