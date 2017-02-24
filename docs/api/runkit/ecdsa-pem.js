// * Data URI scheme - Wikipedia  https://en.wikipedia.org/wiki/Data_URI_scheme
// * RFC 7515 - JSON Web Signature (JWS)  https://tools.ietf.org/html/rfc7515#appendix-A
// https://kjur.github.io/jsrsasign/slide_e/#/11/3
// https://jwt.io/
// https://github.com/auth0/node-jsonwebtoken

const bitcore = require("bitcore-lib")
const jwt = require('jsonwebtoken');
var EC = require('elliptic').ec;
var KeyEncoder = require('key-encoder')
var ec = new EC('p256');

var encoderOptions = {
    curveParameters: [1, 3, 132, 0, 10],
    privatePEMOptions: {label: 'EC PRIVATE KEY'},
    publicPEMOptions: {label: 'PUBLIC KEY'},
    curve: ec
}
var keyEncoder = new KeyEncoder(encoderOptions)

// Generate keys
var kp = ec.genKeyPair()
var pubKeyRaw = kp.getPublic('hex')
var privKeyRaw = kp.getPrivate('hex')
console.log(pubKeyRaw)
console.log(privKeyRaw)
var pemPublicKey = keyEncoder.encodePublic(pubKeyRaw, 'raw', 'pem')
console.log(pemPublicKey)
