var path = require('path');

module.exports = {
   entry: {ddjltc:'./src/ddjltc.js'},
   output: {
     filename: "[name].js",
     path: path.resolve(__dirname, 'build/')
   },
   plugins: [
]
};