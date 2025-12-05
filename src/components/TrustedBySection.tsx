import { motion } from "motion/react";
import { Star, Quote, Sparkles, Building2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TrustedBySection() {
  const testimonials = [
    {
      quote: "NibbleIQ saved us over 4 hours a week on food cost tracking. Now I actually have time to work ON my business instead of IN the spreadsheets.",
      author: "Maria Chen",
      role: "Owner, 3 Locations",
      location: "San Francisco, CA",
      stat: "4hrs/week saved"
    },
    {
      quote: "We caught a 12% price increase from our produce supplier that we would have completely missed. Paid for itself in the first month.",
      author: "James Rodriguez",
      role: "Director of Operations",
      location: "Austin, TX",
      stat: "12% increase caught"
    },
    {
      quote: "The AI forecasting has been a game-changer for our purchasing. We've reduced waste by 18% and our margins have never looked better.",
      author: "Sarah Thompson",
      role: "Restaurant Group Owner",
      location: "Chicago, IL",
      stat: "18% waste reduction"
    }
  ];

  const trustIndicators = [
    { icon: Building2, value: "18", label: "Trusted Brands" },
    { icon: Sparkles, value: "98%", label: "Operator Satisfaction" },
    { icon: TrendingUp, value: "$1.2M", label: "Recovered Revenue" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
            <span className="text-sm text-slate-700">Trusted by passionate restaurant owners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900 font-bold">
            Why restaurant operators{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              love NibbleIQ
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Real results from real operators who got back to what they love
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-orange-100 shadow-xl text-center hover:shadow-2xl hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/40 group-hover:scale-110 transition-transform">
                <indicator.icon className="w-8 h-8 text-white stroke-[2.5]" />
              </div>
              <div className="text-5xl text-slate-900 mb-3 font-bold">{indicator.value}</div>
              <div className="text-slate-600">{indicator.label}</div>
            </motion.div>
          ))}
        </div>



        {/* Bottom section - Restaurant imagery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667725335393-3f5d14d45e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBoYXBweXxlbnwxfHx8fDE3NjQ3ODAyMTh8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Happy restaurant owner"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681993302983-96d079223a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY0NzgwMjE5fDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Restaurant team collaboration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759027044799-5aed5577f864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NjQ2OTI0NzJ8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Restaurant dining atmosphere"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-lg group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630710577163-b49a62cd6ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjQ3ODAyMTl8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Successful restaurant"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}