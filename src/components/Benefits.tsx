import { ShieldCheck, Zap, Sparkle, Target } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Reduce Food Costs by 3-5%",
      description: "Catch hidden price increases and cost variances before they erode your profits. Our customers average 3-5% in food cost savings within 90 days.",
      stat: "3-5%",
      statLabel: "Food Cost Reduction"
    },
    {
      icon: Zap,
      title: "Save Time Daily",
      description: "Stop spending hours reconciling invoices and spreadsheets. Get the insights you need in minutes, not days.",
      stat: "10hrs",
      statLabel: "Saved Per Week"
    },
    {
      icon: Sparkle,
      title: "Reduce Stress",
      description: "No more month-end surprises. Sleep better knowing you'll see problems coming and can act before they escalate.",
      stat: "100%",
      statLabel: "Peace of Mind"
    },
    {
      icon: Target,
      title: "Make Better Decisions",
      description: "Base your purchasing and labor decisions on real demand patterns and comprehensive insights, not guesswork.",
      stat: "15%",
      statLabel: "Labor Efficiency Gain"
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            The Impact: <span className="text-[#FF5722]">Run Smoother, Protect Profits, Reduce Stress</span>
          </h2>
          <p className="text-xl text-slate-300">
            Instead of reacting at month-end, get daily actionable clarity to support your team and keep margins healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-all hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              
              <div className="mb-6">
                <div className="text-4xl text-[#FF5722] mb-1">{benefit.stat}</div>
                <div className="text-sm text-slate-400">{benefit.statLabel}</div>
              </div>
              
              <h3 className="text-2xl mb-3 font-bold">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-[#3D5AFE]/10 via-transparent to-[#2962FF]/10 blur-3xl pointer-events-none"></div>
    </section>
  );
}