import { TriangleAlert, TrendingDown, Timer, FileSearch } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Your Profits Are Disappearing",
      description: "Sysco raised chicken prices 18% last month. Did you catch it? Most operators don't notice until they see their bank account."
    },
    {
      icon: Timer,
      title: "You're Always Playing Catch-Up",
      description: "By the time you see the problem in your numbers, you've already lost thousands. You're reacting instead of preventing."
    },
    {
      icon: FileSearch,
      title: "Everything's a Mess",
      description: "Invoices in email, sales in your POS, costs in QuickBooks. You're wasting hours every week just trying to connect the dots."
    },
    {
      icon: TriangleAlert,
      title: "Blind Spots Are Killing You",
      description: "Food cost is supposed to be 32%, but it's actually 38%. Where's the extra 6% going? You have no idea—and that's the problem."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            You're Losing Money and <span className="text-orange-500">You Don't Even Know It</span>
          </h2>
          <p className="text-xl text-slate-300">
            Sound familiar? You work 70-hour weeks, but you're still not sure where all the money goes. Here's why.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 font-semibold">{problem.title}</h3>
              <p className="text-slate-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}