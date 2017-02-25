//
// Exited unexpectedly with code: 137
// https://runkit.com/y12/58b100bdfe3b6e00148a4e8f
// 
const TestRPC = require("ethereumjs-testrpc");
const Eth = require('ethjs')
// const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'))
const eth = new Eth(TestRPC.provider())
eth.accounts((err, accounts) => {
    console.log(err, accounts)
})
