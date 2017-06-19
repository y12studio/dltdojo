import angular from 'angular'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import DDJAT from '../build/contracts/DDJATCoin.json'
import DDJDT from '../build/contracts/DDJDTCoin.json'
import DDJBTC from '../build/contracts/DDJBTC.json'
import DDJETH from '../build/contracts/DDJETH.json'
import DDJXRP from '../build/contracts/DDJXRP.json'
let ddjatContract = contract(DDJAT)
let ddjdtContract = contract(DDJDT)
let ddjbtcContract = contract(DDJBTC)
let ddjethContract = contract(DDJETH)
let ddjxrpContract = contract(DDJXRP)
let ddjatElement = { symbol: 'DDJAT' }
let ddjdtElement = { symbol: 'DDJDT' }
let ddjbtcElement = { symbol: 'DDJBTC' }
let ddjethElement = { symbol: 'DDJETH' }
let ddjxrpElement = { symbol: 'DDJXRP' }
const CONTRACTS = [
    ddjatContract, ddjdtContract, ddjbtcContract,ddjxrpContract, ddjethContract
]
const TOKENS = [
    ddjatElement,
    ddjdtElement,
    ddjbtcElement,
    ddjethElement,
    ddjxrpElement,
]

let injectedWeb3 = true
let app = angular.module('app', []);
app.controller('ctrl', ['$scope', '$window', function ($scope, $window) {

    $scope.tokens = TOKENS

    $scope.clLoad = function (token) {
        console.log(token)
        if (token.symbol === 'DDJAT') {
            updateDDJToken(ddjatContract, ddjatElement)
        } else if (token.symbol === 'DDJDT') {
            updateDDJToken(ddjdtContract, ddjdtElement)
        } else if(token.symbol == 'DDJBTC'){
            updateDDJToken(ddjbtcContract, ddjbtcElement)
        } else if(token.symbol == 'DDJXRP'){
            updateDDJToken(ddjxrpContract, ddjxrpElement)
        } else if(token.symbol == 'DDJETH'){
            updateDDJToken(ddjethContract, ddjethElement)
        }
    }

    function getAccount() {
        return $window.web3.eth.accounts[0]
    }

    function init() {
        var provider;
        if (typeof $window.web3 !== 'undefined' && injectedWeb3) {
            provider = $window.web3.currentProvider
        } else {
            provider = new Web3.providers.HttpProvider("http://localhost:8545")
        }
        CONTRACTS.forEach(c=>c.setProvider(provider))
        $window.web3 = new Web3(provider)
    }

    function updateDDJToken(contract , tokenElement) {
        contract.deployed().then((r) => {
            var account = getAccount()
            tokenElement.address = r.address
            tokenElement.account = account
            return r.balanceOf(account)
        }).then((balance) => {
            tokenElement.balance = balance.valueOf()
            $scope.$apply()
        })
    }
    init()
}]);