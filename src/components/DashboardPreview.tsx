import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, AlertTriangle } from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="relative">
      {/* Mock Dashboard Interface */}
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-[#3D5AFE] to-[#2962FF] px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm opacity-90">Today's Overview</h3>
              <p className="text-xs opacity-75">Updated 2 minutes ago</p>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs">
              Live
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="p-6 grid grid-cols-2 gap-4">
          
          {/* Food Cost % */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#3D5AFE]/10 flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-[#3D5AFE]" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-xs">
                <TrendingDown className="w-3 h-3" />
                <span>2.3%</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-1">Food Cost %</p>
            <p className="text-2xl text-slate-900">28.4%</p>
          </div>

          {/* Labor Cost % */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF5722]/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#FF5722]" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-xs">
                <TrendingDown className="w-3 h-3" />
                <span>1.1%</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-1">Labor Cost %</p>
            <p className="text-2xl text-slate-900">31.2%</p>
          </div>

          {/* Daily Revenue */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-200">
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-xs">
                <TrendingUp className="w-3 h-3" />
                <span>8.7%</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-1">Today's Revenue</p>
            <p className="text-2xl text-slate-900">$12,847</p>
          </div>

          {/* Alerts */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-lg border border-amber-200">
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <div className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
                2 New
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-1">Active Alerts</p>
            <p className="text-2xl text-slate-900">3</p>
          </div>

        </div>

        {/* Mini Chart Visualization */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-200">
            <p className="text-xs text-slate-600 mb-3">7-Day Food Cost Trend</p>
            <div className="flex items-end justify-between h-24 gap-2">
              <div className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/50 rounded-t" style={{ height: '55%' }}></div>
              <div className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/50 rounded-t" style={{ height: '62%' }}></div>
              <div className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/50 rounded-t" style={{ height: '48%' }}></div>
              <div className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/50 rounded-t" style={{ height: '71%' }}></div>
              <div className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/50 rounded-t" style={{ height: '59%' }}></div>
              <div className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#3D5AFE]/50 rounded-t" style={{ height: '45%' }}></div>
              <div className="flex-1 bg-gradient-to-t from-[#2962FF] to-[#2962FF]/70 rounded-t shadow-lg" style={{ height: '38%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-lg border border-slate-200">
            <p className="text-xs text-slate-600 mb-3">Recent Updates</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <p className="text-xs text-slate-700">Invoice #4721 processed automatically</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3D5AFE]"></div>
                <p className="text-xs text-slate-700">Vendor price alert: Tomatoes +12%</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                <p className="text-xs text-slate-700">Labor forecast updated for weekend</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Badge - "Live Data" indicator */}
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg text-xs flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        Real-Time
      </div>
    </div>
  );
}
