// Load required packages
var mongoose = require('mongoose');

// Define our token schema
var UserSchema   = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: {type: String, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);