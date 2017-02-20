const DU = require('./dltutils')
var solc = require('solc')
var jayson = require('jayson/promise')
var keythereum = require('keythereum')
var Web3 = require('web3')
var web3 = new Web3()

function Dlteth() {}

Dlteth.HahaCoin = `pragma solidity ^0.4.0;

contract HahaCoin {
    // The keyword "public" makes those variables
    // readable from outside.
    address public minter;
    mapping (address => uint) public balances;

    // Events allow light clients to react on
    // changes efficiently.
    event Sent(address from, address to, uint amount);

    // This is the constructor whose code is
    // run only when the contract is created.
    function HahaCoin() {
        minter = msg.sender;
        balances[tx.origin] = 10000;
    }

    function mint(address receiver, uint amount) {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }
}`

Dlteth.HahaCoinCompile = `{
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "minter",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "send",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Sent",
      "type": "event"
    }
  ],
  "code": "0x606060405234610000575b60008054600160a060020a03191633600160a060020a039081169190911782553216815260016020526040902061271090555b5b6101f88061004d6000396000f300606060405263ffffffff60e060020a60003504166307546172811461004557806327e235e31461006e57806340c10f1914610099578063d0679d34146100b7575b610000565b34610000576100526100d5565b60408051600160a060020a039092168252519081900360200190f35b3461000057610087600160a060020a03600435166100e4565b60408051918252519081900360200190f35b34610000576100b5600160a060020a03600435166024356100f6565b005b34610000576100b5600160a060020a0360043516602435610134565b005b600054600160a060020a031681565b60016020526000908152604090205481565b60005433600160a060020a0390811691161461011157610130565b600160a060020a03821660009081526001602052604090208054820190555b5050565b600160a060020a0333166000908152600160205260409020548190101561015a57610130565b600160a060020a0333811660008181526001602090815260408083208054879003905593861680835291849020805486019055835192835282015280820183905290517f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd33459181900360600190a15b50505600a165627a7a72305820be1527c9717dae88615b5db7eed10e74880cc019a8b718674938e43590aecba10029"
}
`

Dlteth.GetEthRpcUrl = function(hostname) {
    return `http://${hostname}:8545`
}

Dlteth.GetEthClient = function(hostname) {
    return jayson.client.http(Dlteth.GetEthRpcUrl(hostname));
}

Dlteth.RecoverKeyFromAddress = function(datadir, address, password) {
    // var datadir = "/root/.ethereum/devchain"
    var keyObject = keythereum.importFromFile(address, datadir)
    var privateKey = keythereum.recover(password, keyObject)
    return {
        ko: keyObject,
        key: privateKey,
        keyhex: privateKey.toString('hex')
    }
}

Dlteth.GetAbiFromSrc = function(source, nameContract) {
    // https://github.com/ethereum/solc-js
    // var output = solc.compile(input, 1); // 1 activates the optimiser
    var compiledContract = solc.compile(source, 1);
    // console.log(compiledContract)
    var abi = compiledContract.contracts[nameContract].interface;
    var bytecode = compiledContract.contracts[nameContract].bytecode;
    return {
        abi: JSON.parse(abi),
        code: '0x' + bytecode
    }
}

Dlteth.CreateContract = function(accountAddress, accountPassword, compileResult) {
    // console.log(resultAbi)
    // Creates a contract object for a solidity contract, which can be used to initiate contracts on an address.
    var contractByteCode = compileResult.code
    var contractAbi = compileResult.abi
    var gasEstimate = web3.eth.estimateGas({
        data: contractByteCode
    })
    // dev chain eth.estimateGas too low ?
    // hahacoin gasUsed: 98379
    // *10 gasUsed: 199179
    // All binary data is serialised in hexadecimal form. Hex strings always have a hex prefix 0x.
    web3.eth.contract(contractAbi).new({
        from: accountAddress,
        data: contractByteCode,
        gas: gasEstimate *10
    }, (err, myContract) => {
        if (!err) {
            // NOTE: The callback will fire twice!
            // Once the contract has the transactionHash property set and once its deployed on an address.

            // e.g. check tx hash on the first call (transaction send)
            if (myContract.address) {

                // r.contractAddress = myContract.address
                // console.log(myContract.address) // the contract address
                // console.log(r)
                console.log({
                    tx: myContract.transactionHash,
                    contractAddress: myContract.address
                    //queryBalance:`hahacoin --address ${accountAddress} --password passAlice --contract ${myContract.address}`
                })
            }

            // Note that the returned "myContractReturned" === "myContract",
            // so the returned "myContractReturned" object will also get the address set.
        } else {
            console.log(err)
        }
    })
    //return { txhash: instanceContract.transactionHash }
}

