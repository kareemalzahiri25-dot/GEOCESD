import React, { useState, useEffect } from 'react';
import { Cpu, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export type PageId = 'beranda' | 'simulasi' | 'metopen' | 'tim-kami';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: PageId }[] = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Simulasi', id: 'simulasi' },
    { label: 'Metopen', id: 'metopen' },
    { label: 'Tim Kami', id: 'tim-kami' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Logo Project di sebelah kiri */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
            aria-label="GEOCEDS Beranda"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:bg-emerald-700 transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                GEO<span className="text-emerald-600">CEDS</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 font-medium -mt-1 hidden sm:block">
                EVIDENCE-BASED DSS
              </span>
            </div>
          </button>

          {/* Zone 2: Navbar di header (beranda | simulasi | metopen | tim kami) */}
          <nav
            aria-label="Navigasi Header"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded cursor-pointer ${
                    isActive
                      ? 'text-emerald-700 font-semibold'
                      : 'hover:text-slate-900 text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Logo Mulai Simulasi di pojok kanan */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('simulasi')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 whitespace-nowrap cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Mulai Simulasi</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-slate-200 mt-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-3 mt-2 border-t border-slate-100">
              <button
                onClick={() => handleNavClick('simulasi')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
              >
                <span>Mulai Simulasi DSS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
