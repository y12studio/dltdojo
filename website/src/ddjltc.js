const litecore = require('litecore-lib')
const network = litecore.Networks.testnet

angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var tpk = new litecore.PrivateKey(litecore.Networks.testnet);
        var pk = new litecore.PrivateKey(litecore.Networks.livenet);
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
    }]);