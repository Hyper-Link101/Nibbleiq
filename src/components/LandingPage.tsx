import { lazy, Suspense } from "react";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { ProblemSection } from "./ProblemSection";
import { SEO, seoConfigs } from "./SEO";
import { MetricsSection } from "./MetricsSection";
import { ValuePropositionSection } from "./ValuePropositionSection";
import { InlineCTA } from "./InlineCTA";
import { WhoWeAre } from "./WhoWeAre";

// Lazy load below-the-fold sections for faster initial render
const Features = lazy(() => import("./Features").then(module => ({ default: module.Features })));
const HowItWorks = lazy(() => import("./HowItWorks").then(module => ({ default: module.HowItWorks })));
const BetaBenefits = lazy(() => import("./BetaBenefits").then(module => ({ default: module.BetaBenefits })));
const Testimonials = lazy(() => import("./Testimonials").then(module => ({ default: module.Testimonials })));
const CTA = lazy(() => import("./CTA").then(module => ({ default: module.CTA })));
const Footer = lazy(() => import("./Footer").then(module => ({ default: module.Footer })));

// Simple skeleton loader for sections
function SectionLoader() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto" />
          <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfigs.home} />
      
      {/* Above the fold - critical for initial load */}
      <Hero />
      <TrustBar />
      <MetricsSection />
      
      {/* Optimized conversion funnel */}
      <Suspense fallback={<SectionLoader />}>
        <ProblemSection />
        <ValuePropositionSection />
        
        {/* Who We Are Section */}
        <WhoWeAre />
        
        {/* Core Features + CTA */}
        <Features />
        <InlineCTA variant="features" />
        
        {/* How It Works + CTA */}
        <HowItWorks />
        <InlineCTA variant="howItWorks" />
        
        {/* Social Proof + CTA */}
        <Testimonials />
        <InlineCTA variant="testimonials" />
        
        {/* Premium Offer (has built-in CTA) */}
        <BetaBenefits />
        
        {/* Final CTA */}
        <CTA />
        <Footer />
      </Suspense>
    </div>
  );
}