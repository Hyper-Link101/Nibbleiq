import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    author?: string;
    tag?: string;
  };
  canonical?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  image,
  type = "website",
  article,
  canonical,
  noindex = false
}: SEOProps) {
  const siteUrl = "https://nibbleiq.ai";
  const siteName = "NibbleIQ";
  const defaultImage = "https://images.unsplash.com/photo-1609070220425-2d5b49f710b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBidXN5JTIwd2FybSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2NDg5OTgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const twitterHandle = "@NibbleIQ";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      {/* Performance optimizations - Preconnect to external domains */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://js-na2.hsforms.net" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://js-na2.hsforms.net" />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="-Z6h6hI3EauwQNX8USE1RH-RYH4W_daafjBpsfdDFlk" />
      <meta name="msvalidate.01" content="C6848EF4CBA628BDD16B53FC2C7F722D" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Article specific meta tags */}
      {article && type === 'article' && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.tag && (
            <meta property="article:tag" content={article.tag} />
          )}
        </>
      )}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content={siteName} />
      <meta name="copyright" content={siteName} />
      <meta name="theme-color" content="#F97316" />

      {/* Geo Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      {/* Enhanced Structured Data for Search Engines & AI */}
      
      {/* Organization Schema - Helps Google understand your brand */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "legalName": siteName,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "foundingDate": "2024",
          "description": "NibbleIQ is a unified restaurant intelligence platform that delivers real-time analytics, intelligent automation for food cost management, and seamless integration with existing restaurant systems.",
          "email": "hello@nibbleiq.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": [{
            "@type": "ContactPoint",
            "email": "hello@nibbleiq.com",
            "contactType": "Sales",
            "areaServed": "US",
            "availableLanguage": "English"
          }, {
            "@type": "ContactPoint",
            "email": "hello@nibbleiq.com",
            "contactType": "Customer Support",
            "areaServed": "US",
            "availableLanguage": "English"
          }],
          "sameAs": [
            "https://twitter.com/NibbleIQ",
            "https://linkedin.com/company/nibbleiq"
          ]
        })}
      </script>

      {/* Software Application Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": siteName,
          "applicationCategory": "BusinessApplication",
          "applicationSubCategory": "Restaurant Management Software",
          "operatingSystem": "Web",
          "description": description,
          "url": siteUrl,
          "offers": {
            "@type": "Offer",
            "category": "SaaS",
            "priceCurrency": "USD",
            "price": 0,
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": siteName
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "12",
            "bestRating": "5",
            "worstRating": "1"
          },
          "featureList": [
            "Automated Food Cost Control",
            "AI-Powered Supplier Email Reading",
            "Predictive Labor Forecasting",
            "Real-time P&L Risk Alerts",
            "Hidden Price Increase Detection",
            "Inventory Optimization",
            "Operational Intelligence Dashboard"
          ],
          "screenshot": `${siteUrl}/dashboard-preview.jpg`
        })}
      </script>

      {/* WebSite Schema - Enables sitelinks search box */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/resources?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Product/Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "NibbleIQ Restaurant Intelligence Platform",
          "description": "AI-powered platform that helps restaurants control food costs, forecast labor needs, and identify operational risks before they impact profitability. Automatically reads supplier emails and detects hidden price increases.",
          "brand": {
            "@type": "Brand",
            "name": siteName
          },
          "category": "Restaurant Management Software",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": 0,
            "availability": "https://schema.org/InStock",
            "url": siteUrl
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Restaurant Operators, Multi-unit Restaurant Managers, Hospitality Professionals"
          }
        })}
      </script>

      {/* FAQ Schema for AI search engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is NibbleIQ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NibbleIQ is a unified restaurant intelligence platform that centralizes back-office signals, forecasts labor and purchases, and identifies operational risks before they show up in the P&L. It uses predictive AI to help restaurants control food costs and protect margins."
              }
            },
            {
              "@type": "Question",
              "name": "How does NibbleIQ help control food costs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NibbleIQ automatically reads supplier emails and invoices to catch hidden price increases, forecasts labor and purchasing needs, and surfaces food cost and performance risks in real-time. This helps restaurants reduce food costs by 3-5% on average."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can I set up NibbleIQ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NibbleIQ can be set up in 48 hours with zero workflow disruption. The platform integrates with your existing systems and starts providing insights immediately."
              }
            },
            {
              "@type": "Question",
              "name": "What makes NibbleIQ different from other restaurant management software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NibbleIQ is the only unified intelligence platform that automates food cost management by reading supplier emails, predicting labor needs, and surfacing P&L risks before they happen. It's predictive rather than reactive, helping you act before margins disappear."
              }
            },
            {
              "@type": "Question",
              "name": "How much can restaurants save with NibbleIQ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Restaurants using NibbleIQ typically save $50,000+ per location per year and see a 3% margin increase by catching hidden price increases, optimizing labor, and reducing operational risks."
              }
            }
          ]
        })}
      </script>

      {/* BreadcrumbList for better navigation understanding */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            }
          ]
        })}
      </script>

      {/* LocalBusiness Schema for SEO boost */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteName,
          "image": `${siteUrl}/logo.png`,
          "description": "Restaurant analytics and back-office automation platform built in Seattle",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Seattle",
            "addressRegion": "WA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "47.6062",
            "longitude": "-122.3321"
          },
          "url": siteUrl,
          "telephone": "",
          "priceRange": "$$",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          }
        })}
      </script>
    </Helmet>
  );
}

