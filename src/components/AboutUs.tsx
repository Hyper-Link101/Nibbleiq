import { Target, Users, TrendingUp, Mail, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function AboutUs() {
  const team = [
    {
      name: "Restaurant Operations Team",
      role: "Former Multi-Unit Operators",
      bio: "Decades of combined experience managing restaurants from independent concepts to national chains. We've lived the pain of month-end surprises.",
      icon: Users
    },
    {
      name: "Data Science Team",
      role: "AI & Analytics Experts",
      bio: "Built predictive models for Fortune 500 supply chains. Now applying that expertise to help restaurants run smarter, not harder.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3D5AFE]/10 text-[#3D5AFE] rounded-full text-sm mb-6">
            <Target className="h-4 w-4" />
            Who We Are
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 font-bold">
            Built by <span className="text-[#3D5AFE]">Restaurant Operators</span> Who Get It
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            NibbleIQ was born from frustration. We spent years in the trenches—managing multi-unit operations, fighting margin erosion, and discovering problems weeks after they hit the P&L. We knew there had to be a better way.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-[#3D5AFE]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  We're building the restaurant intelligence platform we wish we'd had—one that puts operators <strong>ahead of problems</strong> instead of reacting to them. No more month-end surprises. No more hidden margin leaks.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Just real-time clarity, actionable insights, and the confidence to make decisions that protect your bottom line and support your team.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-[#3D5AFE]/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#3D5AFE]/10 to-[#2962FF]/10 rounded-xl flex items-center justify-center mb-4">
                <member.icon className="h-8 w-8 text-[#3D5AFE]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-sm text-[#3D5AFE] mb-4 font-semibold">{member.role}</p>
              <p className="text-slate-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Why We're in Beta */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3D5AFE]/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why We're Still in Beta</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We're not trying to build for everyone—we're building for operators who want a <strong>true partner</strong>, not just another vendor. Beta gives us the time to listen, learn, and build something that genuinely solves real problems.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our current beta partners are helping us refine the product daily. If you value collaboration over "one-size-fits-all" solutions, we'd love to have you join us.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] hover:from-[#2962FF] hover:to-[#3D5AFE] text-white shadow-xl shadow-[#3D5AFE]/30 px-8 py-6 group"
                  >
                    Get in Touch
                    <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a 
                  href="mailto:hello@nibbleiq.com"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  hello@nibbleiq.com
                </a>
                <a 
                  href="https://linkedin.com/company/nibbleiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  Follow us on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#3D5AFE]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[#2962FF]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}