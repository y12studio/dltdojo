// Copyright 2017 https://tokenmarket.net - MIT licensed
//
let fs = require("fs")
let Web3 = require('web3')
let web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
// Read the compiled contract code
// Compile with
// solc Ddjtab.sol --optimize --combined-json abi,bin > contracts.json
let cname = "Ddjtab.sol:Ddjtab"
let source = fs.readFileSync("contracts.json");
let contracts = JSON.parse(source)["contracts"];
// console.log(Object.keys(contracts))
//[ 'Ddjtab.sol:Ddjtab','Ddjtab.sol:StandardToken', 'Ddjtab.sol:Token' ]

// ABI description as JSON structure
let abi = JSON.parse(contracts[cname].abi);

// Smart contract EVM bytecode as hex
let code = contracts[cname].bin;

// Create Contract proxy class
let DdjtabContract = web3.eth.contract(abi);

function getEstimate() {
    return web3.eth.estimateGas({
        data: '0x' + code
    })
}

function deploy(accountAddress, password, gas) {
    // Unlock the coinbase account to make transactions out of it
    console.log("Unlocking coinbase account");

    try {
        web3.personal.unlockAccount(accountAddress, password);
    } catch (e) {
        console.log(e);
        return;
    }

    console.log("Deploying the contract");
    let contract = DdjtabContract.new(21000000, "DltDoJo Token AliceBlue", "DDJTAB", {
        from: web3.eth.coinbase,
        gas: gas,
        data: '0x' + code
    });

    // Transaction has entered to geth memory pool
    console.log("Your contract is being deployed in transaction at http://testnet.etherscan.io/tx/" + contract.transactionHash);
}

function checkReceipt(txhash) {
    let receipt = web3.eth.getTransactionReceipt(txhash);
    if (receipt && receipt.contractAddress) {
        console.log(receipt)
        console.log("Your contract has been deployed at http://testnet.etherscan.io/address/" + receipt.contractAddress);
        console.log("Note that it might take 30 - 90 sceonds for the block to propagate befor it's visible in etherscan.io");
    }
}

function getinfo() {
    var accounts = web3.eth.accounts;
    var r = {
        ethBlockNumber: web3.eth.blockNumber,
        ethCoinbase: accounts.length > 0 ? web3.eth.coinbase : null,
        ethAccounts: accounts.length,
        ethSyncing: web3.eth.syncing,
        netPeerCount: web3.net.peerCount,
        ethBalance: accounts.length > 0 ? web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), 'ether').toString(10) : 0,
        ethMining: web3.eth.mining
    }
    console.log(r)
}

function moveCoin(addrFrom, password, addrTo, ether){
    try {
        web3.personal.unlockAccount(addrFrom, password);
    } catch (e) {
        console.log(e);
        return;
    }

    web3.eth.sendTransaction({from:addrFrom, to:addrTo, value: web3.toWei(ether, "ether")})
}

var gas = getEstimate()
console.log(gas)
//
// deploy(web3.eth.coinbase, 'pass', gas)
// 1305876
// throw new Error('The contract code couldn\'t be stored, please check your gas amount.');
// deploy(web3.eth.coinbase, 'pass', gas*2)
// moveCoin(web3.eth.accounts[1], "pass", web3.eth.accounts[0], 1)
getinfo()
/*
Your contract has been deployed at http://testnet.etherscan.io/address/0x5842e1af411ecb042a150a12432627267d46ed34
Note that it might take 30 - 90 sceonds for the block to propagate befor it's visible in etherscan.io
{ ethBlockNumber: 607451,
  ethCoinbase: '0x5ceb367689eb8726fc7a8ec75bee43b783661a95',
  ethAccounts: 2,
  ethSyncing: false,
  netPeerCount: 8,
  ethBalance: '4.83435888',
  ethMining: false }
*/
