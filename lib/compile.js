var solc = require('solc')
var fs = require('fs')
var filename = process.argv[2]
var nameContract = process.argv[3]
if (filename && nameContract) {
    var source = fs.readFileSync(filename, "utf-8")
    var compiledContract = solc.compile(source, 1);
    // console.log(compiledContract)
    var abi = compiledContract.contracts[nameContract].interface;
    var bytecode = compiledContract.contracts[nameContract].bytecode;
    var cr = {
        abi: JSON.parse(abi),
        code: '0x' + bytecode
    }
    console.log(JSON.stringify(cr, null, 2))
}
