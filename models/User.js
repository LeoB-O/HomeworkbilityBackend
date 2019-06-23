const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  permission: [String]
});

userSchema.methods.validPassword = function (password) {
  return this.password == password;
}

const User = mongoose.model('User', userSchema);

module.exports = User;