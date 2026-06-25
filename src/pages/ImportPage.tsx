import { Upload, FileSpreadsheet, Camera, Terminal, ChevronRight } from "lucide-react";

export function ImportPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif">Import Operational Data</h2>
        <p className="text-muted-foreground">Choose a source to ingest data into the intelligence engines</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-border p-8 rounded-lg text-center space-y-4 hover:border-primary transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
            <FileSpreadsheet className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold">Excel / CSV</h3>
            <p className="text-xs text-muted-foreground">Upload fuel logs or trip manifests</p>
          </div>
          <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 mx-auto">
            Upload File <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="bg-white border border-border p-8 rounded-lg text-center space-y-4 hover:border-primary transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
            <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold">Receipt Photo</h3>
            <p className="text-xs text-muted-foreground">AI extraction from fuel receipts</p>
          </div>
          <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 mx-auto">
            Take Photo <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="bg-white border border-border p-8 rounded-lg text-center space-y-4 hover:border-primary transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
            <Terminal className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold">Manual Entry</h3>
            <p className="text-xs text-muted-foreground">Quick log single events</p>
          </div>
          <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 mx-auto">
            Open Form <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="bg-sidebar p-6 rounded-lg text-sidebar-foreground">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary rounded-sm">
            <Upload className="w-4 h-4 text-white" />
          </div>
          <h4 className="font-serif text-lg">Recent Ingestions</h4>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-sidebar-border last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-sidebar-accent'}`} />
                <span className="text-xs font-medium">fuel_logs_june_24.xlsx</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">24 Jun 2026, 09:15</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
