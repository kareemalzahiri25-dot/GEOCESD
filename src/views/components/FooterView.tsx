import React from 'react';
import { Cpu } from 'lucide-react';
import { PageId } from '../../models/silica.model';

interface FooterViewProps {
  onNavigate: (page: PageId) => void;
  onScrollToTop?: () => void;
}

export const FooterView: React.FC<FooterViewProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Beranda (Rangkuman Essay)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulasi')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Simulasi (Page Terpisah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('metopen')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Metopen (Page Terpisah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tim-kami')}
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

          {/* Credit dimasukkan ke dalam frame atas */}
          <div className="md:col-span-12 pt-6 border-t border-slate-800 text-slate-500 text-left">
            © 2026 GEOCEDS · Universitas Negeri Semarang. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
};
