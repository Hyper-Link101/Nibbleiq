import image_90f71b77ff8f7feaaf19a1f5fd379bf272f74375 from 'figma:asset/90f71b77ff8f7feaaf19a1f5fd379bf272f74375.png';
import { Button } from "./ui/button";
import { MoveRight, Play, Menu, X, CircleCheck, Sparkles, Zap, TrendingUp, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';
import { useState, lazy, Suspense } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const DemoModal = lazy(() => import("./DemoModal").then(module => ({ default: module.DemoModal })));

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/30 to-red-50/20">
      {/* Warm, Food-Inspired Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden hidden md:block">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-amber-400/10 via-orange-300/8 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-red-400/8 via-amber-300/5 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-amber-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - Clickable */}
          <Link to="/" className="flex items-center" aria-label="NibbleIQ Home">
            <img src={logoImage} alt="NibbleIQ" className="h-10 hover:opacity-80 transition-opacity" loading="eager" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-slate-700 hover:text-orange-600 transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#how-it-works" 
              className="text-slate-700 hover:text-orange-600 transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link 
              to="/resources" 
              className="text-slate-700 hover:text-orange-600 transition-colors relative group"
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-700 hover:text-orange-600 transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Button 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 transition-all"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-orange-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-amber-200 bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-slate-700 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-slate-700 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <Link 
                to="/resources" 
                className="text-slate-700 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-700 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg shadow-orange-600/30 w-full"
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
      <div id="main-content" className="container mx-auto px-4 py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-orange-300/50"
              >
                <Heart className="w-4 h-4 text-orange-600 fill-orange-600" />
                <span className="text-sm text-slate-700">Trusted by passionate restaurant owners</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-slate-900 tracking-tight leading-[1.1] font-bold">
                Intelligent Restaurant Management. You focus on{" "}
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                  the experience
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">
                NibbleIQ is AI-powered restaurant management software that automatically tracks costs, predicts problems before they happen, and tells you exactly what to do next. Stop reacting to issues too late—our intelligence catches them before they hurt your bottom line.
              </p>
              
              <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed">
                We catch price hikes, spot waste, and keep suppliers honest—automatically. So you can spend less time in spreadsheets.
              </p>

              {/* Enhanced Trust Indicators - Hospitality Focused */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur border border-orange-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                    <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-slate-900 leading-tight">AI-Powered Intelligence</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-0.5">Catch problems before they cost you money</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur border border-orange-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                    <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-slate-900 leading-tight">Automatic Tracking</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-0.5">No manual entry. Connects to POS & vendors</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur border border-orange-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-600/30">
                    <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-slate-900 leading-tight">Real-Time Dashboards</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-0.5">See exactly where your money goes, updated live</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/80 backdrop-blur border border-orange-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                    <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-slate-900 leading-tight">8-12 Hours Saved Weekly</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-0.5">Stop living in spreadsheets. Get your time back</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-2xl shadow-orange-600/30 hover:shadow-3xl hover:shadow-orange-600/50 text-lg px-12 py-8 w-full sm:w-auto group transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  See Your Savings Potential
                  <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-orange-300 text-slate-700 hover:bg-orange-50 hover:border-orange-600 text-lg px-12 py-8 w-full sm:w-auto group transition-all duration-300"
                  onClick={() => {
                    const howItWorksSection = document.getElementById('how-it-works');
                    if (howItWorksSection) {
                      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  See How It Works
                </Button>
              </div>

              {/* Social Proof + Clear Value */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="flex -space-x-2">
                      <ImageWithFallback className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1758892170660-3ad271f3d672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjQ3NjM5NzN8MA&ixlib=rb-4.1.0&q=80&w=64&utm_source=figma&utm_medium=referral" alt="Restaurant chef" width={32} height={32} />
                      <ImageWithFallback className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1586863981824-d9dd81824d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFuYWdlciUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDc4MDc0M3ww&ixlib=rb-4.1.0&q=80&w=64&utm_source=figma&utm_medium=referral" alt="Restaurant manager" width={32} height={32} />
                      <ImageWithFallback className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NzQ3ODIxfDA&ixlib=rb-4.1.0&q=80&w=64&utm_source=figma&utm_medium=referral" alt="Restaurant owner" width={32} height={32} />
                    </div>
                    <span>Join 18 restaurants in beta saving <strong>8-12 hours/week</strong></span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                      <CircleCheck className="h-4 w-4" />
                      <span>Free 14-day trial</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
                      <CircleCheck className="h-4 w-4" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                      <CircleCheck className="h-4 w-4" />
                      <span>Setup in 48 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Product Dashboard + Restaurant Imagery */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Main Dashboard Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur mb-6">
                <ImageWithFallback
                  src={image_90f71b77ff8f7feaaf19a1f5fd379bf272f74375}
                  alt="Restaurant operator using NibbleIQ.ai for real-time cost control"
                  className="w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Restaurant Lifestyle Images Grid */}
              <div className="hidden md:grid grid-cols-2 gap-4 mb-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1608494132127-cfadf11a3889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW52ZW50b3J5JTIwc2hlbHZlc3xlbnwxfHx8fDE3NjQ3MzgxNTV8MA&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral"
                    alt="Restaurant inventory management and storage"
                    className="w-full h-full object-cover"
                    width={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwZm9vZHxlbnwxfHx8fDE3NjQ3MzgxNTZ8MA&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral"
                    alt="Fine dining plated restaurant dish"
                    className="w-full h-full object-cover"
                    width={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Enhanced Badge with Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden md:block bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-orange-200/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/30">
                      <Heart className="h-7 w-7 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-base text-slate-900">Get back to what you love</p>
                      <p className="text-sm text-slate-600">Turn <strong>hours of spreadsheets</strong> into minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-500 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>

      {/* Demo Modal */}
      <Suspense fallback={null}>
        <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
      </Suspense>
    </section>
  );
}