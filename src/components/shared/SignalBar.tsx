import { cn } from "@/lib/utils";

interface SignalBarProps {
  label: string;
  strength: number;
}

export function SignalBar({ label, strength }: SignalBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-end">
        <span className="text-[10px] font-medium text-muted-foreground uppercase">{label}</span>
        <span className="text-[10px] font-mono text-ink-2">{strength}%</span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full transition-all duration-1000",
            strength > 80 ? "bg-primary" : strength > 50 ? "bg-orange-400" : "bg-blue-400"
          )}
          style={{ width: `${strength}%` }}
        />
      </div>
    </div>
  );
}
