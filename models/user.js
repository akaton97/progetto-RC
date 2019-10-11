const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  email:                  { type: String, required: true },
  googleID:               { type: String, required: false },
  firstName:              { type: String, required: true },
  lastName:               { type: String, required: true },
});

mongoose.model('users', UserSchema);