import { useState, useEffect, useCallback } from 'react';
import { PageId } from '../models/silica.model';

const VALID_PAGES: PageId[] = ['beranda', 'simulasi', 'metopen', 'tim-kami'];

function parseHashToPage(defaultPage: PageId): PageId {
  if (typeof window === 'undefined') {
    return defaultPage;
  }

  const rawHash = window.location.hash.replace(/^#/, '').trim();
  if (!rawHash || rawHash === '/') {
    return defaultPage;
  }

  const normalized = rawHash.replace(/^\/+/, '').split('/')[0];
  if (VALID_PAGES.includes(normalized as PageId)) {
    return normalized as PageId;
  }

  // In-page anchor on Beranda (e.g. #ringkasan-essay, #alur-evaluasi)
  return 'beranda';
}

function buildHashForPage(page: PageId): string {
  return page === 'beranda' ? '#/' : `#/${page}`;
}

export function useNavigationController(initialPage: PageId = 'beranda') {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    parseHashToPage(initialPage)
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const targetPage = parseHashToPage(initialPage);
      setCurrentPage(targetPage);
      setMobileMenuOpen(false);

      const rawHash = window.location.hash.replace(/^#/, '').trim();
      const isSectionAnchor =
        rawHash &&
        !rawHash.startsWith('/') &&
        !VALID_PAGES.includes(rawHash as PageId);

      if (isSectionAnchor) {
        const el = document.getElementById(rawHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [initialPage]);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);

    const targetHash = buildHashForPage(page);
    if (typeof window !== 'undefined' && window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    currentPage,
    mobileMenuOpen,
    isScrolled,
    navigateTo,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToTop,
  };
}
