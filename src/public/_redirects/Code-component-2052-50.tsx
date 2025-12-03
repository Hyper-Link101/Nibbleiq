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
