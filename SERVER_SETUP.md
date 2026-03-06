# Server Setup Instructions

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory (a template is already provided):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
PORT=3001
```

## Gmail Setup

1. Enable **2-Factor Authentication** on your Google account.
2. Go to **Google Account → Security → App Passwords**.
3. Generate an App Password for "Mail" and copy it into `SMTP_PASS`.

## Slack Webhook Setup

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and create (or open) your Slack app.
2. Navigate to **Incoming Webhooks** and toggle it **On**.
3. Click **Add New Webhook to Workspace**, choose your channel, and authorize.
4. Copy the generated Webhook URL into `SLACK_WEBHOOK_URL`.

On every form submission, Slack will receive a rich block message with the full contact details.

## API Endpoints

| Endpoint | Form | Description |
|---|---|---|
| `POST /api/send-email` | Multi-step contact form | Emails + Slack for full consultation request |
| `POST /api/contact` | Simple contact form | Emails + Slack for quick contact message |

## Running Locally

```bash
# Terminal 1 – backend
npm run server

# Terminal 2 – React app
npm start
```

Server: `http://localhost:3001` · React app: `http://localhost:3000`

## Production Deployment

1. Deploy `server.js` separately (e.g., Railway, Render, Heroku).
2. Set all `.env` variables on your hosting platform.
3. Update the API URL in `MultiStepContactForm.tsx` (line ~151) and add `REACT_APP_API_URL=https://your-server.com` to `ContactForm.tsx` env.
