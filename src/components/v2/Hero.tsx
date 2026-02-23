import Image from 'next/image';
import { HERO } from '@/lib/content';

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
        className="object-cover opacity-60"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <div className="max-w-3xl">
          <div className="accent-line-wide mb-8 animate-fade-in" />
          <h1 className="animate-fade-up text-4xl font-light leading-tight tracking-tight text-ivory sm:text-5xl lg:text-7xl">
            {HERO.headline}
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg text-ivory/70 lg:text-xl">
            {HERO.subheadline}
          </p>
          <div className="animate-fade-up delay-300 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="border border-copper bg-copper px-8 py-3.5 text-sm font-medium tracking-widest text-black-deep uppercase transition-all duration-300 hover:bg-copper-light"
            >
              {HERO.cta}
            </a>
            <a
              href="#overview"
              className="border border-ivory/20 px-8 py-3.5 text-sm font-medium tracking-widest text-ivory/80 uppercase transition-all duration-300 hover:border-ivory/50 hover:text-ivory"
            >
              Learn More
            </a>
          </div>
          <div className="animate-fade-up delay-500 mt-12 flex flex-wrap gap-6">
            {HERO.trustCues.map((cue) => (
              <span
                key={cue}
                className="flex items-center gap-2 text-sm tracking-wide text-ivory/50"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-copper" />
                {cue}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
