'use client';

import { useState, useEffect } from 'react';
import { SITE_NAME } from '@/lib/content-v2';
import { track } from '@/lib/analytics';

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Homes', href: '#homes' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-black-deep/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="text-lg font-semibold tracking-wide text-ivory uppercase"
          aria-label={`${SITE_NAME} — Return to top`}
        >
          <span className="text-copper">Chelsea</span>
          <span className="ml-1.5 font-light text-ivory/70">at Longwood</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.15em] text-ivory/60 uppercase transition-colors duration-500 hover:text-copper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => track('cta_click', { location: 'header' })}
            className="ml-2 border border-copper bg-copper/10 px-6 py-2.5 text-[13px] font-medium tracking-wider text-copper uppercase transition-all duration-500 hover:bg-copper hover:text-black-deep"
          >
            Register
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-1 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-ivory transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ivory transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ivory transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="animate-fade-in border-t border-ivory/10 bg-black-deep/95 backdrop-blur-md lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-6 py-8 gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest text-ivory/60 uppercase transition-colors hover:text-copper"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => {
                setMenuOpen(false);
                track('cta_click', { location: 'mobile_header' });
              }}
              className="mt-3 border border-copper bg-copper/10 px-5 py-3.5 text-center text-sm font-medium tracking-wider text-copper uppercase transition-all hover:bg-copper hover:text-black-deep"
            >
              Register
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
