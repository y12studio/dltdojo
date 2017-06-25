var xrpkp = require('ripple-keypairs')

angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        generateKey($scope)
    }]);

function generateKey($scope) {
    const seed = xrpkp.generateSeed()
    const keypair = xrpkp.deriveKeypair(seed)
    const address = xrpkp.deriveAddress(keypair.publicKey)
    $scope.xrp = {
        secret: seed, 
        privateKey: keypair.privateKey,
        publicKey: keypair.publicKey,
        address: address
    }
    console.log($scope.xrp)
}