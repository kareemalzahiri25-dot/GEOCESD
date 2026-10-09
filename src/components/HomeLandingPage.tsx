import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Layers, 
  Flame, 
  AlertTriangle, 
  Microscope, 
  FileCheck, 
  Cpu, 
  CheckCircle2, 
  Scale, 
  TrendingUp, 
  Sparkles,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Users
} from 'lucide-react';
import { PageId } from './Navbar';

interface HomeLandingPageProps {
  onNavigate: (page: PageId) => void;
}

export const HomeLandingPage: React.FC<HomeLandingPageProps> = ({ onNavigate }) => {
  const [selectedResidueTab, setSelectedResidueTab] = useState(0);

  const residueVariants = [
    {
      name: 'Geothermal Sludge Mentah',
      tag: 'Kadar Air Tinggi',
      desc: 'Material padat hasil penanganan brine dan kolam retensi PLTP Dieng. Mengandung 60%–85% SiO₂ tetapi berair tinggi dan bercampur pengotor mineral.',
      risk: 'Tidak dapat langsung dicampur semen tanpa proses pengeringan terstandar & penyesuaian fasa.',
      status: 'Wajib Gate Kualifikasi Awal',
    },
    {
      name: 'Silika Xerogel Amorf',
      tag: 'Reaktivitas Tinggi',
      desc: 'Hasil sintesis ekstraksi alkali–presipitasi asam (Widiyandari et al., 2021) dengan luas permukaan spesifik hingga 302,87 m²/g dan fasa amorf tinggi.',
      risk: 'Menaikkan kebutuhan air adukan secara tajam; risiko retak susut jika tanpa superplasticizer.',
      status: 'Kandidat Formulasi Mutu B/A',
    },
    {
      name: 'Silika Mesopori SBA-15',
      tag: 'Kemurnian 95,7%',
      desc: 'Sintesis berstruktur heksagonal mesopori (H.S.N et al., 2023) dengan kadar SiO₂ mencapai 95,70 wt.%.',
      risk: 'Biaya sintesis tinggi; memerlukan evaluasi ketat pada Economic Gate sebelum aplikasi massal.',
      status: 'Perlu Skrining Biaya Khusus',
    },
    {
      name: 'Silica Scaling Pipa',
      tag: 'Padatan Kompak',
      desc: 'Kerak silika yang terbentuk di dinding pipa re-injeksi akibat polimerisasi penurunan temperatur & tekanan (Agustinus et al., 2018).',
      risk: 'Rentan mengalami kristalisasi jika terpapar temperatur tinggi kronis, menurunkan aktivitas pozzolanik (Mulyana et al., 2022).',
      status: 'Uji Indeks Aktivitas Pozzolan',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            {/* Left Headline */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                Transformasi Residu Geothermal Menjadi Material Konstruksi Berkelanjutan
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                SILICA2CON adalah gagasan <strong className="text-slate-900 font-semibold">Evidence-Based Decision Support System (DSS)</strong> untuk mengevaluasi kelayakan residu silika PLTP Dieng menjadi produk paving block mutu tinggi berstandar SNI melalui prinsip evaluasi berjenjang <span className="text-emerald-700 font-semibold underline decoration-emerald-300 underline-offset-4">Gate-First, Rank-Second</span>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('simulasi')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-all cursor-pointer active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Buka Halaman Simulasi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#ringkasan-essay"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-all active:scale-[0.98]"
                >
                  <span>Baca Rangkuman Essay</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SNI 03-0691-1996 Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Data Provenance Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Closed-Loop Development</span>
                </div>
              </div>
            </div>

            {/* Right Card: Executive Abstract Snapshot */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                      RINGKASAN EKSEKUTIF KARYA
                    </span>
                    <span className="text-xs text-slate-400">PLTP Dieng Jawa Tengah</span>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-base font-bold text-white leading-snug">
                      SILICA2CON Decision Architecture
                    </h2>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      Sistem mengintegrasikan identitas material, basis formulasi normal, neraca massa, persyaratan teknis SNI, serta skrining ekonomi & lingkungan dalam satu alur keputusan yang dapat ditelusuri.
                    </p>
                  </div>

                  {/* 3 Core Principles */}
                  <div className="mt-5 space-y-2.5 text-xs">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2.5">
                      <span className="font-mono text-emerald-400 font-bold mt-0.5">01</span>
                      <div>
                        <div className="font-semibold text-slate-200">Bukan Sekadar Mix Calculator</div>
                        <div className="text-[11px] text-slate-400">Menjawab keputusan apa yang dapat dipertanggungjawabkan, bukan cuma menimbang komposisi.</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2.5">
                      <span className="font-mono text-emerald-400 font-bold mt-0.5">02</span>
                      <div>
                        <div className="font-semibold text-slate-200">Prinsip Gate-First, Rank-Second</div>
                        <div className="text-[11px] text-slate-400">Wajib lolos persyaratan teknis SNI terlebih dahulu sebelum dinilai aspek ekonomi atau lingkungannya.</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2.5">
                      <span className="font-mono text-emerald-400 font-bold mt-0.5">03</span>
                      <div>
                        <div className="font-semibold text-slate-200">Transparansi Data Gap</div>
                        <div className="text-[11px] text-slate-400">Sistem berani menahan status rekomendasi jika data empiris belum memadai, mencegah klaim semu.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Platform Awal: Paving Block Beton</span>
                  <button
                    onClick={() => onNavigate('simulasi')}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group cursor-pointer"
                  >
                    <span>Uji Kasus DEMO-Q-001</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Quantitative Pillars */}
          <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                165 <span className="text-sm font-normal text-slate-600">t/bulan</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Timbulan Geothermal Sludge Dieng</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Widiyandari et al., 2021</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                90% <span className="text-sm font-normal text-slate-600">Yield</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Processing Yield Residu Terkontrol</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Uji neraca massa & pengeringan</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono tabular-nums">
                ~6,3 <span className="text-sm font-normal text-slate-600">Bulan</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Payback Period Investasi CAPEX</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Kapasitas 5.000 blok/hari (Rp 276jt)</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                SNI <span className="text-sm font-normal text-slate-600">Mutu B</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Kuat Tekan Rata-rata ≥20 MPa</div>
              <div className="text-[11px] text-slate-400 mt-0.5">SNI 03-0691-1996 Paving Block</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RANGKUMAN ESSAY - SECTION UTAMA */}
      <section id="ringkasan-essay" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Lead */}
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              Rangkuman Inti Essay
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Dari Persoalan Operasional Hingga Kerangka Keputusan Teruji
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Berikut adalah ringkasan komprehensif dari essay ilmiah yang diajukan pada kompetisi GEMASTE 2026, merangkum fenomena lapangan panas bumi Dieng, research gap yang dihadapi, hingga solusi konseptual arsitektur SILICA2CON.
            </p>
          </div>

          {/* Part A: Masalah Geothermal Dieng */}
          <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>Bagian 01 · Persoalan Lapangan PLTP Dieng</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Residu Kaya Silika: Dari Kerak Pipa Menjadi Timbulan Sludge
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Indonesia memiliki sekitar <strong className="text-slate-900 font-semibold">40% potensi panas bumi dunia</strong>. Namun, pemanfaatannya menghadapi tantangan material dari fluida kerjanya. Di lapangan Dieng, <em className="italic">brine</em> mengandung silika dan garam terlarut dalam konsentrasi tinggi. Penurunan temperatur dan tekanan saat ekstraksi energi memicu polimerisasi serta pengendapan kerak silika (<em className="italic">silica scaling</em>) yang menyumbat pipa re-injeksi dan fasilitas permukaan (Pambudi et al., 2015; Utami et al., 2014).
            </p>
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
              Pengendalian endapan tersebut menghasilkan sekitar <strong className="font-semibold">165 ton geothermal sludge per bulan</strong> dari PLTP Dieng (Widiyandari et al., 2021). Meskipun sludge ini berpotensi menjadi silika xerogel amorf dengan luas permukaan hingga 302,87 m²/g atau silika mesopori SBA-15 dengan kadar SiO₂ 95,70 wt.% (H.S.N et al., 2023), pengelolaannya masih minim integrasi rekayasa.
            </div>
          </div>

          {/* Part B: The Research Gap */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Bagian 02 · Research Gap & Dilema Rekayasa</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Potensi Material Tidak Identik dengan Kelayakan Aplikasi
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kandungan silika tinggi tidak dapat secara otomatis diklaim layak sebagai pengganti semen. Ada 3 kesenjangan kritis yang diidentifikasi dalam essay:
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">1. Bahaya Kristalisasi Termal</div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Perlakuan panas yang tidak tepat dapat mendorong kristalisasi silika dan menurunkan aktivitas pozzolaniknya (Mulyana et al., 2022). Residu yang mengkristal kehilangan reaktivitas semennya.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">2. Variabilitas Identitas Residu</div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  <em className="italic">Silica scaling</em> pipa, <em className="italic">geothermal sludge</em> mentah, silika xerogel, dan nano-SiO₂ adalah material yang berbeda. Evidence dari satu proses tidak boleh digeneralisasi sembarangan.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900">3. Respons Multidimensi Semen</div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Penambahan silika halus dapat menaikkan kuat tekan, tetapi jika berlebih memicu aglomerasi dan menurunkan <em className="italic">workability</em> (slump) secara tajam (López-Perales et al., 2024; Chen et al., 2024).
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Residue Comparison Selector */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase">Tinjauan Fisik-Kimia</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  Mengapa Setiap Varian Residu Geothermal Berbeda?
                </h4>
              </div>
              <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-lg">
                {residueVariants.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedResidueTab(idx)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      selectedResidueTab === idx
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.name.split(' ')[1] || item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-slate-900">{residueVariants[selectedResidueTab].name}</span>
                  <span className="text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {residueVariants[selectedResidueTab].tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {residueVariants[selectedResidueTab].desc}
                </p>
                <div className="text-xs text-amber-900 bg-amber-50/70 p-3 rounded-lg border border-amber-200/60">
                  <strong className="font-semibold">Tantangan Rekayasa: </strong>
                  {residueVariants[selectedResidueTab].risk}
                </div>
              </div>

              <div className="md:col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="text-slate-500 uppercase font-semibold text-[10px]">Status Evaluasi SILICA2CON:</div>
                <div className="font-bold text-slate-900 text-sm text-emerald-800">
                  {residueVariants[selectedResidueTab].status}
                </div>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  Data provenance tercatat dalam format <em className="italic">Material Passport</em> terstandar.
                </div>
              </div>
            </div>
          </div>

          {/* Part C: Solusi Arsitektur Tiga Engine */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Bagian 03 · Arsitektur Solusi SILICA2CON</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Tiga Engine Terintegrasi & Prinsip Gate-First, Rank-Second
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Untuk mengatasi fragmentasi data dan klaim kelayakan sepihak, SILICA2CON memadukan tiga fungsi komputasi utama yang saling bertukar data secara tertutup:
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900">1. Science Engine</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Mengolah korelasi saintifik antara karakteristik mineralogi (fase amorf, kadar SiO₂, d50), basis substitusi semen, serta parameter respon mekanik (kuat tekan 28 hari, waktu ikat, absorpsi air).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  Fokus: Validitas keilmuan formulasi
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900">2. Evidence Engine</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Mengklasifikasikan bukti data ke dalam 4 tingkatan kepastian: <strong className="text-slate-800">Validated</strong>, <strong className="text-slate-800">Literature-Supported</strong>, <strong className="text-slate-800">Screening Estimate</strong>, atau <strong className="text-slate-800">Insufficient Data</strong>.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  Fokus: Ketertelusuran silsilah data (Provenance)
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900">3. Decision Engine</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Menegakkan filter <strong className="text-slate-800">Gate-First, Rank-Second</strong>. Menahan keputusan rekomendasi ketika data tidak cukup dan menghasilkan 4 status akhir: <em className="italic">Recommended</em>, <em className="italic">Bersyarat</em>, <em className="italic">Not Recommended</em>, atau <em className="italic">Data Diperlukan</em>.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  Fokus: Keputusan rekayasa yang dapat dipertanggungjawabkan
                </div>
              </div>
            </div>
          </div>

          {/* Part D: Tekno-Ekonomi & Paving Block Dieng */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Bagian 04 · Studi Kasus Aplikasi Paving Block Dieng</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Kelayakan Teknis, Neraca Massa & Skrining Finansial
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Paving block dipilih sebagai domain aplikasi pembuktian awal karena memiliki standar mutu terukur menurut <strong className="text-slate-900 font-semibold">SNI 03-0691-1996</strong> (Bata Beton). Evaluasi tekno-ekonomi pada kapasitas produksi <strong className="text-slate-900 font-semibold">5.000 blok/hari</strong> (dimensi 200×100×60 mm, massa 2,64 kg/blok) menghasilkan temuan penting:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 uppercase font-semibold">Investasi Mesin (CAPEX)</div>
                <div className="text-xl font-extrabold text-slate-900 font-mono mt-1">Rp 276.000.000</div>
                <div className="text-[11px] text-slate-500 mt-1">Dryer 1 t/jam (150jt), Grinder (35jt), Sieve (20jt), Handling (25jt), QC & Listrik (46jt).</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 uppercase font-semibold">Biaya Olah Residu (OPEX)</div>
                <div className="text-xl font-extrabold text-emerald-700 font-mono mt-1">≈Rp 503.000 / ton</div>
                <div className="text-[11px] text-slate-500 mt-1">Energi pengeringan, grinding, tenaga kerja, maintenance, QC lab, dan transport internal.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 uppercase font-semibold">Payback Period (Skenario Dasar)</div>
                <div className="text-xl font-extrabold text-emerald-700 font-mono mt-1">~6,3 Bulan</div>
                <div className="text-[11px] text-slate-500 mt-1">Harga jual Rp 1.600/blok (Rp 80rb/m²), biaya Rp 1.250/blok, margin Rp 350/blok.</div>
              </div>
            </div>
          </div>

          {/* Part E: Metodologi Closed Loop & Filosofi Penutup */}
          <div className="mt-8 bg-emerald-900 text-white rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
            <div className="relative z-10 max-w-4xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                Bagian 05 · Kesimpulan & Metodologi Umpan Balik Tertutup
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Closed-Loop Development: Dari Simulasi Menuju Validasi Lapangan
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                SILICA2CON tidak berhenti sebagai keluaran sekali jalan. Hasil pengujian laboratorium dimasukkan kembali ke basis data untuk mengoreksi asumsi model matematika dan mempersempit <em className="italic">data gap</em>. Dengan mekanisme ini, keputusan engineering pada setiap iterasi menjadi semakin kokoh dan akurat.
              </p>
              <div className="pt-4 border-t border-emerald-800">
                <blockquote className="text-base sm:text-lg font-medium italic text-emerald-200">
                  “SILICA2CON tidak mengubah limbah menjadi jawaban; sistem ini membangun dasar evidence untuk menentukan apakah limbah tersebut layak menjadi jawaban.”
                </blockquote>
                <div className="text-xs text-emerald-400 mt-2">
                  — Dhamar Firdaus Esa Mahendra & Aditya Kusuma Wardana (Universitas Negeri Semarang, 2026)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GATEWAY KE HALAMAN LAINNYA (Simulasi, Metopen, Tim Kami) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              Navigasi Halaman Sistem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Eksplorasi Modul Khusus SILICA2CON
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Setiap komponen arsitektur memiliki halaman tersendiri untuk eksplorasi simulasi interaktif, metodologi penelitian mendalam, dan profil tim pengembang.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gateway 1: Simulasi */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-400 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-emerald-700 uppercase">Halaman Khusus</div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Simulator DSS Interaktif</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Coba kalkulasi substitusi silika Dieng terhadap standar mutu SNI 03-0691-1996, cek batas aglomerasi, emisi karbon dihemat, serta neraca margin finansial secara real-time.
                </p>
              </div>

              <button
                onClick={() => onNavigate('simulasi')}
                className="mt-6 inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/70 rounded-lg transition-colors cursor-pointer"
              >
                <span>Buka Page Simulasi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Gateway 2: Metopen */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-400 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase">Halaman Khusus</div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Metodologi Penelitian (Metopen)</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Pelajari alur Closed-Loop Development, kerangka DOE & Response Surface Methodology (RSM), serta klasifikasi 4 status keabsahan data provenance.
                </p>
              </div>

              <button
                onClick={() => onNavigate('metopen')}
                className="mt-6 inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold text-blue-800 bg-blue-100/70 hover:bg-blue-200/70 rounded-lg transition-colors cursor-pointer"
              >
                <span>Buka Page Metopen</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Gateway 3: Tim Kami */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-400 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-bold text-purple-700 uppercase">Halaman Khusus</div>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Tim Pengembang Karya</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Profil mahasiswa Teknik Komputer dan Teknik Sipil Universitas Negeri Semarang (UNNES) penyusun karya essay GEMASTE 2026.
                </p>
              </div>

              <button
                onClick={() => onNavigate('tim-kami')}
                className="mt-6 inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold text-purple-800 bg-purple-100/70 hover:bg-purple-200/70 rounded-lg transition-colors cursor-pointer"
              >
                <span>Buka Page Tim Kami</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
