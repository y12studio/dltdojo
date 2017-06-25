var path = require('path');

module.exports = {
   entry: {
     ddjbtc:'./src/ddjbtc.js',
     ddjltc:'./src/ddjltc.js',
     ddjeth:'./src/ddjeth.js',
     ddjxrp:'./src/ddjxrp.js',
     ddjdoge:'./src/ddjdoge.js',
     ddjdash:'./src/ddjdash.js',
    },
   output: {
     filename: "[name].js",
     path: path.resolve(__dirname, 'build/')
   },
   plugins: [
]
};