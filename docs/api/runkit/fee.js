// https://runkit.com/y12/58ada40ff01e960014715192
var request = require('request')
var bitcore = require("bitcore-lib")
var _ = require("lodash")
var Unit = bitcore.Unit
const coindeskapi = 'https://api.coindesk.com/v1/bpi/currentprice/TWD.json'
const feeapi = 'https://bitcoinfees.21.co/api/v1/fees/recommended'
// https://bitcoinfees.21.co/api
const avgbytes = 250

function saToBtc(satoshis) {
    return Unit.fromSatoshis(satoshis).toBTC()
}

function getTwdFee(cb) {
    request({
        url: feeapi,
        json: true
    }, (err, resp, fee) => {
        // console.log(fee)
        // { fastestFee: 160, halfHourFee: 160, hourFee: 140 }
        request({
            url: coindeskapi,
            json: true
        }, (err, resp, coindesk) => {
            // console.log(coindesk)
            var fastestFeeBtc = saToBtc(fee.fastestFee * avgbytes)
            var halfHourFeeBtc = saToBtc(fee.halfHourFee * avgbytes)
            var hourFeeBtc = saToBtc(fee.hourFee * avgbytes)
            cb(null, {
                fastestFeeBtcAvg: fastestFeeBtc,
                fastestFeeUsdAvg: _.round(fastestFeeBtc * coindesk.bpi.USD.rate_float, 2),
                fastestFeeTwdAvg: _.round(fastestFeeBtc * coindesk.bpi.TWD.rate_float, 2),
                halfHourFeeBtcAvg: halfHourFeeBtc,
                hourFeeBtcAvg: hourFeeBtc
            })
        })
    })
}
if (require.main === module) {
    getTwdFee((err, resp) => {
        console.log(resp)
    })
}
// runkit export
// https://runkit.io/y12/58ada40ff01e960014715192/branches/master
exports.endpoint = function(request, response) {
    getTwdFee((err, resp) => {
        response.end(JSON.stringify(resp));
    })
}
