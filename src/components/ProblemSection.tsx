import { TriangleAlert, TrendingDown, Timer, FileSearch } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Margin Erosion",
      description: "Hidden price increases from suppliers silently eat into profits, discovered only at month-end when it's too late."
    },
    {
      icon: Timer,
      title: "Reactive Management",
      description: "You're always one step behind—finding out about issues after they've already impacted your bottom line."
    },
    {
      icon: FileSearch,
      title: "Data Scattered",
      description: "Purchasing, labor, and operations data sits in separate systems, making it impossible to see the full picture."
    },
    {
      icon: TriangleAlert,
      title: "Blind Spots",
      description: "Food cost variances and operational risks go unnoticed until they become major problems in your P&L."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            The Problem: Month-End Surprises Are <span className="text-[#FF5722]">Killing Your Margins</span>
          </h2>
          <p className="text-xl text-slate-300">
            Restaurant operators are stuck reacting to problems instead of preventing them. By the time you see the issue in your P&L, it's already cost you thousands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3 font-bold">{problem.title}</h3>
              <p className="text-slate-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-[#3D5AFE]/10 to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
}