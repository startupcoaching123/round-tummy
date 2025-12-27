// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Outlook, SendGrid, etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
    },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Basic server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (!phoneRegex.test(phone)) {
        return res.status(400).json({ error: 'Phone number must be exactly 10 digits.' });
    }

    // Email content
    const mailOptions = {
        from: `"RoundTummy Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><small>Received at: ${new Date().toLocaleString()}</small></p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email send error:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start the server
connectDB().then(() => {
  server.listen(PORT, () => { // Use server.listen instead of app.listen
    console.log(`🚀 Server running on port ${process.env.BACKEND_URL}`);
  });
});