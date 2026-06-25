import { FileText, Download, Calendar, Filter } from "lucide-react";

export function ReportsPage() {
  const reports = [
    { id: "REP-001", name: "Weekly Intelligence Brief", date: "June 20, 2026", size: "1.2 MB" },
    { id: "REP-002", name: "Fuel Leakage Analysis", date: "June 18, 2026", size: "2.4 MB" },
    { id: "REP-003", name: "Driver Risk Scorecard", date: "June 15, 2026", size: "850 KB" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-serif">Fleet Reports</h2>
          <p className="text-sm text-muted-foreground">AI-generated briefs and operational audits</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-sm text-sm font-bold">Generate New Report</button>
      </div>

      <div className="bg-white border border-border rounded-lg shadow-sm">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <div className="flex gap-4">
            <button className="text-xs font-bold text-primary border-b-2 border-primary pb-1">ALL REPORTS</button>
            <button className="text-xs font-bold text-muted-foreground hover:text-ink-2 transition-colors">SCHEDULED</button>
            <button className="text-xs font-bold text-muted-foreground hover:text-ink-2 transition-colors">ARCHIVE</button>
          </div>
          <div className="flex gap-2">
            <button className="p-1.5 border border-border rounded-sm text-muted-foreground"><Calendar className="w-4 h-4" /></button>
            <button className="p-1.5 border border-border rounded-sm text-muted-foreground"><Filter className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="divide-y divide-border">
          {reports.map((report) => (
            <div key={report.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-bg text-primary rounded-sm flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink-2">{report.name}</h4>
                  <p className="text-xs text-muted-foreground">{report.id} • {report.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-muted-foreground">{report.size}</span>
                <button className="p-2 hover:bg-muted rounded-sm transition-colors text-primary">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
