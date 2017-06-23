const Wallet = require('ethereumjs-wallet')
angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        var wallet = Wallet.generate()
        $scope.w = {
            privateKey: wallet.getPrivateKeyString(),
            publicKey : wallet.getPublicKeyString(),
            address : wallet.getChecksumAddressString()
        }
        console.log($scope.w)
    }]);