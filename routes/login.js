var express = require('express');
var router = express.Router();
var fs = require('fs');
var q = require('q');
var path = require('path');
var _ = require('lodash');
var bodyParser = require('body-parser');

// Location of the file, relative to this file
// TODO: move to a config file
var USERS_FILE = '../data/users.json';

router.use(bodyParser.json());

router.post('/', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  readItems()
  .then(function (data) {
    var users = JSON.parse(data);
    var userIndex = _.findIndex(users, { username: username, password: password });

    if (userIndex >= 0 ) {
      res.status(200);
      res.send('success');
    } else {
      res.status(401);
      res.send('Error: No such item');
    }
  });
});

/**
 * Reads the content of the data.json file
 */
function readItems() {
  var deferred = q.defer();
  var filepath = path.join(__dirname, USERS_FILE);
  fs.readFile(filepath, 'utf8', function (err, data) {

    if (err) { deferred.reject(err); }
    deferred.resolve(data);
  });

  return deferred.promise;
}

module.exports = router;
