const Joi = require('joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  number: {
    type: Number,
    required: true,
    length: 10,
  },
});

const User = mongoose.model('User', UserSchema);
var data = [
  { name: 'roshan', number: '+919345692433' },
  { name: 'joey', number: '+919234567933' },
  { name: 'rose', number: '+919335672315' },
  { name: 'chandle', number: '+919335678930' },
  { name: 'emma', number: '+919333453267' },
  { name: 'josh', number: '+919333451289' },
  { name: 'rohan', number: '+919332346762' },
];
for (let users of data) {
  User.insertMany(users);
}
function validateUser(user) {
  const Schema = {
    name: Joi.string().min(3).max(50).required(),
    number: Joi.number().required(),
  };
  return Joi.validate(user, Schema);
}

exports.User = User;
exports.validate = validateUser;
