'use client';

import Image from 'next/image';
import { HERO } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
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

      <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-sage/30 backdrop-blur-sm px-4 py-2 text-sm font-medium text-cream-v3 border border-cream-v3/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-terracotta-light animate-gentle-bounce" />
              Now Pre-Leasing
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-v3 leading-tight tracking-tight">
            {HERO.headline}
          </h1>

          <p className="animate-fade-in-up delay-200 mt-5 text-xl sm:text-2xl text-cream-v3/90 max-w-lg leading-relaxed">
            {HERO.subheadline}
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-3 mt-6">
            {HERO.trustCues.map((cue) => (
              <span
                key={cue}
                className="inline-flex items-center gap-2 rounded-full bg-cream-v3/15 backdrop-blur-sm px-4 py-2 text-sm text-cream-v3/95"
              >
                <svg className="w-4 h-4 text-terracotta-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {cue}
              </span>
            ))}
          </div>

          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#register"
              onClick={() => track('cta_click', { location: 'hero' })}
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-terracotta-dark hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              {HERO.cta}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#homes"
              className="inline-flex items-center justify-center rounded-full bg-cream-v3/15 backdrop-blur-sm border border-cream-v3/30 px-8 py-4 text-lg font-semibold text-cream-v3 hover:bg-cream-v3/25 transition-all"
            >
              Explore the Homes
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-gentle-bounce">
        <a href="#overview" aria-label="Scroll to learn more" className="text-cream-v3/60 hover:text-cream-v3 transition-colors">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
