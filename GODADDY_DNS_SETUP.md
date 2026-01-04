# 🔧 Connect petpal24.co.uk from GoDaddy to Vercel

## Your Domain Details
- **Domain:** petpal24.co.uk
- **Registrar:** GoDaddy
- **Current Status:** Site is live but showing wrong content

---

## Step-by-Step: Connect to Vercel

### Step 1: Add Domain in Vercel

1. **Go to Vercel Dashboard:** https://vercel.com/dashboard
2. **Click on your PetPal project**
3. **Go to "Settings" tab** → **"Domains"**
4. **Click "Add Domain"**
5. **Enter:** `petpal24.co.uk`
6. **Click "Add"**
7. **Also add:** `www.petpal24.co.uk` (for www version)

Vercel will show you DNS records to add. They'll look like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Copy these exact values!**

---

### Step 2: Update DNS in GoDaddy

1. **Log into GoDaddy:** https://www.godaddy.com
2. **Click "My Products"** (top right)
3. **Find "petpal24.co.uk"** → Click **"DNS"** button
4. **You'll see DNS Management page**

#### Delete Old Records (if any):
- Look for existing **A records** and **CNAME records**
- Delete any that point to other services
- Keep MX records (for email) if you use email

#### Add New Records:

**Add A Record:**
1. Click **"Add"** button
2. Select **"A"** from dropdown
3. Fill in:
   - **Name:** `@` (or leave blank, or type `petpal24.co.uk`)
   - **Value:** `76.76.21.21` (use the IP Vercel gave you)
   - **TTL:** 600 (or 1 hour)
4. Click **"Save"**

**Add CNAME Record:**
1. Click **"Add"** button again
2. Select **"CNAME"** from dropdown
3. Fill in:
   - **Name:** `www`
   - **Value:** `cname.vercel-dns.com` (use the value Vercel gave you)
   - **TTL:** 600 (or 1 hour)
4. Click **"Save"**

---

### Step 3: Wait for DNS Propagation

- **Usually takes:** 5-60 minutes
- **Can take up to:** 24 hours (rare)
- **Check in Vercel:** Settings → Domains → Should show "Valid Configuration" when ready

---

### Step 4: Verify It's Working

1. **Wait 10-15 minutes** after updating DNS
2. **Visit:** https://petpal24.co.uk
3. **You should see your PetPal website** (landing page, blog, etc.)
4. **Also test:** https://www.petpal24.co.uk

---

## Troubleshooting

### Still Seeing Old Content?

1. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Or use Incognito/Private mode

2. **Check DNS propagation:**
   - Go to: https://dnschecker.org
   - Enter: `petpal24.co.uk`
   - Check if A record shows Vercel's IP

3. **Verify in Vercel:**
   - Go to Vercel → Project → Settings → Domains
   - Check status shows "Valid Configuration"

### Domain Not Connecting?

1. **Double-check DNS records** match exactly what Vercel shows
2. **Make sure you saved** the DNS changes in GoDaddy
3. **Wait longer** (DNS can be slow)
4. **Check Vercel dashboard** for any error messages

### SSL Certificate Issues?

Vercel provides free SSL automatically. If you see "Not Secure":
- Wait 5-10 minutes after DNS connects
- Vercel needs time to issue the certificate
- Try again in a few minutes

---

## Quick Checklist

- [ ] Added `petpal24.co.uk` in Vercel
- [ ] Added `www.petpal24.co.uk` in Vercel
- [ ] Copied DNS values from Vercel
- [ ] Updated A record in GoDaddy (@ → Vercel IP)
- [ ] Updated CNAME record in GoDaddy (www → Vercel CNAME)
- [ ] Waited 10-60 minutes
- [ ] Tested https://petpal24.co.uk
- [ ] Tested https://www.petpal24.co.uk
- [ ] Both show your PetPal website correctly

---

## Need Help?

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Chat: Available on GoDaddy website

**Vercel Support:**
- Check dashboard for specific errors
- Docs: https://vercel.com/docs/concepts/projects/domains

---

**Once DNS propagates, your PetPal website will be live at petpal24.co.uk!** 🎉

