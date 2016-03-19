var express = require('express');
var app = express();
var itemRoutes = require('./routes/items');

app.use(express.static(__dirname + '/public'));

app.use('/api/items', itemRoutes);

var PORT = 8080;
app.listen(PORT, function () {
  console.log('Listening on ' + PORT);
});
