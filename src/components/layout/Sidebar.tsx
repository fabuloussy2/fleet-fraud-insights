import { LayoutDashboard, Truck, Users, AlertCircle, FileText, Upload, Settings, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Truck, label: "Fleet", path: "/fleet" },
  { icon: Users, label: "Drivers", path: "/drivers" },
  { icon: AlertCircle, label: "Anomalies", path: "/anomalies" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Upload, label: "Import", path: "/import" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-serif text-xl font-bold">
            F
          </div>
          <span className="text-sidebar-foreground font-serif text-2xl tracking-tight">Fleetlens</span>
        </div>
        <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest font-mono">
          Operational Intelligence
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-sm transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon className={cn("w-4 h-4", isActive ? "text-sidebar-primary" : "text-sidebar-foreground/40")} />
              {item.label}
              {isActive && <div className="ml-auto w-1 h-4 bg-primary rounded-full" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent/30 p-3 rounded-sm border border-sidebar-border/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Scan Status</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500" />
          </div>
          <p className="text-xs text-sidebar-foreground/80 font-medium">All engines active</p>
        </div>
      </div>
    </aside>
  );
}
