import { TrendingUp, ShieldAlert, Zap } from "lucide-react";

export function SavingsBanner() {
  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
        <ShieldAlert className="w-32 h-32" />
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-primary-foreground/80 text-xs font-mono uppercase tracking-[0.2em]">Operational Exposure</h3>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-serif">₦147,000</span>
            <span className="text-sm bg-black/20 px-2 py-0.5 rounded-sm flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-red-300" />
              +12% vs last week
            </span>
          </div>
          <p className="text-primary-foreground/60 text-sm max-w-md">
            Potential loss detected in the last 24 hours across 4 critical anomalies.
          </p>
        </div>

        <div className="h-12 w-px bg-primary-foreground/20 hidden md:block" />

        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-[10px] font-mono uppercase">Monthly Exposure</p>
            <p className="text-xl font-serif">₦890,000</p>
          </div>
          <div className="text-center">
            <p className="text-primary-foreground/60 text-[10px] font-mono uppercase">Platform ROI</p>
            <p className="text-xl font-serif">19.8×</p>
          </div>
        </div>

        <button className="bg-white text-primary px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-muted transition-colors flex items-center gap-2 shadow-sm">
          <Zap className="w-4 h-4" />
          Recover Leakage
        </button>
      </div>
    </div>
  );
}
