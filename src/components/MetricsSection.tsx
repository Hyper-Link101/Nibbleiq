import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";
import { motion } from "motion/react";

export function MetricsSection() {
  const metrics = [
    {
      icon: Clock,
      value: "8-12",
      unit: "hrs/week",
      label: "More Time for Your Craft",
      description: "Perfect that signature dish. Train your team. Make it to dinner with family.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: DollarSign,
      value: "$1,200",
      unit: "+/mo",
      label: "Protect Your Margins",
      description: "We spotted Sysco's 18% chicken price hike instantly—before it ate your profit",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      value: "2-5",
      unit: "%",
      label: "Invest in What Matters",
      description: "Extra $3K-8K/month to upgrade equipment, elevate your menu, grow your team",
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Target,
      value: "$2.4K",
      unit: "/mo",
      label: "Keep What's Yours",
      description: "Catch billing errors, duplicate charges, wrong quantities before you pay",
      color: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white font-bold">
            Stop Leaving Money on the Table
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Real results from restaurant operators who switched to NibbleIQ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 flex-shrink-0`}>
                  <metric.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="mb-3 flex items-end gap-1 whitespace-nowrap">
                  <span className={`bg-gradient-to-br ${metric.color} bg-clip-text text-transparent text-4xl md:text-5xl font-bold leading-none`}>
                    {metric.value}
                  </span>
                  <span className="text-slate-400 pb-1 text-lg md:text-xl">{metric.unit}</span>
                </div>

                {/* Label */}
                <h3 className="text-white mb-2 text-lg md:text-[1.125rem]">{metric.label}</h3>
                
                {/* Description */}
                <p className="text-slate-400 flex-grow text-sm">{metric.description}</p>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-300">
            Join <span className="text-orange-400">18+ restaurants</span> already saving time and money
          </p>
        </motion.div>
      </div>
    </section>
  );
}