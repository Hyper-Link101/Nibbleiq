# Netlify SPA Redirects for NibbleIQ
# RENAME THIS FILE TO: _redirects (remove the "netlify-redirects-RENAME-TO_redirects`" part)

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
