#!/bin/bash

# 🚀 Quick Deploy Script for NibbleIQ
# This script builds and prepares your site for Netlify deployment

echo "============================================"
echo "🚀 NibbleIQ - Quick Deploy to Netlify"
echo "============================================"
echo ""

# Check if _redirects folder exists (this will break deployment)
if [ -d "public/_redirects" ]; then
    echo "⚠️  WARNING: /public/_redirects is a FOLDER!"
    echo "   Netlify needs a FILE, not a folder."
    echo ""
    echo "   Please manually:"
    echo "   1. Delete the folder: public/_redirects/"
    echo "   2. Create a file: public/_redirects (no extension)"
    echo "   3. Copy content from DEPLOYMENT-INSTRUCTIONS.md"
    echo ""
    echo "❌ Cannot proceed until this is fixed."
    exit 1
fi

# Check if _redirects file exists
if [ ! -f "public/_redirects" ]; then
    echo "⚠️  WARNING: /public/_redirects FILE not found!"
    echo ""
    echo "   Creating the file now..."
    echo ""
    
    # Create the _redirects file
    cat > public/_redirects << 'EOF'
# Netlify SPA Redirects for NibbleIQ
# This ensures all routes work properly with React Router

# Static files - serve as-is (higher priority)
/BingSiteAuth.xml              /BingSiteAuth.xml              200
/sitemap.xml                   /sitemap.xml                   200
/robots.txt                    /robots.txt                    200
/manifest.json                 /manifest.json                 200
/google-*.html                 /google-:splat.html            200

# SPA fallback - redirect all routes to index.html
/*    /index.html   200

# Force HTTPS
http://nibbleiq.ai/*    https://nibbleiq.ai/:splat  301!
http://www.nibbleiq.ai/*    https://nibbleiq.ai/:splat  301!
https://www.nibbleiq.ai/*    https://nibbleiq.ai/:splat  301!
EOF
    
    echo "✅ Created /public/_redirects file"
    echo ""
fi

echo "📦 Building production site..."
echo ""

# Build the site
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "============================================"
    echo "✅ BUILD SUCCESSFUL!"
    echo "============================================"
    echo ""
    echo "Your site is ready in the 'dist' folder."
    echo ""
    echo "🎯 DEPLOY OPTIONS:"
    echo ""
    echo "1️⃣  EASIEST - Netlify Drop:"
    echo "   • Open: https://app.netlify.com/drop"
    echo "   • Drag the 'dist' folder onto the page"
    echo "   • Done! (takes 30 seconds)"
    echo ""
    echo "2️⃣  RECOMMENDED - Netlify CLI:"
    echo "   • Run: netlify deploy --prod"
    echo "   • Follow the prompts"
    echo ""
    echo "3️⃣  GIT - Connect Repository:"
    echo "   • Push to GitHub/GitLab"
    echo "   • Connect at: https://app.netlify.com"
    echo ""
    echo "============================================"
    echo "📋 POST-DEPLOYMENT CHECKLIST:"
    echo "============================================"
    echo ""
    echo "After deploying, verify:"
    echo "✓ Site loads at: https://nibbleiq.ai"
    echo "✓ View source shows: <meta name=\"robots\" content=\"index, follow\">"
    echo "✓ No 404 errors on /about, /contact pages"
    echo "✓ Request re-indexing in Google Search Console"
    echo ""
    echo "📖 Full instructions: See DEPLOYMENT-INSTRUCTIONS.md"
    echo ""
else
    echo ""
    echo "❌ Build failed! Check the errors above."
    echo ""
    exit 1
fi
