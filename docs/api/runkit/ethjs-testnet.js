const Eth = require('ethjs')
// const generate = require('ethjs-account').generate;
// console.log(generate('HI DLTDOJO 2017                                              '));
const alice = {
    privateKey: '0x6f0dc3181ef1d5395f6f477d2b6999337adb6a279335675a3446204fe87b38a4',
    publicKey: '0xe7b491643bbc7dad0f2ac897649a370b17b1e9f1bf7a6d885da823158c824c17cfbc7c3f5c205ab685ad83fb2136807dfa61fb7b2ca8d08b32dd782c5e05c9d7',
    address: '0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4'
}
// http://ethereum.stackexchange.com/questions/84/what-public-test-networks-and-faucets-exist/
// Ethereum Ropsten Faucet  http://faucet.ropsten.be:3001/
// curl -X POST  -H "Content-Type: application/json" -d '{"toWhom":"0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4"}' https://ropsten.faucet.b9lab.com/tap
// https://ropsten.ether.camp/account/bbc7bc660947ccf8ee4346530003ac4185c6a3d4
// https://testnet.etherscan.io/address/0xBBc7Bc660947ccF8Ee4346530003AC4185C6A3D4
//const TestRPC = require("ethereumjs-testrpc");
//const eth = new Eth(TestRPC.provider())
const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'))
var address = alice.address
eth.getBalance(address, 'latest')
    .then((result) => {
        // console.log(result)
        var r = {
            address: address,
            balance: Eth.fromWei(result, 'ether')
        }
        console.log(r)
    })
    .catch((error) => {
        console.log(error)
    });
