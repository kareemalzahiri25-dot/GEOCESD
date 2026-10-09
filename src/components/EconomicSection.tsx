import React, { useState } from 'react';
import { Table, DollarSign, Calculator, Layers, ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export const EconomicSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'neraca' | 'capex_opex' | 'skenario'>('neraca');

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              05. Studi Kasus Tekno-Ekonomi Dieng
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Neraca Massa, Biaya Investasi & Kelayakan Pasar
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Transparansi silsilah data (<em className="italic">traceable provenance</em>) untuk seluruh variabel produksi paving block terolah dari geothermal sludge Dieng, memisahkan nilai skenario, asumsi rekayasa, dan hasil turunan.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('neraca')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'neraca'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Neraca Massa
            </button>
            <button
              onClick={() => setActiveTab('capex_opex')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'capex_opex'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              CAPEX & OPEX
            </button>
            <button
              onClick={() => setActiveTab('skenario')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'skenario'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Skenario Sensitivitas
            </button>
          </div>
        </div>

        {/* Tab 1: Neraca Massa dan Basis Produksi */}
        {activeTab === 'neraca' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Tabel 1. Neraca Massa & Basis Produksi Harian (Studi Kasus Dieng)
                </span>
                <span className="text-xs text-slate-500 font-mono">5.000 Block / Hari</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/60 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Parameter</th>
                      <th className="py-3 px-4 text-right">Nilai</th>
                      <th className="py-3 px-4">Satuan</th>
                      <th className="py-3 px-4">Status Provenance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                    <tr>
                      <td className="py-3 px-4">Geothermal Sludge Masuk</td>
                      <td className="py-3 px-4 text-right font-mono font-bold">1,00</td>
                      <td className="py-3 px-4 text-slate-500">ton/hari</td>
                      <td className="py-3 px-4"><span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">Skenario Fasilitas</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Processing Yield</td>
                      <td className="py-3 px-4 text-right font-mono font-bold">90</td>
                      <td className="py-3 px-4 text-slate-500">%</td>
                      <td className="py-3 px-4"><span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-xs">Asumsi Uji Neraca</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Silica-Rich Residue Tersedia</td>
                      <td className="py-3 px-4 text-right font-mono font-bold">0,90</td>
                      <td className="py-3 px-4 text-slate-500">ton/hari</td>
                      <td className="py-3 px-4"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs">Hasil Turunan</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Massa per Paving Block</td>
                      <td className="py-3 px-4 text-right font-mono font-bold">2,64</td>
                      <td className="py-3 px-4 text-slate-500">kg/block</td>
                      <td className="py-3 px-4"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs">Hasil Turunan / Timbang</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Kapasitas Produksi Harian</td>
                      <td className="py-3 px-4 text-right font-mono font-bold">5.000</td>
                      <td className="py-3 px-4 text-slate-500">block/hari</td>
                      <td className="py-3 px-4"><span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">Skenario Target</span></td>
                    </tr>
                    <tr className="bg-slate-50/80 font-bold">
                      <td className="py-3 px-4">Total Massa Produk Akhir</td>
                      <td className="py-3 px-4 text-right font-mono text-emerald-700">13,20</td>
                      <td className="py-3 px-4 text-slate-600">ton/hari</td>
                      <td className="py-3 px-4"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs">Hasil Turunan</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Konversi Geometri & Volume
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paving block bata beton standar mengacu pada SNI 03-0691-1996 dengan spesifikasi geometri persegi panjang:
              </p>
              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
                  <span className="text-slate-600">Dimensi Nominal:</span>
                  <span className="font-mono font-semibold text-slate-900">200 × 100 × 60 mm</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
                  <span className="text-slate-600">Luas Permukaan per Blok:</span>
                  <span className="font-mono font-semibold text-slate-900">0,02 m² (50 blok / m²)</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
                  <span className="text-slate-600">Densitas Rata-rata:</span>
                  <span className="font-mono font-semibold text-slate-900">2.200 kg/m³</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg flex justify-between font-semibold text-emerald-900">
                  <span>Konsumsi Semen per Blok:</span>
                  <span className="font-mono">±0,44 kg / block</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: CAPEX & OPEX */}
        {activeTab === 'capex_opex' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CAPEX Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Tabel 2. Preliminary CAPEX
                  </div>
                  <div className="text-xs text-slate-500">Peralatan Pengolahan Residu Dieng</div>
                </div>
                <div className="text-sm font-extrabold text-slate-900 font-mono">
                  Rp 276.000.000
                </div>
              </div>

              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Rotary Dryer (1 unit; ±1 t/jam)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 150.000.000</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Engineering estimate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Ball Grinder Pulverizer (1 unit)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 35.000.000</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Engineering estimate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Vibrating Sieve Shaker (1 unit)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 20.000.000</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Engineering estimate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Material Handling + Hopper (1 sistem)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 25.000.000</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Engineering estimate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Timbangan Presisi + QC Dasar (1 set)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 10.000.000</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Engineering estimate</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Instalasi & Electrical (15% equipment)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 36.000.000</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Asumsi 15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* OPEX Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Tabel 3. Preliminary OPEX
                  </div>
                  <div className="text-xs text-slate-500">Biaya Operasional per Ton Residu</div>
                </div>
                <div className="text-sm font-extrabold text-emerald-700 font-mono">
                  ≈Rp 503.000 / ton
                </div>
              </div>

              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Energi Pengeringan (80 kWh × Rp1.500)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 120.000/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Asumsi tarif listrik</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Energi Grinding (35 kWh × Rp1.500)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 52.500/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Asumsi konsumsi</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Sieving & Material Handling</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 20.000/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Allowance</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Tenaga Kerja (2 Operator teralokasi)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 120.000/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Upah proporsional</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Maintenance Rutin Mesin (5% CAPEX)</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 46.000/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Asumsi 5%/tahun</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">Internal Transport PLTP → Fasilitas</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 50.000/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Skenario radius 10 km</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">QC Sampling & Uji Laboratorium</td>
                      <td className="py-2.5 px-3 text-right font-mono">Rp 75.000/t</td>
                      <td className="py-2.5 px-3 text-right text-[11px] text-slate-500">Alokasi awal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Skenario Sensitivitas & Payback */}
        {activeTab === 'skenario' && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-5 bg-slate-50 border-b border-slate-200">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Tabel 6. Skenario Analisis Tekno-Ekonomi untuk SILICA2CON
              </div>
              <div className="text-xs text-slate-500">
                Perbandingan Skenario Konservatif, Skenario Dasar (EE), dan Optimistis pada Utilisasi Produksi 5.000 Blok/Hari
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/70 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Parameter Finansial</th>
                    <th className="py-3 px-4 text-right">Konservatif</th>
                    <th className="py-3 px-4 text-right bg-emerald-50/70 text-emerald-950">Dasar (EE)</th>
                    <th className="py-3 px-4 text-right">Optimistis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  <tr>
                    <td className="py-3 px-4">Harga Jual Pasar per m²</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 70.000</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/30 text-emerald-900">Rp 80.000</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 90.000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Harga Jual per Paving Block</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 1.400</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/30 text-emerald-900">Rp 1.600</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 1.800</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Estimasi Biaya Produksi per Block</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 1.350</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/30 text-emerald-900">Rp 1.250</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 1.150</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-bold">Margin Kotor Operasi per Block</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-600">Rp 50</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/50 text-emerald-700">Rp 350</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-700">Rp 650</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Pendapatan Operasi Harian</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 7.000.000</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/30 text-emerald-900">Rp 8.000.000</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 9.000.000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Total Biaya Produksi Harian</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 6.750.000</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/30 text-emerald-900">Rp 6.250.000</td>
                    <td className="py-3 px-4 text-right font-mono">Rp 5.750.000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">Arus Kas Operasi / Hari</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-700">Rp 250.000</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/50 text-emerald-700">Rp 1.750.000</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-700">Rp 3.250.000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">Arus Kas Operasi / Tahun (300 hari)</td>
                    <td className="py-3 px-4 text-right font-mono text-slate-700">Rp 75.000.000</td>
                    <td className="py-3 px-4 text-right font-mono font-bold bg-emerald-50/50 text-emerald-700">Rp 525.000.000</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-700">Rp 975.000.000</td>
                  </tr>
                  <tr className="bg-emerald-100/40 text-slate-900 font-extrabold text-sm">
                    <td className="py-3 px-4">Perkiraan Payback Period (CAPEX Rp 276 Juta)</td>
                    <td className="py-3 px-4 text-right font-mono text-amber-800">~44,2 Bulan</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-800 bg-emerald-100/60 font-bold">~6,3 Bulan</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-800">~3,4 Bulan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
