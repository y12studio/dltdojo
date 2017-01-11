var assert = require('chai').assert;
var CU = require('../contractutils');

describe('# ContractUtils TEST', function() {
    this.timeout(10000);
    it('getAbiFromSrc', function() {
        var r = CU.GetHahaCoinAbi()
        //console.log(r)
        assert.isOk(r.abi)
        assert.isOk(r.data)
        // web3 data 0x prefix for hex data.
        assert.isOk(r.data.startsWith('0x'))
    });
    it('getAbiFromFile', function() {
        var rf = CU.GetAbiFromFile('hahacoin.sol','HahaCoin')
        console.log(rf)
        assert.isOk(rf.abi)
    });
});
