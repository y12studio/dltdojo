// https://runkit.com/y12/58aff2c1e4edc300143380ad
// Data URI scheme - Wikipedia  https://en.wikipedia.org/wiki/Data_URI_scheme
// RFC 7515 - JSON Web Signature (JWS)  https://tools.ietf.org/html/rfc7515#appendix-A
// https://github.com/auth0/node-jsonwebtoken

const jwt = require('jsonwebtoken'),
    pem = require('pem')

function verify(token, cert) {
    console.log(token)
    var result = jwt.verify(token, cert)
    var decoded = jwt.decode(token, {
        complete: true
    });
    console.log(decoded)
}

function generateRs256Cert(cb) {
    pem.createCertificate({
        days: 30,
        selfSigned: true
    }, function(err, keys) {
        var key = keys.serviceKey,
            cert = keys.certificate
        cb(null, {
            cert: cert,
            key: key
        })
    });
}

//generateRs256Cert((err, resp) => {
//    console.log(resp)
//})

var key = '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA1VpBtF8pu6akI8eaC/PAf+gjHif0F6ms3oAlRbijs4uXCC73\nLa3FgCPfOTSXBLB4HPRQSgDA7eNmdmf0oWtxffNWgGdKhehBZlKfyQbIH6Il9Hpg\nJrInLUqnm25lWcKM7Ohmy1ptk8PA8DvkKJAmEIV1sGwLNA/bzzvLq9nByeDzyd9A\nA+etfyNXH6jzKlx/BBvZis7W96Wj4o8yX9O354oeSRUgCiB50VSiM3aB0x1yoHPT\nhJJZY3VhyrUDG8n20BmB0bF9lrzojnAQDrGFzqUzeDhzcA1B1e2b0Nyk5SH0s+eh\nawQ8qo0FHcV/Ucb/bPE7bIWAkgW3KMgXjM3mDQIDAQABAoIBAQCxEg+mG7UPQObJ\nq0d20/7YKVm8FXzIhtIqeEB29R8oTJo0+IW9K5PXHe6OE8+i3LNTlJFuWeHFjg3k\nB7NIpVu0JNmOCCwZpwFgYwKqXS6K0pCdr1NNyl4pgORKY/1J2eYMWXW3IH4BPV5M\nA+kAoWJ2I83hdkp2ExNjk0Ueg8QKP1y0gBMhV1c3skAv1oxTUMokBiHBkQ6W0NUz\ncGMFhXnzBhY6IDS1M3VpbAcUdYKEnVNwbU1Pgt47jZXEFAFaNv2/3fA2Ynma07rE\nOqQCgLvmRyuS3GWkOB4X9SRzxAiN0Dqs9TM90ASFyikQvHvdjb+nzoOJZr9zf8+5\nqa/J93shAoGBAPU+sNoPi9DfEwDi0BELJmYXbPl9LXjdhJmJgyFET9ohqJ++ElS1\nFJ/qz6+KfNKD76Ffl/UFPHFMI+HP51vvhg0q3Y2PWoEemAkSn/zX7lqY0WP/jUzN\n6UHm7B+uxJ46PIqG1pmTq5vDpMgNEXc0ZcpNKaHX+OK5mMDhn5eOtmrDAoGBAN61\nhJY37wFqlxiXLoX6LLvcwTjz0zgJMChpgz6aBoX2+sp8v3oXEcAV4Sgf3FISS6NT\n6FfA9pSysVHPTmY7BgMQ+oN4Ifit2WQPAk1wMqpnxyaDvRI5Bm57NXZeOQbsJPhT\n7LHnXvFzghepnznOfWwlZga8TLdTXWV1iiBWdz7vAoGBAOKaEXj7Qlo1tG5uJIiK\n/+j3HjcMpdZ3AA2KFQLJButrjE5FptRkGPGGWm49jQZK6ED4fgTk2KtrCgCdRI4b\nLIbAI8SoP5zsstg3QGK09kT5zQgT2fCslinRgD3qEzyMXOI2otV2r+sWBAzgnlHB\ntYgOcjhbwVlk2jLmhrrYH89XAoGAeReVWeBb0hdUxIgfQbW/cP4dCYx5wjQsvSxx\nsi4pcdnSjxq5OfclLZ436Is6Tl2oRswuvtgqurtWcrcXV7qsECrBK468WeydESyg\nAd8JjWIUBLsIqMnc12GithORSlRH3cY0Ip89HmfByn/uFY5S3+SNzwe/ZsarN6lr\nSx34hH0CgYBdQKPvSH6Op5oH/Q2lSjwUL42JgoGg5YfL1Px2mGD2i92h27zAk9s2\nDhZbdxrDhVYnDcRwp4LUsdjRhOjR9iJBMCwLkW8uJg6bHSZhP5DlF4O36a6dSaDe\n5IE0KUyfAsvvTAcarY81/XQ3pF88BRUgqBot1n9g0sb+aAPjoM8X2g==\n-----END RSA PRIVATE KEY-----'
var cert = '-----BEGIN CERTIFICATE-----\nMIICpDCCAYwCCQD8Kibd8fQObjANBgkqhkiG9w0BAQsFADAUMRIwEAYDVQQDDAls\nb2NhbGhvc3QwHhcNMTcwMjI0MTU1NzM0WhcNMTcwMzI2MTU1NzM0WjAUMRIwEAYD\nVQQDDAlsb2NhbGhvc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDV\nWkG0Xym7pqQjx5oL88B/6CMeJ/QXqazegCVFuKOzi5cILvctrcWAI985NJcEsHgc\n9FBKAMDt42Z2Z/Sha3F981aAZ0qF6EFmUp/JBsgfoiX0emAmsictSqebbmVZwozs\n6GbLWm2Tw8DwO+QokCYQhXWwbAs0D9vPO8ur2cHJ4PPJ30AD561/I1cfqPMqXH8E\nG9mKztb3paPijzJf07fnih5JFSAKIHnRVKIzdoHTHXKgc9OEklljdWHKtQMbyfbQ\nGYHRsX2WvOiOcBAOsYXOpTN4OHNwDUHV7ZvQ3KTlIfSz56FrBDyqjQUdxX9Rxv9s\n8TtshYCSBbcoyBeMzeYNAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIfs/2gKKQSU\n2Z5zc07nL5L9UdtsaD6XPUi6NbyY488+JYM0LCD8PD9SqSzNwPTIwxM/CWfFwCTH\nIRx8cDqQw3xgyZU4IfMU2+WtGSyqEW3puMaQ0bHlReA+RTbDQ8zKPKKeAbtK909P\nqs+bHAJpg7TzoZSNRQPS3YLcWDqdNjYejQ05mJAYKeMVEk27B/efedcLaIJiMgNS\nPzFmBV875fA4RUD90GzVG83+ENP83/K/g2jMKNMpJ1p9CkQEHRwrtKqKZ5PzgKsE\nIq0eMvl7hrwm/ztKTk+r4SI/o9qEpmo2D6A7YXmKdf1OxJmlaqEqMMwyofyXxCye\nu18nw+Vs+sM=\n-----END CERTIFICATE-----'

const htmlcontent = `<html>

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

var target = {
    foo: 'bar',
    content: htmlcontent
}

var token = jwt.sign(target, key, {
    algorithm: 'RS256'
})
verify(token, cert)
