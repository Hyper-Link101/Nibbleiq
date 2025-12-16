import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './components/LandingPage';
import { Toaster } from './components/ui/sonner';
import { CookieConsent } from './components/CookieConsent';

// Lazy load all non-critical routes
const ResourcesPage = lazy(() => import('./components/ResourcesPage').then(module => ({ default: module.ResourcesPage })));
const BlogPostPage = lazy(() => import('./components/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const PodcastEpisodePage = lazy(() => import('./components/PodcastEpisodePage').then(module => ({ default: module.PodcastEpisodePage })));
const AdminPage = lazy(() => import('./components/AdminPage').then(module => ({ default: module.AdminPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));
const BookDemoPage = lazy(() => import('./components/BookDemoPage').then(module => ({ default: module.BookDemoPage })));
const PrivacyPage = lazy(() => import('./components/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./components/TermsPage').then(module => ({ default: module.TermsPage })));
const CookiesPage = lazy(() => import('./components/CookiesPage').then(module => ({ default: module.CookiesPage })));
const SecurityPage = lazy(() => import('./components/SecurityPage').then(module => ({ default: module.SecurityPage })));
const BingSiteAuth = lazy(() => import('./components/BingSiteAuth').then(module => ({ default: module.BingSiteAuth })));
const GoogleVerification = lazy(() => import('./components/GoogleVerification').then(module => ({ default: module.GoogleVerification })));



// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-orange-200 border-t-[#F97316] rounded-full animate-spin" />
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Analytics are loaded via index.html/GTM
  }, []);

  return (
    <HelmetProvider>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
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
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/security" element={<SecurityPage />} />
            
            {/* Search Engine Verification Routes (fallback) */}
            <Route path="/BingSiteAuth.xml" element={<BingSiteAuth />} />
            <Route path="/google-Z6h6hI3EauwQNX8USE1RH-RYH4W_daafjBpsfdDFlk.html" element={<GoogleVerification />} />
          </Routes>
        </Suspense>
        <Toaster />
        <CookieConsent />
      </Router>
    </HelmetProvider>
  );
}