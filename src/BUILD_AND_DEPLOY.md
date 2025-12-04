# 🚀 NibbleIQ - Build & Deploy Guide

## YES, I'm Smart Enough. Here's How to Deploy Your Site.

---

## 🎯 QUICKEST PATH TO DEPLOYMENT

### Option 1: Deploy to Netlify (RECOMMENDED - 2 minutes)

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - **Build settings:**
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Done!** Your site will be live in 2-3 minutes at `https://[random-name].netlify.app`

4. **Add Custom Domain**
   - In Netlify dashboard: "Domain settings" → "Add custom domain"
   - Enter: `nibbleiq.ai`
   - Follow DNS instructions to point your domain to Netlify

---

### Option 2: Deploy to Vercel (Also 2 minutes)

1. **Push to GitHub** (if not already done)

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - **Framework Preset:** Vite
   - **Build settings are auto-detected** ✅
   - Click "Deploy"

3. **Done!** Live at `https://[project-name].vercel.app`

4. **Add Custom Domain**
   - Project Settings → Domains → Add `nibbleiq.ai`
   - Follow DNS instructions

---

### Option 3: Deploy to GitHub Pages (Free but requires extra config)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** - Add these scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts** - Add base path:
   ```typescript
   export default {
     base: '/nibbleiq/',
     // ... rest of config
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Repo Settings → Pages → Source: `gh-pages` branch
   - Site will be at: `https://[username].github.io/nibbleiq/`

---

## 📦 WHAT YOU'RE DEPLOYING

Your site is a **Vite + React + TypeScript** application with:

- ✅ Google Tag Manager installed (`GTM-K4K5XLKN`)
- ✅ Google Analytics configured
- ✅ SEO optimized with meta tags, sitemap, robots.txt
- ✅ Security headers configured
- ✅ Cookie consent banner
- ✅ HubSpot form integration
- ✅ Responsive design with Space Grotesk typography
- ✅ Warm amber/orange/red hospitality color palette

---

## 🔧 BUILD COMMANDS (If You Need Them)

### Local Development
```bash
npm install        # Install dependencies (first time only)
npm run dev        # Start development server at http://localhost:5173
```

### Production Build
```bash
npm run build      # Creates /dist folder with production files
npm run preview    # Preview production build locally
```

### Build Output Location
After running `npm run build`, all production files are in the `/dist` folder.

---

## 🌐 MANUAL DEPLOYMENT (Any Hosting Provider)

If you want to deploy to any other host (AWS S3, DigitalOcean, Cloudflare Pages, etc.):

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload the `/dist` folder**
   - Upload all files from `/dist` to your web server
   - Point your domain to the hosting provider
   - Ensure SPA routing is configured (redirect all routes to index.html)

3. **Required Server Configuration**
   - Serve `index.html` for all routes (SPA support)
   - Enable HTTPS (required for GTM and analytics)
   - Copy `/public/_headers` rules to your hosting provider's header system

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deploying, verify:

1. **Site Loads**
   - [ ] Visit `https://nibbleiq.ai` (or your deployment URL)
   - [ ] Homepage displays correctly
   - [ ] No console errors

2. **GTM Tracking**
   - [ ] Open browser DevTools → Console
   - [ ] Type: `dataLayer`
   - [ ] Should see array with GTM data
   - [ ] Or use "Google Tag Assistant" Chrome extension

3. **Analytics Working**
   - [ ] Visit your site
   - [ ] Check Google Analytics Real-Time report
   - [ ] Should see yourself as active user

4. **Forms Working**
   - [ ] Click "Get Early Access" button
   - [ ] HubSpot form should load in modal
   - [ ] Test form submission

5. **SEO Files Accessible**
   - [ ] Visit: `https://nibbleiq.ai/robots.txt`
   - [ ] Visit: `https://nibbleiq.ai/sitemap.xml`
   - [ ] Both should load without errors

6. **Mobile Responsive**
   - [ ] Test on mobile device
   - [ ] Check all sections display correctly

---

## 🐛 TROUBLESHOOTING

### GTM Not Detected After Deployment

**Problem:** Google says "Your tag wasn't detected"

**Solutions:**
1. Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)
2. Wait 10-15 minutes for GTM to detect new deployment
3. Verify site is served over HTTPS (GTM requires HTTPS)
4. Check browser console for errors
5. Use Tag Assistant Chrome extension to debug

**Verify GTM Installed:**
Open browser console and type:
```javascript
window.google_tag_manager
```
Should return an object with your container ID.

### Build Fails

**Error:** Module not found or dependency issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Page Refresh (Netlify/Vercel)

Both platforms auto-handle SPA routing. If you get 404s on refresh:

**Netlify:** Create `netlify.toml` (already exists in your project ✅)
**Vercel:** Create `vercel.json` (already exists in your project ✅)

### Images Not Loading

- Ensure Figma assets are accessible
- Check Unsplash URLs are not blocked
- Verify CORS headers allow image loading

---

## 📊 AFTER DEPLOYMENT

### Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `https://nibbleiq.ai`
3. Submit sitemap: `https://nibbleiq.ai/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site: `https://nibbleiq.ai`
3. Submit sitemap

### Monitor Performance

- **Google Analytics:** Check traffic and conversions
- **GTM Debug:** Use GTM Preview mode to test events
- **Lighthouse:** Run audit (target 90+ scores)
- **Security Headers:** Test at https://securityheaders.com

---

## 💪 YOU'RE READY TO DEPLOY

**Recommended Path:**
1. Push to GitHub
2. Connect to Netlify (easiest, fastest, free SSL)
3. Add custom domain `nibbleiq.ai`
4. Verify GTM and analytics working
5. Submit sitemap to Google

**Estimated Time:** 5-10 minutes total

**Need help?** Check the detailed guide at `/DEPLOYMENT_INSTRUCTIONS.md`

---

## 🎉 FINAL NOTES

- Your codebase is **production-ready**
- All tracking codes are **correctly installed**
- SEO optimization is **complete**
- Security headers are **configured**
- The site is **fast, responsive, and conversion-optimized**

**Now go deploy it and start getting leads! 🚀**
