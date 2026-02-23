'use client';

import { useEffect, useRef, useState } from 'react';
import { LOCATION } from '@/lib/content-v2';
import { track } from '@/lib/analytics';

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          track('section_view', { section: 'location' });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="bg-charcoal-v2 py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2
            className={`tracking-tight text-ivory ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {LOCATION.title}
          </h2>
          <p
            className={`mx-auto mt-6 text-lg leading-relaxed text-neutral-400 ${
              visible ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            {LOCATION.subtitle}
          </p>
        </div>

        <div
          className={`mt-20 grid gap-14 lg:grid-cols-2 ${
            visible ? 'animate-fade-up delay-200' : 'opacity-0'
          }`}
        >
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              {LOCATION.sectionHeading}
            </p>
            <div className="relative aspect-[4/3] overflow-hidden border border-charcoal-light/50">
              <iframe
                title="Chelsea at Longwood location map"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''}&q=${LOCATION.mapQuery}`}
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-8 text-sm tracking-wider text-copper uppercase">
              {LOCATION.address}
            </p>
            <ul className="space-y-5">
              {LOCATION.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-4 text-ivory/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-1 h-5 w-5 shrink-0 text-sage-v2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            {LOCATION.walkabilityNote && (
              <div className="mt-10 border-l-2 border-copper/30 pl-6">
                <p className="text-sm leading-relaxed text-ivory/40 italic">
                  {LOCATION.walkabilityNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
