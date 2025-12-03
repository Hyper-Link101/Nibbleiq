import { motion } from "motion/react";
import { Check, ArrowRight, Zap, Eye, Bell } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState } from "react";
import { DemoModal } from "./DemoModal";

export function ProductShowcase() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const showcaseItems = [
    {
      icon: Eye,
      title: "Real-Time Visibility",
      subtitle: "See what's happening across all locations",
      features: [
        "Live food cost tracking",
        "Labor performance by shift",
        "Supplier price monitoring",
        "Margin alerts as they happen"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      subtitle: "Never miss a margin threat",
      features: [
        "Price increase notifications",
        "Variance threshold alerts",
        "Invoice discrepancy flags",
        "Daily margin briefings"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      subtitle: "Predictive intelligence that saves time",
      features: [
        "Demand-based purchasing",
        "Labor optimization",
        "Waste pattern detection",
        "Menu engineering insights"
      ],
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white font-bold">
              Everything You Need in{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                One Platform
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Unified intelligence across all your restaurant operations
            </p>
          </motion.div>

          {/* Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl text-white mb-2 font-bold">{item.title}</h3>
                  <p className="text-slate-400 mb-6">{item.subtitle}</p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-2xl shadow-orange-500/50 text-lg px-12 py-8 group"
            >
              See the Platform in Action
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <p className="text-slate-400 mt-4">
              15-minute personalized demo • No sales pitch
            </p>
          </motion.div>
        </div>
      </section>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}