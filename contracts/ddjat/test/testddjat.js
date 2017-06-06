var DDJATCoin = artifacts.require("./DDJATCoin.sol");

contract('DDJATCoin', function (accounts) {
    it('DDJATCoin deployment should be ok', function () {
        return DDJATCoin.deployed().then(function (instance) {
            assert.isOk(instance)
            return instance.balanceOf(accounts[0])
        }).then(function (balance) {
            assert.equal(balance.valueOf(), 21000000, "21000000 wasn't in the first account")
        })
    })
})