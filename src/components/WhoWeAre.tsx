import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Award, Sparkles } from "lucide-react";

export function WhoWeAre() {
  const values = [
    {
      icon: Heart,
      title: "Built by Operators",
      description: "We've been in your shoes. Late nights, thin margins, and spreadsheets that never quite add up. That's why we built this."
    },
    {
      icon: Users,
      title: "For the People",
      description: "Every feature we build is designed to give you more time for what matters—your team, your craft, your family."
    },
    {
      icon: Award,
      title: "Excellence First",
      description: "We're obsessed with accuracy, speed, and making software that actually works the way restaurant operators think."
    },
    {
      icon: Sparkles,
      title: "Always Improving",
      description: "Your feedback shapes our roadmap. We're building this together, one feature at a time."
    }
  ];

  const stats = [
    { value: "50K+", label: "Hours Saved Monthly" },
    { value: "$1.2M+", label: "Recovered for Clients" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
              <span className="text-orange-400 tracking-wider uppercase text-sm font-medium">Who We Are</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-6xl text-white leading-tight">
              Restaurant Operators.{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Not Software People.
              </span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                We started NibbleIQ because we were tired of watching talented chefs and restaurateurs 
                drown in spreadsheets while their passion for hospitality took a backseat to paperwork.
              </p>
              <p>
                Every restaurant has a story. A vision. A craft worth protecting. But too often, 
                that story gets buried under invoices, inventory counts, and late-night number crunching.
              </p>
              <p className="text-white font-medium">
                We built NibbleIQ to give you back what matters most: time to cook, time to connect 
                with guests, and time for the people you love.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300">
                    <div className="text-4xl text-white font-bold mb-2" style={{
                      textShadow: '0 2px 16px rgba(59, 130, 246, 0.15)'
                    }}>
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/0 group-hover:bg-orange-500/5 blur-xl transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                    {/* Icon with gradient background */}
                    <div className="absolute -left-4 top-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-blue-500/20 ring-4 ring-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="pl-16">
                      <h3 className="text-2xl text-white font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 blur-2xl transition-all duration-500"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section - Team Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Image */}
            <div className="relative h-96 md:h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Restaurant team collaboration"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <div className="max-w-3xl">
                  <h3 className="text-4xl md:text-5xl text-white font-bold mb-4" style={{
                    textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)'
                  }}>
                    Ready to reclaim your time?
                  </h3>
                  <p className="text-xl text-slate-200 mb-6" style={{
                    textShadow: '0 1px 8px rgba(0, 0, 0, 0.4)'
                  }}>
                    Join hundreds of restaurant operators who've already made the switch to smarter management.
                  </p>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="flex -space-x-3">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1759521296144-fe6f2d2dc769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc5MjY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Restaurant chef"
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-900"
                      />
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1728631191055-aa24c9eff7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWFuYWdlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjQ3OTI2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Restaurant manager"
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-900"
                      />
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1667725335393-3f5d14d45e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc2NDc5MjY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Restaurant owner"
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-900"
                      />
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbGl0eSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc5MjY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Hospitality professional"
                        className="w-10 h-10 rounded-full object-cover border-2 border-slate-900"
                      />
                    </div>
                    <span className="text-sm">Join 500+ restaurant operators</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}