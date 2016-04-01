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

/**
 * User routes
 */

router.get('/', function (req, res) {
  readUsers()
  .then(function (data) {
    res.send(data);
  });
});

router.get('/:id', function (req, res) {
  readUsers()
  .then(function (data) {
    var users = JSON.parse(data);
    var userIndex = _.findUser(users, { id: req.params.id });
    if (userIndex >= 0 ) {
      res.send(JSON.stringify(users[userIndex]));
    } else {
      res.status(404);
      res.send('Error: No such user');
    }
  });
});

/**
 * Updates an existing user.
 * Overrides the entire user object with
 * the data passed on the body.
 */
router.put('/:id', function (req, res) {
  readUsers()
  .then(function (data) {
    var users = JSON.parse(data);
    var userIndex = _.findIndex(users, { id: req.params.id });

    if (userIndex >= 0 ) {
      users[userIndex] = req.body;

      writeUsers(JSON.stringify(users))
      .then(function () {
        res.send(users[userIndex]);
      });

    } else {
      res.status(404);
      res.send('Error: No such user');
    }
  });
});

/**
 * Writes users to the data.json file
 */
function writeUsers(data) {
  var deferred = q.defer();
  var filepath = path.join(__dirname, USERS_FILE);

  fs.writeFile(filepath, data, function (err) {
    if (err) { deferred.reject(err); }
    deferred.resolve('success');
  });

  return deferred.promise;
}

/**
 * Reads the content of the data.json file
 */
function readUsers() {
  var deferred = q.defer();
  var filepath = path.join(__dirname, USERS_FILE);

  fs.readFile(filepath, 'utf8', function (err, data) {
    if (err) { deferred.reject(err); }
    deferred.resolve(data);
  });

  return deferred.promise;
}

module.exports = router;
