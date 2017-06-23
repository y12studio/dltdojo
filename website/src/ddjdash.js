const bitcoreLibDash = require('bitcore-lib-dash')

angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var pk = new bitcoreLibDash.PrivateKey()
        $scope.dash = {
            privateKey: pk.toWIF(),
            publicKey: pk.toPublicKey().toString('hex'),
            address: pk.toAddress().toString()
        }
        console.log($scope.dash)
    }]);