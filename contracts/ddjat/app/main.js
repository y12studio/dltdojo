import angular from 'angular'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import DDJAT from '../build/contracts/DDJATCoin.json'
import DDJDT from '../build/contracts/DDJDTCoin.json'
let ddjat = contract(DDJAT)
let ddjdt = contract(DDJDT)
let injectedWeb3 = true
let app = angular.module('app', []);

app.controller('ctrl', ['$scope', '$window', function ($scope, $window) {

    function getAccount(){
        return $window.web3.eth.accounts[0]
    }

    function init() {
        var provider;
        if (typeof $window.web3 !== 'undefined' && injectedWeb3) {
            provider = $window.web3.currentProvider
        }else{
            provider = new Web3.providers.HttpProvider("http://localhost:8545")
        }
        ddjat.setProvider(provider)
        ddjdt.setProvider(provider)
        $window.web3 = new Web3(provider)
    }

    function updateDDJAT() {
        ddjat.deployed().then((r) => {
            var account = getAccount()
            $scope.ddjat = { address: r.address , account : account}
            return r.balanceOf(account)
        }).then((balance)=>{
            $scope.ddjat.balance = balance.valueOf()
            $scope.$apply()
        })
    }
    function updateDDJDT() {
        ddjdt.deployed().then((r) => {
            var account = getAccount()
            $scope.ddjdt = { address: r.address  , account: account}
            return r.balanceOf(account)
        }).then((balance)=>{
            $scope.ddjdt.balance = balance.valueOf()
            $scope.$apply()
        })
    }
    init()
    updateDDJAT()
    updateDDJDT()
}]);