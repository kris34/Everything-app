const nodemailer = require('nodemailer');

async function sendMail(data) {
  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'krisdesue@gmail.com',
      pass: 'foql jyib mqhn ensm',
    },
  });

  const mail = {
    from: 'krisdesue@gmail.com',
    to: `${data.email}`,
    subject: `${data.subject}`,
    text: `${data.text}`,
  };

  mailTransport.sendMail(mail);
}

module.exports = sendMail;
