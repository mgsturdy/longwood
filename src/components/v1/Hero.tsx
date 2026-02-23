import Image from 'next/image';
import { HERO, SITE_NAME } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center"
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/65 to-navy-dark/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-36 lg:py-44">
        <div className="max-w-2xl">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-6">
            {SITE_NAME}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 font-[Georgia,serif]">
            {HERO.headline}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-xl">
            {HERO.subheadline}
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#register"
              className="inline-block bg-gold text-navy-dark px-10 py-4 rounded-lg text-lg font-bold hover:bg-gold-light transition-colors shadow-lg"
            >
              {HERO.cta}
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {HERO.trustCues.map((cue) => (
              <span
                key={cue}
                className="inline-flex items-center gap-2.5 text-white/85 text-base"
              >
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {cue}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
