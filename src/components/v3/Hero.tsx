'use client';

import Image from 'next/image';
import { HERO } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-end overflow-hidden"
      aria-label="Welcome to Chelsea at Longwood"
    >
      <Image
        src="/images/hero-view.jpg"
        alt="Chelsea at Longwood exterior rendering — a welcoming community"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-forest/5" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-40">
        <div className="max-w-3xl">
          <p className="text-terracotta-light tracking-[0.2em] uppercase text-sm font-medium mb-6 animate-fade-in-up">
            Now Pre-Leasing
          </p>

          <h1 className="animate-fade-in-up delay-100 text-cream-v3 mb-8">
            {HERO.headline}
          </h1>

          <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl text-cream-v3/80 max-w-xl leading-relaxed">
            {HERO.subheadline}
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#register"
              onClick={() => track('cta_click', { location: 'hero' })}
              className="inline-flex items-center justify-center bg-terracotta px-10 py-4.5 text-lg font-semibold text-white shadow-lg hover:bg-terracotta-dark transition-all hover:-translate-y-0.5 rounded-sm"
            >
              {HERO.cta}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#homes"
              className="inline-flex items-center justify-center border border-cream-v3/30 px-10 py-4.5 text-lg font-semibold text-cream-v3 hover:bg-cream-v3/10 transition-all rounded-sm"
            >
              Explore the Homes
            </a>
          </div>

          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-x-8 gap-y-3 mt-14 border-t border-cream-v3/15 pt-8">
            {HERO.trustCues.map((cue) => (
              <span
                key={cue}
                className="inline-flex items-center gap-2.5 text-cream-v3/70 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-light" />
                {cue}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
