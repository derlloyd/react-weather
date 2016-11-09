var express = require('express');

// create app
var app = express();
const PORT = process.env.PORT || 3000

// express middleware
// openWeatherMap only works on http NOT https, so need to redirect all https to http
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        // call next when middleware done
        next();
    }
});

// which folder to serve
app.use(express.static('public'));

// 2 arguments, port and function when server launches
app.listen(PORT, function() {
    console.log('Express app running on port ' + PORT)
});