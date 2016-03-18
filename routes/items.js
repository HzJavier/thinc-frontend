var express = require('express');
var router = express.Router();
var fs = require('fs');
var q = require('q');
var path = require('path');
var _ = require('lodash');
var bodyParser = require('body-parser');

// Location of the file, relative to this file
// TODO: move to a config file
var ITEMS_FILE = '../data/items.json';

router.use(bodyParser.json());

/**
 * Item routes
 */

router.get('/', function (req, res) {
  readItems()
  .then(function (data) {
    res.send(data);
  });
});

router.get('/:id', function (req, res) {
  readItems()
  .then(function (data) {
    var items = JSON.parse(data);
    var itemIndex = _.findIndex(items, { id: req.params.id });
    if (itemIndex >= 0 ) {
      res.send(JSON.stringify(items[itemIndex]));
    } else {
      res.status(404);
      res.send('Error: No such item');
    }
  });
});

/**
 * Updates an existing item.
 * Overrides the entire item object with 
 * the data passed on the body.
 */
router.put('/:id', function (req, res) {
  readItems()
  .then(function (data) {
    var items = JSON.parse(data);
    var itemIndex = _.findIndex(items, { id: req.params.id });

    if (itemIndex >= 0 ) {
      items[itemIndex] = req.body;
      
      writeItems(JSON.stringify(items))
      .then(function () {
        res.send(items[itemIndex]);
      });

    } else {
      res.status(404);
      res.send('Error: No such item');
    }
  });
});

/**
 * Writes items to the data.json file
 */
function writeItems(data) {
  var deferred = q.defer();
  var filepath = path.join(__dirname, ITEMS_FILE);

  fs.writeFile(filepath, data, function (err) {
    if (err) { deferred.reject(err); }
    deferred.resolve('success');
  });

  return deferred.promise;
}

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
