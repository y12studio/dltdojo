// * Data URI scheme - Wikipedia  https://en.wikipedia.org/wiki/Data_URI_scheme
// * RFC 7515 - JSON Web Signature (JWS)  https://tools.ietf.org/html/rfc7515#appendix-A
// https://kjur.github.io/jsrsasign/slide_e/#/11/3
// https://jwt.io/
// https://github.com/auth0/node-jsonwebtoken

const bitcore = require("bitcore-lib")
const jwt = require('jsonwebtoken');
var htmlcontent = `<html>

<head>
    <script>
        function myFunction(p1, p2) {
            return p1 * p2;
        }
    </script>
</head>

<body>
    <div>
        <h3>Contract</h3>
        <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />+<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                alt="Red dot" />=<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" /><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
                alt="Red dot" /></p>
        <p><button type="button" onclick="document.getElementById('ctime').innerHTML = 'myFunction=' + myFunction(2,99) +', DateTime='+ Date()">myFunction</button>
            <p id="ctime"></p>
    </div>
</body>

</html>`
var HDPrivateKey = bitcore.HDPrivateKey
// var hdPrivateKey = new HDPrivateKey()
var hdPrivateKey = new HDPrivateKey('xprv9s21ZrQH143K2dKZsrwFZgyLi6uNKtNrHAmFkhaK2Xai55DEwoiD9oNdsW2KNSQ3S73uPYNZQ4hAEUBUyfXUH7s6LnnsJyvfdohFLjymxdx')
console.log(hdPrivateKey.toString())
var keyid = 199
var key = hdPrivateKey.derive(1).derive(keyid, true)
// sign JWS
var secret = key.toString('hex')
// sign with default (HMAC SHA256)
var token = jwt.sign({ keyid:keyid, data: htmlcontent }, secret)
console.log(token)
var decoded = jwt.decode(token, {complete: true});
console.log(decoded)
var result = jwt.verify(token, secret)
console.log(secret)
