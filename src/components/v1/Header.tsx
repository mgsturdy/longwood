'use client';

import { useState, useEffect } from 'react';
import { SITE_NAME, HERO } from '@/lib/content';
import { track } from '@/lib/analytics';

const NAV_LINKS = [
  { label: 'Why Rent', href: '#overview' },
  { label: 'The Homes', href: '#homes' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3.5'
          : 'bg-white/95 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="#" className="text-navy text-xl sm:text-2xl font-bold font-[Georgia,serif] tracking-tight">
          {SITE_NAME}
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-navy text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => track('cta_click', { location: 'header' })}
            className="bg-navy text-white px-7 py-3 rounded-lg text-base font-semibold hover:bg-navy-light transition-colors"
          >
            {HERO.cta}
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#register"
            onClick={() => track('cta_click', { location: 'header-mobile' })}
            className="bg-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            Register
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 text-navy"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-cream-dark px-6 py-5 space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-charcoal hover:text-navy text-lg py-3 border-b border-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
