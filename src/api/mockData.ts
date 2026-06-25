export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'CLEAR' | 'CONFIRMED';
export type Engine = 'FUEL' | 'GPS' | 'MAINT' | 'ODOMETER';

export interface Anomaly {
  id: string;
  risk: RiskLevel;
  vehicleId: string;
  driver: string;
  finding: string;
  engines: Engine[];
  estLoss: string;
  confidence: number;
  recommendation: string;
  signals: {
    label: string;
    strength: number; // 0-100
  }[];
}

export const MOCK_ANOMALIES: Anomaly[] = [
  {
    id: "1",
    risk: "CONFIRMED",
    vehicleId: "LAG-XA-288",
    driver: "Musa Ibrahim",
    finding: "Fuel siphoning detected: 45L discrepancy between GPS dwell time and fuel level sensor.",
    engines: ["FUEL", "GPS"],
    estLoss: "₦14,800",
    confidence: 98,
    recommendation: "Hold driver payout. Inspect fuel tank cap for physical tampering.",
    signals: [
      { label: "Fuel Drop without Movement", strength: 95 },
      { label: "GPS Dwell at Unauthorized Point", strength: 88 },
      { label: "Odometer Discrepancy", strength: 12 }
    ]
  },
  {
    id: "2",
    risk: "CRITICAL",
    vehicleId: "KDS-RR-501",
    driver: "Emeka Okafor",
    finding: "Ghost trip detected. GPS movement recorded while vehicle was scheduled for maintenance.",
    engines: ["GPS", "MAINT"],
    estLoss: "₦28,500",
    confidence: 92,
    recommendation: "Contact maintenance workshop to verify vehicle release time.",
    signals: [
      { label: "Off-schedule Movement", strength: 92 },
      { label: "Unauthorized Route", strength: 85 },
      { label: "Ignition Pattern Anomaly", strength: 70 }
    ]
  },
  {
    id: "3",
    risk: "HIGH",
    vehicleId: "ABJ-KV-112",
    driver: "Segun Arinze",
    finding: "Maintenance invoice fraud. Parts charged do not match vehicle service history.",
    engines: ["MAINT"],
    estLoss: "₦112,000",
    confidence: 85,
    recommendation: "Audit workshop invoice #INV-2024-001 against physical inventory.",
    signals: [
      { label: "Cost Benchmark Deviation", strength: 88 },
      { label: "Duplicate Part Order", strength: 75 },
      { label: "Vendor Trust Score Drop", strength: 60 }
    ]
  },
  {
    id: "4",
    risk: "MEDIUM",
    vehicleId: "ENU-GG-449",
    driver: "Chidi Onu",
    finding: "Abnormal idling pattern. 4 hours of stationary engine running in Lagos traffic bypass.",
    engines: ["FUEL", "GPS"],
    estLoss: "₦8,200",
    confidence: 65,
    recommendation: "Review driver route compliance and fuel efficiency training.",
    signals: [
      { label: "Excessive Idle Time", strength: 70 },
      { label: "Low Speed Operation", strength: 65 },
      { label: "Fuel Burn Anomaly", strength: 55 }
    ]
  }
];

export const MOCK_STATS = [
  { label: "CRITICAL / HIGH", value: "4", sub: "Vehicles needing action", trend: "up" },
  { label: "CONFIRMED FRAUD", value: "1", sub: "Multi-engine agreement", trend: "neutral" },
  { label: "FLEET ACTIVE", value: "150", sub: "Vehicles in operation", trend: "neutral" },
  { label: "UNDER WATCH", value: "12", sub: "Medium-risk monitoring", trend: "down" }
];
