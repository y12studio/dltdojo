# Ng2bitcoin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

### Testlog
* angular4 - SyntaxError: Unexpected token 'const' for testing.es5.js - Stack Overflow  http://stackoverflow.com/questions/42513591/syntaxerror-unexpected-token-const-for-testing-es5-js
* Lodash  https://lodash.com/
* bitpay/bitcore-lib: A pure and powerful JavaScript Bitcoin library  https://github.com/bitpay/bitcore-lib

#### PhantomJS setup 2017-03-10T12:05:19+0800
```
$ ng version
@angular/cli: 1.0.0-rc.1
node: 6.9.5
os: linux x64
$ ng new ng2bitcoin
$ cd ng2bitcoin
$ npm i lodash -S
$ npm i @types/lodash -D
$ npm i bitcore-lib -S
$ npm i intl -S
$ npm i karma-phantomjs-launcher -D
$ ng test
10 03 2017 12:17:01.169:WARN [karma]: No captured browser, open http://localhost:9876/
10 03 2017 12:17:01.179:INFO [karma]: Karma v1.4.1 server started at http://0.0.0.0:9876/
10 03 2017 12:17:01.180:INFO [launcher]: Launching browser Chrome with unlimited concurrency
10 03 2017 12:17:01.232:INFO [launcher]: Starting browser Chrome
10 03 2017 12:17:01.234:ERROR [launcher]: No binary for Chrome browser on your platform.
  Please, set "CHROME_BIN" env variable.
$ egrep 'shim|intl' src/polyfills.ts
import "core-js/client/shim";
import 'intl';  // Run `npm install --save intl`.
$ egrep '[Pp]hantom' karma.conf.js
      require('karma-phantomjs-launcher'),
    browsers: ['PhantomJS'],
$ egrep 'es5' src/tsconfig.spec.json
    "target": "es5",
$ ng test
10 03 2017 12:38:56.650:WARN [karma]: No captured browser, open http://localhost:9876/
10 03 2017 12:38:56.660:INFO [karma]: Karma v1.4.1 server started at http://0.0.0.0:9876/
10 03 2017 12:38:56.660:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
10 03 2017 12:38:56.714:INFO [launcher]: Starting browser PhantomJS
10 03 2017 12:38:57.330:INFO [PhantomJS 2.1.1 (Linux 0.0.0)]: Connected on socket J1ZXkkSPp_kHV3T_AAAA with id 54239482
PhantomJS 2.1.1 (Linux 0.0.0): Executed 3 of 3 SUCCESS (0.117 secs / 0.191 secs)
$ npm run dltdojo:bundle
$ egrep 'dltdojo' .angular-cli.json
      "scripts": ["dltdojo.bundle.js"],
$ ng g c bitcore
$ npm start
$ npm run dltdojo:inline
> ng2bitcoin@0.0.0 dltdojo:inline /home/lin/git/dltdojo/apps/ng2bitcoin
> ng build -prod && html-inline dist/index.html > dist/app.html
Hash: 29b6fe51e7b1885fdb89    Time: 15579ms
chunk    {0} polyfills.01f539b5f333a3c79cdd.bundle.js (polyfills) 558 kB {5} [initial] [rendered]
chunk    {1} main.26e23c36288291730cb0.bundle.js (main) 36.3 kB {4} [initial] [rendered]
chunk    {2} scripts.d438020aa14c9d5362fd.bundle.js (scripts) 1.58 MB {5} [initial] [rendered]
chunk    {3} styles.d41d8cd98f00b204e980.bundle.css (styles) 69 bytes {5} [initial] [rendered]
chunk    {4} vendor.b59f31ff872cfb671aa4.bundle.js (vendor) 1.7 MB [initial] [rendered]
chunk    {5} inline.1a3b2ffb3b8360a2d3ae.bundle.js (inline) 0 bytes [entry] [rendered]
$ du -h dist/app.html
2.2M    dist/app.html
```
project tree.
```
$ tree --du -h -I 'node_modules'
.
├── [4.2M]  dist
│   ├── [2.1M]  app.html
│   ├── [5.3K]  favicon.ico
│   ├── [ 789]  index.html
│   ├── [1.5K]  inline.1a3b2ffb3b8360a2d3ae.bundle.js
│   ├── [ 16K]  main.26e23c36288291730cb0.bundle.js
│   ├── [172K]  polyfills.01f539b5f333a3c79cdd.bundle.js
│   ├── [1.5M]  scripts.d438020aa14c9d5362fd.bundle.js
│   ├── [   0]  styles.d41d8cd98f00b204e980.bundle.css
│   └── [424K]  vendor.b59f31ff872cfb671aa4.bundle.js
├── [  61]  DltdojoBundle.js
├── [4.9K]  e2e
│   ├── [ 317]  app.e2e-spec.ts
│   ├── [ 215]  app.po.ts
│   └── [ 352]  tsconfig.e2e.json
├── [1.2K]  karma.conf.js
├── [1.5K]  package.json
├── [ 756]  protractor.conf.js
├── [4.7K]  README.md
├── [1.5M]  src
│   ├── [ 11K]  app
│   │   ├── [   0]  app.component.css
│   │   ├── [  51]  app.component.html
│   │   ├── [1000]  app.component.spec.ts
│   │   ├── [ 214]  app.component.ts
│   │   ├── [ 523]  app.module.ts
│   │   └── [5.3K]  bitcore
│   │       ├── [   0]  bitcore.component.css
│   │       ├── [  91]  bitcore.component.html
│   │       ├── [ 635]  bitcore.component.spec.ts
│   │       └── [ 617]  bitcore.component.ts
│   ├── [4.0K]  assets
│   ├── [1.5M]  dltdojo.bundle.js
│   ├── [4.4K]  environments
│   │   ├── [  51]  environment.prod.ts
│   │   └── [ 387]  environment.ts
│   ├── [5.3K]  favicon.ico
│   ├── [ 297]  index.html
│   ├── [ 336]  main.ts
│   ├── [2.4K]  polyfills.ts
│   ├── [  80]  styles.css
│   ├── [1.1K]  test.ts
│   ├── [ 397]  tsconfig.app.json
│   ├── [ 439]  tsconfig.spec.json
│   └── [  72]  typings.d.ts
├── [ 309]  tsconfig.json
└── [2.6K]  tslint.json
5.7M used in 7 directories, 40 files
```
