# Security Headers for NibbleIQ.ai
# Compatible with Netlify, Vercel, and similar platforms

/*
  # Content Security Policy - Protect against XSS attacks
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://js-na2.hsforms.net https://www.google-analytics.com https://ssl.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.hsforms.net https://*.hubspot.com https://api.unsplash.com https://images.unsplash.com; frame-src https://*.hsforms.net; object-src 'none'; base-uri 'self'; form-action 'self' https://*.hsforms.net;

  # Prevent clickjacking attacks
  X-Frame-Options: DENY

  # Prevent MIME type sniffing
  X-Content-Type-Options: nosniff

  # Enable XSS protection in older browsers
  X-XSS-Protection: 1; mode=block

  # Referrer Policy - Control information sent in Referer header
  Referrer-Policy: strict-origin-when-cross-origin

  # Permissions Policy - Control browser features
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()

  # Strict Transport Security - Force HTTPS (only add after HTTPS is configured)
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

  # Cache Control for static assets
  Cache-Control: public, max-age=31536000, immutable

  # Cross-Origin Policies
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin

# Special headers for HTML pages
/*.html
  # Don't cache HTML pages
  Cache-Control: public, max-age=0, must-revalidate

# API endpoints (if any)
/api/*
  Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
  Pragma: no-cache
  Expires: 0

# Static assets optimization
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Images
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
/*.jpeg
  Cache-Control: public, max-age=31536000, immutable
/*.png
  Cache-Control: public, max-age=31536000, immutable
/*.gif
  Cache-Control: public, max-age=31536000, immutable
/*.webp
  Cache-Control: public, max-age=31536000, immutable
/*.svg
  Cache-Control: public, max-age=31536000, immutable

# Fonts
/*.woff
  Cache-Control: public, max-age=31536000, immutable
/*.woff2
  Cache-Control: public, max-age=31536000, immutable
/*.ttf
  Cache-Control: public, max-age=31536000, immutable
/*.eot
  Cache-Control: public, max-age=31536000, immutable

# Scripts and styles
/*.js
  Cache-Control: public, max-age=31536000, immutable
/*.css
  Cache-Control: public, max-age=31536000, immutable

# Manifest and service worker
/manifest.json
  Cache-Control: public, max-age=0, must-revalidate
/sw.js
  Cache-Control: public, max-age=0, must-revalidate
