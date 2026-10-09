import React, { useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { HomeLandingPage } from './components/HomeLandingPage';
import { SimulasiPage } from './components/Pages/SimulasiPage';
import { MetopenPage } from './components/Pages/MetopenPage';
import { TeamPage } from './components/Pages/TeamPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('beranda');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Navbar Header with strict 3-zone contract */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full">
        {currentPage === 'beranda' && (
          <HomeLandingPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'simulasi' && (
          <SimulasiPage onBackToHome={() => handleNavigate('beranda')} />
        )}

        {currentPage === 'metopen' && (
          <MetopenPage onBackToHome={() => handleNavigate('beranda')} />
        )}

        {currentPage === 'tim-kami' && (
          <TeamPage onBackToHome={() => handleNavigate('beranda')} />
        )}
      </main>

      {/* Modern Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
