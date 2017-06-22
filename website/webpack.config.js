var path = require('path');

module.exports = {
   entry: {
     ddjbtc:'./src/ddjbtc.js',
     ddjltc:'./src/ddjltc.js',
    },
   output: {
     filename: "[name].js",
     path: path.resolve(__dirname, 'build/')
   },
   plugins: [
]
};