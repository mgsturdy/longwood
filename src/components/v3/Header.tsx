'use client';

import { useState } from 'react';
import { SITE_NAME } from '@/lib/content';
import { track } from '@/lib/analytics';

const navLinks = [
  { label: 'Homes', href: '#homes' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-soft-white/95 backdrop-blur-sm border-b border-warm-gray-v3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" aria-label="Home">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold text-lg group-hover:bg-sage-dark transition-colors">
              C
            </div>
            <span className="text-xl font-bold text-forest tracking-tight hidden sm:block">
              {SITE_NAME}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-warm-brown hover:text-sage-dark font-medium transition-colors text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => track('cta_click', { location: 'header' })}
              className="inline-flex items-center rounded-full bg-terracotta px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-terracotta-dark transition-all hover:shadow-md"
            >
              Register Now
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-warm-brown hover:bg-warm-gray-v3 transition-colors"
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
        <div className="md:hidden border-t border-warm-gray-v3 bg-soft-white animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-warm-brown hover:bg-warm-gray-v3 font-medium transition-colors"
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
              className="block rounded-full bg-terracotta px-6 py-3 text-center text-white font-semibold hover:bg-terracotta-dark transition-colors mt-2"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
