 // Load required packages
var express = require('express')
var bodyParser = require('body-parser');
var Q = require('q');
var mongoose = require('mongoose');
mongoose.Promise = Q.Promise; //Fix to the mongoose's promises library
var session = require('express-session');
var passport = require('passport');


//of the project
var settings = require('./config/settings')


var authController = require('./controllers/auth');
var userController = require('./controllers/user');
var articleController = require('./controllers/article');


// Connect to the beerlocker MongoDB
if (settings.mongodb.username!=undefined && settings.mongodb.username!="" ) {
  mongoose.connect('mongodb://'+settings.mongodb.username+':'+settings.mongodb.password+'@'+settings.mongodb.host+':'+settings.mongodb.port+'/'+settings.mongodb.dbname);
}else{
  console.log("Credentials not found")
  mongoose.connect('mongodb://'+settings.mongodb.host+':'+settings.mongodb.port+'/'+settings.mongodb.dbname);
}
//

var app = express();



// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));


// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

////////////////////////////// routes ///////////////////////////////




router.route('/users')
  .post(authController.isAuthenticated, userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

//router.route('/users/:user_id')
//.put(authController.isAuthenticated, userController.putUser)


router.route('/articles')
  .post(authController.isAuthenticated, articleController.postArticles)


router.route('/articles_by_tags')
  .post(authController.isAuthenticated, articleController.getArticlesByTags);

router.route('/articles/:article_id')
.put(authController.isAuthenticated, articleController.putArticle)
.delete(authController.isAuthenticated, articleController.deleteArticle);

/////////////////////////////////////////////////////////////////////



// Register all our routes with /api
app.use('/api', router);


console.log('Listening port 3000');
app.listen(3000);