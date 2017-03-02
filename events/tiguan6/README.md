## TiGuan6

DDJTAB是道場在以太坊測試鏈Ethereum ropsten上發行的學習履歷點數，學習者根據要求提交線上網頁，驗證功能後將該網頁寫入ipfs取得hash值，再由DDJTAB持有人發送。

### DDJTAB用處
* 供持有人公證其學習履歷，驗證人可隨機抽選由ipfs取出當時驗證網頁提問。
* 持有人可轉發DDJTAB給其他學習者。

### 注意事項
* 提交供簽發DDJTAB的網頁文件需使用Apache License 2.0授權。

### 流程
* 取得ETH帳戶
* 取得題目
* 線上交付結果
* 驗證後發放發送DDJTAB點數

### 範例
* http://codepen.io/anon/pen/bqVZVj
* https://ipfs.io/ipfs/Qmd55PfWajL2Mp7Ru5huPECsRWKPpEdsSFDqBUoUozQDjs

```
<html lang="zh-Hant">
<head>
    <title>Bitcoin Fee - DLTDOJO</title>
</head>
<body ng-app="DltdojoApp" ng-controller="appCtrl">
<div><button ng-click="ckReload()">Reload</button></div>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
<script type="text/javascript">
    var app = angular.module('DltdojoApp',[]);
    app.controller('appCtrl', function($scope, $http) {
        $scope.model = {}
        $scope.model.txbytes = 225
        $scope.ckUpdate = function(){
            $scope.fastestbtc = $scope.fee.fastestFee * $scope.model.txbytes / 100000000
        }
        $scope.ckReload = function(){
            $http.get('https://bitcoinfees.21.co/api/v1/fees/recommended').then(function(res) {
                console.log(res)
                $scope.fee = res.data
                $scope.ckUpdate()
                $http.get('https://blockchain.info/ticker?cors=true').then(function(res) {
                    console.log(res)
                    $scope.binfo = res.data
                })
            })
        }
    })
</script>
<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "比特幣手續費用",
    "description": "使用兩種API組合而成",
    "license": "https://www.apache.org/licenses/LICENSE-2.0"
}
</script>
</body>
</html>
```

### 參考連結
* DDJTAB contract https://github.com/y12studio/dltdojo/tree/master/contracts/ddjtab
* Front-End Developer Handbook 2017 https://frontendmasters.gitbooks.io/front-end-handbook-2017/content/
* 利用 Apache-2.0 程式所應遵守的義務規定 - OpenFoundry  https://www.openfoundry.org/tw/legal-column-list/8950-obligations-of-apache-20
* 化簡為繁的 Apache-2.0 授權條款 - OpenFoundry  https://www.openfoundry.org/tw/legal-column-list/8581
* WebPage - schema.org  https://schema.org/WebPage
