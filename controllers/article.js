// Load required packages
var boArticle = require('../bo/article');
//var boArticle = require('../bo/article');
//var User = require('../models/user');
var Q = require('q')

var fs              = require('fs');
var settings = require('../config/settings');

// Create endpoint /api/articles for GET
exports.getArticlesByTags = function(req, res) {
  boArticle.getArticlesByTags(req).then(function(resp){
      res.json(resp);
  }, function(err){
    res.status(500).send(err);
  });
};


// Create endpoint /api/articles for POST
exports.postArticles = function(req, res) {
  boArticle.postArticles(req).then(function(resp){
      res.json(resp);
  }, function(err){
    res.status(500).send(err);
  });
};


// Create endpoint /api/articles/:article_id for PUT
exports.putArticle = function(req, res) {
  boArticle.putArticle(req).then(function(resp){
    res.json(resp);
  }, function(err){
    res.status(500).send(err);
  });
};


// Create endpoint /api/articles/:article_id for DELETE
exports.deleteArticle = function(req, res) {
  boArticle.deleteArticle(req).then(function(resp){
    res.json(resp);
  }, function(err){
    res.status(500).send(err);
  });
};