// Load required packages
var mongoose = require('mongoose');

// Define our token schema
var ArticleSchema   = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
	title: { type: String, required: true },
	text: {type: String, required: true },
	tags: [String]
});

// Export the Mongoose model
module.exports = mongoose.model('ArticleSchema', ArticleSchema);