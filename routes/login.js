var express = require('express');
var router = express.Router();
var fs = require('fs');
var q = require('q');
var path = require('path');
var _ = require('lodash');
var bodyParser = require('body-parser');

// Location of the file, relative to this file
// TODO: move to a config file
var ITEMS_FILE = '../data/users.json';

router.use(bodyParser.json());

router.post('/',function (req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
   readItems()
   .then(function (data) {
    var users = JSON.parse(data);
    var userIndex = _.findIndex(users, { email: email, password: password });
    //console.log(userIndex);

    if (userIndex >= 0 ) {
     // users[userIndex] = req.body;

      res.status(200);
      res.send('success');

    } else {
      res.status(200);
      res.send('Error: user not found');
    }

  });
});

function readItems() {
  var deferred = q.defer();
  var filepath = path.join(__dirname, ITEMS_FILE);

  fs.readFile(filepath, 'utf8', function (err, data) {
    if (err) { deferred.reject(err); }
    deferred.resolve(data);
  });

  return deferred.promise;
}

module.exports = router;