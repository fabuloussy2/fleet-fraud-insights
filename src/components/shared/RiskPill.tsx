import { RiskLevel } from "@/api/mockData";
import { cn } from "@/lib/utils";

interface RiskPillProps {
  risk: RiskLevel;
  className?: string;
}

const riskConfig: Record<RiskLevel, { bg: string, text: string, label: string }> = {
  CRITICAL: { bg: "bg-red-100", text: "text-red-700", label: "CRITICAL" },
  HIGH: { bg: "bg-orange-100", text: "text-orange-700", label: "HIGH" },
  MEDIUM: { bg: "bg-blue-100", text: "text-blue-700", label: "MEDIUM" },
  CLEAR: { bg: "bg-green-100", text: "text-green-700", label: "CLEAR" },
  CONFIRMED: { bg: "bg-red-600", text: "text-white", label: "CONFIRMED" },
};

export function RiskPill({ risk, className }: RiskPillProps) {
  const config = riskConfig[risk];
  return (
    <span className={cn(
      "px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wider",
      config.bg,
      config.text,
      className
    )}>
      {config.label}
    </span>
  );
}
