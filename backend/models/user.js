const { model, Schema, Types } = require('mongoose');
const { isEmail } = require('validator');
const UPPERCASE_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

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
    validate: {
      validator: function (v) {
        return UPPERCASE_REGEX.test(v);
      },
      message: (props) => `${props.value} invalid password!`,
    },
  },
});

const User = new model('User', userSchema);

module.exports = User;
