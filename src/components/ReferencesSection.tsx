import React, { useState } from 'react';
import { BookMarked, Search, ExternalLink, Bookmark } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Dieng' | 'Material' | 'Standar'>('All');

  const references = [
    {
      authors: 'Widiyandari, H., Adhani, S. H., Subagio, A., & Purwanto, A.',
      year: '2021',
      title: 'Synthesis of Silica Xerogel from Geothermal Sludge by Ultrasonic Assisted Alkali Extraction-Acid Precipitation',
      source: 'Materials Research Express / Diponegoro University',
      category: 'Dieng',
      keyPoint: 'Melaporkan 165 ton sludge/bulan di PLTP Dieng & sintesis silika xerogel amorf dengan luas permukaan hingga 302,87 m²/g.',
    },
    {
      authors: 'H. S. N, M. I., Panatarani, C., Faizal, F., Mulyana, C., & Joni, I. M.',
      year: '2023',
      title: 'Synthesis of mesoporous Silica SBA-15 from geothermal sludge',
      source: 'Materialia, 27, 101637. doi: 10.1016/j.mtla.2022.101637',
      category: 'Dieng',
      keyPoint: 'Transformasi geothermal sludge Dieng menjadi silika mesopori SBA-15 dengan kadar SiO₂ mencapai 95,70 wt.%.',
    },
    {
      authors: 'Pambudi, N. A., Itoi, R., Yamashiro, R., Syah Alam, B. Y. C., et al.',
      year: '2015',
      title: 'The Behavior of Silica in Geothermal Brine from Dieng Geothermal Power Plant, Indonesia',
      source: 'Geothermics, 54, 109–114. doi: 10.1016/j.geothermics.2014.12.003',
      category: 'Dieng',
      keyPoint: 'Perubahan termodinamika memicu polimerisasi silika dan pembentukan endapan silika scaling pada sistem re-injeksi Dieng.',
    },
    {
      authors: 'Utami, W. S., Herdianita, N. R., & Atmaja, R. W.',
      year: '2014',
      title: 'The Effect of Temperature and pH on the Formation of Silica Scaling of Dieng Geothermal Field',
      source: 'Proceedings, 39th Workshop on Geothermal Reservoir Engineering, Stanford University',
      category: 'Dieng',
      keyPoint: 'Kinetika pembentukan kerak silika pada fasilitas permukaan PLTP Dieng dipengaruhi temperatur dan keasaman pH fluida.',
    },
    {
      authors: 'Mulyana, C., Mahmudah, & Faizal, F.',
      year: '2022',
      title: 'Analysis of Silica Activity Index from Geothermal Silica Scaling',
      source: 'Journal of Physics: Conference Series, 2344(1), 012016',
      category: 'Material',
      keyPoint: 'Perlakuan termal berlebih mendorong kristalisasi silika dan menurunkan indeks aktivitas pozzolaniknya.',
    },
    {
      authors: 'López-Perales, J. F., Alonso-Alonso, M. C., Vázquez-Rodríguez, F. J., et al.',
      year: '2024',
      title: 'Geothermal Nano-SiO₂ Waste as a Supplementary Cementitious Material for Concrete Exposed at High Critical Temperatures',
      source: 'Materials, 17(17), 4381. doi: 10.3390/ma17174381',
      category: 'Material',
      keyPoint: 'Residu nano-silika geothermal meningkatkan kuat tekan tetapi menurunkan workability slump beton.',
    },
    {
      authors: 'Meiyati, I. N., Agustin, R. S., & Murtiono, E. S.',
      year: '2015',
      title: 'Pemanfaatan Lumpur Geothermal untuk Pengganti Sebagian Semen terhadap Kuat Tekan Mortar',
      source: 'Indonesian Journal of Civil Engineering Education, 2(2)',
      category: 'Material',
      keyPoint: 'Substitusi 20% geothermal sludge pada mortar memberikan performa mekanis tertinggi dalam sistem yang diuji.',
    },
    {
      authors: 'Chen, G., Pu, T., Ma, J., Zhang, Q., Li, Z., & Cheng, Z.',
      year: '2024',
      title: 'Use of Nano-Silica as a Supplementary Cementitious Material in Recycled Aggregate Concrete',
      source: 'Waste and Biomass Valorization, 15(11), 6267–6279',
      category: 'Material',
      keyPoint: 'Penggunaan 3% nano-SiO₂ menaikkan kuat tekan 28 hari 25,9% serta menurunkan porositas penetrasi klorida.',
    },
    {
      authors: 'Xiaohan, Z., Ahmad, J., Jebur, Y. M., & Deifalla, A. F.',
      year: '2024',
      title: 'A Review on Partial Substitution of Nanosilica in Concrete',
      source: 'Reviews on Advanced Materials Science, 63(1), 20230157',
      category: 'Material',
      keyPoint: 'Tinjauan komprehensif rentang optimum nano-silika serta bahaya aglomerasi dan peningkatan kebutuhan air adukan.',
    },
    {
      authors: 'Badan Standardisasi Nasional (BSN)',
      year: '1996',
      title: 'SNI 03-0691-1996: Bata Beton (Paving Block)',
      source: 'Standar Nasional Indonesia, Badan Standardisasi Nasional',
      category: 'Standar',
      keyPoint: 'Standar acuan evaluasi mutu kuat tekan (Mutu A: 40 MPa, Mutu B: 20 MPa, Mutu C: 15 MPa, Mutu D: 10 MPa) dan daya serap air.',
    },
  ];

  const filtered = references.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyPoint.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              08. Landasan Ilmiah
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Daftar Pustaka & Basis Evidence
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl">
              Rujukan ilmiah primer yang mendasari korpus pengetahuan Science Engine dan Evidence Engine dalam sistem SILICA2CON.
            </p>
          </div>

          {/* Search bar & Category filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari literatur / kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
              />
            </div>

            <div className="flex gap-1 p-1 bg-slate-100 rounded-lg">
              {(['All', 'Dieng', 'Material', 'Standar'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* References List */}
        <div className="mt-8 space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors bg-slate-50/50 flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="text-xs font-medium text-slate-500">
                  {item.authors} ({item.year})
                </div>
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  {item.title}
                </div>
                <div className="text-xs text-slate-600 italic">
                  {item.source}
                </div>
                <div className="mt-2 text-xs text-emerald-900 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200/60">
                  <strong className="font-semibold">Relevansi SILICA2CON: </strong>
                  {item.keyPoint}
                </div>
              </div>

              <div className="shrink-0 flex md:flex-col items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                  {item.category}
                </span>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-sm text-slate-500">
              Tidak ada literatur yang cocok dengan kata kunci pencarian.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
