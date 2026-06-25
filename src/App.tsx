import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Shell } from "@/components/layout/Shell";
import { SavingsBanner } from "@/components/dashboard/SavingsBanner";
import { StatRow } from "@/components/dashboard/StatRow";
import { AnomalyTable } from "@/components/dashboard/AnomalyTable";
import { FleetChat } from "@/components/dashboard/FleetChat";
import { XAIPanel } from "@/components/dashboard/XAIPanel";
import { Anomaly } from "@/api/mockData";
import { FleetPage } from "@/pages/FleetPage";
import { ReportsPage } from "@/pages/ReportsPage";
import { ImportPage } from "@/pages/ImportPage";
import { DriversPage } from "@/pages/DriversPage";
import { AnomaliesPage } from "@/pages/AnomaliesPage";

const Dashboard = () => {
  const [selectedAnomaly, setSelectedAnomaly] = useState<Anomaly | null>(null);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      <SavingsBanner />
      <StatRow />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <AnomalyTable 
            onRowClick={setSelectedAnomaly} 
            selectedId={selectedAnomaly?.id} 
          />
        </div>
        <div className="xl:col-span-1">
          <FleetChat />
        </div>
      </div>
      <XAIPanel 
        anomaly={selectedAnomaly} 
        onClose={() => setSelectedAnomaly(null)} 
      />
    </div>
  );
};

const Placeholder = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
    <h2 className="text-3xl font-serif mb-2">{name}</h2>
    <p className="text-muted-foreground">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        <Route path="/dashboard" element={
          <Shell title="Morning Intelligence Report">
            <Dashboard />
          </Shell>
        } />

        <Route path="/fleet" element={
          <Shell title="Fleet Overview">
            <FleetPage />
          </Shell>
        } />

        <Route path="/vehicles/:id" element={
          <Shell title="Vehicle Deep-dive">
            <Placeholder name="Vehicle Deep-dive" />
          </Shell>
        } />

        <Route path="/drivers" element={
          <Shell title="Driver Intelligence">
            <DriversPage />
          </Shell>
        } />

        <Route path="/anomalies" element={
          <Shell title="Anomaly Log">
            <AnomaliesPage />
          </Shell>
        } />

        <Route path="/reports" element={
          <Shell title="Fleet Reports">
            <ReportsPage />
          </Shell>
        } />

        <Route path="/import" element={
          <Shell title="Data Import">
            <ImportPage />
          </Shell>
        } />

        <Route path="/settings" element={
          <Shell title="System Settings">
            <Placeholder name="Configuration" />
          </Shell>
        } />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
