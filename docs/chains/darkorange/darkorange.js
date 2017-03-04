let Web3 = require('web3')
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
function getinfo() {
    var balances={}
    web3.eth.accounts.forEach(address=> {
        balances[address] = web3.fromWei(web3.eth.getBalance(address), 'ether').toString(10)
    })
    var r = {
        ethBlockNumber: web3.eth.blockNumber,
        ethCoinbase: web3.eth.coinbase,
        ethAccounts: balances,
        ethSyncing: web3.eth.syncing,
        netPeerCount: web3.net.peerCount,
        ethMining: web3.eth.mining
    }
    console.log(r)
}
getinfo()
