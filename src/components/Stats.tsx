const stats = [
  {
    number: "Limited",
    label: "Beta Spots",
    description: "Exclusive early access for select partners"
  },
  {
    number: "50% Off",
    label: "Founding Rate",
    description: "Lock in beta pricing for life"
  },
  {
    number: "Direct",
    label: "Founder Access",
    description: "Weekly calls with our team"
  },
  {
    number: "Shape",
    label: "The Product",
    description: "Your feedback drives our roadmap"
  }
];

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            Join the Beta Program — <span className="text-[#FF5722]">Limited Spots Available</span>
          </h2>
          <p className="text-xl text-blue-50">
            Be among the first to experience NibbleIQ. Get exclusive pricing, direct founder access, and help shape the future of restaurant intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="mb-3 text-[40px] font-bold">{stat.number}</div>
              <div className="text-xl mb-2">{stat.label}</div>
              <div className="text-sm text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}