var assert = require('chai').assert;
var CU = require('../contractutils');

describe('# ContractUtils TEST', function() {
    it('getAbiFromSrc', function() {
        this.timeout(10000);
        var r = CU.GetCoinAbi()
        console.log(r)
        assert.isOk(r.abi)
        assert.isOk(r.data)
        // web3 data 0x prefix for hex data.
        assert.isOk(r.data.startsWith('0x'))
        console.log(JSON.stringify({params:["0x100","0x200"]}))
    });
});
