var path = require('path');
var http = require('http');
var _ = require('underscore');
var express = require('express');
var app = express();

var config = {
  port: 3000
};

// Configure static file serving

app.use('/', express.static(path.join(__dirname, '..', 'app')));

var server = server = http.createServer(app).listen(config.port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://' + host + ':' + port);
});

var people = [
  {
    'name': 'Jim Thompson',
    'age': 23,
    'gender': 'Male'
  },
  {
    'name': 'Jane Thompson',
    'age': 45,
    'gender': 'Female'
  }
];

app.get('/people', function(req, res){
  var results = _.filter(people, function(person) {
    return person.name.toLowerCase().indexOf(req.query.term.toLowerCase()) > -1;
  });

  if(results.length){
    res.json(results);
  }else{
    res.status(404).json({
      message: 'No people found.'
    });
  }
});