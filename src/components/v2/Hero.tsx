import Image from 'next/image';
import { HERO } from '@/lib/content-v2';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-black-deep"
    >
      <Image
        src="/images/hero-view.jpg"
        alt="Chelsea at Longwood building exterior"
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/50 to-black-deep/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 lg:px-10 lg:pb-36">
        <div className="max-w-3xl">
          <div className="accent-line-wide mb-10 animate-fade-in" />
          <h1 className="animate-fade-up text-ivory">
            {HERO.headline}
          </h1>
          <p className="animate-fade-up delay-200 mt-8 max-w-xl text-lg leading-relaxed text-ivory/60 lg:text-xl">
            {HERO.subheadline}
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#register"
              className="border border-copper bg-copper px-10 py-4 text-sm font-medium tracking-widest text-black-deep uppercase transition-all duration-500 hover:bg-copper-light hover:shadow-lg hover:shadow-copper/20"
            >
              {HERO.cta}
            </a>
            <a
              href="#overview"
              className="border border-ivory/20 px-10 py-4 text-sm font-medium tracking-widest text-ivory/70 uppercase transition-all duration-500 hover:border-ivory/40 hover:text-ivory"
            >
              Learn More
            </a>
          </div>
          <div className="animate-fade-up delay-500 mt-16 flex flex-wrap gap-8">
            {HERO.trustCues.map((cue) => (
              <span
                key={cue}
                className="flex items-center gap-2.5 text-sm tracking-wide text-ivory/40"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper/80" />
                {cue}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
    </section>
  );
}
