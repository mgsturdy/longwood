import Image from 'next/image';
import { HERO, SITE_NAME } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-end"
      aria-label="Hero"
    >
      <Image
        src="/images/hero-view.jpg"
        alt={`${SITE_NAME} — building exterior rendering`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-20 lg:pb-28 pt-40">
        <p className="text-gold tracking-[0.25em] uppercase text-sm font-semibold mb-8">
          {SITE_NAME}
        </p>
        <h1 className="text-white max-w-3xl mb-8">
          {HERO.headline}
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed max-w-xl font-light">
          {HERO.subheadline}
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-14">
          <a
            href="#register"
            className="inline-block bg-gold text-navy-dark px-10 py-4.5 text-lg font-bold hover:bg-gold-light transition-colors shadow-lg tracking-wide"
          >
            {HERO.cta}
          </a>
          <a
            href="#homes"
            className="inline-flex items-center gap-2 text-white/80 text-lg hover:text-gold transition-colors border-b border-white/30 pb-0.5 hover:border-gold"
          >
            Explore the Homes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8">
          {HERO.trustCues.map((cue) => (
            <span
              key={cue}
              className="inline-flex items-center gap-2.5 text-white/70 text-sm tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {cue}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
