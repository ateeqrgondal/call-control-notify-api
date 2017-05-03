var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', function (request, response) {
  var event = request.body.event;
  var call_id = request.body.call_id;
  var from = request.body.from;
  var to = request.body.to;

  console.log('event: ' + event);
  console.log('call_id: ' + call_id);
  console.log('from: ' + from);
  console.log('to: ' + to);

  response.end()
});

app.listen(3000);