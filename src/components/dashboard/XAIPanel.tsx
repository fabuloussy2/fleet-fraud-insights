import { Anomaly } from "@/api/mockData";
import { SignalBar } from "@/components/shared/SignalBar";
import { RiskPill } from "@/components/shared/RiskPill";
import { X, ExternalLink, ShieldCheck, AlertTriangle, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface XAIPanelProps {
  anomaly: Anomaly | null;
  onClose: () => void;
}

export function XAIPanel({ anomaly, onClose }: XAIPanelProps) {
  return (
    <AnimatePresence>
      {anomaly && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-[400px] bg-white border-l border-border shadow-2xl z-50 flex flex-col"
        >
          <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-white">
            <div className="space-y-1">
              <h2 className="text-xl font-serif">Investigation Details</h2>
              <p className="text-xs text-muted-foreground font-mono uppercase">Case ID: {anomaly.id}2024-XA</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <RiskPill risk={anomaly.risk} className="text-xs py-1 px-3" />
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted-foreground">Confidence Score:</span>
                  <span className="text-sm font-bold font-mono text-primary">{anomaly.confidence}%</span>
                </div>
              </div>
              
              <div className="p-4 bg-muted/30 border border-border rounded-sm space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-2">Anomaly Finding</h4>
                    <p className="text-sm text-ink-3 leading-relaxed">{anomaly.finding}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Explainable AI Signals</h3>
              <div className="space-y-6">
                {anomaly.signals.map((signal, i) => (
                  <SignalBar key={i} label={signal.label} strength={signal.strength} />
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">AI Recommendation</h3>
              </div>
              <div className="p-4 border-l-2 border-primary bg-primary-bg rounded-r-sm">
                <p className="text-sm text-ink-2 italic leading-relaxed">
                  "{anomaly.recommendation}"
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Entity Profile</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border border-border rounded-sm">
                  <p className="text-[10px] text-muted-foreground uppercase mb-1">Vehicle</p>
                  <p className="text-sm font-bold font-mono">{anomaly.vehicleId}</p>
                </div>
                <div className="p-3 border border-border rounded-sm">
                  <p className="text-[10px] text-muted-foreground uppercase mb-1">Driver</p>
                  <p className="text-sm font-bold">{anomaly.driver}</p>
                </div>
              </div>
            </section>
          </div>

          <div className="p-6 border-t border-border bg-muted/20 flex gap-3">
            <button className="flex-1 bg-primary text-white py-3 rounded-sm font-bold text-sm hover:bg-accent transition-colors flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Resolve Case
            </button>
            <button className="p-3 border border-border rounded-sm hover:bg-muted transition-colors">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
