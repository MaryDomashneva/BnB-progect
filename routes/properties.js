var express = require('express');
var router = express.Router();

const DatabaseHelper = require('../helpers/databaseHelper.js');
const Property = require('../models/property.js');
const Booking = require('../models/booking.js');

router.get('/', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  var Property = new Property();
  var booking = new Booking();

});

router.get('/properties', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  var property = new Property();
  var booking = new Booking();

  property.listAllProperty();
});

router.post('/book', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  var property = new Property();
  var booking = new Booking();

  property.bookProperty();

});

router.post('/username/create', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  var property = new Property();
  var booking = new Booking();

  property.createProperty();
  property.addProperty();

});


router.post('/username/delete', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  var property = new Property();
  var booking = new Booking();

  property.deleteProperty();

});

router.post('/username/updateProperty', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  var property = new Property();
  var booking = new Booking();

  property.updatePropertyName();

});


module.exports = router;
