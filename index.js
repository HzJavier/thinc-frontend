var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var PORT = 8080;
app.listen(PORT, function () {
  console.log('Listening on ' + PORT);
});
