# Security and Performance Headers for NibbleIQ

/*
  # Security Headers
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  
  # Content Security Policy (adjust domains as needed)
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://js-na2.hsforms.net https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://js-na2.hsforms.net; frame-src https://js-na2.hsforms.net;
  
  # Cache Control
  Cache-Control: public, max-age=0, must-revalidate

# Cache static assets
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache images
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
/*.png
  Cache-Control: public, max-age=31536000, immutable
/*.svg
  Cache-Control: public, max-age=31536000, immutable
/*.webp
  Cache-Control: public, max-age=31536000, immutable
/*.ico
  Cache-Control: public, max-age=31536000, immutable

# Don't cache HTML
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# Service Worker
/sw.js
  Cache-Control: public, max-age=0, must-revalidate

# Manifest
/manifest.json
  Cache-Control: public, max-age=86400
  Content-Type: application/manifest+json

# Sitemap
/sitemap.xml
  Cache-Control: public, max-age=3600
  Content-Type: application/xml

# Robots
/robots.txt
  Cache-Control: public, max-age=3600
  Content-Type: text/plain
