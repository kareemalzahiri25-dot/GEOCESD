export type EvidenceLevel = 'Validated' | 'Literature-supported' | 'Screening Estimate' | 'Insufficient Data';

export type DecisionStatus = 'Recommended' | 'Bersyarat' | 'Not Recommended' | 'Data Diperlukan';

export interface MaterialCandidate {
  id: string;
  name: string;
  source: string;
  sio2Content: number; // wt%
  phase: 'Amorf' | 'Semi-kristalin' | 'Kristalin';
  particleSizeD50: number; // µm
  surfaceArea: number; // m²/g
  status: 'Pass' | 'Conditional' | 'Insufficient';
}

export interface FormulationParams {
  substitutionPercent: number; // 0 - 30%
  targetMutu: 'A' | 'B' | 'C' | 'D'; // SNI Mutu
  waterBinderRatio: number;
  yieldPercent: number; // default 90%
  dailyProductionBlocks: number; // default 5000
}

export interface SimulationResult {
  predictedCompressiveStrength: number; // MPa
  requiredCompressiveStrength: number; // MPa
  waterAbsorption: number; // %
  maxWaterAbsorption: number; // %
  slumpWorkability: number; // mm
  clinkerSavedPerDay: number; // kg
  co2SavedPerDay: number; // kg CO2e
  costPerBlock: number; // IDR
  sellingPricePerBlock: number; // IDR
  grossMarginPerBlock: number; // IDR
  dailyOperatingCashFlow: number; // IDR
  annualOperatingCashFlow: number; // IDR
  paybackMonths: number; // months
  technicalGatePassed: boolean;
  agglomerationRisk: boolean;
  decisionStatus: DecisionStatus;
  evidenceStrength: EvidenceLevel;
  verdictReason: string;
  identifiedDataGaps: string[];
}
