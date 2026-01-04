# 📊 How to Access Waitlist Data

## ✅ Email Notifications (Setup Complete!)

**The code is now ready!** Every time someone signs up for your waitlist, you'll receive an email with their details.

### What You'll Get:

Every time someone signs up, you'll receive an email like:
```
Subject: New Waitlist Signup 🐾

Name: John Doe
Email: john@example.com
Phone: +44 123 456 7890
Date: January 15, 2024 at 10:30 AM
```

---

## 🚀 Setup Steps

**Follow the detailed guide:** See `WAITLIST_EMAIL_SETUP.md` for complete setup instructions.

**Quick Summary:**
1. Create free Resend account (https://resend.com)
2. Get API key from Resend dashboard
3. Add environment variables to Vercel:
   - `RESEND_API_KEY` = your API key
   - `WAITLIST_EMAIL` = your email address
4. Redeploy your site

**Free Tier:** 100 emails/month (perfect for waitlist!)

---

## 🔍 Fallback: Vercel Function Logs

Even with email setup, data is also logged to Vercel function logs as a backup:

1. **Go to Vercel Dashboard:** https://vercel.com/dashboard
2. **Select your project** (petpal24)
3. **Click on "Functions"** in the left sidebar
4. **Click on "waitlist"** function
5. **View "Logs"** tab

You'll see entries like:
```
Waitlist signup: {
  name: "John Doe",
  email: "john@example.com",
  phone: "+44 123 456 7890",
  timestamp: "2024-01-15T10:30:00Z"
}
```

**Note:** The code will still log even if email is not configured, so you always have access to the data!

---

## 📋 Alternative Solutions (For Later)

If you need more advanced storage later:

### Option 2: Google Sheets
- Data automatically saved to a Google Sheet
- Easy to view, export, and manage
- Free forever
- Requires Google Cloud setup (more complex)

### Option 3: Database (Vercel Postgres)
- Proper database storage
- Best for scale
- Requires database setup

---

## 🎯 Current Status

✅ **Code updated** - Email notifications ready
✅ **Resend package installed** - Dependencies added
📋 **Next step:** Follow `WAITLIST_EMAIL_SETUP.md` to configure your account

Once setup is complete, you'll receive emails automatically! 🚀

