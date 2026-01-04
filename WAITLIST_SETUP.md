# 📋 Waitlist Setup Guide

## ✅ What's Been Implemented

### Frontend (Complete)
- ✅ WaitlistDialog component with form (name, email, phone)
- ✅ Form validation using Zod
- ✅ Matches your existing design system (fonts, colors, styles)
- ✅ Integrated into:
  - Hero section
  - CTA section
  - Header navigation
  - Blog post pages
- ✅ Toast notifications on success/error

### Backend (API Route Created)
- ✅ API endpoint: `/api/waitlist`
- ✅ Handles POST requests
- ✅ Validates input data
- ✅ Currently logs data to Vercel function logs

---

## 🔧 Next Step: Data Storage Setup

The API route is currently logging data. You need to choose how to store the waitlist data:

### Option 1: Google Sheets (Easiest - Recommended)

**Setup Steps:**
1. Create a Google Sheet with columns: Name | Email | Phone | Date
2. Install Google Apps Script or use a service like Zapier
3. Update `api/waitlist.ts` to send data to Google Sheets

**Pros:**
- Free
- Easy to view/manage data
- No database needed
- Export to CSV anytime

---

### Option 2: Email Notifications

**Setup Steps:**
1. Use an email service (Resend, SendGrid, etc.)
2. Update API route to send email with form data
3. Get notifications when someone signs up

**Pros:**
- Simple setup
- Get notified immediately
- No database needed

**Example using Resend:**
```typescript
// Install: npm install resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'PetPal <noreply@petpal24.co.uk>',
  to: 'your-email@example.com',
  subject: 'New Waitlist Signup',
  html: `
    <h2>New Waitlist Signup</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${new Date().toISOString()}</p>
  `,
});
```

---

### Option 3: Vercel Postgres (Database)

**Setup Steps:**
1. Install Vercel Postgres: `npm install @vercel/postgres`
2. Create table in Vercel dashboard
3. Update API route to insert data

**Pros:**
- Proper database
- Scalable
- Easy queries
- Built into Vercel

---

### Option 4: Simple Webhook

Send data to an external service (Zapier, Make, etc.) via webhook.

---

## 📊 Current Status

**Right Now:**
- Form works and validates
- API receives data
- Data is logged to Vercel function logs (you can see it in Vercel dashboard)
- Success/error messages show to users

**To View Current Data:**
1. Go to Vercel Dashboard
2. Your Project → Functions
3. Click on function logs
4. See waitlist submissions in logs

---

## 🚀 Testing

1. **Test Locally:**
   ```bash
   npm run dev
   ```
   - Click "Join Waitlist" button
   - Fill out form
   - Submit
   - Check browser console for API call

2. **Test on Vercel:**
   - Deploy to Vercel
   - Visit your live site
   - Submit form
   - Check Vercel function logs

---

## 📝 Quick Data Storage Setup (Google Sheets)

If you want to set up Google Sheets quickly:

1. **Create Google Sheet:**
   - Go to Google Sheets
   - Create new sheet
   - Add headers: Name, Email, Phone, Date

2. **Set up Google Apps Script:**
   - Tools → Script Editor
   - Create web app that receives POST requests
   - Deploy as web app

3. **Update API Route:**
   - Add Google Sheets API integration
   - Or use a simpler service like Formspree

---

## 💡 Recommendation

For quick setup: Use **Email Notifications** (Option 2)
- Setup takes 10 minutes
- Get notified immediately
- You can export emails later
- Simple and reliable

For long-term: Use **Google Sheets** (Option 1)
- Easy to manage
- Free forever
- Export data anytime

---

## 🎯 What Works Now

Even without data storage configured, the waitlist form:
- ✅ Collects user information
- ✅ Validates inputs
- ✅ Shows success/error messages
- ✅ Logs data to Vercel (you can see it in dashboard)
- ✅ Looks great and matches your design

You can start collecting waitlist signups now and set up permanent storage later!

---

**Need help setting up data storage? Let me know which option you prefer!**


