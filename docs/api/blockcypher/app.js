const log = console.log
//bitcoin: require('bitcoinjs-lib')
//BigInteger: require('bigi')
//Buffer: require('buffer')
const BCY = 'https://api.blockcypher.com/v1/bcy/test'
var app = angular.module('DltdojoApp', ['ngMaterial']);
app.filter('prettyJSON', function() {
    function prettyPrintJson(json) {
        return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    }
    return prettyPrintJson;
});
app.controller('appCtrl', function($scope, $location, $http) {
    $scope.host = $location.host()
    console.log($scope.host)
    $scope.faucetmode = false
    $scope.bcy = {}
    $scope.api = {}

    //$scope.bcy.keywif = 'BqZVF6F9676ycdJdovQAg2T9pKpkWEiG47QWQLFJjy2aygDsJGGb'
    //$scope.bcy.address = 'CDRp6ej45KyJ4wpCetgiAER32gmhU3Z3ZN'

    $scope.store = {
        keywif: 'BqZVF6F9676ycdJdovQAg2T9pKpkWEiG47QWQLFJjy2aygDsJGGb',
        address: 'CDRp6ej45KyJ4wpCetgiAER32gmhU3Z3ZN'
    }

    $scope.ckGetInfo = function() {
        var url = BCY
        $http.get(url).then(function(res) {
            log(res)
            $scope.api.info = {
                url: url,
                data: res.data
            }
        })
    }

    $scope.ckPostAddrs = function() {
        var url = `${BCY}/addrs`
        $http.post(url).then(function(res) {
            log(res)
            $scope.bcy.keywif = res.data.wif
            $scope.bcy.address = res.data.address
            $scope.api.addrs = {
                url: url,
                data: res.data
            }
        })
    }

    $scope.ckPostSend = function() {
        log(Bitcoin)
        var keyPair = Bitcoin.ECPair.fromWIF($scope.store.keywif)
        log(keyPair)

    }


    $scope.ckPostFaucet = function() {
        // https://www.blockcypher.com/dev/bitcoin/#testing
        if ($scope.bcy.address && $scope.bcy.token) {
            var params = JSON.stringify({
                "address": $scope.bcy.address,
                "amount": 100000*_.random(88, 168)
            })
            var url = `${BCY}/faucet?token=${$scope.bcy.token}`
            $http.post(url, params).then(function(res) {
                log(res)
                $scope.api.faucet = {
                    url: url,
                    data: res.data
                }
            })
        }
    }

    $scope.ckCheckToken = function() {
        // https://api.blockcypher.com/v1/tokens/$YOURTOKEN
        var url = `https://api.blockcypher.com/v1/tokens/${$scope.bcy.token}`
        log(url)
        $http.get(url).then(
            function(res) {
                log(res)
                $scope.api.check = {
                    url: url,
                    data: res.data
                }
            },
            function(err) {
                log('error callback' + err)
            });
    }
});
