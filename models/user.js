'use strict';

var databaseUsers = []

function User(UserId, UserName, email ) {
  this.userId = UserId,
  this.UserName = UserName,
  this.email = email
};

User.prototype.addUser = function(user) {
  databaseUsers.push(user);
};

User.prototype.createUser = function(UserId, UserName, email) {
  var user = new User();
  user.userId = UserId;
  user.UserName = UserName;
  user.email = email;
  return user;
};

User.prototype.findUserIndex = function(userId) {
  var index = databaseUsers.findIndex(function(user, index, users) {
    return user.userId === userId
  });
  return index
};

User.prototype.updateUserName = function(userId, newName) {
  var index = this.findUserIndex(userId);
  databaseUsers[index].UserName = newName;
};

User.prototype.updateUserEmail = function(userId, newEmail) {
  var index = this.findUserIndex(userId);
  databaseUsers[index].email = newEmail;
};

module.exports = Users;
