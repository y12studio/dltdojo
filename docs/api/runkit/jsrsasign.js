// * Data URI scheme - Wikipedia  https://en.wikipedia.org/wiki/Data_URI_scheme
// * RFC 7515 - JSON Web Signature (JWS)  https://tools.ietf.org/html/rfc7515#appendix-A
// https://kjur.github.io/jsrsasign/slide_e/#/11/3
// https://github.com/kjur/jsrsasign/issues/225

const bitcore = require("bitcore-lib")
var rs = require('jsrsasign')
var JWS = rs.jws.JWS
// secp256k1
var kp = rs.KEYUTIL.generateKeypair("EC", "secp256r1");
var privateKey = kp.prvKeyObj
var publicKey = kp.pubKeyObj
console.log(privateKey.generateKeyPairHex())
console.log(publicKey.generateKeyPairHex())

var sig = JWS.sign(null, {alg: "ES256"}, {age: 21} , kp.prvKeyObj);
console.log(sig)
console.log(JWS.parse(sig))
console.log(publicKey)
var isValid = JWS.verify(sig, publicKey)
console.log(isValid)
