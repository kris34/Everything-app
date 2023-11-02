const { register, login } = require('../services/user');
const sendMail = require('../util/emailerService');
const validatePass = require('../util/passValidatorService');
const trimmer = require('../util/trimmerService');

const userController = require('express').Router();

userController.post('/create-account', async (req, res) => {
  try {
    let data = trimmer(req.body);

    if (!validatePass(data.password)) {
      throw new Error('Invalid password!');
    }

    const emailData = {
      email: data.email,
      subject: 'Welcome to the Everything App',
      text: `Thanks for joining our awesome community, ${data.username}!`,
    };

    sendMail(emailData);
    const registeredUser = await register(data);
    res.status(200).json(registeredUser);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

userController.post('/login', async (req, res) => {
  try {
    const logged = await login(req.body);

    res.status(200).json(logged)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = userController;
