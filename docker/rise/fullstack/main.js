const app = require('express')();
var path = require('path');

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Server running'));