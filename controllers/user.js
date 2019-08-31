// Load required packages
var boUser = require('../bo/user');
//var boArticle = require('../bo/article');
//var User = require('../models/user');
var Q = require('q')

var fs              = require('fs');
var settings = require('../config/settings')

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  boUser.getUsers().then(function(resp){
      res.json(resp);
  }, function(err){
    res.status(500).send(err);
  });
};



// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  boUser.postUsers(req).then(function(resp){
      res.json(resp);
  }, function(err){
    res.status(500).send(err);
  });
};
