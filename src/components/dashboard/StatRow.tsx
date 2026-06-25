import { MOCK_STATS } from "@/api/mockData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {MOCK_STATS.map((stat, i) => (
        <div key={i} className="bg-white border border-border p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            {stat.trend === "up" && <TrendingUp className="w-3.5 h-3.5 text-red-500" />}
            {stat.trend === "down" && <TrendingDown className="w-3.5 h-3.5 text-green-500" />}
            {stat.trend === "neutral" && <Minus className="w-3.5 h-3.5 text-muted-foreground" />}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-serif text-ink">{stat.value}</span>
            {stat.label.includes("₦") && <span className="text-xs text-muted-foreground font-medium">NGN</span>}
          </div>
          <p className="text-xs text-ink-3 mt-1 font-medium">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
}
