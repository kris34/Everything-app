const jwt = require('jsonwebtoken');
const User = require('../models/user');
const JWT_SECRET = 'asdase-df0awdfa';
const bcrypt = require('bcrypt');

const register = async (data) => {
  if (data.password != data.repass) {
    throw new Error("Passwords don't match");
  }

  data.password = await bcrypt.hash(data.password, 10);
  const user = await User.create(data);

  return createToken(user);
};

const login = async (data) => {

  const user = await User.findOne({email: data.email});
 
  try {
    if (!user) {
      throw new Error('Invalid user!');
    }

    const verified = bcrypt.compare(data.password, user.password);

    if (!verified) {
      throw new Error('Wrong username or password');
    }

    return createToken(user);
  } catch (err) {
    throw new Error(err);
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
