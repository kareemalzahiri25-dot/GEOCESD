import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { MetopenSection } from '../MetopenSection';
import { ReferencesSection } from '../ReferencesSection';
import { PageId } from '../Navbar';

interface MetopenPageProps {
  onBackToHome: () => void;
}

export const MetopenPage: React.FC<MetopenPageProps> = ({ onBackToHome }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Button */}
        <div className="mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Beranda</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Page Khusus: Metodologi Penelitian & Validasi</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                Metodologi Closed-Loop, DOE, RSM & Provenance Data
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                Halaman khusus yang membedah arsitektur saintifik di balik sistem SILICA2CON secara mendalam, termasuk daftar pustaka primer.
              </p>
            </div>

            <div className="shrink-0">
              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                Status: Pratinjau Antarmuka Modul
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Metopen and References */}
        <MetopenSection />
        <ReferencesSection />
      </div>
    </div>
  );
};
