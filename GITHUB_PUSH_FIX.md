# 🔧 Fix GitHub Push Authentication Issue

## Problem
Getting authentication errors when pushing to GitHub:
- "Invalid username or token. Password authentication is not supported"
- "Repository not found"

---

## Solution 1: Use Personal Access Token (Recommended)

GitHub doesn't accept passwords anymore. You need a **Personal Access Token**.

### Step 1: Create Personal Access Token

1. **Go to:** https://github.com/settings/tokens
2. **Click:** "Generate new token" → "Generate new token (classic)"
3. **Name it:** "PetPal Website" (or any name)
4. **Expiration:** Choose 90 days or longer
5. **Check the box:** `repo` (this gives access to repositories)
6. **Scroll down** → Click **"Generate token"**
7. **COPY THE TOKEN** (you'll only see it once!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Use Token When Pushing

When you run `git push` and it asks for password:
- **Username:** `Suyash24-pixel`
- **Password:** Paste the **token** you just copied (not your GitHub password)

---

## Solution 2: Repository Not Found

If you see "Repository not found", the repository might not exist on GitHub.

### Check if Repository Exists

1. **Go to:** https://github.com/Suyash24-pixel/petpal-website
2. **Does it exist?**
   - ✅ **Yes** → Use the token (Solution 1)
   - ❌ **No** → Create it (see below)

### Create Repository on GitHub

1. **Go to:** https://github.com/new
2. **Repository name:** `petpal-website`
3. **Make it:** Public (required for free hosting)
4. **DON'T** check any boxes (no README, no .gitignore)
5. **Click:** "Create repository"
6. **Then push again**

---

## Quick Fix Commands

After creating the token, try pushing again:

```bash
cd /Users/suyashgangurde/PetPalWebsite
git push -u origin main
```

When prompted:
- **Username:** `Suyash24-pixel`
- **Password:** Paste your Personal Access Token (starts with `ghp_`)

---

## Alternative: Use SSH (More Secure)

If you want to avoid tokens each time:

1. **Generate SSH key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH Keys → Add new
   - Paste the key

3. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:Suyash24-pixel/petpal-website.git
   ```

4. **Push:**
   ```bash
   git push -u origin main
   ```

---

## What to Do Right Now

1. **Create Personal Access Token** (5 minutes)
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Check `repo` box
   - Copy the token

2. **Push again:**
   ```bash
   git push -u origin main
   ```
   - Username: `Suyash24-pixel`
   - Password: Paste your token

3. **Done!** Your code will be pushed to GitHub

---

**The token method is the quickest fix. Try that first!**

