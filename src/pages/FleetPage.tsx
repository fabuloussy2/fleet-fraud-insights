import { Truck, Activity, Battery, MapPin } from "lucide-react";

export function FleetPage() {
  const vehicles = Array.from({ length: 24 }).map((_, i) => ({
    id: `LAG-XA-${200 + i}`,
    status: Math.random() > 0.8 ? 'INACTIVE' : 'ACTIVE',
    fuel: Math.floor(Math.random() * 100),
    driver: ["Musa Ibrahim", "Emeka Okafor", "Segun Arinze", "Chidi Onu"][Math.floor(Math.random() * 4)],
    location: "Lagos - Ibadan Exp."
  }));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-serif">Fleet Management</h2>
          <p className="text-sm text-muted-foreground">150 vehicles total across 3 hubs</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-sm border border-green-200">
            142 ACTIVE
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-sm border border-red-200">
            8 ISSUES
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white border border-border p-4 rounded-lg shadow-sm hover:border-primary transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Truck className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </div>
              <span className={`h-2 w-2 rounded-full ${v.status === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-mono font-bold">{v.id}</p>
                <p className="text-[10px] text-muted-foreground truncate">{v.driver}</p>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] uppercase font-mono text-muted-foreground">
                  <span>Fuel</span>
                  <span className="text-ink-2">{v.fuel}%</span>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${v.fuel < 20 ? 'bg-red-500' : 'bg-primary'}`} 
                    style={{ width: `${v.fuel}%` }} 
                  />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{v.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
