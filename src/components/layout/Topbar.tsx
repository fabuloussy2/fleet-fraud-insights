import { Bell, Search, Play, Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  title: string;
}

export function Topbar({ title }: TopbarProps) {
  const today = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  return (
    <header className="h-16 border-b border-border bg-white/80 backdrop-blur-sm flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-serif text-foreground">{title}</h1>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
          <Calendar className="w-3 h-3" />
          <span>{today}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search fleet..." 
            className="pl-9 pr-4 py-1.5 text-sm bg-background border border-border rounded-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <div className="h-6 w-px bg-border mx-2" />

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-2">
            <Upload className="w-4 h-4" />
            Import Data
          </Button>
          <Button size="sm" className="h-9 gap-2 bg-primary hover:bg-accent text-primary-foreground">
            <Play className="w-4 h-4" />
            Run Scan
          </Button>
        </div>

        <div className="h-6 w-px bg-border mx-2" />

        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full border-2 border-white" />
        </button>

        <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-[10px] font-bold">
          JD
        </div>
      </div>
    </header>
  );
}
