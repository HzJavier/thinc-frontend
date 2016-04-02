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

router.post('/', function(req, res){
	var username = req.body.username;
	var password = req.body.password;

	readItems()
  .then(function (data) {
    var users= JSON.parse(data);
    var userIndex = _.findIndex(users, { username: username, password: password });
    if (userIndex >= 0 ) {
    	res.status(200);
      	res.send('Success');
    } else {
      res.status(401);
      res.send('Error: No such item');
    }
  });
 });
