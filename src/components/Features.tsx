import { Inbox, Sparkles, BarChart3, ShieldAlert, Coins, Network } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Inbox,
      title: "Automated Invoice Intelligence",
      description: "Our AI reads every supplier email and invoice automatically. Catch hidden price increases within 24 hours—not 30 days later.",
      color: "from-[#3D5AFE] to-[#2962FF]",
      stat: "100% invoice coverage"
    },
    {
      icon: Sparkles,
      title: "Intelligent Automation",
      description: "Smart automation handles repetitive tasks so you can focus on strategic decisions. Get insights that help you act before margins disappear.",
      color: "from-[#2962FF] to-[#3D5AFE]",
      stat: "3-7 days early warning"
    },
    {
      icon: BarChart3,
      title: "Demand-Based Forecasting",
      description: "Labor schedules built on actual demand patterns, weather, events, and historical performance—not guesswork.",
      color: "from-[#3D5AFE] to-[#2962FF]",
      stat: "94% forecast accuracy"
    },
    {
      icon: ShieldAlert,
      title: "Automated Food Cost Control",
      description: "Track food cost variances, portion drift, and waste patterns daily. Identify issues before they compound into major P&L problems.",
      color: "from-[#2962FF] to-[#3D5AFE]",
      stat: "3-5% cost reduction"
    },
    {
      icon: Coins,
      title: "Daily Margin Protection",
      description: "Get a morning briefing on every threat to your margins. Price changes, labor overruns, variance alerts—all in one place.",
      color: "from-[#3D5AFE] to-[#2962FF]",
      stat: "3-5% margin improvement"
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "We don't replace your systems. Our unified platform connects with your existing tools to deliver comprehensive insights everywhere.",
      color: "from-[#2962FF] to-[#3D5AFE]",
      stat: "Zero workflow change"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 font-bold">
            Monitor Food Costs & Operational Risks <span className="text-[#3D5AFE]">With Real-Time Analytics</span>
          </h2>
          <p className="text-xl text-slate-600">
            Get early warnings on price increases, labor overruns, and margin threats with intelligent automation and real-time analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-[#3D5AFE]"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-slate-900 font-bold">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              
              <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                {feature.stat}
              </div>
              
              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}