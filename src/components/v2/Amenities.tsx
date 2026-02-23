'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AMENITIES } from '@/lib/content-v2';
import { track } from '@/lib/analytics';

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          track('section_view', { section: 'amenities' });
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
      id="amenities"
      className="bg-ivory py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div
            className={`relative aspect-[4/3] overflow-hidden ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <Image
              src="/images/amenity.jpg"
              alt="Chelsea at Longwood amenity space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-deep/20 to-transparent" />
          </div>

          <div
            className={visible ? 'animate-fade-up delay-200' : 'opacity-0'}
          >
            <div className="accent-line mb-8" />
            <h2 className="tracking-tight text-black-deep">
              {AMENITIES.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              {AMENITIES.description}
            </p>

            <div className="mt-10 border border-neutral-200/80 bg-white p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 items-center justify-center bg-copper/10 text-copper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium tracking-wider text-copper uppercase">
                  Powered by {AMENITIES.partnerName}
                </span>
              </div>
              <p className="text-base leading-relaxed text-neutral-500">
                {AMENITIES.placeholder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
