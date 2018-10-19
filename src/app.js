var express = require('express');
var router = require('./api/index');

var app = express();

// require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(process.env.PORT || 5000, function() {
  console.log('App is running on port 3000');
});
