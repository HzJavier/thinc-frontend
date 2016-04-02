var express = require('express');
var app = express();
var itemRoutes = require('./routes/items');
var loginRoutes = require('./routes/login');

app.use(express.static(__dirname + '/public'));

app.use('/api/items', itemRoutes);
app.use('/api/login', loginRoutes);

var PORT = 8080;
app.listen(PORT, function () {
  console.log('Listening on ' + PORT);
});