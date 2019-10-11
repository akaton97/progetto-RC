const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema, like a blueprint
const UserSchema = new Schema({
  email:                  { type: String, required: true },
  googleID:               { type: String, required: false },
  firstName:              { type: String, required: true },
  lastName:               { type: String, required: true },
});

//create the model based on the schema previously defined
mongoose.model('users', UserSchema);