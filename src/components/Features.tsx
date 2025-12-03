import { Inbox, Sparkles, BarChart3, ShieldAlert, Coins, Network, Heart } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="features" className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50/30 relative overflow-hidden">
      {/* Warm background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
              Run Profitably
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
            Smart tools that protect your margins and free up your time for what matters most
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-200/50 transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-slate-900 font-semibold">{feature.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-sm text-orange-600 font-semibold">{feature.stat}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}