Dlteth.CreateContractSync = function(accountAddress, accountPassword, compileResult) {
    var contractByteCode = compileResult.code
    var contractAbi = compileResult.abi
    // dev or PoA gasEstimate too low.
    var gasEstimate = web3.eth.estimateGas({
        data: contractByteCode
    });
    // dev chain eth.estimateGas too low ?
    // hahacoin gasUsed: 98379,
    // *10 gasUsed: 199179,
    web3.eth.contract(contractAbi).new({
        from: accountAddress,
        data: contractByteCode,
        gas: gasEstimate * 10
    })
}

Dlteth.LatestReceiptInfo = function(accountAddress, accountPassword, compileResult) {
    var eth = web3.eth
    var highestBlock = eth.getBlock("latest").number
    var lowestBlock = highestBlock - 20
    if(lowestBlock < 1){
        lowestBlock = 1
    }
    console.log(`LatestReceiptInfo ${lowestBlock}-${highestBlock}`)
    for (var x = lowestBlock; x < highestBlock; x++) {
        var transactions = eth.getBlock(x).transactions
        for (var y = 0; y < transactions.length; y++) {
            var tx = transactions[y]
            var tr = eth.getTransactionReceipt(tx)
            console.log(tr)
        }
    }
}


Dlteth.EthMethod = function(argv) {
    web3.setProvider(new web3.providers.HttpProvider(Dlteth.GetEthRpcUrl(argv.hostname)))
    var accounts = web3.eth.accounts;
    switch (argv.method) {
        case 'info':
            var r = {
                hostname: argv.hostname,
                ethBlockNumber: web3.eth.blockNumber,
                ethCoinbase: accounts.length > 0 ? web3.eth.coinbase : null,
                ethAccounts: accounts.length,
                ethSyncing: web3.eth.syncing,
                netPeerCount: web3.net.peerCount,
                ethBalance: accounts.length > 0 ? web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), 'ether').toString(10) : 0,
                ethMining: web3.eth.mining
            }
            if (argv.hahacoin) {
                r.hahacoinNew = `hahacoin --new --address ${web3.eth.coinbase} --password pass1`
            }
            DU.log(r)
            break;
        case 'account':
            if (argv.new && argv.password) {
                DU.log(web3.personal.newAccount(argv.password))
            } else if (argv.list) {
                var r = {}
                accounts.forEach((e, i, a) => {
                    var balance = web3.eth.getBalance(e)
                    var ethBalance = web3.fromWei(balance, 'ether').toString(10)
                    r[e] = {
                        balance: balance.toString(),
                        ethBalance: ethBalance
                    }
                })
                DU.log(r)
            }
            break;
        case 'send':
            if (argv.to && argv.eth && argv.password) {
                var address = argv.account ? argv.account : accounts[0]
                var password = argv.password
                var unlock = web3.personal.unlockAccount(address, password)
                if (unlock) {
                    var r = web3.eth.sendTransaction({
                        from: address,
                        to: argv.to,
                        value: web3.toWei(argv.eth, "ether")
                    })
                    DU.log(r)
                }
            }
            break;
        case 'miner':
            clientRpc = Dlteth.GetEthClient(argv.hostname)
            if (argv.start) {
                clientRpc.request('miner_start', [1]).then(DU.log)
            } else if (argv.stop) {
                clientRpc.request('miner_stop', []).then(DU.log)
            }
            break;
        case 'txinfo':
            Dlteth.LatestReceiptInfo()
            break;
        case 'hahacoin':
            if (argv.new && argv.address && argv.password) {
                var cr = JSON.parse(Dlteth.HahaCoinCompile)
                // var resultAbi = Dlteth.HahaCoinCompile
                //console.dir(sa)
                var unlock = web3.personal.unlockAccount(argv.address, argv.password)
                Dlteth.CreateContract(argv.address, argv.password, cr)
            } else if (argv.compile) {
                var cr = Dlteth.GetAbiFromSrc(Dlteth.HahaCoin, 'HahaCoin')
                console.log(JSON.stringify(cr, null, 2))
                //console.log(JSON.parse(Dlteth.HahaCoinCompile))
            } else if (argv.contract && argv.address && argv.password) {
                var cr = JSON.parse(Dlteth.HahaCoinCompile)
                var contractAbi = cr.abi
                var hahaCoin = web3.eth.contract(contractAbi).at(argv.contract)
                if (argv.send && argv.amount && argv.to) {
                    var unlock = web3.personal.unlockAccount(argv.address, argv.password)
                    hahaCoin.send(argv.to, argv.amount, {
                        from: argv.address
                    }, DU.callback)
                } else {
                    var balance = hahaCoin.balances(argv.address)
                    DU.log({
                        account: argv.address,
                        contractAddress: argv.contract,
                        contractBalance: balance.toString(10)
                    })
                }
            }
            break;
        case 'dev':
            if (argv.case == 1) {
                var name = 'alice'
                var password = 'passAlice'
                DU.log(web3.personal.newAccount(password))
                clientRpc = Dlteth.GetEthClient(argv.hostname)
                clientRpc.request('miner_start', [1]).then(DU.log)
            }
            break;
        default:
            console.log(argv)
    }
}

module.exports = Dlteth
