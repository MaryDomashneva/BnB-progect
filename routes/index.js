var express = require('express');
var router = express.Router();
// important
const DatabaseHelper = require('../helpers/databaseHelper.js');
const Property = require('../models/property.js');
const Booking = require('../models/booking.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var databaseHelper = new DatabaseHelper();
  databaseHelper.executeQuery(
    'SELECT * FROM users',
    {}
  )
  .then(function(users) {
    res.render('index', { title: users[0].username });
  })
  .catch(function(error) {
    res.render('index', { title: error });
  });
});

// router.get('/', function(req, res, next) {
//   var databaseHelper = new DatabaseHelper();
//   var Property = new Property();
//   var booking = new Booking();
//
// });

router.get('/properties', function(req, res, next) {
  var Property = new Property(1, 'London', 'bestproperty', 30, 1, []);

  Property.listAllProperty();
});

router.post('/book', function(req, res, next) {
  var Property = new Property();
  var Booking = new Booking();

  Property.bookProperty();

});

router.post('/username/create', function(req, res, next) {
  var Property = new Property();
  var Booking = new Booking();

  Property.createProperty();
  Property.addProperty();

});


router.post('/username/delete', function(req, res, next) {
  var property = new Property();
  var booking = new Booking();

  property.deleteProperty();

});

router.post('/username/updateProperty', function(req, res, next) {
  var property = new Property();
  var booking = new Booking();

  property.updatePropertyName();

});
module.exports = router;
