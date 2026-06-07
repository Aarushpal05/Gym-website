# EmailJS Setup Guide

This guide will help you configure EmailJS to send contact form emails to your admin email.

## Steps to Setup EmailJS

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Get Your Public Key
- After login, go to **Account** settings
- Find your **Public Key** (usually starts with a long string like `abc123xyz...`)
- Copy this key

### 3. Create an Email Service
- In EmailJS dashboard, click on **Email Services**
- Click **Add Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email
- Note down the **Service ID** (e.g., `service_abc123xyz`)

### 4. Create an Email Template
- In EmailJS dashboard, click on **Email Templates**
- Click **Create New Template**
- Use these template variables:

```
Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}

Message:
{{user_message}}
```

- Set the **To Email** field to: `{{admin_email}}`
- Set the **Subject** to: `New Contact Form Submission`
- Click **Save**
- Note down the **Template ID** (e.g., `template_abc123xyz`)

### 5. Update Contact Form Component
- Open `src/components/contact.jsx`
- Replace these placeholders with your actual credentials:

```javascript
// Line ~18: Replace YOUR_PUBLIC_KEY_HERE
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Line ~41: Replace SERVICE_ID_HERE and TEMPLATE_ID_HERE
await emailjs.send(
  "SERVICE_ID_HERE",      // Your EmailJS Service ID
  "TEMPLATE_ID_HERE",     // Your EmailJS Template ID
  templateParams
);
```

### Example:
```javascript
emailjs.init("k1234567890abcdefg");

await emailjs.send(
  "service_a1b2c3d4e5f6g7h8",
  "template_x9y8z7w6v5u4t3",
  templateParams
);
```

## How It Works

When a user submits the contact form:
1. The form captures: Name, Email, Phone, and Message
2. EmailJS sends an email to **aarushpal876@gmail.com** with all the details
3. User sees a success/error message

## Testing

1. Fill out the contact form with test data
2. Click "Join Now"
3. You should receive an email at aarushpal876@gmail.com within a few seconds

## Troubleshooting

- **Email not sending?** Check browser console (F12) for error messages
- **Wrong email template?** Make sure template variables match exactly: `{{user_name}}`, `{{user_email}}`, etc.
- **Rate limited?** Free EmailJS has usage limits. Check your quota in the dashboard.

## Free Plan Limits

EmailJS free plan includes:
- Up to 200 emails per month
- Perfect for a small fitness gym

For more emails, upgrade to a paid plan.
