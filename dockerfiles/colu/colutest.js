var Colu = require('colu')
var settings = {
    "network": "testnet",
    "privateSeed": "fe32c74f50fc965eb9320de9d668ca94c317742a038d28d373eae3831ce3b4ce"
}
var colu = new Colu(settings)

function issueAsset(){
    colu.on('connect', function() {
        var asset = {
            "amount": "10000"
        }
        colu.issueAsset(asset, function(err, body) {
            if (err) return console.error(err)
            console.log("Body: ",body)
        })
    })
    colu.init()
}

function getAssets(){
    colu.on('connect', function () {
        colu.getAssets(function (err, body) {

            if (err) return console.error(err)
            console.log("Body: ", body)
        })
    })
    colu.init()
}
// issueAsset()
getAssets()
