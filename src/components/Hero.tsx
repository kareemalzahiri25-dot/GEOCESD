import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, FileSpreadsheet, Layers, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartSimulation: () => void;
  onExploreMetopen: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSimulation, onExploreMetopen }) => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle background atmospheric gradient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Unboxed Metadata Tag as per Design Constitution (No Pill Sandwiches) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-4">
          <span>GEMASTE National Essay Competition 2026</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Bidang Lingkungan & Material Konstruksi Sirkular</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Universitas Negeri Semarang</span>
        </div>

        {/* 2-Column Split: Editorial Headline on Left, Live Candidate Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Transformasi Residu Geothermal Menjadi Material Konstruksi Berkelanjutan
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              SILICA2CON adalah <strong className="text-slate-900 font-semibold">Evidence-Based Decision Support System (DSS)</strong> yang mengevaluasi kelayakan residu silika PLTP Dieng menjadi kandidat paving block mutu tinggi berstandar SNI. Menerapkan metodologi berjenjang <span className="text-emerald-700 font-semibold underline decoration-emerald-300 underline-offset-4">Gate-First, Rank-Second</span> untuk memastikan setiap keputusan rekayasa dapat ditelusuri (<em className="italic">traceable provenance</em>).
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onStartSimulation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-[0.98]"
              >
                <span>Mulai Simulasi DSS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreMetopen}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-[0.98]"
              >
                <span>Pelajari Metodologi Penelitian</span>
              </button>
            </div>

            {/* Scientific Rigor highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>SNI 03-0691-1996 Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-Source Provenance</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mass & Energy Balance</span>
              </div>
            </div>
          </div>

          {/* Interactive Candidate Inspection Preview Mockup (Right) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header Card */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-emerald-300 font-semibold">STUDI KASUS: DEMO-Q-001</span>
                  </div>
                  <span className="text-xs text-slate-400">PLTP Dieng Jawa Tengah</span>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400">Kandidat Produk Uji</div>
                  <div className="text-lg font-bold text-white mt-0.5">Paving Block Beton Ramah Lingkungan</div>
                  <div className="text-xs text-slate-400 mt-1">Dimensi: 200 × 100 × 60 mm · Berat: 2,64 kg/blok</div>
                </div>

                {/* Gate Evaluation Live Monitor */}
                <div className="mt-5 space-y-2.5">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Gate 1: Material Qualification</div>
                      <div className="text-xs font-semibold text-slate-200">Silika Xerogel Amorf (SiO₂ 95,7%)</div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded">
                      LULUS
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Gate 2: Technical Gate (SNI)</div>
                      <div className="text-xs font-semibold text-slate-200">Kuat Tekan 24,8 MPa · Absorpsi 6,2%</div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded">
                      MUTU B SNI
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Gate 3: Economic Screening</div>
                      <div className="text-xs font-semibold text-slate-200">Margin Rp 350/blok · Payback ~6,3 Bln</div>
                    </div>
                    <span className="text-xs font-semibold text-amber-400 bg-amber-950/80 border border-amber-800 px-2.5 py-1 rounded">
                      BERSYARAT
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Action inside preview */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Status Keputusan DSS</div>
                  <div className="text-sm font-bold text-amber-300">Conditional / Bersyarat</div>
                </div>
                <button
                  onClick={onStartSimulation}
                  className="text-xs font-medium text-emerald-300 hover:text-emerald-200 flex items-center gap-1 group py-1"
                >
                  <span>Eksplorasi Simulasi</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI Strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              165 <span className="text-sm font-normal text-slate-600">t/bulan</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Geothermal Sludge PLTP Dieng
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Widiyandari et al., 2021</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              Rp 276 <span className="text-sm font-normal text-slate-600">Juta</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Preliminary CAPEX Pengolahan
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Dryer, Grinder, Sieve, QC</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono tabular-nums">
              ~6,3 <span className="text-sm font-normal text-slate-600">Bulan</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Payback Period (Skenario Dasar)
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Kapasitas 5.000 blok/hari</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
              95,7% <span className="text-sm font-normal text-slate-600">SiO₂</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Potensi Kandungan Silika Residu
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">H.S.N et al., 2023 (SBA-15)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
