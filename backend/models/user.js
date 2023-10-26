const { model, Schema, Types } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, 'Username has to be at least 5 charakters long!'],
    unique: true,
  },
  email: {
    type: String,
    required: 'Email is required',
    validate: [isEmail, 'Invalid Email'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [5, 'Password must be at least 5 charakters long!'],
  },
});

const User = new model('User', userSchema);

module.exports = User;
