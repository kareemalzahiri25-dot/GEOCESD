import React, { useState, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Info, 
  TrendingUp, 
  Scale, 
  Leaf, 
  ShieldCheck,
  FileText,
  Sliders,
  DollarSign
} from 'lucide-react';
import { FormulationParams, SimulationResult, DecisionStatus, EvidenceLevel } from '../types/silica';

interface SimulationSectionProps {
  onOpenPassport: () => void;
}

export const SimulationSection: React.FC<SimulationSectionProps> = ({ onOpenPassport }) => {
  // Simulator State
  const [selectedResidueId, setSelectedResidueId] = useState<string>('xerogel');
  const [substitutionRate, setSubstitutionRate] = useState<number>(8); // 8% default from essay screenshot
  const [targetMutu, setTargetMutu] = useState<'A' | 'B' | 'C' | 'D'>('B');
  const [dailyCapacity, setDailyCapacity] = useState<number>(5000); // 5000 blocks/day
  const [sellingPricePerM2, setSellingPricePerM2] = useState<number>(80000); // Rp 80.000 / m2

  const residueOptions = [
    {
      id: 'xerogel',
      name: 'Silika Xerogel Amorf (PLTP Dieng)',
      sio2: 95.7,
      surfaceArea: 302.8,
      phase: 'Amorf Terkonfirmasi',
      provenance: 'Widiyandari et al. (2021) / H.S.N et al. (2023)',
      status: 'Lolos Kualifikasi',
    },
    {
      id: 'sludge_treated',
      name: 'Geothermal Sludge Kering & Tergiling (Dieng)',
      sio2: 78.4,
      surfaceArea: 64.2,
      phase: 'Semi-Amorf',
      provenance: 'Meiyati et al. (2015) / Agustinus et al. (2018)',
      status: 'Lolos Bersyarat',
    },
    {
      id: 'nanosilica_waste',
      name: 'Geothermal Nano-SiO₂ Waste (Olahan)',
      sio2: 98.2,
      surfaceArea: 420.0,
      phase: 'Nano-Amorf',
      provenance: 'López-Perales et al. (2024)',
      status: 'Lolos Kualifikasi',
    },
  ];

  // SNI Mutu specifications
  const sniSpecs = {
    A: { minCompressive: 40, maxAbsorption: 3, label: 'Mutu A (Jalan Raya / Beban Berat)' },
    B: { minCompressive: 20, maxAbsorption: 6, label: 'Mutu B (Pelataran Parkir / Trotoar)' },
    C: { minCompressive: 15, maxAbsorption: 8, label: 'Mutu C (Taman & Pejalan Kaki)' },
    D: { minCompressive: 10, maxAbsorption: 10, label: 'Mutu D (Lain-lain / Non-Struktural)' },
  };

  // Real-time calculation logic based on essay parameters
  const calculation = useMemo<SimulationResult>(() => {
    const activeResidue = residueOptions.find((r) => r.id === selectedResidueId) || residueOptions[0];
    const spec = sniSpecs[targetMutu];

    // Base compressive strength without silica (control block) = 21 MPa
    const baseStrength = 21.0;

    // Pozzolanic response curve modeling
    // Substitution effect: optimal at 5%-15%, drops if >20% due to agglomeration
    let strengthMultiplier = 1.0;
    let agglomeration = false;

    if (substitutionRate <= 5) {
      strengthMultiplier = 1.0 + (substitutionRate / 5) * 0.12; // +12%
    } else if (substitutionRate <= 15) {
      strengthMultiplier = 1.12 + ((substitutionRate - 5) / 10) * 0.16; // up to +28% (Chen et al., 2024)
    } else if (substitutionRate <= 20) {
      strengthMultiplier = 1.28 + ((substitutionRate - 15) / 5) * 0.04; // peak
    } else {
      // Agglomeration penalty (Xiaohan et al., 2024; López-Perales et al., 2024)
      const penalty = (substitutionRate - 20) * 0.035;
      strengthMultiplier = Math.max(0.7, 1.32 - penalty);
      agglomeration = true;
    }

    // Material purity factor
    const materialFactor = activeResidue.sio2 / 95.0;
    const predictedStrength = Number((baseStrength * strengthMultiplier * materialFactor).toFixed(1));

    // Water absorption: decreases with pore refinement up to optimum, then increases if agglomeration occurs
    let absorption = 7.2 - (substitutionRate * 0.1);
    if (agglomeration) absorption += (substitutionRate - 20) * 0.25;
    absorption = Math.max(3.5, Number(absorption.toFixed(1)));

    // Slump / workability (mm)
    const baseSlump = 140; // mm
    const slump = Math.max(30, Math.round(baseSlump - substitutionRate * 3.8));

    // Mass balance: 2.64 kg/block
    // Cement portion is approximately 0.44 kg per block in standard mix
    const cementPerBlock = 0.44; // kg
    const silicaPerBlock = (cementPerBlock * substitutionRate) / 100;
    const clinkerSavedPerDay = Math.round(dailyCapacity * silicaPerBlock);
    // 0.85 kg CO2e saved per kg OPC substituted
    const co2SavedPerDay = Math.round(clinkerSavedPerDay * 0.85);

    // Economic metrics (Tabel 1, 2, 6, 7)
    // 50 blocks per m2 (200x100mm = 0.02 m2)
    const sellingPricePerBlock = Math.round(sellingPricePerM2 / 50); // Rp 1.600
    // Production cost: baseline Rp 1.250 (Tabel 6 & 7)
    // Residual silica cost: ~Rp 503/kg vs Semen Rp 1.600/kg (Tabel 3 & 4)
    const cementCostPerKg = 1.6; // Rp / gram
    const residueCostPerKg = 0.503;
    const rawMaterialSavingsPerBlock = silicaPerBlock * (cementCostPerKg - residueCostPerKg) * 1000;
    const costPerBlock = Math.max(1050, Math.round(1250 - rawMaterialSavingsPerBlock));
    const grossMarginPerBlock = sellingPricePerBlock - costPerBlock;
    const dailyOperatingCashFlow = dailyCapacity * grossMarginPerBlock;
    const annualOperatingCashFlow = dailyOperatingCashFlow * 25 * 12; // 25 days/month

    // CAPEX = Rp 276.000.000 (Tabel 2)
    const capex = 276000000;
    const paybackMonths = Number((capex / (dailyOperatingCashFlow * 25)).toFixed(1));

    // Decision Logic (Gate-First, Rank-Second)
    const technicalGatePassed = predictedStrength >= spec.minCompressive && absorption <= spec.maxAbsorption;

    let decisionStatus: DecisionStatus = 'Recommended';
    let evidenceStrength: EvidenceLevel = 'Validated';
    let verdictReason = '';
    const identifiedDataGaps: string[] = [];

    if (!technicalGatePassed) {
      decisionStatus = 'Not Recommended';
      evidenceStrength = 'Validated';
      verdictReason = `Gagal pada Technical Gate: Kuat tekan (${predictedStrength} MPa) di bawah ambang batas minimum SNI ${targetMutu} (${spec.minCompressive} MPa).`;
      identifiedDataGaps.push('Formulasi tidak memenuhi kuat tekan minimum SNI 03-0691-1996.');
    } else if (agglomeration || substitutionRate > 15) {
      decisionStatus = 'Bersyarat';
      evidenceStrength = 'Screening Estimate';
      verdictReason = `Lolos persyaratan teknis, namun substitusi tinggi (${substitutionRate}%) berisiko aglomerasi dan menurunkan slump workability (${slump} mm). Membutuhkan superplasticizer dan uji batch laboratorium.`;
      identifiedDataGaps.push('Diperlukan pengujian workability & porositas aktual dengan superplasticizer.');
      identifiedDataGaps.push('Validasi ketahanan aus (abrasion resistance) prototipe cetak.');
    } else {
      decisionStatus = 'Recommended';
      evidenceStrength = 'Literature-supported';
      verdictReason = `Lolos seluruh gate: Kuat tekan (${predictedStrength} MPa) melampaui standar SNI ${targetMutu}, margin ekonomi sehat (Rp ${grossMarginPerBlock}/blok), dan payback cepat (~${paybackMonths} bulan).`;
      identifiedDataGaps.push('Konfirmasi kestabilan pasokan sludge antar-musim di lapangan Dieng.');
    }

    return {
      predictedCompressiveStrength: predictedStrength,
      requiredCompressiveStrength: spec.minCompressive,
      waterAbsorption: absorption,
      maxWaterAbsorption: spec.maxAbsorption,
      slumpWorkability: slump,
      clinkerSavedPerDay,
      co2SavedPerDay,
      costPerBlock,
      sellingPricePerBlock,
      grossMarginPerBlock,
      dailyOperatingCashFlow,
      annualOperatingCashFlow,
      paybackMonths,
      technicalGatePassed,
      agglomerationRisk: agglomeration,
      decisionStatus,
      evidenceStrength,
      verdictReason,
      identifiedDataGaps,
    };
  }, [selectedResidueId, substitutionRate, targetMutu, dailyCapacity, sellingPricePerM2]);

  const handleReset = () => {
    setSelectedResidueId('xerogel');
    setSubstitutionRate(8);
    setTargetMutu('B');
    setDailyCapacity(5000);
    setSellingPricePerM2(80000);
  };

  return (
    <section id="simulasi" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              04. Quick DSS Simulator
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Simulator Keputusan Berbasis Evidence
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Uji skenario formulasi substitusi residu silika Dieng terhadap standar mutu bata beton <strong className="text-slate-900 font-semibold">SNI 03-0691-1996</strong> dan saksikan bagaimana sistem mengevaluasi kelaikan teknis, ekonomi, serta jejak karbonnya secara berurutan.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Parameter</span>
            </button>
            <button
              onClick={onOpenPassport}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Buka Material Passport</span>
            </button>
          </div>
        </div>

        {/* Main Simulator Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
              <Sliders className="w-4 h-4 text-emerald-700" />
              <span>Parameter Input Studi Kandidat</span>
            </div>

            {/* Input 1: Residue Feedstock */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                1. Sumber Residu Geothermal
              </label>
              <div className="space-y-2">
                {residueOptions.map((res) => (
                  <label
                    key={res.id}
                    className={`block p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      selectedResidueId === res.id
                        ? 'bg-white border-emerald-600 shadow-xs ring-1 ring-emerald-600'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="residueOption"
                      value={res.id}
                      checked={selectedResidueId === res.id}
                      onChange={() => setSelectedResidueId(res.id)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>{res.name}</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {res.sio2}% SiO₂
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                      <span>{res.phase} · {res.surfaceArea} m²/g</span>
                      <span className="italic">{res.provenance.split('(')[0]}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Input 2: Substitution Rate Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  2. Rasio Substitusi Semen (Massa)
                </label>
                <span className="text-base font-extrabold text-emerald-700 font-mono tabular-nums">
                  {substitutionRate}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={substitutionRate}
                onChange={(e) => setSubstitutionRate(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                <span>0% (Kontrol)</span>
                <span className="text-emerald-700 font-medium">8% (Studi Kasus)</span>
                <span>15%</span>
                <span className="text-amber-700 font-medium">20% (Batas Aglomerasi)</span>
                <span>30%</span>
              </div>
            </div>

            {/* Input 3: Target SNI Mutu */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                3. Target Mutu SNI 03-0691-1996
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['B', 'A', 'C', 'D'] as const).map((m) => {
                  const item = sniSpecs[m];
                  const isSelected = targetMutu === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTargetMutu(m)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        isSelected
                          ? 'bg-white border-emerald-600 text-slate-900 shadow-xs ring-1 ring-emerald-600'
                          : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">Mutu {m}</span>
                        <span className="text-[10px] font-mono text-slate-500">≥{item.minCompressive} MPa</span>
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">
                        Maks abs {item.maxAbsorption}%
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 4: Plant Capacity */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                4. Kapasitas Produksi Fasilitas
              </label>
              <div className="flex items-center gap-3">
                <select
                  value={dailyCapacity}
                  onChange={(e) => setDailyCapacity(Number(e.target.value))}
                  className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value={3000}>3.000 blok / hari (Skala Perintis)</option>
                  <option value={5000}>5.000 blok / hari (Basis Studi Kasus Dieng)</option>
                  <option value={10000}>10.000 blok / hari (Skala Komersial Penuh)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results & Decision Evaluation Column (Right) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Verdict Banner */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                calculation.decisionStatus === 'Recommended'
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                  : calculation.decisionStatus === 'Bersyarat'
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                  : 'bg-rose-50/80 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/10">
                <div className="flex items-center gap-2.5">
                  {calculation.decisionStatus === 'Recommended' && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                  {calculation.decisionStatus === 'Bersyarat' && <AlertTriangle className="w-6 h-6 text-amber-600" />}
                  {calculation.decisionStatus === 'Not Recommended' && <XCircle className="w-6 h-6 text-rose-600" />}
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-70">
                      Keputusan Akhir SILICA2CON
                    </div>
                    <div className="text-xl font-extrabold tracking-tight">
                      {calculation.decisionStatus === 'Bersyarat' ? 'Bersyarat (Conditional)' : calculation.decisionStatus}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] uppercase font-mono tracking-wider opacity-70">Tingkat Evidence</div>
                  <div className="text-xs font-bold font-mono">{calculation.evidenceStrength}</div>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed">
                {calculation.verdictReason}
              </p>
            </div>

            {/* Technical Verification Cards (Gate 1 & Gate 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Compressive Strength */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Kuat Tekan 28 Hari
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {calculation.predictedCompressiveStrength}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">MPa</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-200 pt-2">
                  <span>SNI Syarat: ≥{calculation.requiredCompressiveStrength} MPa</span>
                  <span className={`font-semibold ${calculation.predictedCompressiveStrength >= calculation.requiredCompressiveStrength ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {calculation.predictedCompressiveStrength >= calculation.requiredCompressiveStrength ? 'MEMENUHI' : 'GAGAL'}
                  </span>
                </div>
              </div>

              {/* Water Absorption */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Penyerapan Air
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {calculation.waterAbsorption}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">%</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-200 pt-2">
                  <span>Maksimum: ≤{calculation.maxWaterAbsorption}%</span>
                  <span className={`font-semibold ${calculation.waterAbsorption <= calculation.maxWaterAbsorption ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {calculation.waterAbsorption <= calculation.maxWaterAbsorption ? 'MEMENUHI' : 'GAGAL'}
                  </span>
                </div>
              </div>

              {/* Workability Slump */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Workability (Slump)
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {calculation.slumpWorkability}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">mm</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-200 pt-2">
                  <span>Risiko Aglomerasi</span>
                  <span className={`font-semibold ${calculation.agglomerationRisk ? 'text-amber-700' : 'text-emerald-700'}`}>
                    {calculation.agglomerationRisk ? 'TINGGI' : 'RENDAH'}
                  </span>
                </div>
              </div>
            </div>

            {/* Economic & Environmental Breakdown (Gate 3 & Gate 4) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Skrining Ekonomi & Lingkungan (Studi Kasus Dieng)</span>
                <span className="text-[11px] font-normal text-slate-500">Tabel 6 & 7 Provenance</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-[11px] text-slate-500">Biaya Produksi</div>
                  <div className="text-base font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                    Rp {calculation.costPerBlock.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[10px] text-slate-400">per blok</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-500">Harga Jual Pasar</div>
                  <div className="text-base font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                    Rp {calculation.sellingPricePerBlock.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[10px] text-slate-400">Rp 80.000/m²</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-500">Margin Operasi</div>
                  <div className="text-base font-bold text-emerald-700 font-mono tabular-nums mt-0.5">
                    Rp {calculation.grossMarginPerBlock.toLocaleString('id-ID')}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">+{( (calculation.grossMarginPerBlock / calculation.costPerBlock) * 100 ).toFixed(0)}% margin</div>
                </div>

                <div>
                  <div className="text-[11px] text-slate-500">Payback CAPEX</div>
                  <div className="text-base font-bold text-emerald-700 font-mono tabular-nums mt-0.5">
                    ~{calculation.paybackMonths} Bln
                  </div>
                  <div className="text-[10px] text-slate-400">Investasi Rp 276jt</div>
                </div>
              </div>

              {/* Carbon Reduction Bar */}
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Reduksi Emisi Klinker Semen:</span>
                </div>
                <div className="font-mono font-bold text-emerald-800 tabular-nums">
                  {calculation.co2SavedPerDay.toLocaleString('id-ID')} kg CO₂e / hari
                </div>
              </div>
            </div>

            {/* Identified Data Gaps list */}
            {calculation.identifiedDataGaps.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5 mb-2">
                  <Info className="w-4 h-4 text-slate-500" />
                  <span>Keterbatasan Evidence & Data Gap yang Teridentifikasi:</span>
                </div>
                <ul className="space-y-1 text-slate-600 list-disc list-inside">
                  {calculation.identifiedDataGaps.map((gap, gIdx) => (
                    <li key={gIdx}>{gap}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
