let Web3 = require('web3')
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
module.exports = {
  getinfo : function(){
      var balances = {}
      web3.eth.accounts.forEach(address => {
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
      return r
  },

  sendEther : function(addrFrom, password, addrTo, ether){
      try {
          web3.personal.unlockAccount(addrFrom, password);
      } catch (e) {
          console.log(e);
          return;
      }

      web3.eth.sendTransaction({
          from: addrFrom,
          to: addrTo,
          value: web3.toWei(ether, "ether")
      })
  }
};
require('make-runnable');
