const nodemailer = require('nodemailer');
const message = require('./message');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

let options = {
  from: 'William Koller <wkoller25@gmail.com>',
  to: 'williamkoller30@gmail.com',
  subject: 'Enviando e-mail com Nodejs',
  html: message,
};

const sendEmail = async () => {
  try {
    console.log('Enviando e-mail');
    await transporter.sendMail(options);
    console.log('E-mail enviado!!');
  } catch (error) {
    console.log('Algo deu errado!');
    console.error(error);
  }
};

sendEmail();
