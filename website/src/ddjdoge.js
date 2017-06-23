var CoinInfo = require('coininfo')
var CoinKey = require('coinkey')

angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var ck = CoinKey.createRandom(CoinInfo('DOGE'))
        $scope.doge = {
            privateKey: ck.privateWif,
            publicKey: ck.publicKey.toString('hex'),
            address: ck.publicAddress
        }
        console.log($scope.doge)
    }]);