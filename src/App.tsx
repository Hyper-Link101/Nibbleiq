import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './components/LandingPage';
import { Toaster } from './components/ui/sonner';

// Lazy load AIBotPopup - it's not critical for initial page load
const AIBotPopup = lazy(() => import('./components/AIBotPopup').then(module => ({ default: module.AIBotPopup })));

// Lazy load all non-critical routes
const ResourcesPage = lazy(() => import('./components/ResourcesPage').then(module => ({ default: module.ResourcesPage })));
const BlogPostPage = lazy(() => import('./components/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const PodcastEpisodePage = lazy(() => import('./components/PodcastEpisodePage').then(module => ({ default: module.PodcastEpisodePage })));
const AdminPage = lazy(() => import('./components/AdminPage').then(module => ({ default: module.AdminPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));
const PrivacyPage = lazy(() => import('./components/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./components/TermsPage').then(module => ({ default: module.TermsPage })));
const CookiesPage = lazy(() => import('./components/CookiesPage').then(module => ({ default: module.CookiesPage })));
const SecurityPage = lazy(() => import('./components/SecurityPage').then(module => ({ default: module.SecurityPage })));
const BingSiteAuth = lazy(() => import('./components/BingSiteAuth').then(module => ({ default: module.BingSiteAuth })));
const GoogleVerification = lazy(() => import('./components/GoogleVerification').then(module => ({ default: module.GoogleVerification })));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-[#3D5AFE] rounded-full animate-spin" />
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Load Google Analytics asynchronously (non-blocking)
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-YGW1YJZR7K';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YGW1YJZR7K');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<ResourcesPage initialTab="blog" />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/podcast" element={<ResourcesPage initialTab="podcast" />} />
            <Route path="/podcast/:id" element={<PodcastEpisodePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/security" element={<SecurityPage />} />
            
            {/* Search Engine Verification Routes (fallback) */}
            <Route path="/BingSiteAuth.xml" element={<BingSiteAuth />} />
            <Route path="/google-Z6h6hI3EauwQNX8USE1RH-RYH4W_daafjBpsfdDFlk.html" element={<GoogleVerification />} />
          </Routes>
        </Suspense>
        <Suspense fallback={null}>
          <AIBotPopup />
        </Suspense>
        <Toaster />
      </Router>
    </HelmetProvider>
  );
}