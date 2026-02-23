'use client';

import { useState, useEffect } from 'react';
import { SITE_NAME } from '@/lib/content';
import { track } from '@/lib/analytics';

const navLinks = [
  { label: 'Why Rent', href: '#overview' },
  { label: 'Homes', href: '#homes' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-soft-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-forest' : 'text-cream-v3'
            }`}
          >
            {SITE_NAME}
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 text-base ${
                  scrolled
                    ? 'text-warm-brown hover:text-forest'
                    : 'text-cream-v3/80 hover:text-cream-v3'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => track('cta_click', { location: 'header' })}
              className="bg-terracotta px-7 py-2.5 text-base font-semibold text-white hover:bg-terracotta-dark transition-all rounded-sm"
            >
              Register Now
            </a>
          </nav>

          <button
            type="button"
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-forest' : 'text-cream-v3'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-soft-white border-t border-warm-gray-v3 animate-fade-in shadow-lg">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3.5 text-warm-brown hover:text-forest font-medium transition-colors border-b border-warm-gray-v3/30 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => {
                setMobileOpen(false);
                track('cta_click', { location: 'header_mobile' });
              }}
              className="block bg-terracotta px-6 py-3.5 text-center text-white font-semibold hover:bg-terracotta-dark transition-colors mt-3 rounded-sm"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
