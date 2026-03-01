const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter (configure with your email service)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email
    pass: process.env.SMTP_PASS, // Your email password or app password
  },
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const {
      service,
      problem,
      email,
      phone,
      countryCode,
      meetingType,
      date,
      time,
      toAddress,
      subject,
    } = req.body;

    // Email content for info@vedha.ae
    const emailBody = `
New Contact Form Submission

Service: ${service}
Problem/Solution: ${problem}

Contact Information:
Email: ${email}
Phone: ${countryCode} ${phone}

Meeting Details:
Type: ${meetingType === "virtual" ? "Virtual Meeting" : "Physical Meeting"}
Date: ${date}
Time: ${time}
    `.trim();

    // Send email to info@vedha.ae
    const primaryRecipient = toAddress || 'info@vedha.ae';
    const infoEmail = {
      from: process.env.SMTP_USER,
      to: primaryRecipient,
      subject: subject || 'New Contact Form Submission',
      text: emailBody,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Problem/Solution:</strong> ${problem}</p>
        <h3>Contact Information:</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <h3>Meeting Details:</h3>
        <p><strong>Type:</strong> ${meetingType === "virtual" ? "Virtual Meeting" : "Physical Meeting"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    // Send copy to user
    const userEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Copy: Your submission to Vedha',
      text: emailBody,
      html: `
        <h2>Thank you for contacting Vedha!</h2>
        <p>We have received your submission and will get back to you soon.</p>
        <hr>
        <h3>Your Submission Details:</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Problem/Solution:</strong> ${problem}</p>
        <h3>Contact Information:</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <h3>Meeting Details:</h3>
        <p><strong>Type:</strong> ${meetingType === "virtual" ? "Virtual Meeting" : "Physical Meeting"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(infoEmail);
    await transporter.sendMail(userEmail);

    res.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
