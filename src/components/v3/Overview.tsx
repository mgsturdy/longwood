import Image from 'next/image';
import { OVERVIEW } from '@/lib/content';

export default function Overview() {
  const firstThree = OVERVIEW.benefits.slice(0, 3);
  const lastFour = OVERVIEW.benefits.slice(3);

  return (
    <section id="overview" className="py-28 lg:py-40 bg-cream-v3" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Large editorial heading */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <h2 id="overview-heading" className="text-forest">
            {OVERVIEW.title}
          </h2>
          <p className="mt-6 text-xl text-warm-brown/70 leading-relaxed max-w-xl">
            {OVERVIEW.subtitle}
          </p>
        </div>

        {/* Asymmetric two-column layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: first 3 benefits + image */}
          <div className="lg:col-span-7 space-y-10">
            {firstThree.map((benefit, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-sage flex items-center justify-center text-white text-lg font-bold mt-1">
                  {i + 1}
                </div>
                <p className="text-lg text-warm-brown leading-relaxed pt-2.5">
                  {benefit}
                </p>
              </div>
            ))}

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-12">
              <Image
                src="/images/amenity.jpg"
                alt="Chelsea at Longwood amenity space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* Right: remaining benefits, offset down */}
          <div className="lg:col-span-5 lg:pt-32 space-y-10">
            {lastFour.map((benefit, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-white text-lg font-bold mt-1">
                  {i + 4}
                </div>
                <p className="text-lg text-warm-brown leading-relaxed pt-2.5">
                  {benefit}
                </p>
              </div>
            ))}

            <a
              href="#register"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-terracotta text-white px-8 py-4 text-base font-semibold hover:bg-terracotta-dark transition-all hover:shadow-lg"
            >
              Register for Updates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
