// Load required packages
var Article = require('../models/article');
var Q           = require('q');


// Create endpoint /api/articles for GET
exports.getArticlesByTags = function(req) {
  var deferrer = Q.defer();
  Article.find({tags:{$in:req.body.tags}}).populate('userId').exec(function(err, articles) {
    if (err) deferrer.reject(err);
      deferrer.resolve(articles);
  });
  return deferrer.promise;
};


// Create endpoint /api/articles for POST
exports.postArticles = function(req) {
	var deferrer = Q.defer();
	var article = new Article();
	article.userId = req.body.userId;
	article.title = req.body.title;
	article.text = req.body.text;
	article.tags = req.body.tags;
	article.save(function(err) {
	  if (err) deferrer.reject(err);
	  deferrer.resolve('Article Added');
	});

  return deferrer.promise;

};


// Create endpoint /api/article/:article_id for PUT
exports.putArticle = function(req) {
  var deferrer = Q.defer();

  // Use the Article model to find a specific Article
  Article.update({ _id: req.params.article_id }, req.body, function(err, r, raw) {
    if (r.n == 0) deferrer.reject("Article doesn't exist");
    if (err) deferrer.reject(err);
    deferrer.resolve('Article ' + req.params.article_id + ' updated');
  });

  return deferrer.promise;
};




// Create endpoint /api/article/:article_id for DELETE
exports.deleteArticle = function(req) {
  var deferrer = Q.defer();

  // Use the Article model to find a specific Article
  Article.remove({ _id: req.params.article_id }, function(err, r, raw) {
    if (err) deferrer.reject(err);
    if (r.result.n == 0) deferrer.reject("Article doesn't exist");
    else deferrer.resolve('Article ' + req.params.article_id + ' deleted');
  });

  return deferrer.promise;
};
