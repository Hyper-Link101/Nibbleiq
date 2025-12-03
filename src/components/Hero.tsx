import image_90f71b77ff8f7feaaf19a1f5fd379bf272f74375 from 'figma:asset/90f71b77ff8f7feaaf19a1f5fd379bf272f74375.png';
import image_90f71b77ff8f7feaaf19a1f5fd379bf272f74375 from 'figma:asset/90f71b77ff8f7feaaf19a1f5fd379bf272f74375.png';
import { Button } from "./ui/button";
import { MoveRight, Play, Menu, X, CircleCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import image_4f33e51ab4028293bfc505d221f7190f692e345a from 'figma:asset/4f33e51ab4028293bfc505d221f7190f692e345a.png';
import heroImage from 'figma:asset/f207d1f12ed170cedf3c057602f3d583959d8b68.png';
import { useState, lazy, Suspense } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Lazy load DemoModal since it's only needed when user clicks
const DemoModal = lazy(() => import("./DemoModal").then(module => ({ default: module.DemoModal })));

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - Clickable */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="NibbleIQ" className="h-10 hover:opacity-80 transition-opacity" loading="eager" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-slate-700 hover:text-[#3D5AFE] transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D5AFE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#how-it-works" 
              className="text-slate-700 hover:text-[#3D5AFE] transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D5AFE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link 
              to="/resources" 
              className="text-slate-700 hover:text-[#3D5AFE] transition-colors relative group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D5AFE] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-700 hover:text-[#3D5AFE] transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D5AFE] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Button 
              className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-lg shadow-[#3D5AFE]/30 hover:shadow-xl hover:shadow-[#3D5AFE]/40 transition-all"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#3D5AFE] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-slate-700 hover:text-[#3D5AFE] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-slate-700 hover:text-[#3D5AFE] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <Link 
                to="/resources" 
                className="text-slate-700 hover:text-[#3D5AFE] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-700 hover:text-[#3D5AFE] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-lg shadow-[#3D5AFE]/30 w-full"
                onClick={() => {
                  setIsDemoModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-28">
        {/* Split Layout: Messaging Left, Dashboard Right */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Messaging & CTAs */}
            <div className="text-center lg:text-left">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 tracking-tight font-bold leading-tight">
                See where every dollar goes in your restaurant
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                NibbleIQ is restaurant cost control software that helps you track food costs, manage inventory, and increase profit margins. Our AI-powered platform shows you exactly where your money goes in real-time.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mb-10 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-5 w-5 text-[#3D5AFE]" />
                  <span>Save <strong>3–6 hours/week</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-5 w-5 text-[#3D5AFE]" />
                  <span><strong>Real-time</strong> food cost tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-5 w-5 text-[#3D5AFE]" />
                  <span><strong>Multi-unit</strong> reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-5 w-5 text-[#3D5AFE]" />
                  <span><strong>Invoice OCR</strong> automation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/30 text-lg px-10 py-7 w-full sm:w-auto group"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Request Early Access
                  <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-10 py-7 w-full sm:w-auto"
                  onClick={() => {
                    const howItWorksSection = document.getElementById('how-it-works');
                    if (howItWorksSection) {
                      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  See How NibbleIQ Works
                </Button>
              </div>
            </div>

            {/* Right Side - Product Dashboard Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={image_90f71b77ff8f7feaaf19a1f5fd379bf272f74375}
                  alt="Restaurant operator using NibbleIQ for real-time cost control"
                  className="w-full h-auto object-cover object-center"
                />
              </div>
              
              {/* Badge below image */}
              <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] rounded-lg flex items-center justify-center">
                    <CircleCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Real operators, real results</p>
                    <p className="text-xs text-slate-600">Join 18 beta partners saving $2K-$5K/month</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-[#2962FF]/20 to-transparent blur-3xl opacity-50"></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>

      {/* Demo Modal */}
      <Suspense fallback={<div>Loading...</div>}>
        <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </Suspense>
    </section>
  );
}