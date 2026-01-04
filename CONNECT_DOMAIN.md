# 🌐 Connect Your Domain to Vercel

## Quick Steps to Connect Your Domain

### Step 1: Add Domain in Vercel

1. **Go to your Vercel Dashboard:** https://vercel.com/dashboard
2. **Click on your PetPal project**
3. **Go to "Settings" tab** (top menu)
4. **Click "Domains"** (left sidebar)
5. **Click "Add Domain"**
6. **Enter your domain** (e.g., `petpal.com` or `www.petpal.com`)
7. **Click "Add"**

### Step 2: Get DNS Settings from Vercel

After adding the domain, Vercel will show you DNS records you need to add. It will look something like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**Copy these values!** You'll need them in the next step.

### Step 3: Update DNS at Your Domain Registrar

Where did you buy your domain? Follow the instructions below:

---

## If You Bought from GoDaddy:

1. **Log into GoDaddy:** https://www.godaddy.com
2. **Go to "My Products"**
3. **Find your domain** → Click "DNS" or "Manage DNS"
4. **Click "Manage DNS"**
5. **Delete old A and CNAME records** (if any exist)
6. **Add new records** using Vercel's values:
   - Click "Add" → Choose "A"
     - Name: `@`
     - Value: `76.76.21.21` (use Vercel's IP)
     - TTL: 600 (or default)
   - Click "Add" → Choose "CNAME"
     - Name: `www`
     - Value: `cname.vercel-dns.com` (use Vercel's value)
     - TTL: 600 (or default)
7. **Save changes**

---

## If You Bought from Namecheap:

1. **Log into Namecheap:** https://www.namecheap.com
2. **Go to "Domain List"**
3. **Click "Manage"** next to your domain
4. **Go to "Advanced DNS" tab**
5. **Add records:**
   - Add A Record: `@` → `76.76.21.21` (Vercel's IP)
   - Add CNAME Record: `www` → `cname.vercel-dns.com` (Vercel's value)
6. **Save**

---

## If You Bought from Google Domains:

1. **Go to:** https://domains.google.com
2. **Click on your domain**
3. **Go to "DNS" section**
4. **Add custom records:**
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
5. **Save**

---

## If You Bought from Another Provider:

The process is similar:
1. Find "DNS Management" or "DNS Settings"
2. Add A record for `@` (root domain)
3. Add CNAME record for `www`
4. Use the values Vercel provided

---

## Step 4: Wait for DNS Propagation

- **Usually takes:** 5-60 minutes
- **Can take up to:** 24-48 hours (rare)
- **Check status:** Vercel dashboard will show when it's connected

### How to Check:

1. Go back to Vercel → Your Project → Settings → Domains
2. You'll see the status:
   - ⏳ "Pending" = Still propagating
   - ✅ "Valid Configuration" = Connected and working!

---

## Step 5: Test Your Domain

Once DNS propagates:

1. **Visit your domain:** `https://yourdomain.com`
2. **Test www version:** `https://www.yourdomain.com`
3. **Both should work!**

---

## Troubleshooting

### Domain Not Working After 1 Hour?

1. **Check DNS records match exactly** (no typos)
2. **Wait longer** (can take up to 24 hours)
3. **Check Vercel dashboard** for error messages
4. **Verify DNS propagation:** Use https://dnschecker.org

### SSL Certificate Issues?

Vercel automatically provides free SSL certificates. If you see SSL errors:
- Wait 5-10 minutes after DNS connects
- Clear your browser cache
- Try incognito/private mode

### Only www or only root works?

Make sure you added BOTH:
- A record for `@` (root domain)
- CNAME for `www` (www subdomain)

---

## Quick Checklist

- [ ] Added domain in Vercel dashboard
- [ ] Copied DNS settings from Vercel
- [ ] Updated DNS at domain registrar
- [ ] Waited for propagation (5-60 min)
- [ ] Tested domain in browser
- [ ] Both www and root domain work

---

## Need Help?

**Common Issues:**
- Can't find DNS settings? Look for "DNS Management" or "Name Servers"
- Records not saving? Make sure you're using the exact values from Vercel
- Still not working? Wait a bit longer, DNS can be slow

**Vercel Support:**
- Check Vercel dashboard for specific error messages
- Vercel docs: https://vercel.com/docs/concepts/projects/domains

---

**You're almost there!** Once DNS propagates, your site will be live at your custom domain! 🎉


