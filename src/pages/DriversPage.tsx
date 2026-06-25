import { Users, Star, ShieldAlert, Award } from "lucide-react";

export function DriversPage() {
  const drivers = [
    { name: "Musa Ibrahim", score: 42, risk: "HIGH", trips: 156, fuel: "+12% avg" },
    { name: "Emeka Okafor", score: 88, risk: "LOW", trips: 242, fuel: "-4% avg" },
    { name: "Segun Arinze", score: 76, risk: "MEDIUM", trips: 189, fuel: "+2% avg" },
    { name: "Chidi Onu", score: 94, risk: "LOW", trips: 310, fuel: "-7% avg" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-serif">Driver Intelligence</h2>
          <p className="text-sm text-muted-foreground">Behavioral analysis and risk scoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drivers.map((d) => (
          <div key={d.name} className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-muted border-4 border-background flex items-center justify-center relative">
              <span className="text-2xl font-bold font-serif">{d.name.split(' ').map(n => n[0]).join('')}</span>
              <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-bold ${
                d.score > 80 ? 'bg-green-500 text-white' : d.score > 50 ? 'bg-orange-400 text-white' : 'bg-red-500 text-white'
              }`}>
                {d.score}
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{d.name}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${
                      d.risk === 'LOW' ? 'bg-green-100 text-green-700' : d.risk === 'MEDIUM' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {d.risk} RISK
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground uppercase">
                      ID: DRV-00{drivers.indexOf(d) + 1}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-muted rounded-sm transition-colors">
                  <Star className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase mb-0.5">Total Trips</p>
                  <p className="text-sm font-bold font-mono">{d.trips}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase mb-0.5">Fuel Variance</p>
                  <p className={`text-sm font-bold font-mono ${d.fuel.startsWith('+') ? 'text-red-500' : 'text-green-600'}`}>
                    {d.fuel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
