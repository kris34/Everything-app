const { register } = require('../services/user');

const userController = require('express').Router();

userController.post('/user-create', async (req, res) => {
  try {
    const data = req.body;

    const registeredUser = await register(data);

    res.status(200).json(registeredUser);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = userController;
