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
