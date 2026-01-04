# 🚀 Deployment Guide: Launching Your PetPal Website

This guide will walk you through deploying your website so it's live on the internet and searchable by Google and other search engines.

## 📋 Quick Overview

**Best Options for Free Deployment:**
1. **Vercel** (Recommended) - Easiest, automatic deployments, free SSL
2. **Netlify** - Great alternative, also free
3. **GitHub Pages** - Free but requires more setup

**Time to Deploy:** 5-15 minutes

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest option and perfect for React/Vite projects. It's free and includes:
- ✅ Automatic HTTPS/SSL
- ✅ Custom domain support
- ✅ Automatic deployments from Git
- ✅ Fast global CDN
- ✅ Free forever for personal projects

### Step 1: Prepare Your Code

First, make sure your code is ready:

```bash
# Build the project to test it works
npm run build
```

If this works without errors, you're ready!

### Step 2: Push to GitHub

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository:**
   - Go to https://github.com/new
   - Name it: `petpal-website` (or any name you like)
   - Make it **Public** (required for free hosting)
   - Click "Create repository"

3. **Push your code to GitHub:**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - PetPal website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/petpal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Go to Vercel:** https://vercel.com
2. **Sign up** (use your GitHub account - it's easiest)
3. **Click "Add New Project"**
4. **Import your GitHub repository:**
   - Select your `petpal-website` repository
   - Click "Import"
5. **Configure project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
   - **Install Command:** `npm install` (should be auto-filled)
6. **Click "Deploy"**
7. **Wait 1-2 minutes** - Vercel will build and deploy your site
8. **Done!** You'll get a URL like: `https://petpal-website.vercel.app`

### Step 4: Custom Domain (Optional)

If you have a domain (e.g., `petpal.com`):

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow Vercel's instructions to update your DNS

---

## Option 2: Deploy to Netlify

Netlify is another excellent free option with similar features.

### Step 1: Build Your Project

```bash
npm run build
```

### Step 2: Push to GitHub

Same as Vercel - push your code to GitHub first.

### Step 3: Deploy to Netlify

1. **Go to Netlify:** https://www.netlify.com
2. **Sign up** (use GitHub for easiest setup)
3. **Click "Add new site" → "Import an existing project"**
4. **Connect to GitHub** and select your repository
5. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. **Click "Deploy site"**
7. **Done!** You'll get a URL like: `https://petpal-website.netlify.app`

---

## Option 3: Deploy to GitHub Pages

This is free but requires more manual setup.

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/petpal-website"
}
```

### Step 3: Deploy

```bash
npm run deploy
```

Your site will be at: `https://YOUR_USERNAME.github.io/petpal-website`

---

## 🔍 Making Your Website Searchable (SEO)

Once your site is live, you need to make it discoverable by Google and other search engines.

### 1. Submit to Google Search Console

1. **Go to:** https://search.google.com/search-console
2. **Add your property** (your website URL)
3. **Verify ownership** (Vercel/Netlify provide easy verification)
4. **Submit your sitemap** (see below)

### 2. Create a Sitemap

Create a file `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-website-url.com/</loc>
    <lastmod>2026-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-website-url.com/blog</loc>
    <lastmod>2026-01-15</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://your-website-url.com/sitemap.xml
```

### 4. Improve SEO in Your Code

Your `index.html` already has good meta tags! Make sure to:
- ✅ Update the canonical URL in `index.html` to your actual domain
- ✅ Add more specific meta descriptions for blog posts
- ✅ Use descriptive alt text for images
- ✅ Create quality content (which you already have!)

### 5. Share Your Website

- Share on social media
- Submit to directories
- Link from other websites
- Create backlinks

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Free)

1. **Get a tracking ID:** https://analytics.google.com
2. **Add to your `index.html`** in the `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors on Routes

If you're using React Router, you need to configure your hosting:

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

### Images Not Loading

Make sure image URLs are correct and accessible. If using local images, they should be in the `public/` folder.

---

## ✅ Checklist Before Deploying

- [ ] Test `npm run build` works locally
- [ ] Update `index.html` with correct canonical URL
- [ ] Check all images load correctly
- [ ] Test all pages and links work
- [ ] Verify mobile responsiveness
- [ ] Add robots.txt and sitemap.xml
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Submit to Google Search Console
- [ ] Test the live website

---

## 🎉 You're Live!

Once deployed, your website will be:
- ✅ Accessible worldwide
- ✅ Searchable by Google (after indexing)
- ✅ Fast and secure (HTTPS)
- ✅ Mobile-friendly

**Next Steps:**
1. Share your website URL
2. Submit to Google Search Console
3. Share on social media
4. Monitor analytics
5. Keep adding great content!

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Google Search Console:** https://search.google.com/search-console

**Common Issues:**
- If deployment fails, check the build logs
- Make sure all dependencies are in `package.json`
- Verify your build command is correct

