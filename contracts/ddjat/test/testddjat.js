const DDJATCoin = artifacts.require("./DDJATCoin.sol");
const DDJDTCoin = artifacts.require("./DDJDTCoin.sol");
const DDJBTC = artifacts.require("./DDJBTC.sol");
const DDJETH = artifacts.require("./DDJETH.sol");
const DDJXRP = artifacts.require("./DDJXRP.sol");
const DDJETHT = artifacts.require("./DDJETHToken.sol");

contract('DDJAT', (accounts) => {
    it('DDJATCoin deployment should be ok', async () => {
        let coin =  await DDJATCoin.deployed()
        assert.isOk(coin)
        let balance = await coin.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 21000000, "21000000 wasn't in the first account")
    })
})

contract('DDJDT', (accounts) => {

    it('DDJDTCoin deployment should be ok', async () => {
        let coin =  await DDJDTCoin.new()
        assert.isOk(coin)
        let balance = await coin.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 21000000, "21000000 wasn't in the first account")
    })
})

contract('DDJBTC', (accounts) => {

    it('DDJBTC deployment should be ok', async () => {
        let coin =  await DDJBTC.new()
        assert.isOk(coin)
        let balance = await coin.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 21000000e8, "21000000e8 wasn't in the first account")
    })
})

contract('DDJETH', (accounts) => {

    it('DDJETH deployment should be ok', async () => {
        let coin =  await DDJETH.new()
        assert.isOk(coin)
        let balance = await coin.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 21000000e18, "21000000e18 wasn't in the first account")
    })
})

contract('DDJXRP', (accounts) => {

    it('DDJXRP deployment should be ok', async () => {
        let coin =  await DDJXRP.new()
        assert.isOk(coin)
        let balance = await coin.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 21000000e6, "21000000e6 wasn't in the first account")
    })
})

contract('DDJETHT', (accounts) => {

    it('DDJETHT deployment should be ok', async () => {
        let coin =  await DDJETHT.new()
        assert.isOk(coin)
        let balance = await coin.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 0, "0 wasn't in the first account")
    })
})