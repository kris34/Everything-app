const jwt = require('jsonwebtoken');
const JWT_SECRET = 'asdase-df0awdfa';

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
  createToken,
};
