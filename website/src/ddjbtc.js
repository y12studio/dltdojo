const bitcore = require('bitcore-lib')




angular.module('myApp', [])
    .controller('MyController', function ($scope, $http) {

        function taskKey() {
            var tpk = new bitcore.PrivateKey(bitcore.Networks.testnet);
            var pk = new bitcore.PrivateKey(bitcore.Networks.livenet);
            $scope.key = {
                key: pk,
                wif: pk.toWIF(),
                pub: pk.toPublicKey().toString('hex'),
                address: pk.toAddress().toString()
            }
            $scope.tkey = {
                key: tpk,
                wif: tpk.toWIF(),
                pub: tpk.toPublicKey().toString('hex'),
                address: tpk.toAddress().toString()
            }
            console.log($scope.key)
        }


        function taskP2PKH() {
            var pk = $scope.key.key
            var p2pkh = new bitcore.Script.buildPublicKeyHashOut(pk.toAddress())
            $scope.key.p2pkh = p2pkh.toString()
        }

        function taskMarketPrice() {
            let urlBcinfo = 'https://blockchain.info/ticker?cors=true'
            let urlCoinMarketcap = 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10'
            Promise.all([$http.get(urlCoinMarketcap),$http.get(urlBcinfo)]).then(results => {
                $scope.bcinfo = results[1].data
                $scope.usdtwd = ($scope.bcinfo.TWD.last/$scope.bcinfo.USD.last).toFixed(2)
                $scope.cm = results[0].data
                $scope.cmBtcusd = $scope.cm.filter(v=>{return v.id==='bitcoin'})[0]
                $scope.cmEthusd = $scope.cm.filter(v=>{return v.id==='ethereum'})[0]
                $scope.btcusd = $scope.cmBtcusd.price_usd
                $scope.btctwd = ($scope.btcusd * $scope.usdtwd).toFixed(2)
                $scope.ethusd = $scope.cmEthusd.price_usd
                $scope.ethtwd = ($scope.ethusd * $scope.usdtwd).toFixed(2)
                console.log($scope)
                $scope.$apply()
            })
        }
        taskKey()
        taskP2PKH()
        taskMarketPrice()
    });