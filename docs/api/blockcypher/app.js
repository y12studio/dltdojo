const log = console.log
var bitcoin = BitcoinJS.bitcoin
// Blockchain Developer API for Bitcoin, Ethereum, Testnet, Litecoin and More | BlockCypher
// https://www.blockcypher.com/dev/bitcoin/?javascript#testing

const BCY = 'https://api.blockcypher.com/v1/bcy/test'
var app = angular.module('DltdojoApp', ['ngMaterial']);
app.filter('prettyJSON', function() {
    function prettyPrintJson(json) {
        return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    }
    return prettyPrintJson;
});
app.controller('appCtrl', function($scope, $location, $http) {
    $scope.host = $location.host()
    console.log($scope.host)
    $scope.faucetmode = false
    $scope.bcy = {}
    $scope.api = {}

    $scope.alice = {
        "private": "d0da104b1102d0b9c43a5da1d40fe851700527c483bc238051ae8b2339db63f0",
        "public": "03de7acb2c4b8af07d61d0aa148b911476f4d3d301180be3e1d18a1cd177d7b45d",
        "address": "C3JdGExYtnJy1kAXBwdPwowc5jyVyJqdUw",
        "wif": "BvL1ccqahW5UPt8y2vcABYmUBxqkZh9HmV3XXB7UFLitFUk9As3v"
    }

    $scope.pool = {
        "private": "e11500eb57f775176c02fa982e9d164cb5cbb979d97f6a85e74580dcb05cc8bb",
        "public": "02bdc0220abf8b7df815d7ae8fb59cacacd37819540be8ed3cb9c8587c94c1d96d",
        "address": "CEsjpPr8LNM4znYxYZDwPdxYhqn1As3L5y",
        "wif": "BvsZUyyPxkf7KBCXv1XpfULKbzb6ojYDG2w3ZFKdSeSvxNWB94Vx"
    }

    $scope.ckGetInfo = function() {
        var url = BCY
        $http.get(url).then(function(res) {
            log(res)
            $scope.api.info = {
                url: url,
                data: res.data
            }
        })
    }

    $scope.ckOldKey = function() {
        $scope.bob = $scope.alice
    }

    $scope.ckPostAddrs = function() {
        var url = `${BCY}/addrs`
        $http.post(url).then(function(res) {
            log(res)
            $scope.bob = res.data
            $scope.api.addrs = {
                url: url,
                data: res.data
            }
        })
    }

    $scope.ckPostSend = function() {
        var tmptx = $scope.api.tmptx
        if (!tmptx) return;
        // sending back the transaction with all the signatures to broadcast
        $http.post('https://api.blockcypher.com/v1/bcy/test/txs/send', JSON.stringify(tmptx)).then(function(finaltx) {
            log(finaltx);
        })
    }

    $scope.ckPostTxsNew = function() {
        // https://www.blockcypher.com/dev/bitcoin/#creating-transactions
        // log(BitcoinJS)
        // BCY Invalid network version
        // Function.ECPair.fromWIF (bitcoinjs.js:2740)
        // var alicekeys = bitcoin.ECPair.fromWIF($scope.alice.wif)
        // log(alicekeys)
        var bigi = BitcoinJS.BigInteger
        var keys = new bitcoin.ECPair(bigi.fromHex($scope.pool.private));
        log(keys)
        var newtx = {
            inputs: [{
                addresses: [$scope.pool.address]
            }],
            outputs: [{
                addresses: [$scope.bob.address],
                value: 100000
            }]
        }

        var buffer = BitcoinJS.Buffer
        // AngularJS performs an OPTIONS HTTP request for a cross-origin resource - Stack Overflow
        // http://stackoverflow.com/questions/12111936/angularjs-performs-an-options-http-request-for-a-cross-origin-resource

        $http.post('https://api.blockcypher.com/v1/bcy/test/txs/new', JSON.stringify(newtx)).then(function(res) {
            log(res)
            var tmptx = res.data
            // signing each of the hex-encoded string required to finalize the transaction
            tmptx.pubkeys = [];

            tmptx.signatures = tmptx.tosign.map(function(tosign, n) {
                tmptx.pubkeys.push(keys.getPublicKeyBuffer().toString("hex"));
                return keys.sign(new buffer.Buffer(tosign, "hex")).toDER().toString("hex");
            });
            log(tmptx)
            $scope.api.tmptx = tmptx
        })
    }


    $scope.ckPostFaucet = function() {
        // https://www.blockcypher.com/dev/bitcoin/#testing
        var address = $scope.pool.address
        if (address && $scope.bcy.token) {
            var params = JSON.stringify({
                "address": address,
                "amount": 100000 * _.random(88, 168)
            })
            var url = `${BCY}/faucet?token=${$scope.bcy.token}`
            $http.post(url, params).then(function(res) {
                log(res)
                $scope.api.faucet = {
                    url: url,
                    data: res.data
                }
            })
        }
    }

    $scope.ckCheckToken = function() {
        // https://api.blockcypher.com/v1/tokens/$YOURTOKEN
        var url = `https://api.blockcypher.com/v1/tokens/${$scope.bcy.token}`
        log(url)
        $http.get(url).then(
            function(res) {
                log(res)
                $scope.api.check = {
                    url: url,
                    data: res.data
                }
            },
            function(err) {
                log('error callback' + err)
            });
    }
});
