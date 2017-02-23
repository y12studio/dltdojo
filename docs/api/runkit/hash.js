const ethUtil = require('ethereumjs-util')
const bitcoreLib = require("bitcore-lib")
const Hash = bitcoreLib.crypto.Hash
console.log(Hash)
function getHash(target){
   var b = Buffer.from(target)
   return {
     target: target,
     sha256: Hash.sha256(b).toString('hex'),
     sha256sha256: Hash.sha256sha256(b).toString('hex'),
     keccakSha3: ethUtil.sha3(b).toString('hex')
   }
}
console.log(getHash('DLTDOJO !'))
console.log(getHash('DLTDOJO !!'))
console.log(getHash('DLTDOJO !!!'))
// https://www.wired.com/2017/02/ai-hedge-fund-created-new-currency-make-wall-street-work-like-open-source/
function getResult(func,target){
    return {
        target:target,
        result: func(target)
    }
}

function algoA(target){
    return Hash.sha256sha256(Buffer.from(target)).toString('hex')
}

function algoB(target){
    return Hash.sha256(Hash.sha256ripemd160(Buffer.from(target))).toString('hex')
}

function algoC(target){
    return ethUtil.sha3(Buffer.from(target)).toString('hex')
}
console.log(getResult(algoA, 'DLTDOJO !!!'))
console.log(getResult(algoB, 'DLTDOJO !!!'))
console.log(getResult(algoC, 'DLTDOJO !!!'))
