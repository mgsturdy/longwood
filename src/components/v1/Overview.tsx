import { OVERVIEW } from '@/lib/content';

export default function Overview() {
  return (
    <section id="overview" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column — sticky heading */}
          <div className="lg:sticky lg:top-32">
            <div className="w-12 h-1 bg-gold mb-8" />
            <h2 className="text-navy mb-6">
              {OVERVIEW.title}
            </h2>
            <p className="text-xl text-warm-gray leading-relaxed max-w-md">
              {OVERVIEW.subtitle}
            </p>
            <a
              href="#register"
              className="mt-10 inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-base font-semibold hover:bg-navy-light transition-colors"
            >
              Register for Updates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right column — benefit items */}
          <div className="space-y-0">
            {OVERVIEW.benefits.map((benefit, i) => (
              <div
                key={i}
                className="group flex gap-6 py-8 border-b border-cream-dark/50 last:border-b-0"
              >
                <span className="shrink-0 text-3xl font-light tabular-nums text-gold/60 group-hover:text-gold transition-colors pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-lg text-charcoal leading-relaxed group-hover:text-navy transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
