// Load required packages
var User = require('../models/user');
var Q           = require('q');




// Create endpoint /api/users/:user_id for PUT
exports.putUser = function(req) {
  var deferrer = Q.defer();

  // Use the User model to find a specific User
  User.update({ _id: req.params.user_id }, req.body, function(err, num, raw) {
    if (err)
      deferrer.reject(err);

    deferrer.resolve(num + ' updated');
  });

  return deferrer.promise;
};



// Create endpoint /api/users for POST
exports.postUsers = function(req) {
  var deferrer = Q.defer();
  var user = new User();
  user.name = req.body.name;
  user.avatar = req.body.avatar;
  user.save(function(err, obj) {
    if (err) deferrer.reject(err);
    deferrer.resolve('User ' + obj._id + ' Added');
  });

  return deferrer.promise;
};