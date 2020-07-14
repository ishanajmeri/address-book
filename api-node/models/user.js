const Joi = require('joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  number: {
    type: Number,
    required: true,
    length: 10,
  },
});

const User = mongoose.model('User', UserSchema);

function validateUser(user) {
  const Schema = {
    name: Joi.string().min(5).max(50).required(),
    number: Joi.number().required(),
  };
  return Joi.validate(user, Schema);
}

exports.User = User;
exports.validate = validateUser;
