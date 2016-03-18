var express = require('express');
var router = express.Router();
var fs = require('fs');
var q = require('q');
var path = require('path');

// Location of the file, relative to this file
// TODO: move to a config file
var ITEMS_FILE = '../data/items.json';

/**
 * Item routes
 */
router.get('/', function (req, res) {
  readItems()
  .then(function (data) {
    res.send(data);
  });
});

/**
 * Reads the content of the data.json file
 */
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
