@echo off
echo Testing Slack Webhook...

curl -X POST ^
  -H "Content-Type: application/json" ^
  -d "{\"text\": \"🧪 Test message from Vedha Contact Form\n\n✅ Your Slack webhook is working correctly!\n\nTest sent from cURL at: %date% %time%\"}" ^
  https://hooks.slack.com/services/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

echo.
echo If you see "ok" above, the webhook is working!
pause