var assert = require('chai').assert;
var CU = require('../contractutils');
var Web3 = require('web3')
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

describe('# ContractUtils TEST', function() {
    this.timeout(10000);
    it('getAbiFromSrc', function() {
        var r = CU.GetHahaCoinAbi()
        //console.log(r)
        assert.isOk(r.abi)
        assert.isOk(r.code)
        // web3 data 0x prefix for hex data.
        assert.isOk(r.code.startsWith('0x'))
        var hahaCoin = web3.eth.contract(r.abi).at('0x18ce2a7888d0c1b4e99e685eaa148ffe330e4047')
        //console.log(hahaCoin.balances('0x18ce2a7888d0c1b4e99e685eaa148ffe330e4047'))
    });
    it('getAbiFromFile', function() {
        var rf = CU.GetAbiFromFile('hahacoin.sol','HahaCoin')
        //console.log(rf)
        assert.isOk(rf.abi)

    });
});
