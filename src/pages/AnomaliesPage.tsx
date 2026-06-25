import { AnomalyTable } from "@/components/dashboard/AnomalyTable";
import { XAIPanel } from "@/components/dashboard/XAIPanel";
import { useState } from "react";
import { Anomaly } from "@/api/mockData";

export function AnomaliesPage() {
  const [selectedAnomaly, setSelectedAnomaly] = useState<Anomaly | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-serif">Anomaly Log</h2>
          <p className="text-sm text-muted-foreground">Historical and active operational issues</p>
        </div>
      </div>

      <AnomalyTable 
        onRowClick={setSelectedAnomaly} 
        selectedId={selectedAnomaly?.id} 
      />

      <XAIPanel 
        anomaly={selectedAnomaly} 
        onClose={() => setSelectedAnomaly(null)} 
      />
    </div>
  );
}
