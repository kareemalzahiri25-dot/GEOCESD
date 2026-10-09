import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { TeamSection } from '../TeamSection';
import { PageId } from '../Navbar';

interface TeamPageProps {
  onBackToHome: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onBackToHome }) => {
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
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-800 uppercase tracking-wider">
            <Users className="w-4 h-4 text-purple-600" />
            <span>Page Khusus: Identitas Tim Pengembang</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Tim Peneliti GEOCEDS Universitas Negeri Semarang
          </h1>
        </div>

        {/* Embedded Team Section */}
        <TeamSection />
      </div>
    </div>
  );
};
