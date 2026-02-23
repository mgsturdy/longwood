import Image from 'next/image';
import { HERO, SITE_NAME } from '@/lib/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center"
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-[Georgia,serif]">
            {HERO.headline}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            {HERO.subheadline}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#register"
              className="inline-block bg-gold text-navy-dark px-8 py-4 rounded text-lg font-bold hover:bg-gold-light transition-colors"
            >
              {HERO.cta}
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {HERO.trustCues.map((cue) => (
              <span
                key={cue}
                className="inline-flex items-center gap-2 text-white/80 text-base"
              >
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {cue}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
