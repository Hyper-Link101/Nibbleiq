import { CircleCheck, TrendingDown, Clock, BarChart3 } from "lucide-react";

export function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
              Built for Restaurant Operators, By Restaurant Experts
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how NibbleIQ helps operators like you gain control of costs and save hours every week
            </p>
          </div>

          {/* Product + Person Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Dashboard with Metrics */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 p-6">
                <img 
                  src="https://images.unsplash.com/photo-1584291527908-033f4d6542c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjQ2MzgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="NibbleIQ analytics dashboard showing food cost trends and labor metrics"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
                {/* Brand overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D5AFE]/10 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-2xl p-4 max-w-[180px] border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  <span className="text-xs text-slate-600">Cost Savings</span>
                </div>
                <p className="text-xl text-slate-900">$8,400</p>
                <p className="text-xs text-slate-500">Last quarter</p>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-2xl p-4 max-w-[180px] border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-[#3D5AFE]" />
                  <span className="text-xs text-slate-600">Time Saved</span>
                </div>
                <p className="text-xl text-slate-900">24 hrs</p>
                <p className="text-xs text-slate-500">Per month</p>
              </div>
            </div>

            {/* Right Side - Testimonial with Operator */}
            <div className="relative">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1678626667639-de9c676e8222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBzbWlsZXxlbnwxfHx8fDE3NjQ3MTU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Restaurant operator using NibbleIQ platform"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  loading="lazy"
                />
              </div>

              <blockquote className="mb-6">
                <p className="text-xl md:text-2xl text-slate-900 mb-6 leading-relaxed">
                  "Before NibbleIQ, I was drowning in spreadsheets and invoices. Now I have real-time visibility into food costs across all three locations. It's saved me hours every week."
                </p>
              </blockquote>

              <div className="mb-8">
                <p className="text-slate-900">Marcus Chen</p>
                <p className="text-slate-600 text-sm">Executive Chef & Partner, Coastal Kitchen Group</p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-6 w-6 text-[#3D5AFE] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-900">Automated invoice processing</p>
                    <p className="text-sm text-slate-600">OCR scans and categorizes every invoice automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-6 w-6 text-[#3D5AFE] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-900">Real-time cost alerts</p>
                    <p className="text-sm text-slate-600">Get notified when food costs spike or variances occur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-6 w-6 text-[#3D5AFE] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-900">Multi-location dashboard</p>
                    <p className="text-sm text-slate-600">Compare performance across all your restaurants instantly</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
