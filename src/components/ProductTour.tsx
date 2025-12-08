import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScanLine, Calculator, BellRing, TrendingUp, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dailyPlImage from 'figma:asset/7038329c1420eb31999dbbb4c9e9c35c9bd51f77.png';

export function ProductTour() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "autonomous",
      title: "Done-For-You Data Entry",
      icon: ScanLine,
      description: "No more late nights typing into spreadsheets. Snap a photo of your invoice, and we put every item in the right place for you.",
      image: "https://images.unsplash.com/photo-1566699270403-3f7e3f340664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      id: "intelligence",
      title: "Price Watchdog",
      icon: Calculator,
      description: "Are you paying more than the guy next door? We compare your prices with local averages so you know when to call your vendor.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      id: "predictive",
      title: "Smart Prep Guides",
      icon: BellRing,
      description: "Stop throwing away food. We tell your kitchen exactly how much to prep based on the weather and your sales history.",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    },
    {
      id: "engineering",
      title: "Daily P&L",
      icon: TrendingUp,
      description: "Don't wait until the end of the month to see if you made money. See exactly how much profit you made yesterday, right now.",
      image: dailyPlImage
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Secret Sauce: <span className="text-orange-500">Precision AI</span>
          </h2>
          <p className="text-xl text-slate-600">
            We don't just process paperwork. We digest every byte of operational data—from invoices to weather reports—to give you superpowers that were previously only available to billion-dollar chains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Navigation Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-center gap-4 group ${
                  activeStep === index
                    ? "bg-orange-50 border-orange-200 shadow-lg shadow-orange-100 scale-105"
                    : "bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeStep === index
                      ? "bg-orange-500 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      activeStep === index ? "text-slate-900" : "text-slate-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    activeStep === index ? "text-slate-700" : "text-slate-400"
                  }`}>
                    {step.description}
                  </p>
                </div>
                <ArrowRight
                  className={`w-5 h-5 transition-all ${
                    activeStep === index
                      ? "text-orange-500 opacity-100 translate-x-0"
                      : "text-slate-300 opacity-0 -translate-x-4"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Interactive Preview */}
          <div className="relative h-[300px] md:h-[500px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-bold tracking-wider uppercase mb-4">
                    Step 0{activeStep + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-300 text-lg">
                    {steps[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative UI Elements */}
            <div className="absolute top-6 right-6 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
