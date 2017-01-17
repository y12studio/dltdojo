function Dltutils(){
}

Dltutils.log = function(r){
    console.log(r)
}

Dltutils.callback = function(err, resp){
    console.log(err ? err : resp)
}

module.exports = Dltutils
