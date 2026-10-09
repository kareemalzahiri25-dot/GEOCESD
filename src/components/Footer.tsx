import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-14 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Abstract */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                GEO<span className="text-emerald-500">CEDS</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Evidence-Based Decision Support System untuk Transformasi Residu Geothermal Menjadi Material Konstruksi Berkelanjutan.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Halaman Sistem
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Beranda (Rangkuman Essay)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('simulasi')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Simulasi (Page Terpisah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('metopen')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Metopen (Page Terpisah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tim-kami')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Tim Kami (Page Terpisah)
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Afiliasi & Kontak Penulis
            </div>
            <p className="text-slate-400 leading-relaxed">
              Fakultas Teknik, Universitas Negeri Semarang (UNNES)<br />
              Sekaran, Gunungpati, Kota Semarang, Jawa Tengah 50229
            </p>
            <div className="pt-1 text-[11px] text-slate-400 space-y-1">
              <div>Ketua Tim: Dhamar Firdaus Esa Mahendra (Teknik Komputer)</div>
              <div>Anggota Tim: Aditya Kusuma Wardana (Teknik Sipil)</div>
              <div className="text-emerald-400">Email: adityakusuma@students.unnes.ac.id</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 SILICA2CON · Universitas Negeri Semarang. Seluruh hak cipta dilindungi.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
