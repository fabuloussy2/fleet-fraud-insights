import { useState } from "react";
import { MessageSquare, Send, Sparkles, ChevronRight, User } from "lucide-react";

const SUGGESTIONS = [
  "Which driver has the highest fuel risk?",
  "Analyze Lagos depot ghost trips",
  "Summarize yesterday's losses"
];

export function FleetChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Good morning. I've analyzed 150 vehicles. I found 4 anomalies costing approximately ₦147,000. How can I help you today?" 
    }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Analyzing fleet data... Based on recent GPS and fuel records, Driver Musa Ibrahim shows repeated dwell patterns at unauthorized locations. This correlates with the 45L fuel discrepancy." 
      }]);
    }, 1000);
  };

  return (
    <div className="bg-sidebar border border-sidebar-border rounded-lg shadow-xl flex flex-col h-[500px] overflow-hidden">
      <div className="p-4 border-b border-sidebar-border bg-sidebar-accent/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <h3 className="text-sidebar-foreground font-serif">Fleet Intelligence</h3>
        </div>
        <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${
              msg.role === 'user' ? 'bg-primary/20' : 'bg-sidebar-accent'
            }`}>
              {msg.role === 'user' ? <User className="w-3.5 h-3.5 text-primary" /> : <Sparkles className="w-3.5 h-3.5 text-primary" />}
            </div>
            <div className={`p-3 rounded-sm text-xs leading-relaxed max-w-[85%] ${
              msg.role === 'user' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-sidebar-accent/50 text-sidebar-foreground/90 border border-sidebar-border'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-sidebar-accent/20 border-t border-sidebar-border space-y-3">
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map(s => (
            <button 
              key={s} 
              onClick={() => setInput(s)}
              className="text-[10px] bg-sidebar-accent/40 text-sidebar-foreground/60 border border-sidebar-border px-2 py-1 rounded-sm hover:text-sidebar-primary hover:border-sidebar-primary transition-colors text-left"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about your fleet..."
            className="w-full bg-sidebar-accent border border-sidebar-border rounded-sm py-2.5 pl-3 pr-10 text-xs text-sidebar-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-sidebar-foreground/40 hover:text-primary transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
