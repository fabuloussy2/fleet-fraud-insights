import { MOCK_ANOMALIES, Anomaly } from "@/api/mockData";
import { RiskPill } from "@/components/shared/RiskPill";
import { EngineTag } from "@/components/shared/EngineTag";
import { ChevronRight, Filter, RefreshCcw } from "lucide-react";

interface AnomalyTableProps {
  onRowClick: (anomaly: Anomaly) => void;
  selectedId?: string;
}

export function AnomalyTable({ onRowClick, selectedId }: AnomalyTableProps) {
  return (
    <div className="bg-white border border-border rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-[5]">
        <div className="flex items-center gap-3">
          <h3 className="font-serif text-lg">Priority Anomalies</h3>
          <span className="bg-muted px-2 py-0.5 rounded-sm text-[10px] font-bold text-muted-foreground">4 UNRESOLVED</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-muted rounded-sm transition-colors text-muted-foreground">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-muted rounded-sm transition-colors text-muted-foreground">
            <RefreshCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background/50 border-b border-border">
              <th className="py-3 px-4 text-[10px] font-mono text-muted-foreground uppercase">Risk</th>
              <th className="py-3 px-4 text-[10px] font-mono text-muted-foreground uppercase">Vehicle</th>
              <th className="py-3 px-4 text-[10px] font-mono text-muted-foreground uppercase">Driver</th>
              <th className="py-3 px-4 text-[10px] font-mono text-muted-foreground uppercase">Finding</th>
              <th className="py-3 px-4 text-[10px] font-mono text-muted-foreground uppercase">Engines</th>
              <th className="py-3 px-4 text-[10px] font-mono text-muted-foreground uppercase text-right">Est. Loss</th>
              <th className="py-3 px-4 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ANOMALIES.map((anomaly) => (
              <tr 
                key={anomaly.id} 
                onClick={() => onRowClick(anomaly)}
                className={`group border-b border-border last:border-0 hover:bg-muted/50 cursor-pointer transition-colors ${
                  selectedId === anomaly.id ? 'bg-primary/5 ring-1 ring-inset ring-primary' : ''
                }`}
              >
                <td className="py-4 px-4">
                  <RiskPill risk={anomaly.risk} />
                </td>
                <td className="py-4 px-4">
                  <span className="font-mono text-xs font-bold text-ink">{anomaly.vehicleId}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs font-medium text-ink-2">{anomaly.driver}</span>
                </td>
                <td className="py-4 px-4">
                  <p className="text-xs text-ink-3 line-clamp-1 max-w-[300px] leading-relaxed">
                    {anomaly.finding}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-3">
                    {anomaly.engines.map(engine => (
                      <EngineTag key={engine} engine={engine} showLabel={false} />
                    ))}
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-xs font-serif text-ink">{anomaly.estLoss}</span>
                </td>
                <td className="py-4 px-4">
                  <ChevronRight className={`w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 ${
                    selectedId === anomaly.id ? 'text-primary translate-x-0.5' : ''
                  }`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-3 bg-background/30 border-t border-border flex justify-center">
        <button className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">
          View All Fleet Anomalies
        </button>
      </div>
    </div>
  );
}
