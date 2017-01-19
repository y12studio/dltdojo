var assert = require('chai').assert;
const DBUILDER = require('../lib/dltbuilder')

describe('#dltbuilder', function() {
    it('getAbiFromSrc', function() {
        var r = DBUILDER.BuildBulkUserWithBitconHdKey(3, 'p')
        console.log(r)
        assert.isOk(r)
        assert.equal(3, r.accounts.length)
    });
});
