import { useState } from 'react';
import { DollarSign, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import { DemoModal } from './DemoModal';

export function ProfitLeakCalculator() {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    foodCostPercent: '',
    invoicesPerWeek: '',
    hoursOnAdmin: ''
  });
  
  const [results, setResults] = useState<{
    invoiceErrors: number;
    priceIncreases: number;
    wastage: number;
    timeCost: number;
    totalMonthly: number;
    totalYearly: number;
    hoursSaved: number;
  } | null>(null);
  
  const [showDemo, setShowDemo] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const calculateLeaks = () => {
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const foodCost = parseFloat(formData.foodCostPercent) || 0;
    const invoices = parseFloat(formData.invoicesPerWeek) || 0;
    const hours = parseFloat(formData.hoursOnAdmin) || 0;

    if (!revenue || !foodCost || !invoices || !hours) {
      return;
    }

    // Calculations based on industry averages
    const invoiceErrors = invoices * 4.3 * 0.15 * 87; // 15% have errors, avg $87
    const hiddenPriceIncreases = (revenue * (foodCost / 100)) * 0.038; // 3.8% missed increases
    const wastageBlindSpots = (revenue * (foodCost / 100)) * 0.042; // 4.2% untracked waste
    const adminTimeCost = hours * 4.3 * 35; // $35/hr value of time

    const totalMonthly = invoiceErrors + hiddenPriceIncreases + wastageBlindSpots + adminTimeCost;
    const totalYearly = totalMonthly * 12;

    setResults({
      invoiceErrors: Math.round(invoiceErrors),
      priceIncreases: Math.round(hiddenPriceIncreases),
      wastage: Math.round(wastageBlindSpots),
      timeCost: Math.round(adminTimeCost),
      totalMonthly: Math.round(totalMonthly),
      totalYearly: Math.round(totalYearly),
      hoursSaved: Math.round(hours * 0.75) // 75% reduction
    });

    setTimeout(() => setShowDemo(true), 1500);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 mb-4">
              Free Profit Analysis Tool
            </div>
            <h2 className="text-slate-50 mb-4">Where Is Your Money Going?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Most restaurants lose $2,000-$5,000 monthly to hidden profit leaks. Calculate yours in 60 seconds.
            </p>
          </div>

          {!results ? (
            /* Calculator Form */
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="monthlyRevenue" className="block text-slate-300 mb-2">
                    Monthly Revenue
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      id="monthlyRevenue"
                      type="number"
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({...formData, monthlyRevenue: e.target.value})}
                      placeholder="250000"
                      className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Your average monthly sales</p>
                </div>

                <div>
                  <label htmlFor="foodCostPercent" className="block text-slate-300 mb-2">
                    Food Cost Percentage
                  </label>
                  <div className="relative">
                    <input
                      id="foodCostPercent"
                      type="number"
                      value={formData.foodCostPercent}
                      onChange={(e) => setFormData({...formData, foodCostPercent: e.target.value})}
                      placeholder="32"
                      step="0.1"
                      className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Target or estimated COGS percentage</p>
                </div>

                <div>
                  <label htmlFor="invoicesPerWeek" className="block text-slate-300 mb-2">
                    Invoices Received Per Week
                  </label>
                  <input
                    id="invoicesPerWeek"
                    type="number"
                    value={formData.invoicesPerWeek}
                    onChange={(e) => setFormData({...formData, invoicesPerWeek: e.target.value})}
                    placeholder="35"
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <p className="text-xs text-slate-400 mt-1">From all suppliers combined</p>
                </div>

                <div>
                  <label htmlFor="hoursOnAdmin" className="block text-slate-300 mb-2">
                    Hours Per Week on Admin Tasks
                  </label>
                  <input
                    id="hoursOnAdmin"
                    type="number"
                    value={formData.hoursOnAdmin}
                    onChange={(e) => setFormData({...formData, hoursOnAdmin: e.target.value})}
                    placeholder="12"
                    className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <p className="text-xs text-slate-400 mt-1">Invoice review, cost tracking, spreadsheets</p>
                </div>

                <button
                  onClick={calculateLeaks}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Calculate My Profit Leaks
                </button>

                <p className="text-xs text-slate-400 text-center">
                  No email required • Instant results • Free forever
                </p>
              </div>
            </div>
          ) : (
            /* Results Display */
            <div className="space-y-6">
              {/* Main Result Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl text-center">
                <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-white/90" />
                <h3 className="text-white mb-2">You're Losing Money Every Month</h3>
                <div className="text-6xl text-white mb-2">
                  ${results.totalMonthly.toLocaleString()}
                </div>
                <p className="text-orange-100 text-lg">
                  That's ${results.totalYearly.toLocaleString()} per year disappearing from your restaurant
                </p>
              </div>

              {/* Breakdown */}
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
                <h3 className="text-white mb-6 text-center">Where Your Money Is Going</h3>
                
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <div className="text-white">Invoice Errors & Overcharges</div>
                        <div className="text-sm text-slate-400">Wrong quantities, duplicate charges, price mistakes</div>
                      </div>
                    </div>
                    <div className="text-2xl text-red-400">
                      ${results.invoiceErrors.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white">Hidden Price Increases</div>
                        <div className="text-sm text-slate-400">Supplier hikes you don't notice for 30+ days</div>
                      </div>
                    </div>
                    <div className="text-2xl text-orange-400">
                      ${results.priceIncreases.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-white">Waste & Spoilage Blind Spots</div>
                        <div className="text-sm text-slate-400">Food cost variances you can't track manually</div>
                      </div>
                    </div>
                    <div className="text-2xl text-yellow-400">
                      ${results.wastage.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white">Administrative Time Waste</div>
                        <div className="text-sm text-slate-400">Hours in spreadsheets instead of running your restaurant</div>
                      </div>
                    </div>
                    <div className="text-2xl text-blue-400">
                      ${results.timeCost.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Projection */}
              {showDemo && (
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-green-400 mb-2">Here's What You Could Save</h3>
                      <p className="text-slate-300">
                        Based on our average results with 18 restaurant partners
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="text-slate-400 text-sm mb-1">Monthly Savings</div>
                      <div className="text-4xl text-green-400">
                        ${Math.round(results.totalMonthly * 0.65).toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-400 mt-2">Recover 60-70% of profit leaks</div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="text-slate-400 text-sm mb-1">Time Saved Weekly</div>
                      <div className="text-4xl text-blue-400">
                        {results.hoursSaved} hours
                      </div>
                      <div className="text-sm text-slate-400 mt-2">Back to cooking, not spreadsheets</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 mb-6">
                    <h4 className="text-white mb-3">What You'll Get in Your Free Demo:</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Personalized analysis of YOUR specific profit leaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Live walkthrough with your actual invoices and data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>See exactly which suppliers are overcharging you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>Custom setup plan for your restaurant (48 hours or less)</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="block w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl text-center rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Book Your Free Demo Now
                  </button>
                  
                  <p className="text-center text-slate-400 text-sm mt-4">
                    Free 14-day trial • Setup in 48 hours • No credit card required
                  </p>
                </div>
              )}

              {/* Social Proof */}
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <p className="text-center text-slate-300 mb-4">
                  <span className="text-white">18 restaurants</span> are already using NibbleIQ to protect their margins
                </p>
                <div className="flex items-center justify-center gap-8 text-center">
                  <div>
                    <div className="text-2xl text-orange-400">$2.4K</div>
                    <div className="text-xs text-slate-400">Avg. monthly recovery</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700"></div>
                  <div>
                    <div className="text-2xl text-blue-400">8-12 hrs</div>
                    <div className="text-xs text-slate-400">Saved per week</div>
                  </div>
                  <div className="w-px h-12 bg-slate-700"></div>
                  <div>
                    <div className="text-2xl text-green-400">3.2%</div>
                    <div className="text-xs text-slate-400">Margin improvement</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setResults(null);
                  setShowDemo(false);
                  setFormData({
                    monthlyRevenue: '',
                    foodCostPercent: '',
                    invoicesPerWeek: '',
                    hoursOnAdmin: ''
                  });
                }}
                className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-all duration-200"
              >
                Calculate Again
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm">
              Powered by <span className="text-white">NibbleIQ</span> • Built by restaurant operators, for restaurant operators
            </p>
          </div>
        </div>
      </div>
      
      <DemoModal open={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} source="profit-calculator" />
    </section>
  );
}
