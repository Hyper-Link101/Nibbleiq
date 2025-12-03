import { Link2, Radar, BellRing, BadgeCheck, Mail, FileText, TrendingUp, DollarSign, Users, Clock, ArrowRight, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      number: "01",
      title: "Hook Up Your Stuff",
      description: "Connect your email (where invoices come in), your POS system, QuickBooks—whatever you use. Takes about 20 minutes. We'll help you.",
      visual: "connect"
    },
    {
      icon: Radar,
      number: "02",
      title: "We Watch Everything",
      description: "Like having a really smart accountant checking your numbers 24/7. We learn what's normal for your restaurant, then spot anything weird.",
      visual: "analyze"
    },
    {
      icon: BellRing,
      number: "03",
      title: "Get Alerts That Matter",
      description: "Every morning, see what happened yesterday. Price increases, weird charges, too much waste. Real problems you can actually fix.",
      visual: "alerts"
    },
    {
      icon: BadgeCheck,
      number: "04",
      title: "Keep Your Money",
      description: "Make smart decisions. Stop the bleeding. Fire suppliers who are ripping you off. Finally know exactly what's going on.",
      visual: "protect"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50/50 to-red-50/30 relative overflow-hidden">
      {/* Background animated gradient blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 font-bold">
            How It Works: <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Super Simple</span>
          </h2>
          <p className="text-xl text-slate-600">
            Set up in 20 minutes. Start saving money the same day.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

// Animated Step Card Component
function StepCard({ step, index }: { step: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const isReversed = index % 2 === 1;

  return (
    <motion.div 
      ref={ref}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Text Content */}
      <div className="flex-1">
        <motion.div 
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="text-5xl text-[#3D5AFE]/20 font-bold font-normal"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            {step.number}
          </motion.div>
          <motion.div 
            className="w-14 h-14 bg-gradient-to-br from-[#3D5AFE] to-[#2962FF] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ rotate: 360 }}
          >
            <step.icon className="h-7 w-7 text-white" />
          </motion.div>
        </motion.div>
        
        <motion.h3 
          className="text-3xl mb-4 text-slate-900 font-bold"
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {step.title}
        </motion.h3>
        
        <motion.p 
          className="text-lg text-slate-600"
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {step.description}
        </motion.p>
      </div>
      
      {/* Visual Card */}
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: isReversed ? -50 : 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isReversed ? -50 : 50, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white to-slate-50 shadow-lg border border-slate-200/60 p-6 min-h-[280px] flex items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {step.visual === "connect" && <ConnectVisual isInView={isInView} />}
          {step.visual === "analyze" && <AnalyzeVisual isInView={isInView} />}
          {step.visual === "alerts" && <AlertsVisual isInView={isInView} />}
          {step.visual === "protect" && <ProtectVisual isInView={isInView} />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Step 1: Connect Your Systems - Integration Dashboard
function ConnectVisual({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative w-full h-[420px] bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xl">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-900 font-bold">Integrations</div>
            <div className="text-xs text-slate-500">Connected data sources</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-600">All systems operational</span>
          </div>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="p-6 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <IntegrationCard
            name="Supplier Emails"
            icon={Mail}
            status="Active"
            lastSync="2 min ago"
            stats="847 invoices read this week"
            color="blue"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <IntegrationCard
            name="Toast POS"
            icon={FileText}
            status="Active"
            lastSync="Live"
            stats="$127K revenue tracked this week"
            color="green"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <IntegrationCard
            name="QuickBooks"
            icon={DollarSign}
            status="Active"
            lastSync="1 hour ago"
            stats="P&L synced daily"
            color="purple"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <IntegrationCard
            name="Labor Management"
            icon={Users}
            status="Active"
            lastSync="Live"
            stats="42 employees tracked"
            color="orange"
          />
        </motion.div>
      </div>

      {/* Footer Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-50 to-blue-100/50 border-t border-blue-200 px-6 py-3">
        <div className="flex items-center justify-between text-xs">
          <div className="text-slate-600">
            <span className="font-bold text-[#3D5AFE]">1,247</span> documents processed this week
          </div>
          <div className="text-slate-600">
            <span className="font-bold text-green-600">23</span> price changes detected
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 2: AI Analysis - Price Intelligence Dashboard
function AnalyzeVisual({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative w-full h-[420px] bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xl">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-900 font-bold">Price Intelligence</div>
            <div className="text-xs text-slate-500">AI-powered anomaly detection</div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Radar className="h-3 w-3 text-[#3D5AFE]" />
            </motion.div>
            <span className="text-xs text-[#2962FF] font-bold">Scanning</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Week Comparison Tabs */}
        <div className="flex gap-2 mb-4">
          <div className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs text-slate-600">Last Week</div>
          <div className="px-3 py-1.5 bg-blue-100 rounded-lg text-xs text-[#2962FF] font-bold">This Week</div>
        </div>

        {/* Price Table */}
        <motion.div 
          className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <table className="w-full">
            <thead className="bg-slate-100 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-2 text-[10px] text-slate-600">Item</th>
                <th className="text-right px-4 py-2 text-[10px] text-slate-600">Last Week</th>
                <th className="text-right px-4 py-2 text-[10px] text-slate-600">This Week</th>
                <th className="text-right px-4 py-2 text-[10px] text-slate-600">Change</th>
              </tr>
            </thead>
            <tbody>
              <PriceTableRow 
                item="Chicken breast (40lb)"
                lastWeek="$2.85"
                thisWeek="$3.36"
                change={18}
                alert
                delay={0.2}
                isInView={isInView}
              />
              <PriceTableRow 
                item="Tomatoes (25lb)"
                lastWeek="$1.20"
                thisWeek="$1.20"
                change={0}
                delay={0.3}
                isInView={isInView}
              />
              <PriceTableRow 
                item="Oil (5gal)"
                lastWeek="$32.00"
                thisWeek="$32.00"
                change={0}
                delay={0.4}
                isInView={isInView}
              />
              <PriceTableRow 
                item="Beef ribeye (lb)"
                lastWeek="$8.50"
                thisWeek="$8.92"
                change={5}
                alert
                delay={0.5}
                isInView={isInView}
              />
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Bottom Alert Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-xs text-white font-bold">2 Anomalies Detected</div>
              <div className="text-[10px] text-white/80">Projected monthly impact</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg text-white font-bold">$2,340</div>
            <div className="text-[10px] text-white/80">per month</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3: Alert notifications dashboard
function AlertsVisual({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative w-full h-[320px] flex flex-col justify-center gap-3 px-2 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5"></div>
      
      {/* Animated alert waves */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse-wave"></div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ModernNotificationCard 
          icon={AlertTriangle}
          title="Price Increase Detected"
          description="Chicken breast +18% from Sysco"
          value="$2,340/mo impact"
          color="red"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ModernNotificationCard 
          icon={CheckCircle2}
          title="Labor Optimization"
          description="Reduce Tuesday dinner shift by 1 server"
          value="Save $450/week"
          color="green"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ModernNotificationCard 
          icon={Info}
          title="Traffic Forecast"
          description="Weekend covers expected +15%"
          value="Action required"
          color="blue"
        />
      </motion.div>

      <style>{`
        @keyframes pulseWave {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
        .animate-pulse-wave {
          animation: pulseWave 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Step 4: Results dashboard with realistic metrics
function ProtectVisual({ isInView }: { isInView: boolean }) {
  return (
    <div className="relative w-full h-[420px] bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xl">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-900 font-bold">Impact Dashboard</div>
            <div className="text-xs text-slate-500">90-day results</div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-lg">
            <CheckCircle2 className="h-3 w-3 text-green-600" />
            <span className="text-xs text-green-700 font-bold">On Track</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Top Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ResultMetricCard
              label="Total Savings"
              value="$18,240"
              subtext="Past 90 days"
              trend="+12% vs forecast"
              color="green"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ResultMetricCard
              label="Margin Improvement"
              value="3.2%"
              subtext="Food cost reduction"
              trend="Target: 2.5%"
              color="blue"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ResultMetricCard
              label="Issues Prevented"
              value="47"
              subtext="Price alerts caught"
              trend="Before P&L impact"
              color="orange"
            />
          </motion.div>
        </div>

        {/* Savings Breakdown Table */}
        <motion.div
          className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-2">
            <div className="text-xs text-slate-700 font-bold">Savings Breakdown</div>
          </div>
          <div className="p-4 space-y-3">
            <SavingsRow
              category="Supplier Price Optimization"
              amount="$8,450"
              percentage="46%"
              delay={0.5}
              isInView={isInView}
            />
            <SavingsRow
              category="Labor Efficiency"
              amount="$6,120"
              percentage="34%"
              delay={0.6}
              isInView={isInView}
            />
            <SavingsRow
              category="Waste Reduction"
              amount="$3,670"
              percentage="20%"
              delay={0.7}
              isInView={isInView}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Success Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-500 to-green-600 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <BadgeCheck className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-xs text-white font-bold">ROI Achievement</div>
              <div className="text-[10px] text-white/80">Platform paid for itself in 18 days</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg text-white font-bold">847%</div>
            <div className="text-[10px] text-white/80">Annual ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function GlassSourceCard({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white p-2.5 rounded-lg shadow-lg flex items-center gap-2`}>
      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-xs font-bold">{label}</span>
    </div>
  );
}

function ModernChartCard({ label, value, trend, bars, delay, isInView }: { 
  label: string, 
  value: string, 
  trend: 'up' | 'down' | 'stable',
  bars: number[],
  delay: number,
  isInView: boolean
}) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    stable: 'text-slate-600'
  };

  return (
    <div 
      className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-3 shadow-md animate-fade-in-up"
      style={{ animationDelay: `${delay}s`, opacity: 0, animation: `fadeInUp 0.6s ease-out ${delay}s forwards` }}
    >
      <div className="text-[10px] text-slate-500 mb-1">{label}</div>
      <div className={`text-lg font-bold mb-2 ${trendColors[trend]}`}>{value}</div>
      <div className="flex items-end justify-between gap-0.5 h-12">
        {bars.map((height, i) => (
          <div 
            key={i} 
            className="flex-1 bg-gradient-to-t from-[#3D5AFE] to-[#2962FF] rounded-sm animate-grow-bar"
            style={{ 
              height: `${height}%`,
              animationDelay: `${delay + i * 0.05}s`
            }}
          ></div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growBar {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .animate-grow-bar { 
          transform-origin: bottom;
          animation: growBar 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}

function ModernNotificationCard({ 
  icon: Icon, 
  title, 
  description, 
  value, 
  color
}: { 
  icon: any, 
  title: string, 
  description: string, 
  value: string, 
  color: 'red' | 'green' | 'blue'
}) {
  const colors = {
    red: { 
      bg: 'from-red-50 to-red-100/50', 
      border: 'border-l-red-500', 
      icon: 'from-red-500 to-red-600', 
      iconBg: 'bg-red-100',
      text: 'text-red-700',
      glow: 'shadow-red-500/20'
    },
    green: { 
      bg: 'from-green-50 to-green-100/50', 
      border: 'border-l-green-500', 
      icon: 'from-green-500 to-green-600', 
      iconBg: 'bg-green-100',
      text: 'text-green-700',
      glow: 'shadow-green-500/20'
    },
    blue: { 
      bg: 'from-blue-50 to-blue-100/50', 
      border: 'border-l-blue-500', 
      icon: 'from-blue-500 to-blue-600', 
      iconBg: 'bg-blue-100',
      text: 'text-blue-700',
      glow: 'shadow-blue-500/20'
    }
  };

  const colorScheme = colors[color];

  return (
    <motion.div 
      className={`bg-gradient-to-br ${colorScheme.bg} border-l-4 ${colorScheme.border} border border-slate-200/60 rounded-xl p-4 shadow-lg ${colorScheme.glow} flex items-start gap-3 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
      whileHover={{ y: -2 }}
    >
      {/* Icon with gradient */}
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorScheme.icon} shadow-md flex items-center justify-center flex-shrink-0`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-slate-900 mb-1">{title}</div>
        <div className="text-xs text-slate-600 mb-2">{description}</div>
        <div className={`text-xs font-bold ${colorScheme.text} flex items-center gap-1`}>
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${colorScheme.icon}`}></div>
          {value}
        </div>
      </div>
      
      {/* Notification badge */}
      <motion.div
        className={`w-2 h-2 rounded-full bg-gradient-to-br ${colorScheme.icon}`}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

function ModernResultMetric({ value, label, delay, isInView }: { value: string, label: string, delay: number, isInView: boolean }) {
  return (
    <div 
      className="text-center animate-pop-in"
      style={{ animationDelay: `${delay}s`, opacity: 0, animation: `popIn 0.5s ease-out ${delay}s forwards` }}
    >
      <div className="text-xl font-bold text-orange-600 mb-0.5">{value}</div>
      <div className="text-[10px] text-slate-600">{label}</div>
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          60% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function DataStreamItem({ source, icon: Icon, title, status, color, items }: { 
  source: string, 
  icon: any, 
  title: string, 
  status: string, 
  color: 'blue' | 'green' | 'purple', 
  items: string[]
}) {
  const colors = {
    blue: { 
      bg: 'bg-blue-500/20', 
      border: 'border-l-blue-500', 
      icon: 'from-blue-500 to-blue-600',
      text: 'text-blue-400'
    },
    green: { 
      bg: 'bg-green-500/20', 
      border: 'border-l-green-500', 
      icon: 'from-green-500 to-green-600',
      text: 'text-green-400'
    },
    purple: { 
      bg: 'bg-purple-500/20', 
      border: 'border-l-purple-500', 
      icon: 'from-purple-500 to-purple-600',
      text: 'text-purple-400'
    }
  };

  const colorScheme = colors[color];

  return (
    <div className={`${colorScheme.bg} border-l-4 ${colorScheme.border} border border-slate-700/60 rounded-lg p-3 backdrop-blur-sm`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorScheme.icon} shadow-md flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs text-white">{title}</div>
            <div className={`text-[10px] ${colorScheme.text}`}>{status}</div>
          </div>
          <div className="text-[10px] text-slate-400 mb-2">{source}</div>
          <div className="space-y-0.5">
            {items.map((item, i) => (
              <div key={i} className="text-[10px] text-slate-300 flex items-center gap-1.5">
                <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceTableRow({ item, lastWeek, thisWeek, change, alert, delay, isInView }: { 
  item: string, 
  lastWeek: string, 
  thisWeek: string, 
  change: number, 
  alert?: boolean,
  delay: number,
  isInView: boolean
}) {
  return (
    <tr>
      <td className="text-left px-4 py-2 text-[10px] text-slate-600">{item}</td>
      <td className="text-right px-4 py-2 text-[10px] text-slate-600">{lastWeek}</td>
      <td className="text-right px-4 py-2 text-[10px] text-slate-600">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delay }}
        >
          {thisWeek}
        </motion.div>
      </td>
      <td className="text-right px-4 py-2 text-[10px] text-slate-600">
        {change > 0 && (
          <span className="text-[9px] text-red-600 font-bold bg-red-100 px-1.5 py-0.5 rounded">
            +{change}%
          </span>
        )}
      </td>
    </tr>
  );
}

function IntegrationCard({ name, icon: Icon, status, lastSync, stats, color }: { 
  name: string, 
  icon: any, 
  status: string, 
  lastSync: string, 
  stats: string, 
  color: 'blue' | 'green' | 'purple' | 'orange'
}) {
  const colors = {
    blue: { 
      bg: 'bg-blue-50', 
      border: 'border-l-blue-500', 
      icon: 'from-blue-500 to-blue-600',
      status: 'bg-green-100 text-green-700'
    },
    green: { 
      bg: 'bg-green-50', 
      border: 'border-l-green-500', 
      icon: 'from-green-500 to-green-600',
      status: 'bg-green-100 text-green-700'
    },
    purple: { 
      bg: 'bg-purple-50', 
      border: 'border-l-purple-500', 
      icon: 'from-purple-500 to-purple-600',
      status: 'bg-green-100 text-green-700'
    },
    orange: { 
      bg: 'bg-orange-50', 
      border: 'border-l-orange-500', 
      icon: 'from-orange-500 to-orange-600',
      status: 'bg-green-100 text-green-700'
    }
  };

  const colorScheme = colors[color];

  return (
    <div className={`${colorScheme.bg} border-l-4 ${colorScheme.border} border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorScheme.icon} shadow-sm flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm text-slate-900 font-bold">{name}</div>
            <div className={`text-[10px] px-2 py-0.5 rounded-full ${colorScheme.status}`}>{status}</div>
          </div>
          <div className="text-[10px] text-slate-500 mb-2">{lastSync}</div>
          <div className="text-xs text-slate-600">{stats}</div>
        </div>
      </div>
    </div>
  );
}

function ResultMetricCard({ label, value, subtext, trend, color }: { 
  label: string, 
  value: string, 
  subtext: string, 
  trend: string, 
  color: 'green' | 'blue' | 'orange'
}) {
  const colors = {
    green: { 
      bg: 'bg-green-50', 
      border: 'border-l-green-500', 
      icon: 'from-green-500 to-green-600',
      text: 'text-green-700'
    },
    blue: { 
      bg: 'bg-blue-50', 
      border: 'border-l-blue-500', 
      icon: 'from-blue-500 to-blue-600',
      text: 'text-blue-700'
    },
    orange: { 
      bg: 'bg-orange-50', 
      border: 'border-l-orange-500', 
      icon: 'from-orange-500 to-orange-600',
      text: 'text-orange-700'
    }
  };

  const colorScheme = colors[color];

  return (
    <div className={`${colorScheme.bg} border-l-4 ${colorScheme.border} border border-slate-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-300`}>
      <div className="text-[10px] text-slate-500 mb-1">{label}</div>
      <div className="text-lg text-slate-900 font-bold mb-1">{value}</div>
      <div className="text-[10px] text-slate-600 mb-1">{subtext}</div>
      <div className={`text-[10px] font-bold ${colorScheme.text}`}>{trend}</div>
    </div>
  );
}

function SavingsRow({ category, amount, percentage, delay, isInView }: { 
  category: string, 
  amount: string, 
  percentage: string, 
  delay: number,
  isInView: boolean
}) {
  return (
    <motion.div 
      className="flex items-center justify-between"
      initial={{ opacity: 0, x: 10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay }}
    >
      <div className="text-xs text-slate-600">{category}</div>
      <div className="flex items-center gap-2">
        <div className="text-xs text-slate-900 font-bold">{amount}</div>
        <div className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{percentage}</div>
      </div>
    </motion.div>
  );
}