var express = require('express');
var app = express();



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/timestamp/:date', function (req, res) {

  res.send(req.params);
});

app.listen(8080);