import { Engine } from "@/api/mockData";
import { Fuel, MapPin, Wrench, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

interface EngineTagProps {
  engine: Engine;
  showLabel?: boolean;
}

const engineConfig: Record<Engine, { icon: any, label: string }> = {
  FUEL: { icon: Fuel, label: "Fuel" },
  GPS: { icon: MapPin, label: "GPS" },
  MAINT: { icon: Wrench, label: "Maint" },
  ODOMETER: { icon: Gauge, label: "Odo" },
};

export function EngineTag({ engine, showLabel = true }: EngineTagProps) {
  const { icon: Icon, label } = engineConfig[engine];
  return (
    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
      <div className="w-5 h-5 rounded-sm bg-muted flex items-center justify-center">
        <Icon className="w-3 h-3" />
      </div>
      {showLabel && <span>{label}</span>}
    </div>
  );
}
