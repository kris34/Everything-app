const { register } = require('../services/user');
const sendMail = require('../util/emailer');
const validatePass = require('../util/passValidator');
const trimmer = require('../util/trimmer');

const userController = require('express').Router();

userController.post('/create-account', async (req, res) => {
  try {
    let data = trimmer(req.body);

    if (!validatePass(data.password)) {
      throw new Error('Invalid password!');
    }

    const emailData = {
      email: data.email,
      subject: 'Profile confirmation',
      text: 'Please confirm your profile here',
    };

    sendMail(emailData);
    const registeredUser = await register(data);
    res.status(200).json(registeredUser);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = userController;
