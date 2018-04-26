'use strict';

function DatabaseHelper() {
  var env = process.env.NODE_ENV || 'production';
  var config = require(__dirname + '/../configs/databaseConfig.json')[env];
  var pgp = require("pg-promise")();
  this.db = pgp(`${config.dialect}://${config.username}@${config.host}:${config.port}/${config.database}`);
};

DatabaseHelper.prototype.executeQuery = function(query, variablesHash) {
  console.log(query);
  console.log(variablesHash);
  return this.db.any(query, variablesHash);
};
// make file visible
module.exports = DatabaseHelper;
