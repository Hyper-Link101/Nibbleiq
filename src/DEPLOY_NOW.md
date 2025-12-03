# 🚀 Deploy NibbleIQ Now - Step by Step

## ✅ What's Ready:
- Google Analytics (G-JZZRKKTYN2) installed ✓
- Hotjar tracking installed ✓
- SEO optimized ✓
- All brand colors updated ✓

## 📋 3 Ways to Deploy (Choose One)

---

### **OPTION 1: Netlify Drop (EASIEST - 2 Minutes)**

**Step 1: Build the site**
```bash
npm run build
```

**Step 2: Deploy**
1. Go to: https://app.netlify.com/drop
2. Drag the **`dist`** folder from your project onto the page
3. Wait 30 seconds - Done!

**Step 3: Connect custom domain**
1. In Netlify dashboard, click "Domain settings"
2. Click "Add custom domain"
3. Enter: **nibbleiq.ai**
4. Follow DNS instructions (usually add A record or CNAME)

---

### **OPTION 2: Netlify CLI (RECOMMENDED - 3 Minutes)**

**Step 1: Install Netlify CLI** (if not installed)
```bash
npm install -g netlify-cli
```

**Step 2: Login to Netlify**
```bash
netlify login
```

**Step 3: Deploy**
```bash
# Build the site
npm run build

# Deploy to production
netlify deploy --prod
```

**Follow prompts:**
- Choose "Create & configure a new site" OR select existing site
- Select your team
- Enter site name: **nibbleiq**
- Publish directory: **dist**

**Step 4: Link custom domain**
```bash
netlify domains:add nibbleiq.ai
```

Follow the DNS instructions provided.

---

### **OPTION 3: Git Push (AUTOMATIC - 5 Minutes Setup)**

**Step 1: Initialize Git** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit with Google Analytics and SEO"
```

**Step 2: Create GitHub Repository**
1. Go to: https://github.com/new
2. Name: **nibbleiq-landing**
3. Don't initialize with README (already have code)
4. Click "Create repository"

**Step 3: Push to GitHub**
```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/nibbleiq-landing.git
git branch -M main
git push -u origin main
```

**Step 4: Connect to Netlify**
1. Go to: https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your repository: **nibbleiq-landing**
5. Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Step 5: Add custom domain**
1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter: **nibbleiq.ai**
4. Follow DNS instructions

---

## 🌐 DNS Setup for nibbleiq.ai

After deployment, configure your domain DNS:

**Option A: Netlify DNS (Easiest)**
1. In Netlify, go to Domain settings
2. Click "Use Netlify DNS"
3. Update nameservers at your domain registrar

**Option B: External DNS**
Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | [your-site].netlify.app |

*(Get exact IP from Netlify dashboard)*

---

## ✅ Post-Deployment Verification

After deployment, check these within 5 minutes:

### 1. **Google Analytics Working**
```bash
# Visit your site and open Chrome DevTools (F12)
# Go to Network tab → Filter by "gtag"
# Refresh page - you should see gtag.js request
```

OR check in Google Analytics:
1. Go to: https://analytics.google.com
2. Click "Real-time" reports
3. Visit your site - you should see yourself as active user

### 2. **Site Functionality**
- [ ] https://nibbleiq.ai loads properly
- [ ] Navigation works (Features, How It Works, etc.)
- [ ] "Book a Demo" button opens modal
- [ ] All images load correctly
- [ ] Mobile responsive design works

### 3. **SEO Meta Tags**
```bash
# View page source (right-click → View Page Source)
# Verify you see:
```
- `<title>Restaurant Cost Control Software | Save 3-7% | NibbleIQ</title>`
- `<meta name="description" content="Track food costs, labor, and profits in real-time..."`
- `<meta name="robots" content="index, follow">`
- Google Analytics script with ID: G-JZZRKKTYN2

### 4. **Test All Routes**
- [ ] https://nibbleiq.ai/
- [ ] https://nibbleiq.ai/about
- [ ] https://nibbleiq.ai/resources
- [ ] https://nibbleiq.ai/contact
- [ ] https://nibbleiq.ai/privacy
- [ ] https://nibbleiq.ai/terms

All should load (no 404 errors) thanks to SPA redirects.

---

## 🚨 Troubleshooting

### Build fails with "command not found"
```bash
# Install dependencies first
npm install
```

### Google Analytics not showing data
- Wait 24-48 hours for data to appear in standard reports
- Check Real-time reports immediately after deployment
- Clear browser cache and visit site in incognito mode

### Domain not connecting
- DNS changes take 24-48 hours to propagate
- Verify DNS records at your registrar match Netlify instructions
- Use https://dnschecker.org to check propagation

### 404 errors on routes
- Verify `/public/_redirects` file exists (not folder)
- Check `netlify.toml` is in root directory
- Re-deploy with `netlify deploy --prod`

---

## 📞 Need Help?

**Netlify Support:**
- Docs: https://docs.netlify.com
- Support: https://www.netlify.com/support

**Your Configuration:**
- Site: nibbleiq.ai
- Framework: React + Vite
- Build: `npm run build`
- Output: `dist` folder
- Analytics: G-JZZRKKTYN2

---

## 🎯 After Successful Deployment

### Immediate Actions:
1. ✅ Verify Google Analytics in Real-time reports
2. ✅ Test demo booking form submission
3. ✅ Check mobile responsiveness
4. ✅ Test all navigation links

### Within 24 Hours:
1. 📊 Monitor Hotjar heatmaps and recordings
2. 🔍 Submit sitemap to Google Search Console
3. 📈 Request re-indexing in GSC
4. 🎯 Share live link with team for feedback

### Within 1 Week:
1. 📧 Set up email notification for demo form submissions
2. 📱 Test on multiple devices (iOS, Android)
3. 🌐 Test in multiple browsers (Chrome, Safari, Firefox)
4. 🔄 Monitor Google Analytics for traffic patterns

---

## 🎉 You're Done!

Once deployed, your Google Analytics will immediately start tracking visitors.

**Email this to your co-founder:**
> "NibbleIQ landing page is now live at nibbleiq.ai with full Google Analytics (G-JZZRKKTYN2) and Hotjar tracking installed. All SEO optimizations are complete and ready for marketing campaigns."

---

**Current Status:** Ready to deploy ✅  
**Estimated Deploy Time:** 2-5 minutes  
**First Data Visible:** Immediately in GA Real-time reports
