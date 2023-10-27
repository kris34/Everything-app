const jwt = require('jsonwebtoken');
const User = require('../models/user');
const JWT_SECRET = 'asdase-df0awdfa';
const bcrypt = require('bcrypt');

const register = async (data) => {
  if (data.password != data.repass) {
    throw new Error("Passwords don't match");
  }

  const user = await User.create(data);

  return createToken(user);
};

const login = async (data) => {
  const user = await User.findById(data.email);

  if (!user) {
    throw new Error('Invalid user!');
  }

  if (bcrypt.compare(data.password, user.password)) {
    const loggedIn = createToken(user);
  } else {
    throw new Error('Wrong username or password!');
  }
};

//-------------Token logic-----------------
function createToken(data) {
  const payload = {
    _id: data._id,
    username: data.username,
    email: data.email,
  };

  const accessToken = jwt.sign(payload, JWT_SECRET);

  return {
    _id: payload._id,
    username: payload.username,
    email: data.email,
    accessToken: accessToken,
  };
}

function veriyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  veriyToken,
  login,
  register,
  createToken,
};
