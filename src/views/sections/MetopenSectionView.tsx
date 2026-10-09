import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const MetopenSectionView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loop' | 'provenance' | 'doe'>('loop');

  return (
    <div className="space-y-6">
      {/* Tab Selection */}
      <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl max-w-fit">
        <button
          onClick={() => setActiveTab('loop')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'loop'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Mekanisme Closed-Loop
        </button>
        <button
          onClick={() => setActiveTab('provenance')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'provenance'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Sistem Data Provenance
        </button>
        <button
          onClick={() => setActiveTab('doe')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'doe'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          DOE & Response Surface (RSM)
        </button>
      </div>

      {/* Tab 1: Closed-Loop Mechanism */}
      {activeTab === 'loop' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Siklus Umpan Balik Eksperimental Berkelanjutan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              GEOCEDS tidak diposisikan sebagai mesin yang menghasilkan satu formula mati dalam satu kali proses. Sebaliknya, sistem berfungsi sebagai sistem pendukung keputusan iteratif:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-xs text-slate-900">1. Skrining Awal & Pembentukan Kandidat</div>
                <div className="text-xs text-slate-600 mt-1">
                  Science Engine memetakan rentang dosis substitusi (5% - 20%) berdasarkan literatur terdahulu.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-xs text-slate-900">2. Validasi Eksperimental Terarah</div>
                <div className="text-xs text-slate-600 mt-1">
                  Alih-alih menguji ratusan kombinasi secara membabi buta, peneliti hanya menguji kandidat yang lolos technical gate awal.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-xs text-slate-900">3. Pembaruan Dataset & Penutupan Data Gap</div>
                <div className="text-xs text-slate-600 mt-1">
                  Data uji kuat tekan dan absorpsi laboratorium dimasukkan kembali ke Evidence Engine, mengubah status dari <em className="italic">Screening Estimate</em> menjadi <em className="italic">Validated</em>.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden">
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Closed-Loop Logic Diagram</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <span>[01] Karakterisasi Residu & Literatur</span>
                <span className="text-emerald-400 text-[10px]">INPUT</span>
              </div>
              <div className="text-center text-slate-500">↓</div>
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <span>[02] Pembentukan Kandidat Formulasi</span>
                <span className="text-blue-400 text-[10px]">SCIENCE</span>
              </div>
              <div className="text-center text-slate-500">↓</div>
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <span>[03] Pengujian Eksperimental Laboratorium</span>
                <span className="text-amber-400 text-[10px]">LAB TEST</span>
              </div>
              <div className="text-center text-slate-500">↓</div>
              <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-700 flex items-center justify-between">
                <span>[04] Update Evidence & Decision Engine</span>
                <span className="text-emerald-300 text-[10px]">CLOSED LOOP</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Keberhasilan diukur bukan dari seberapa sering memberi rekomendasi instan, tetapi dari kemampuannya menjaga konsistensi antara evidence dan batas validitas engineering.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Provenance System */}
      {activeTab === 'provenance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="text-xs font-mono font-bold text-emerald-700 uppercase">Status 1</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Dilaporkan (Reported)</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Nilai yang diperoleh langsung dari laporan studi terpublikasi atau dokumen operasional PLTP Dieng tanpa manipulasi angka.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
              Contoh: 165 ton sludge/bulan (Widiyandari et al., 2021)
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="text-xs font-mono font-bold text-teal-700 uppercase">Status 2</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Diturunkan (Derived)</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Nilai yang dihasilkan dari persamaan neraca massa, geometri produk, atau konversi stoikiometri terstandar.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
              Contoh: Massa blok 2,64 kg dari dimensi 200x100x60 mm & densitas
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="text-xs font-mono font-bold text-amber-700 uppercase">Status 3</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Diasumsikan (Assumed)</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Asumsi engineering berbasis parameter industri lokal, seperti tarif listrik PLN industri, upah operator, dan biaya pemeliharaan mesin.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
              Contoh: Tarif listrik Rp 1.500/kWh, maintenance 5% CAPEX
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="text-xs font-mono font-bold text-rose-700 uppercase">Status 4</div>
            <h4 className="text-base font-bold text-slate-900 mt-1">Data Diperlukan (Data Gap)</h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Variabel esensial yang belum memiliki data empiris dan secara eksplisit menahan status rekomendasi akhir agar tidak sembrono.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
              Contoh: Uji ketahanan aus fisik (abrasion) prototipe nyata
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: DOE & RSM */}
      {activeTab === 'doe' && (
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold text-slate-900">
              Design of Experiments (DOE) & Response Surface Methodology (RSM)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Ketika data eksperimental telah mencapai ukuran sampel statistik yang cukup, Science Engine mengintegrasikan pemodelan permukaan respon (<em className="italic">Response Surface</em>). Tujuannya adalah mengidentifikasi titik optimum interaksi multi-faktor secara akurat tanpa melakukan ekstrapolasi liar di luar domain batas validitasnya.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs">
              <div>
                <div className="font-bold text-slate-900">Faktor Variabel (X)</div>
                <ul className="mt-1 space-y-1 text-slate-600">
                  <li>• % Rasio substitusi silika</li>
                  <li>• Water-to-binder ratio (W/B)</li>
                  <li>• Suhu aktivasi/pengeringan</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-slate-900">Respon Terukur (Y)</div>
                <ul className="mt-1 space-y-1 text-slate-600">
                  <li>• Kuat tekan 7, 14, 28 hari</li>
                  <li>• Penyerapan air (%)</li>
                  <li>• Slump workability adukan</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-slate-900">Disiplin Validitas</div>
                <div className="mt-1 text-slate-600">
                  Model dilarang memprediksi di luar batas rentang data empiris teruji guna mencegah galat palsu.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
