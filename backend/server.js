require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Configure CORS with specific options
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://debosmita-portfolio.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options('*', cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Contact form endpoint
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
      to: process.env.EMAIL_USER,
      subject: `Contact Form | message from ${first_name} ${last_name}`,
      text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
