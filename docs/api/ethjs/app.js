const log = console.log

// https://github.com/ethjs/examples

var app = angular.module('DltdojoApp', ['ngMaterial']);
app.controller('appCtrl', function($scope, $location, $http) {
    $scope.host = $location.host()
    console.log($scope.host)
    var eth = new Eth(TestRPC.provider())
    $scope.accounts = []
    $scope.ckAccounts = function() {
        eth.accounts((err, accounts) => {
            if (accounts) {
                // console.log(accounts)
                // $scope.accouts = accounts
                var r = []
                accounts.forEach((account) => {
                    //console.log(account)
                    eth.getBalance(account, (balanceError, balance) => {
                        if (balance) {
                            $scope.accounts.push({
                                address: account,
                                balance: Eth.fromWei(balance, 'ether')
                            })
                            $scope.$apply()
                        }
                    })
                })
                console.log($scope.accounts)
            }
        })
    }

});
