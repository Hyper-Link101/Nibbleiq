import { Footer } from "./Footer";
import { BookingSchema } from "./BookingSchema";
import { SEO } from "./SEO";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft, CheckCircle, Clock, Video, Users } from "lucide-react";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';

export function BookDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Book a Demo - NibbleIQ | Free 30-Minute Restaurant Operations Review"
        description="Schedule your free demo to see how NibbleIQ can reduce your restaurant costs by 15-25% and save 8-12 hours per week on admin tasks. No credit card required."
        canonical="https://nibbleiq.ai/book-demo"
        ogType="website"
      />
      <BookingSchema />
      
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src={logoImage} alt="NibbleIQ" className="h-8" width="128" height="32" />
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Benefits */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-4">
                Free 30-Minute Demo
              </div>
              <h1 className="text-slate-900 mb-4">
                See How Much Your Restaurant Could Save
              </h1>
              <p className="text-xl text-slate-600">
                Join 18+ restaurants already protecting their margins with NibbleIQ's AI-powered platform.
              </p>
            </div>

            {/* What You'll Get */}
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 mb-8">
              <h2 className="text-slate-900 mb-6">What You'll Get in This Demo</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Personalized Analysis</h3>
                    <p className="text-slate-600 text-sm">
                      We'll review YOUR actual data to identify profit leaks and show exact dollar amounts you're losing monthly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Live Platform Walkthrough</h3>
                    <p className="text-slate-600 text-sm">
                      See the dashboard in action with real restaurant data. Ask questions, explore features live.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Custom Implementation Plan</h3>
                    <p className="text-slate-600 text-sm">
                      Get a tailored setup roadmap for your restaurant. We can have you live in 48 hours or less.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">ROI Projection</h3>
                    <p className="text-slate-600 text-sm">
                      We'll calculate your specific savings potential based on your revenue, locations, and current processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-3xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-slate-700">
                  "NibbleIQ found $3,200 in overcharges in our first month. The demo was eye-opening."
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  — Sarah M., Multi-Unit Operator
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl text-orange-600">$2.4K</div>
                  <div className="text-xs text-slate-600">Avg. Monthly Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-600">8-12hr</div>
                  <div className="text-xs text-slate-600">Time Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-green-600">48hr</div>
                  <div className="text-xs text-slate-600">Setup Time</div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>14-day free trial included</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Cancel anytime, no questions asked</span>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Calendar */}
          <div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg sticky top-24 overflow-hidden">
              {/* Koalendar Embed */}
              <iframe
                src="https://koalendar.com/e/meet-with-nibble-iq-founders"
                width="100%"
                height="800"
                frameBorder="0"
                style={{ border: 'none', minHeight: '800px' }}
                title="Book a Demo with NibbleIQ"
              />
            </div>
            
            <div className="mt-6 text-center text-sm text-slate-500">
              <p>
                Prefer to email? Reach us at{' '}
                <a href="mailto:hello@nibbleiq.com" className="text-orange-600 hover:underline">
                  hello@nibbleiq.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-slate-900 text-center mb-12">Common Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-slate-900 mb-2">How long is the demo?</h3>
              <p className="text-slate-600">
                30 minutes. We respect your time. The first 15 minutes is a walkthrough, and the last 15 is Q&A and custom planning.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-slate-900 mb-2">Do I need to prepare anything?</h3>
              <p className="text-slate-600">
                Nope! We'll guide you through everything. If you want a deeper analysis, having a recent invoice or P&L handy is helpful but not required.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-slate-900 mb-2">What if I'm not ready to commit?</h3>
              <p className="text-slate-600">
                That's perfectly fine! The demo is pressure-free. Many operators use it to benchmark their current costs and learn about automation opportunities, even if they don't sign up right away.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-slate-900 mb-2">Can I reschedule if something comes up?</h3>
              <p className="text-slate-600">
                Absolutely. Just reply to the confirmation email, or email us at hello@nibbleiq.com anytime.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-slate-900 mb-2">Is this really free?</h3>
              <p className="text-slate-600">
                Yes! The demo and 14-day trial are completely free. No credit card, no commitments. We only charge if you decide to continue after the trial.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}