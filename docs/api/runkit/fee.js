var request = require('request');
var rp = require('request-promise');
// https://bitcoinfees.21.co/api
var opt = {
    url: 'https://bitcoinfees.21.co/api/v1/fees/recommended',
    method: 'GET',
    transform2xxOnly: true,
    transform: function(body) {
        return JSON.parse(body)
    }
}
rp(opt).then(r=>{
    // { fastestFee: 180, halfHourFee: 180, hourFee: 140 }
    console.log(r)
})
