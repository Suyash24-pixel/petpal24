# 🔧 Vercel Environment Variables Setup

## Quick Reference for Your PetPal Waitlist

Copy and paste these exact values into Vercel:

---

## 📋 Environment Variables to Add

### 1. RESEND_API_KEY
- **Key:** `RESEND_API_KEY`
- **Value:** `re_xxxxxxxxxxxxx` (your API key from Resend)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- **Get this from:** Resend Dashboard → API Keys

---

### 2. WAITLIST_EMAIL
- **Key:** `WAITLIST_EMAIL`
- **Value:** `hello@petpal24.co.uk`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- **Purpose:** Where you receive notifications when someone signs up

---

### 3. RESEND_FROM_EMAIL
- **Key:** `RESEND_FROM_EMAIL`
- **Value:** `PetPal <noreply@petpal24.co.uk>`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- **Purpose:** The "from" address on all emails
- **Note:** Set up `petpal24.co.uk` domain in Resend first, or use `PetPal <onboarding@resend.dev>` for testing

---

### 4. SEND_WELCOME_EMAIL
- **Key:** `SEND_WELCOME_EMAIL`
- **Value:** `true`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- **Purpose:** Enable premium welcome emails for users who sign up

---

## 🚀 Setup Steps

1. **Get Resend API Key:**
   - Go to https://resend.com
   - Sign up / Log in
   - Dashboard → API Keys → Create API Key
   - Copy the key (starts with `re_`)

2. **Set Up Domain in Resend (Recommended):**
   - Resend Dashboard → Domains → Add Domain
   - Enter: `petpal24.co.uk`
   - Follow DNS setup instructions
   - Add DNS records to GoDaddy
   - Wait for verification

   **OR use test domain for now:**
   - Use `PetPal <onboarding@resend.dev>` for `RESEND_FROM_EMAIL`
   - Works immediately, upgrade later

3. **Add All Variables to Vercel:**
   - Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all 4 variables above
   - Make sure all are enabled for Production, Preview, Development
   - Click "Save"

4. **Redeploy:**
   - Vercel Dashboard → Deployments
   - Click "Redeploy" on latest deployment
   - OR push a new commit to trigger deployment

---

## ✅ What Happens Next

Once setup is complete:

1. **Owner Notification Email:**
   - Sent to: `hello@petpal24.co.uk`
   - Every time someone signs up
   - Premium design with all details

2. **User Welcome Email:**
   - Sent to: The person who signed up
   - Beautiful welcome message
   - Sets expectations
   - Premium brand experience

3. **Data Backup:**
   - Also logged to Vercel function logs
   - Always accessible

---

## 📧 Email Preview

**Owner Notification:**
- Subject: "New Waitlist Signup 🐾"
- Beautiful purple gradient header
- Clean layout with name, email, phone, date
- Quick reply button

**User Welcome:**
- Subject: "Welcome to PetPal! You're on the list 🎉"
- Warm welcome message
- What to expect next
- Premium PetPal branding

---

## 🎉 You're All Set!

Once these variables are added and the site is redeployed, your premium email system will be live! 🚀

