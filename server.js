var express = require('express');

// create app
var app = express();

// which folder to serve
app.use(express.static('public'));

// 2 arguments, port and function when server launches
app.listen(3000, function() {
    console.log('Express app running on port 3000')
});