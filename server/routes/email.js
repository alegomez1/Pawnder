const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
router.get('/send', (req, res, next) => {
  console.log('hit send route')
  let { email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  transporter.sendMail({
    from: 'pawnderapp@gmail.com',
    to: 'alegomez1@me.com', 
    subject: 'Subject test', 
    text: 'Subject Message',
  })
  .catch(error => console.log(error));
});

module.exports = router
