import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, LineChart, Zap, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { DemoModal } from "./DemoModal";

export function ValuePropositionSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const painPoints = [
    {
      icon: ShieldCheck,
      title: "Catch Supplier Price Games",
      problem: "Your suppliers are sneaky. They raise chicken 18%, beef 12%, oil 8%—and hope you don't notice for weeks. By then, you've lost thousands.",
      solution: "We watch every invoice like a hawk. The second Sysco tries to charge you more, you get an alert. Compare it to what you paid last week, last month.",
      impact: "One client saved $1,200/month catching a price hike they never would've spotted",
      color: "from-emerald-500/30 to-teal-500/30",
      accentColor: "emerald",
      image: "https://images.unsplash.com/photo-1599275247787-40daab5777bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2UlMjB2ZWdldGFibGVzJTIwZmFybWVyJTIwbWFya2V0fGVufDF8fHx8MTc2NDc5MDcyM3ww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
    },
    {
      icon: LineChart,
      title: "See Where Your Money Goes",
      problem: "You're looking at last week's numbers. Or worse, last month's. You can't fix a problem you don't know exists yet.",
      solution: "See your food costs update every single day. Not next week. Not next month. Today. By category, by location, by supplier.",
      impact: "Know exactly what's happening while you can still do something about it",
      color: "from-amber-500/30 to-orange-500/30",
      accentColor: "amber",
      image: "https://images.unsplash.com/photo-1759209402969-be3ea5027356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NjY0OTE1fDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Zap,
      title: "Get Your Weekends Back",
      problem: "You spend 12 hours every week copying numbers from invoices into spreadsheets. That's time you could spend with your family, or perfecting that new menu item.",
      solution: "We handle all the boring stuff automatically. Invoices? We read them. Data entry? Done. Reports? Ready when you need them.",
      impact: "Save 8-12 hours every week. Focus on your craft, your team, your guests.",
      color: "from-blue-500/30 to-indigo-500/30",
      accentColor: "blue",
      image: "https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVhbSUyMGtpdGNoZW4lMjBzZXJ2aWNlfGVufDF8fHx8MTc2NDc5MDcyMnww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
    },
    {
      icon: FileCheck,
      title: "Stop Paying for Mistakes",
      problem: "US Foods billed you for 50 cases of tomatoes. You only got 48. Or they charged you twice for the same delivery. Happens all the time—and it's costing you $800-2,400 every month.",
      solution: "We check every invoice against what you actually ordered and received. Before you pay it. Catches duplicate charges, wrong quantities, mystery fees.",
      impact: "Stop paying for stuff you didn't get. $15K-30K back in your pocket every year.",
      color: "from-rose-500/30 to-pink-500/30",
      accentColor: "rose",
      image: "https://images.unsplash.com/photo-1713393280932-8a2a29d46226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZ3Vlc3RzJTIwaGFwcHl8ZW58MXx8fHwxNzY0NzkwNzIzfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % painPoints.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [painPoints.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % painPoints.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + painPoints.length) % painPoints.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 font-bold">
              Where Your Money Is{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                Disappearing
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
              Four hidden profit killers—and how NibbleIQ catches them instantly
            </p>
          </motion.div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {[
              {
                title: "Spoilage & Waste",
                stat: "18%",
                label: "of food costs",
                image: "https://images.unsplash.com/photo-1649140208632-1edeb77d7bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjB0cmFzaCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY0NzgzOTU4fDA&ixlib=rb-4.1.0&q=80&w=800",
                gradient: "from-amber-600/60 to-orange-600/70",
                iconBg: "from-amber-500 to-orange-600"
              },
              {
                title: "Labor Overruns",
                stat: "32%",
                label: "above target",
                image: "https://images.unsplash.com/photo-1708506751726-e1709ba6b147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RhZmYlMjBzaG9ydGFnZXxlbnwxfHx8fDE3NjQ3ODM5NTh8MA&ixlib=rb-4.1.0&q=80&w=800",
                gradient: "from-orange-600/60 to-red-600/70",
                iconBg: "from-orange-500 to-red-600"
              },
              {
                title: "Invoice Errors",
                stat: "$2.4K",
                label: "monthly overcharges",
                image: "https://images.unsplash.com/photo-1764231467852-b609a742e082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwYmlsbHMlMjBwYXBlcndvcmt8ZW58MXx8fHwxNzY0NzgzOTU5fDA&ixlib=rb-4.1.0&q=80&w=800",
                gradient: "from-red-600/60 to-amber-600/70",
                iconBg: "from-red-500 to-amber-600"
              },
              {
                title: "Hidden Costs",
                stat: "47",
                label: "untracked expenses",
                image: "https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ3ODM5NTl8MA&ixlib=rb-4.1.0&q=80&w=800",
                gradient: "from-orange-700/60 to-red-700/70",
                iconBg: "from-orange-600 to-red-700"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 group-hover:ring-2 group-hover:ring-orange-400/50 transition-all duration-500">
                  {/* Background Image with Parallax */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
                      loading="lazy"
                    />
                    {/* Noise texture overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/20 mix-blend-overlay"></div>
                  </motion.div>
                  
                  {/* Multi-layer Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-75 transition-opacity duration-700`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Premium Animated Border Shimmer */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 100%)`,
                    }}
                    animate={{
                      x: ['-200%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                  
                  {/* Glass Morphism Top Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/30 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-xs tracking-wider uppercase font-medium">Critical Issue</span>
                  </div>
                  
                  {/* Content Container with Enhanced Layout */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Top Section - Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                      className="flex justify-end"
                    >
                    </motion.div>
                    
                    {/* Bottom Section - Stats & Title */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                      className="space-y-4"
                    >
                      {/* Label with Glass Effect */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/15 border border-white/20 shadow-sm shadow-blue-400/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-sm shadow-blue-400/20"></div>
                        <span className="text-white/95 text-xs tracking-wider uppercase font-medium">{item.label}</span>
                      </div>
                      
                      {/* Stat with Drop Shadow */}
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-7xl text-white tracking-tight" style={{ 
                          textShadow: '0 2px 16px rgba(59, 130, 246, 0.15), 0 1px 4px rgba(59, 130, 246, 0.1)',
                          fontVariantNumeric: 'tabular-nums'
                        }}>
                          {item.stat}
                        </div>
                      </motion.div>
                      
                      {/* Title with Enhanced Typography */}
                      <div className="text-2xl text-white tracking-tight leading-tight font-medium" style={{
                        textShadow: '0 1px 8px rgba(59, 130, 246, 0.12)'
                      }}>
                        {item.title}
                      </div>
                      
                      {/* Decorative Underline */}
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-white/80 to-transparent rounded-full shadow-sm shadow-blue-400/15"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Hover Indicator with Pulse */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-2xl"
                    initial={{ rotate: 0, scale: 0.8 }}
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                  
                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-2xl shadow-orange-600/40 text-lg px-12 py-8 transform hover:scale-105 transition-all group"
            >
              <span>See How Much You Could Save</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <p className="text-slate-600 mt-6">
              Free profit analysis • No commitment • 15-minute demo
            </p>
          </motion.div>
        </div>
      </section>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </>
  );
}