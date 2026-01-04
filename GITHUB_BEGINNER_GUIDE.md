T# 📚 GitHub Beginner's Guide - Step by Step

This guide will walk you through using GitHub for the first time to deploy your website.

## 🤔 What is GitHub?

**GitHub is like Google Drive for code:**
- It stores your code online
- You can access it from anywhere
- Others can see it (if you want)
- It works with free hosting services like Vercel

**Think of it as:**
- Google Drive → for files
- GitHub → for code

---

## Step 1: Create a GitHub Account (2 minutes)

1. **Go to:** https://github.com
2. **Click "Sign up"** (top right)
3. **Enter your details:**
   - Username (e.g., `yourname` or `petpal2024`)
   - Email address
   - Password
4. **Verify your email** (check your inbox)
5. **Done!** You now have a GitHub account

---

## Step 2: Install Git on Your Computer

GitHub needs "Git" software on your computer to upload code.

### For Mac (you're on Mac):

Git is usually already installed! Let's check:

```bash
git --version
```

**If it says a version number** (like `git version 2.39.0`), you're good! Skip to Step 3.

**If it says "command not found":**

1. **Install Xcode Command Line Tools:**
   ```bash
   xcode-select --install
   ```
2. **Follow the prompts** (click "Install")
3. **Wait for it to finish** (5-10 minutes)
4. **Try again:** `git --version`

---

## Step 3: Create a Repository on GitHub

A "repository" (or "repo") is like a folder for your project.

1. **Log into GitHub:** https://github.com
2. **Click the "+" icon** (top right) → **"New repository"**
3. **Fill in the details:**
   - **Repository name:** `petpal-website` (or any name you like)
   - **Description:** "PetPal website - pet care app landing page" (optional)
   - **Visibility:** Choose **Public** (required for free hosting)
   - **DO NOT check** "Add a README file" (we'll add files ourselves)
   - **DO NOT check** "Add .gitignore" 
   - **DO NOT check** "Choose a license"
4. **Click "Create repository"**

You'll see a page with instructions - **don't worry about it yet!** We'll do it step by step.

---

## Step 4: Prepare Your Code

Before uploading, let's make sure your code is ready:

```bash
# Make sure you're in your project folder
cd /Users/suyashgangurde/PetPalWebsite

# Test that the build works
npm run build
```

If this works without errors, you're ready!

---

## Step 5: Upload Your Code to GitHub

Now we'll upload your code. **Copy and paste these commands one by one:**

### 5.1: Initialize Git (if not already done)

```bash
cd /Users/suyashgangurde/PetPalWebsite
git init
```

### 5.2: Add All Your Files

```bash
git add .
```

This tells Git to include all your files.

### 5.3: Create Your First Commit

```bash
git commit -m "Initial commit - PetPal website"
```

This saves a "snapshot" of your code.

### 5.4: Connect to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/petpal-website.git
```

**Example:** If your username is `johnsmith`, it would be:
```bash
git remote add origin https://github.com/johnsmith/petpal-website.git
```

### 5.5: Set the Main Branch

```bash
git branch -M main
```

### 5.6: Push to GitHub

```bash
git push -u origin main
```

**You'll be asked for credentials:**
- **Username:** Your GitHub username
- **Password:** You need a **Personal Access Token** (see below)

---

## Step 6: Create a Personal Access Token

GitHub requires a token instead of your password for security.

### 6.1: Create the Token

1. **Go to GitHub:** https://github.com
2. **Click your profile picture** (top right) → **Settings**
3. **Scroll down** → Click **"Developer settings"** (left sidebar)
4. **Click "Personal access tokens"** → **"Tokens (classic)"**
5. **Click "Generate new token"** → **"Generate new token (classic)"**
6. **Fill in:**
   - **Note:** "PetPal Website" (or any name)
   - **Expiration:** 90 days (or longer)
   - **Check the box:** `repo` (this gives access to repositories)
7. **Scroll down** → Click **"Generate token"**
8. **COPY THE TOKEN** (you'll only see it once!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 6.2: Use the Token

When you run `git push` and it asks for password:
- **Username:** Your GitHub username
- **Password:** Paste the token you just copied

---

## Step 7: Verify It Worked

1. **Go to:** https://github.com/YOUR_USERNAME/petpal-website
2. **You should see all your files!** 🎉

If you see your files, **success!** Your code is now on GitHub.

---

## Step 8: Deploy to Vercel (Make It Live!)

Now that your code is on GitHub, let's make it live on the internet:

1. **Go to:** https://vercel.com
2. **Click "Sign Up"**
3. **Choose "Continue with GitHub"**
4. **Authorize Vercel** (click "Authorize")
5. **Click "Add New Project"**
6. **You'll see your repository!** Click **"Import"** next to `petpal-website`
7. **Configure:**
   - **Framework Preset:** Should auto-detect "Vite"
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
8. **Click "Deploy"**
9. **Wait 1-2 minutes** ⏳
10. **Done!** 🎉 You'll get a URL like: `https://petpal-website.vercel.app`

**Your website is now live on the internet!**

---

## 🎯 Quick Command Summary

Here are all the commands in one place (copy and paste):

```bash
# Navigate to your project
cd /Users/suyashgangurde/PetPalWebsite

# Initialize Git
git init

# Add all files
git add .

# Create commit
git commit -m "Initial commit - PetPal website"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/petpal-website.git

# Set main branch
git branch -M main

# Push to GitHub (you'll need your token here)
git push -u origin main
```

---

## 🔄 Making Updates Later

Once your code is on GitHub, updating is easy:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Updated blog post"
git push
```

Vercel will automatically redeploy your site when you push!

---

## ❓ Troubleshooting

### "Command not found: git"
- Install Git (see Step 2)

### "Repository not found"
- Check your username is correct
- Make sure the repository exists on GitHub
- Make sure it's set to "Public"

### "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Check the token hasn't expired
- Make sure the token has `repo` permissions

### "Permission denied"
- Make sure the repository is "Public" (not Private)
- Check your username matches

### "Nothing to commit"
- This is fine! It means everything is already uploaded

---

## 📝 What's Next?

After your code is on GitHub and deployed to Vercel:

1. ✅ Your website is live!
2. ✅ Share the URL with others
3. ✅ Make changes and push updates
4. ✅ Add a custom domain (optional)

---

## 🎓 Learning More

**GitHub Basics:**
- GitHub Docs: https://docs.github.com/en/get-started
- Git Tutorial: https://git-scm.com/docs/gittutorial

**Common Terms:**
- **Repository (Repo):** Your project folder on GitHub
- **Commit:** A saved snapshot of your code
- **Push:** Upload your code to GitHub
- **Pull:** Download code from GitHub
- **Branch:** A version of your code (we use "main")

---

## ✅ Checklist

- [ ] Created GitHub account
- [ ] Installed Git (or verified it's installed)
- [ ] Created repository on GitHub
- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit`
- [ ] Created Personal Access Token
- [ ] Ran `git push` (with token)
- [ ] Verified files are on GitHub
- [ ] Deployed to Vercel
- [ ] Website is live!

---

**You've got this!** 🚀 If you get stuck at any step, let me know which step and I'll help!


