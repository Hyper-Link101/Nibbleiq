import { lazy, Suspense } from "react";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { ProblemSection } from "./ProblemSection";
import { SEO, seoConfigs } from "./SEO";
import { MetricsSection } from "./MetricsSection";
import { ValuePropositionSection } from "./ValuePropositionSection";
import { InlineCTA } from "./InlineCTA";
import { WhoWeAre } from "./WhoWeAre";
import { ProfitLeakCalculator } from "./ProfitLeakCalculator";
import { ProductTour } from "./ProductTour";
import { StickyCTA } from "./StickyCTA";

// Lazy load below-the-fold sections for faster initial render
const Features = lazy(() => import("./Features").then(module => ({ default: module.Features })));
const BetaBenefits = lazy(() => import("./BetaBenefits").then(module => ({ default: module.BetaBenefits })));
const Testimonials = lazy(() => import("./Testimonials").then(module => ({ default: module.Testimonials })));
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
      
      {/* Social Proof/Results FIRST - Hook them with what's possible */}
      <MetricsSection />
      
      {/* Agitation - Why they need it */}
      <ProblemSection />
      
      {/* Solution - How we fix it */}
      <ValuePropositionSection />
      
      {/* Engagement - personalized cost of inaction */}
      <ProfitLeakCalculator />
      
      <Suspense fallback={<SectionLoader />}>
        {/* The "What" - Core Features */}
        <ProductTour />

        {/* Detailed Features List */}
        <Features />
        
        {/* The "Proof" - Peer validation */}
        <Testimonials />
        
        {/* The "Who" - Building trust with the team */}
        <WhoWeAre />
        
        {/* The "Close" - Final Offer with Scarcity */}
        <BetaBenefits />
        
        <Footer />
      </Suspense>
      
      <StickyCTA />
    </div>
  );
}
