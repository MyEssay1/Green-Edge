# Green Edge Landscaping — Website Setup Guide

This folder contains all the files for your website. Follow the steps below to get it live on GitHub Pages with your custom domain and HTTPS security.

---

## 📁 Files Included

| File | Description |
|---|---|
| `index.html` | Homepage |
| `services.html` | Services detail page |
| `about.html` | About us / team page |
| `contact.html` | Contact form + free estimate |
| `style.css` | All shared styles |

---

## 🚀 Step 1: Create a GitHub Account

1. Go to **https://github.com**
2. Click **Sign Up** and create a free account
3. Verify your email address

---

## 📂 Step 2: Create a New Repository

1. Once logged in, click the **+** icon (top right) → **New repository**
2. Repository name: `greenedge-website` (or anything you like)
3. Set it to **Public**
4. Leave everything else as default
5. Click **Create repository**

---

## ⬆️ Step 3: Upload Your Files

1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL the files from this folder:
   - `index.html`
   - `services.html`
   - `about.html`
   - `contact.html`
   - `style.css`
3. Scroll down and click **Commit changes**

---

## ⚙️ Step 4: Enable GitHub Pages

1. In your repository, click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and folder **/ (root)**
5. Click **Save**

GitHub will build your site. After about 1–2 minutes, it will be live at:
`https://YOUR-USERNAME.github.io/greenedge-website/`

---

## 🌐 Step 5: Connect Your Custom Domain

### In GitHub:
1. Go to **Settings → Pages**
2. Under **Custom domain**, type your domain (e.g. `www.greenedgelandscaping.com`)
3. Click **Save**
4. Check the box **Enforce HTTPS** (this gives you the security padlock 🔒)

### In your Domain Registrar (where you bought the domain):
You need to add DNS records. Log in to your registrar (GoDaddy, Namecheap, Google Domains, etc.) and add:

#### For a `www` subdomain (recommended):
Add a **CNAME record**:
| Type | Host | Value |
|---|---|---|
| CNAME | www | YOUR-USERNAME.github.io |

#### For the root domain (optional, so both work):
Add these **4 A records** pointing to GitHub's servers:
| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

> ⏱️ DNS changes can take anywhere from a few minutes to 24 hours to fully propagate. Once it does, your site will be live at your custom domain with automatic HTTPS.

---

## 📬 Step 6: Set Up the Contact Form

The contact form uses **Formspree** — a free service that sends form submissions to your email.

1. Go to **https://formspree.io** and create a free account
2. Click **New Form**, name it "Green Edge Estimate Requests"
3. Copy your unique **Form ID** (looks like: `xkndbvgj`)
4. Open `contact.html` in a text editor
5. Find this line:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
6. Replace `YOUR_FORM_ID` with your actual Formspree form ID
7. Re-upload `contact.html` to GitHub (drag and drop again, it will replace the old one)

Form submissions will now go directly to your email: Greenedgelandscapingwi@gmail.com

The free Formspree plan allows 50 submissions/month — more than enough to start.

---

## 🔒 Security Summary

| Feature | Status |
|---|---|
| HTTPS / SSL Certificate | ✅ Automatic via GitHub Pages |
| Secure contact form | ✅ Formspree (no spam bots) |
| No server to hack | ✅ Static files only |
| Two-factor auth (GitHub) | ⚠️ Enable this in GitHub Settings → Security |

---

## 📸 Adding Your Own Photos

Look for placeholder sections in each page with text like:
> "Hero Photo — Your Best Work Here"
> "Groundskeeping Photo"
> "Nathan's Photo"

To add real photos:
1. Add image files to your repository (e.g. `hero.jpg`, `team-nathan.jpg`)
2. Replace placeholder `<div>` blocks with `<img>` tags:
   ```html
   <img src="hero.jpg" alt="Green Edge Landscaping crew at work" />
   ```

---

## ❓ Need Help?

Call or text Nathan or Alec — or ask Claude for help with any of these steps!
