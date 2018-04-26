'use strict';

function Booking(userId, propertyId, dates) {
  this.userId = userId;
  this.propertyId = propertyId;
  this.dates = dates;
};

module.exports = Booking;
