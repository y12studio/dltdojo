 const bitcore = DdjBtc.bitcorelib
 const MyAnswer = {
     keyMain: {
         wif: '1.1',
         pub: '1.2',
         address: '1.3'
     },
     keyTest: {
         wif: '2.1',
         pub: '2.2',
         address: '2.3'
     },
     utxo: {
         txId: "3.1",
         outputIndex: 0,
         address: "2.3",
         script: "3.2",
         satoshis: 50000
     }
 }
 angular.module('myApp', [])
     .controller('MyController', ['$scope', function ($scope) {
         $scope.greetMe = 'DDJBTC101';
         $scope.keyMain = MyAnswer.keyMain;
         $scope.keyTest = MyAnswer.keyTest;
         $scope.helpKeyMain = function () {
             var privateKey = new bitcore.PrivateKey('livenet');
             var publicKey = privateKey.toPublicKey();
             $scope.help = {
                 keyMain: {
                     wif: privateKey.toWIF(),
                     pub: publicKey.toString('hex'),
                     address: publicKey.toAddress().toString()
                 }
             }
         }
         $scope.helpKeyTest = function () {
             var privateKey = new bitcore.PrivateKey('testnet');
             var publicKey = privateKey.toPublicKey();
             $scope.help = {
                 keyTest: {
                     wif: privateKey.toWIF(),
                     pub: publicKey.toString('hex'),
                     address: publicKey.toAddress().toString()
                 }
             }
         }

     }]);