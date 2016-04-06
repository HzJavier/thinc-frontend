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
var logged= false;

router.use(bodyParser.json());

/**
 * Item routes
 */
 router.post('/login', function(req, res) {
 	readUsers()
 	.then(function (data) {
 		var users = JSON.parse(data);
 		var userIndex = _.findIndex(users, { user: req.body.user });

 		if (userIndex >= 0 ) {
			if(users[userIndex].password==req.body.pass){
				res.send('{"response":"correcto","user":"'+users[userIndex].user+'","password":"'+users[userIndex].password+'","name":"'+users[userIndex].name+'","age":"'+users[userIndex].age+'"}');
			}else{
				res.send('{"response":"incorrecto"}');
			}
 		} else {
 			res.send('{"response":"incorrecto"}');
 		}
 	});
 });

router.put('/:user', function (req, res) {
  readIUsers()
  .then(function (data) {
    var users = JSON.parse(data);
    var userIndex = _.findIndex(users, { user: req.params.user });

    if (userIndex >= 0 ) {
      users[userIndex] = req.body;
      
      writeItems(JSON.stringify(users))
      .then(function () {
        res.send(users[userIndex]);
      });

    } else {
      res.status(404);
      res.send('Error: No such item');
    }
  });
});

/**
 * Reads the content of the users.json file
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
