# Server Setup Instructions

## Installation

1. Install the backend dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
PORT=3001
```

## Gmail Setup (if using Gmail)

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS`

## Running the Server

1. Start the backend server:

```bash
npm run server
```

2. In a separate terminal, start the React app:

```bash
npm start
```

The server will run on `http://localhost:3001` and the React app on `http://localhost:3000`.

## Production Deployment

For production, you'll need to:

1. Deploy the server separately (e.g., Heroku, Railway, AWS)
2. Update the API URL in `MultiStepContactForm.tsx` to point to your production server
3. Set environment variables on your hosting platform
