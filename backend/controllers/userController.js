const { register } = require('../services/user');
const trimmer = require('../shared/trimmer');

const userController = require('express').Router();

userController.post('/create-account', async (req, res) => {
  try {
   

    let data = trimmer(req.body);
    const registeredUser = await register(data);

    res.status(200).json(registeredUser);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = userController;
