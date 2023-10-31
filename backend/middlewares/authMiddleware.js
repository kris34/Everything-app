const { veriyToken } = require('../services/user');

module.exports = () => async (req, res, next) => {
  const token = req.headers['x-authorization'];

  if (token) {
    try {
      const payload = veriyToken(token);
      req.user = payload;
    } catch (err) {
      res.status(400).json({ message: 'Invalid Token!' });
    }
  }
  next();
};
