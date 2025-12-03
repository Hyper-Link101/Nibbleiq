import { Rocket, Headphones, Zap, Gift, Users, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { DemoModal } from "./DemoModal";

export function BetaBenefits() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Early Access Pricing",
      description: "Lock in founding member rates at 50% off standard pricing for your first year.",
      highlight: "Save $6,000+/year"
    },
    {
      icon: Headphones,
      title: "White-Glove Onboarding",
      description: "Dedicated implementation specialist guides you through setup, integration, and first 30 days.",
      highlight: "Personal support"
    },
    {
      icon: Zap,
      title: "Fast-Track Setup",
      description: "We'll have you up and running in 48 hours or less—see real insights by the end of week one.",
      highlight: "Live in 48 hours"
    },
    {
      icon: Users,
      title: "Direct Influence on Product",
      description: "Beta partners shape our roadmap. Your feedback directly influences features we build next.",
      highlight: "Build with us"
    },
    {
      icon: TrendingUp,
      title: "Proven Early Results",
      description: "Current beta partners are catching $2,000-$5,000 in hidden costs within their first 30 days.",
      highlight: "ROI in week 1"
    },
    {
      icon: Clock,
      title: "No Long-Term Commitment",
      description: "Free 14-day trial, cancel anytime. Keep all the insights and reports even if you decide to pause.",
      highlight: "Risk-free"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF5722]/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5722]/20 text-[#FF5722] rounded-full text-sm backdrop-blur-sm border border-[#FF5722]/30 mb-6">
            <Rocket className="h-4 w-4" />
            Beta Program Benefits
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            What You Get as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D5AFE] to-[#FF5722]">Founding Partner</span>
          </h2>
          <p className="text-xl text-slate-300">
            Beta isn't just "early access"—it's a partnership. You get premium support, exclusive pricing, and direct influence on what we build next.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-[#3D5AFE]/50 transition-all hover:scale-105 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl mb-3 font-bold">{benefit.title}</h3>
              <p className="text-slate-400 mb-4">{benefit.description}</p>
              
              <div className="flex items-center gap-2 text-[#3D5AFE]">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-bold">{benefit.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
            <div className="text-center sm:text-left">
              <p className="text-sm text-slate-400 mb-1">Limited to next</p>
              <p className="text-4xl font-bold text-white mb-1">25 <span className="text-[#FF5722]">spots</span></p>
              <p className="text-sm text-slate-400">Current beta partners: 18/25</p>
            </div>
            <div className="h-px sm:h-20 w-20 sm:w-px bg-slate-700"></div>
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/30 text-lg px-10 py-7 group"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Apply for Beta Access
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-slate-400 mt-3">Response within 24 hours</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
}
