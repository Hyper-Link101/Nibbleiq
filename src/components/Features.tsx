import { Inbox, Sparkles, BarChart3, ShieldAlert, Coins, Network, Heart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Inbox,
      title: "Automated Invoice Intelligence",
      description: "Our AI reads every supplier email and invoice automatically. Catch hidden price increases within 24 hours—not 30 days later.",
      color: "from-orange-600 to-red-600",
      stat: "100% invoice coverage"
    },
    {
      icon: Sparkles,
      title: "Intelligent Automation",
      description: "Smart automation handles repetitive tasks so you can focus on creating amazing experiences for your guests.",
      color: "from-amber-600 to-orange-600",
      stat: "3-7 days early warning"
    },
    {
      icon: BarChart3,
      title: "Demand-Based Forecasting",
      description: "Labor schedules built on actual demand patterns, weather, events, and historical performance—not guesswork.",
      color: "from-red-600 to-orange-600",
      stat: "94% forecast accuracy"
    },
    {
      icon: ShieldAlert,
      title: "Automated Food Cost Control",
      description: "Track food cost variances, portion drift, and waste patterns daily. Spend your time perfecting dishes, not chasing numbers.",
      color: "from-orange-600 to-amber-600",
      stat: "3-5% cost reduction"
    },
    {
      icon: Coins,
      title: "Daily Margin Protection",
      description: "Get a morning briefing on every threat to your margins. Price changes, labor overruns, variance alerts—all in one place.",
      color: "from-amber-600 to-orange-700",
      stat: "3-5% margin improvement"
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "We don't replace your systems. Our unified platform connects with your existing tools to deliver comprehensive insights everywhere.",
      color: "from-orange-700 to-red-600",
      stat: "Zero workflow change"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-orange-300/50">
            <Heart className="w-4 h-4 text-orange-600 fill-orange-600" />
            <span className="text-sm text-slate-700">Built for restaurant operators</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
            Stop chasing numbers. <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Start creating experiences.</span>
          </h2>
          <p className="text-xl text-slate-600">
            Get early warnings on price increases and margin threats, so you can spend more time on what makes your restaurant special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white border-2 border-orange-200/50 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-orange-600"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
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