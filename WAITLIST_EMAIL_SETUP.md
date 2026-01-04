# 📧 Premium Waitlist Email Notifications Setup Guide

## ✅ What's Been Done

**Ultra-Premium Email Templates Created!** 🎨

The code is now ready with **luxury-grade email templates** that match the PetPal brand aesthetic:

✅ **Premium notification email** - Sent to you when someone signs up  
✅ **Premium welcome email** - Optional thank you email sent to users  
✅ **Brand-matched design** - Purple gradient headers, clean typography, spacious layout  
✅ **Professional tone** - Warm, premium, ultra-luxury feel

Every time someone signs up for your waitlist, you'll receive a beautifully designed email with their details (name, email, phone, date).

---

## 🚀 Setup Steps (5 minutes)

### Step 1: Create a Resend Account

1. **Go to Resend:** https://resend.com
2. **Click "Sign Up"** (use Google account for faster setup)
3. **Verify your email address**
4. **Complete the signup**

**Free Tier:** 100 emails/month (perfect for a waitlist!)

---

### Step 2: Get Your API Key

1. **Log in to Resend Dashboard**
2. **Click "API Keys"** in the left sidebar
3. **Click "Create API Key"**
4. **Give it a name:** "PetPal Waitlist"
5. **Select permission:** "Sending access"
6. **Click "Add"**
7. **Copy the API key** (starts with `re_` - you'll only see it once!)

⚠️ **Important:** Save this key somewhere safe!

---

### Step 3: Set Up Domain (Optional but Recommended)

**Option A: Use Resend's Test Domain (Quickest - For Testing)**
- You can use `onboarding@resend.dev` as the "from" email
- Works immediately, no setup needed
- Good for testing

**Option B: Use Your Own Domain (Professional)**
1. In Resend Dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter: `petpal24.co.uk`
4. Follow the DNS setup instructions
5. Add the DNS records to GoDaddy (same way you did for Vercel)
6. Wait for verification (usually a few minutes)

---

### Step 4: Add Environment Variables to Vercel

1. **Go to Vercel Dashboard:** https://vercel.com/dashboard
2. **Select your project** (petpal24)
3. **Click "Settings"** tab
4. **Click "Environment Variables"** in the left sidebar
5. **Add these variables:**

   **Variable 1:**
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your API key from Step 2 (starts with `re_`)
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   
   **Variable 2:**
   - **Key:** `WAITLIST_EMAIL`
   - **Value:** `hello@petpal24.co.uk` (your notification email)
   - **This is where you'll receive notifications when someone signs up**
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development

   **Variable 3 (Recommended for Professional Look):**
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `PetPal <noreply@petpal24.co.uk>`
   - **This appears as the "from" address on all emails**
   - **Note:** You'll need to set up `petpal24.co.uk` domain in Resend first, or use `PetPal <onboarding@resend.dev>` for testing
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development

   **Variable 4 (Enable Premium Welcome Email):**
   - **Key:** `SEND_WELCOME_EMAIL`
   - **Value:** `true`
   - **This sends a beautiful welcome email to users who sign up**
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development

6. **Click "Save"** for each variable

---

### Step 5: Redeploy Your Site

After adding environment variables, Vercel needs to redeploy:

1. **Go to Vercel Dashboard → Your Project**
2. **Click "Deployments"** tab
3. **Click the three dots (⋯)** on the latest deployment
4. **Click "Redeploy"**
5. **Wait for deployment to complete** (1-2 minutes)

**OR** just push a new commit to trigger a new deployment:
```bash
git add .
git commit -m "Add email notifications setup"
git push
```

---

## ✅ Testing

1. **Go to your live website:** https://petpal24.co.uk
2. **Click "Join Waitlist"** button
3. **Fill out the form:**
   - Name: Test User
   - Email: test@example.com
   - Phone: +44 123 456 7890
4. **Submit the form**
5. **Check your email!** 📧

You should receive a **premium-designed email** with:
- Beautiful purple gradient header
- Clean, spacious layout
- All signup details clearly displayed
- Quick action button to reply

**If `SEND_WELCOME_EMAIL=true`:**
- The user will also receive a premium welcome email
- Beautiful thank you message
- Information about what's next
- Matches PetPal brand aesthetic

---

## 🔍 Troubleshooting

### No emails received?

1. **Check Vercel logs:**
   - Vercel Dashboard → Your Project → Functions → waitlist → Logs
   - Look for error messages

2. **Check environment variables:**
   - Make sure `RESEND_API_KEY` and `WAITLIST_EMAIL` are set
   - Make sure they're set for "Production" environment
   - Redeploy after adding variables

3. **Check spam folder:**
   - Sometimes emails go to spam initially

4. **Verify API key:**
   - Make sure you copied the full key (starts with `re_`)
   - Try creating a new API key if needed

### Still not working?

The code will still log to Vercel function logs even if email fails, so you can still see submissions there while fixing email setup.

---

## 📊 What Happens Now?

✅ **Every waitlist signup triggers:**
1. **User Welcome Email** (if `SEND_WELCOME_EMAIL=true`)
   - Beautiful welcome email sent to the user
   - Premium thank you message
   - Sets expectations about waitlist
   - Subject: "Welcome to PetPal! You're on the list 🎉"

2. **Owner Notification Email**
   - Premium notification sent to `hello@petpal24.co.uk`
   - All signup details (name, email, phone, date)
   - Quick reply button
   - Subject: "New Waitlist Signup 🐾"

3. **Data Backup**
   - Also logged to Vercel function logs
   - Always accessible as backup

4. **User Experience**
   - User sees success message on website
   - Receives beautiful welcome email
   - Premium brand experience throughout

---

## 💡 Tips

- **Keep your API key secure** - Never commit it to GitHub
- **100 emails/month is free** - Perfect for waitlist
- **Upgrade later if needed** - Resend has affordable paid plans
- **Use your domain** - Makes emails look more professional

---

## 🎉 You're All Set!

Once setup is complete, you'll receive an email every time someone signs up for your waitlist. Easy to track, easy to manage! 🚀

