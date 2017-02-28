// https://ropsten.io/pushTx
//
let fs = require("fs");
const EthereumTx = require('ethereumjs-tx')
const request = require('request')
// Read the compiled contract code
// Compile with
// solc Ddjtab.sol --combined-json abi,asm,ast,bin,bin-runtime,clone-bin,devdoc,interface,opcodes,srcmap,srcmap-runtime,userdoc > contracts.json
let cname = "Ddjtab.sol:Ddjtab"
let source = fs.readFileSync("contracts.json");
let contracts = JSON.parse(source)["contracts"];
// console.log(Object.keys(contracts))
//[ 'Ddjtab.sol:Ddjtab','Ddjtab.sol:StandardToken', 'Ddjtab.sol:Token' ]

// ABI description as JSON structure
let abi = JSON.parse(contracts[cname].abi);

// Smart contract EVM bytecode as hex
let code = contracts[cname].bin;


function getTx(nonce, privateKey, address, txData){
    // https://testnet.etherscan.io/api?module=proxy&action=eth_estimateGas&data=0x00
    // result: "0xcf0c"
    console.log(`address ${address} nonce = ${nonce}`)
    const key = Buffer.from(privateKey, 'hex')
    var tx = new EthereumTx(null, 3) //
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    tx.nonce = nonce
    tx.value = 0
    tx.data = txData
    tx.sign(key)
    var gas = 121000
    // 21000
    tx.gas = gas
    console.log('Total Amount of wei needed:' + gas )
    console.log('---Serialized TX----')
    console.log(tx.serialize().toString('hex'))
    console.log('--------------------')
    // Unable to broadcast Tx : {"jsonrpc":"2.0","error":{"code":-32010,"message":"Transaction cost exceeds current gas limit. Limit: 3478288, got: 370000. Try decreasing supplied gas.","data":null},"id":1}
}

// https://github.com/ethereumjs/ethereumjs-tx
// nonce
// https://testnet.etherscan.io/api?module=proxy&action=eth_getTransactionCount&address=0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4
function printTx(privateKey, address, txData) {
    request({
        url: `https://testnet.etherscan.io/api?module=proxy&action=eth_getTransactionCount&address=${address}`,
        json: true
    }, (err, resp, r) => {
        // { jsonrpc: "2.0", result: "0x0", id: 1}
        var nonce = r.result
        getTx(nonce, privateKey, address, txData)
    })
    // https://testnet.etherscan.io/pushTx
    // Unable to broadcast Tx : {"jsonrpc":"2.0","error":{"code":-32010,"message":"Transaction gas is too low. There is not enough gas to cover minimal cost of the transaction (minimal: 371012, got: 10000). Try increasing supplied gas.","data":null},"id":1}
}

//printTx('6f0dc3181ef1d5395f6f477d2b6999337adb6a279335675a3446204fe87b38a4', '0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4', '0x' + code)
getTx("0x0",'6f0dc3181ef1d5395f6f477d2b6999337adb6a279335675a3446204fe87b38a4', '0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4', '0x' + code)
