'use strict';

var databaseProperties = []

function Property(id, propertyCity, propertyName, propertyNote, propertyPrice, ownerId, dataHelper) {
  this.id = id ? id : 1;
  this.city = propertyCity;
  this.name = propertyName;
  this.note = propertyNote;
  this.price = propertyPrice;
  this.propertyOwner = ownerId ? ownerId : 1;
  this.bookings = dataHelper ? dataHelper : new Booking();
};


Property.prototype.listAllProperty = function() {
  return databaseProperties.map(function(property) {
    return property.name;
  });
};

Property.prototype.addProperty = function(property) {
  databaseProperties.push(property);
};

Property.prototype.createProperty = function(propertyId, propertyCity, propertyName, propertyNote, propertyPrice) {
  var property = new Property();
  property.id = propertyId;
  property.city = propertyCity;
  property.name = propertyName;
  property.note = propertyNote;
  property.price = propertyPrice;
  return property;
};

Property.prototype.bookProperty = function(propertyId, date) {
   var index = this.findPropertyIndex(propertyId);
   var myProperty = databaseProperties[index];
   var booking = new Booking(0, propertyId, [date]);
   myProperty.dataHelper.bookings.push(booking);
 };

Property.prototype.findPropertyIndex = function(propertyId) {
  var index = databaseProperties.findIndex(function(property, index, properties) {
    return property.id === propertyId
  });
  return index
};

Property.prototype.deleteProperty = function(propertyId) {
  var index = this.findPropertyIndex(propertyId)
  databaseProperties.splice(index, 1);
};

Property.prototype.updatePropertyName = function(propertyId, newName) {
  var index = this.findPropertyIndex(propertyId);
  databaseProperties[index].name = newName;
};

Property.prototype.updatePropertyNote = function(propertyId, newNote) {
  var index = this.findPropertyIndex(propertyId);
  databaseProperties[index].note = newNote;
};

Property.prototype.updatePropertyPrice = function(propertyId, newPrice) {
  var index = this.findPropertyIndex(propertyId);
  databaseProperties[index].price = newPrice;
};

module.exports = Property;