// Preset SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: "Intelligent Restaurant Management Software | NibbleIQ",
    description: "AI-powered restaurant management that automatically tracks costs, predicts problems, and saves you 8-12 hours per week. Start free trial - no credit card required.",
    keywords: "restaurant cost control software, restaurant operations software, restaurant food cost tracking, back-office restaurant software, restaurant analytics platform, invoice OCR for restaurants, food cost management tools, restaurant automation, multi-unit restaurant software, vendor price tracking, yield tracking, Seattle restaurant software",
    noindex: false
  },
  
  about: {
    title: "About NibbleIQ - Restaurant Analytics Built in Seattle",
    description: "Learn about NibbleIQ's mission to empower restaurant operators with intelligent automation and real-time analytics. Discover how we're transforming restaurant back-office management.",
    keywords: "about nibbleiq, restaurant tech company, hospitality technology, AI for restaurants, Seattle restaurant tech",
    noindex: false
  },

  contact: {
    title: "Contact NibbleIQ - Get Started with Restaurant Cost Control",
    description: "Ready to reduce food costs and streamline operations? Contact NibbleIQ to join our early access program and see how our unified platform can transform your restaurant management.",
    keywords: "contact nibbleiq, restaurant software demo, schedule demo, get started, restaurant cost control",
    noindex: false
  },

  resources: {
    title: "Resources - Restaurant Cost Control & Operations Best Practices",
    description: "Expert insights on restaurant cost control, food cost tracking, labor optimization, and operational efficiency. Free resources from NibbleIQ's restaurant analytics platform.",
    keywords: "restaurant management resources, food cost control tips, labor optimization, restaurant best practices, hospitality insights, how to reduce restaurant food cost",
    noindex: false
  },

  blog: {
    title: "Blog - Restaurant Industry Insights & Cost Control Strategies",
    description: "Stay ahead with the latest restaurant cost control strategies, food cost management tips, and operational insights from NibbleIQ's experts.",
    keywords: "restaurant blog, hospitality industry news, restaurant management tips, food cost blog, restaurant cost control",
    noindex: false
  },

  podcast: {
    title: "Podcast - Restaurant Operations & Management Insights",
    description: "Listen to in-depth conversations with restaurant operators, industry experts, and hospitality leaders about operational excellence and cost control.",
    keywords: "restaurant podcast, hospitality podcast, restaurant industry interviews, operations podcast",
    noindex: false
  },

  privacy: {
    title: "Privacy Policy - NibbleIQ",
    description: "NibbleIQ's privacy policy. Learn how we protect and handle your data.",
    keywords: "privacy policy, data protection, GDPR compliance",
    noindex: true
  },

  terms: {
    title: "Terms of Service - NibbleIQ",
    description: "NibbleIQ's terms of service and user agreement.",
    keywords: "terms of service, user agreement, legal terms",
    noindex: true
  },

  cookies: {
    title: "Cookie Policy - NibbleIQ",
    description: "NibbleIQ's cookie policy and how we use cookies.",
    keywords: "cookie policy, cookies, tracking",
    noindex: true
  },

  security: {
    title: "Security & Compliance - NibbleIQ",
    description: "Learn about NibbleIQ's security measures, data protection, and compliance standards for restaurant data management.",
    keywords: "security, compliance, data protection, SOC 2, restaurant data security",
    noindex: false
  }
};