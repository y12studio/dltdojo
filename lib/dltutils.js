function Dltutils(){
}

Dltutils.log = function(r){
    console.log(r)
}

Dltutils.logj = function(o){
    console.log(JSON.stringify(o))
}

Dltutils.callback = function(err, resp){
    console.log(err ? err : resp)
}

module.exports = Dltutils
