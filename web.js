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
    var fs = require('fs');    
    var stats = fs.statSync('./index.html');

    this.fileSize = stats.size;
    
    var buffer = new Buffer(fileSize);
    buffer.write(fs.readFileSync('./index.html', 'utf-8'), 'utf-8');

    return buffer.toString('utf-8', 0, this.fileSize-1);


}
