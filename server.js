var express = require('express');
var app = express();
var moment = require('moment');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/timestamp/:date', function (req, res) {
    var date = req.params.date;
    var newDate = new Date(date);
    
    var natural = moment(date,"MMMM D, YYYY",true);
    var unix = moment(date, "X",true);
    
    if(date == unix.format("X")){
        res.json({'unix': date, 'natural': moment.unix(date).format("MMMM D, YYYY")});
    }
    else if(date == natural.format("MMMM D, YYYY")){
         res.json({'unix': moment(natural).format("X"), 'natural': date});
    }
    else{
        res.json({'unix': null, 'natural': null});
    }
    
});

app.listen(8080);