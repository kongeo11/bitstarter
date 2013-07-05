var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var message = sendMessage();
  response.send(message);

});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

function sendMessage() {
    return "my message";

} 
