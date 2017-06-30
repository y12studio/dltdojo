const bitcore = require('bitcore-lib')
const Mnemonic = require('bitcore-mnemonic')
// https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
// https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md
const ZH_TW_WORDLIST = require('./chinese_traditional.json')
Mnemonic.Words.CHINESE_TRADITIONAL = ZH_TW_WORDLIST

angular.module('myApp', [])
    .controller('MyController', function ($scope, $http) {

        function taskKey() {
            var tpk = new bitcore.PrivateKey(bitcore.Networks.testnet);
            var pk = new bitcore.PrivateKey(bitcore.Networks.livenet);
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
        }


        function taskP2PKH() {
            var pk = $scope.key.key
            var p2pkh = new bitcore.Script.buildPublicKeyHashOut(pk.toAddress())
            $scope.key.p2pkh = p2pkh.toString()
        }

        function convertTicker(cmArray, id) {
            let r = cmArray.filter(v => { return v.id === id })[0]
            return {
                usd: r.price_usd,
                twd: (r.price_usd * $scope.usdtwd).toFixed(2)
            }
        }

        function taskCoinTicker() {
            let urlBcinfo = 'https://blockchain.info/ticker?cors=true'
            let urlCoinMarketcap = 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10'
            Promise.all([$http.get(urlCoinMarketcap), $http.get(urlBcinfo)]).then(results => {
                $scope.bcinfo = results[1].data
                $scope.usdtwd = ($scope.bcinfo.TWD.last / $scope.bcinfo.USD.last).toFixed(2)
                $scope.cm = results[0].data
                $scope.btc = convertTicker($scope.cm, 'bitcoin')
                $scope.eth = convertTicker($scope.cm, 'ethereum')
                $scope.xrp = convertTicker($scope.cm, 'ripple')
                console.log($scope)
                $scope.$apply()
            })
        }

        function findIndexInWordlist(v, wordlist){
             return wordlist.findIndex(i => { 
                    return i === v 
                }) 
        }

        $scope.findIndexEn = function(){
            $scope.enWordIndex = findIndexInWordlist($scope.enWord,Mnemonic.Words.ENGLISH)+1
        }

        $scope.findWordEnByNum = function(){
            $scope.numEnWord = Mnemonic.Words.ENGLISH[$scope.numEn-1]
        }

        $scope.findWordZhByNum = function(){
            $scope.numZhWord = Mnemonic.Words.CHINESE_TRADITIONAL[$scope.numZh-1]
        }

        $scope.findIndexZh = function(){
            $scope.zhWordIndex = findIndexInWordlist($scope.zhWord,Mnemonic.Words.CHINESE_TRADITIONAL)+1
        }

        function taskBip39Number(_wordlist) {
            var network = bitcore.Networks.livenet
            var wordlist = _wordlist || Mnemonic.Words.ENGLISH
            // the generated mnemonic sentence (MS) in words.
            // ENT 128 MS 12
            // ENT 160 MS 15
            // ENT 192 MS 18
            // ENT 224 MS 21
            // ENT 256 MS 24
            var mcode = new Mnemonic(128, wordlist)
            var codeEn = mcode.phrase.split(' ')
            var codeArr = codeEn.map(v => { 
                return findIndexInWordlist(v, Mnemonic.Words.ENGLISH)
            })
            
            var codeZh = codeArr.map(v => { 
                return Mnemonic.Words.CHINESE_TRADITIONAL[v]
            })
            
            var codeNum = codeArr.map(x=>{return x+1})
            $scope.bip39ran={
                codeEn: codeEn,
                codeZh : codeZh,
                codeNum : codeNum
            }
            console.log($scope.bip39ran)
        }
        taskKey()
        taskP2PKH()
        taskCoinTicker()
        taskBip39Number()
    });