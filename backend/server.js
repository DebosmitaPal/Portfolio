require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors(
  {origin: 'https://debosmita-portfolio.vercel.app', credentials: true}
));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { first_name, last_name, email, phone, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
    });
    await transporter.sendMail({
      from: `"${first_name} ${last_name}" <${email}>`,
      to: process.env.EMAIL_USER, // your receiving email
      subject: `Contact Form | message from ${first_name} ${last_name}`,
      text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
module.exports = app;