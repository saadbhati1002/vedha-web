const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ─── Email Transporter ────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── Slack Helper ─────────────────────────────────────────────────────────────
function sendSlackMessage(payload) {
  return new Promise((resolve, reject) => {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn('SLACK_WEBHOOK_URL not set – skipping Slack notification.');
      return resolve();
    }

    const body = JSON.stringify(payload);
    const url = new URL(webhookUrl);

    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ─── /api/send-email  (MultiStepContactForm) ─────────────────────────────────
app.post('/api/send-email', async (req, res) => {
  try {
    const { service, problem, email, phone, countryCode, meetingType, date, time } = req.body;

    const htmlDetails = `
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Problem / Solution:</strong> ${problem}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
      <p><strong>Meeting Type:</strong> ${meetingType === 'virtual' ? 'Virtual Meeting' : 'Physical Meeting'}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    `;

    // Email to info@vedha.ae
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@vedha.ae',
      subject: `📋 New Contact Form Submission – ${service}`,
      html: `<h2>New Contact Form Submission</h2>${htmlDetails}`,
    });

    // Confirmation copy to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your submission – Vedha',
      html: `
        <h2>Thank you for contacting Vedha!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <hr>
        <h3>Your Submission:</h3>
        ${htmlDetails}
      `,
    });

    // Slack notification
    await sendSlackMessage({
      text: `🚀 *New Contact Form Submission*`,
      blocks: [
        {
          type: 'header',
          text: { type: 'plain_text', text: '🚀 New Contact Form Submission', emoji: true },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Service:*\n${service}` },
            { type: 'mrkdwn', text: `*Meeting:*\n${meetingType === 'virtual' ? 'Virtual' : 'Physical'}` },
            { type: 'mrkdwn', text: `*Email:*\n${email}` },
            { type: 'mrkdwn', text: `*Phone:*\n${countryCode} ${phone}` },
            { type: 'mrkdwn', text: `*Date:*\n${date || '—'}` },
            { type: 'mrkdwn', text: `*Time:*\n${time || '—'}` },
          ],
        },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: `*Problem / Solution:*\n${problem}` },
        },
        { type: 'divider' },
      ],
    });

    res.json({ success: true, message: 'Submission received! Emails and Slack notification sent.' });
  } catch (error) {
    console.error('Error in /api/send-email:', error);
    res.status(500).json({ success: false, message: 'Failed to send. Please try again.', error: error.message });
  }
});

// ─── /api/contact  (Simple ContactForm) ──────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const htmlDetails = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Email to info@vedha.ae
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@vedha.ae',
      subject: `📋 New Contact Message from ${name}`,
      html: `<h2>New Contact Message</h2>${htmlDetails}`,
    });

    // Confirmation copy to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your message – Vedha',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <hr>
        <h3>Your Submission:</h3>
        ${htmlDetails}
      `,
    });

    // Slack notification
    await sendSlackMessage({
      text: `📩 *New Contact Message from ${name}*`,
      blocks: [
        {
          type: 'header',
          text: { type: 'plain_text', text: `📩 New Contact Message`, emoji: true },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Name:*\n${name}` },
            { type: 'mrkdwn', text: `*Email:*\n${email}` },
            { type: 'mrkdwn', text: `*Phone:*\n${phone}` },
            { type: 'mrkdwn', text: `*Service:*\n${service}` },
          ],
        },
        {
          type: 'section',
          text: { type: 'mrkdwn', text: `*Message:*\n${message}` },
        },
        { type: 'divider' },
      ],
    });

    res.json({ success: true, message: 'Message received! We will be in touch soon.' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ success: false, message: 'Failed to send. Please try again.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Vedha server running on http://localhost:${PORT}`);
});
