# 🔧 Waitlist Form Troubleshooting

## Issue: Form works on localhost but not on live site

### What I've Fixed:

1. ✅ Installed `@vercel/node` package (required for API routes)
2. ✅ Updated `vercel.json` to exclude API routes from rewrite rule
3. ✅ Improved error handling in WaitlistDialog component
4. ✅ Added better error logging

---

## Quick Fixes to Try:

### 1. Redeploy to Vercel

After these changes, you need to redeploy:

```bash
git add .
git commit -m "Fix waitlist API route for Vercel"
git push
```

Wait for Vercel to deploy, then test again.

---

### 2. Check Vercel Function Logs

1. Go to Vercel Dashboard
2. Your Project → Functions tab
3. Look for `api/waitlist` function
4. Check the logs when you submit the form
5. See what error appears (if any)

---

### 3. Test API Route Directly

Test the API route directly in your browser or using curl:

```bash
curl -X POST https://petpal24.co.uk/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"1234567890"}'
```

Or visit in browser (should show "Method not allowed" for GET, which is correct).

---

### 4. Check Browser Console

1. Open your live website
2. Open browser DevTools (F12)
3. Go to Console tab
4. Try submitting the form
5. Look for any error messages
6. Check Network tab to see if the API call is being made

---

## Common Issues:

### Issue 1: API Route Not Found (404)

**Symptom:** Network tab shows 404 for `/api/waitlist`

**Fix:**
- Make sure `api/waitlist.ts` is in the root `api/` folder
- Redeploy to Vercel
- Check Vercel dashboard shows the function

---

### Issue 2: CORS Error

**Symptom:** Browser console shows CORS error

**Fix:**
- The API route already has CORS headers
- If still an issue, check the CORS settings in the API route

---

### Issue 3: 500 Internal Server Error

**Symptom:** Form submits but shows error

**Fix:**
- Check Vercel function logs
- Look for the actual error message
- The API route might need `@vercel/node` (already installed)

---

### Issue 4: Network Error

**Symptom:** "Network request failed" or similar

**Fix:**
- Check if API route is deployed
- Verify the URL is correct
- Check Vercel dashboard for function status

---

## Verify API Route is Deployed:

1. Go to Vercel Dashboard
2. Your Project → Settings → Functions
3. You should see `api/waitlist.ts` listed
4. If not, the file might not be in the right location

---

## Manual Test:

Open browser console on your live site and run:

```javascript
fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

This will show you the exact error.

---

## Next Steps:

1. **Redeploy** with the fixes I made
2. **Check Vercel logs** to see what's happening
3. **Test the API route directly** using curl or browser
4. **Share the error** you see and I can help fix it

---

**The fixes I made should resolve the issue. Just need to redeploy!**


