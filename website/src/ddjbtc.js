const bitcore = require('bitcore-lib')

angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var tpk = new bitcore.PrivateKey(bitcore.Networks.testnet);
        var pk = new bitcore.PrivateKey(bitcore.Networks.livenet);
        var p2pkh =  new bitcore.Script.buildPublicKeyHashOut(pk.toAddress());
        $scope.key = {
            key: pk,
            wif: pk.toWIF(),
            pub: pk.toPublicKey().toString('hex'),
            address: pk.toAddress().toString(),
            p2pkh: p2pkh.toString()
        }
        $scope.tkey = {
            key: tpk,
            wif: tpk.toWIF(),
            pub: tpk.toPublicKey().toString('hex'),
            address: tpk.toAddress().toString()
        }
        console.log($scope.key)
    }]);