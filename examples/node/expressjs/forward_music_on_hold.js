var express = require('express');
var bodyParser = require('body-parser');
var xml = require('xml');

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

  response.set('Content-Type', 'application/xml');

  // Forward to number and play music on hold
  response.send(
    xml({
      Response: [
        {
          Forward: [{
            _attr: {
              music_on_hold: true
            }
          },
            {
              Target: [
                {Number: "022129191999"}
              ]
            }]
        }
      ]
    })
  );
});

app.listen(3000);