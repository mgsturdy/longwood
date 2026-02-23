'use client';

import { useEffect, useRef, useState } from 'react';
import { LOCATION } from '@/lib/content';
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
      className="bg-charcoal py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2
            className={`text-3xl font-light tracking-tight text-ivory sm:text-4xl lg:text-5xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {LOCATION.title}
          </h2>
          <p
            className={`mt-4 text-lg text-neutral-400 ${
              visible ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            {LOCATION.subtitle}
          </p>
        </div>

        <div
          className={`mt-16 grid gap-12 lg:grid-cols-2 ${
            visible ? 'animate-fade-up delay-200' : 'opacity-0'
          }`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-light">
            <iframe
              title="Chelsea at Longwood location map"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''}&q=${LOCATION.mapQuery}`}
              className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-6 text-sm tracking-wider text-copper uppercase">
              {LOCATION.address}
            </p>
            <ul className="space-y-4">
              {LOCATION.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-4 text-ivory/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-1 h-5 w-5 shrink-0 text-sage-v2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
