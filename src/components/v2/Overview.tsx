'use client';

import { useEffect, useRef, useState } from 'react';
import { OVERVIEW } from '@/lib/content-v2';
import { track } from '@/lib/analytics';

export default function Overview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          track('section_view', { section: 'overview' });
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="bg-ivory py-32 lg:py-44"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Editorial header */}
        <div
          className={`mb-24 lg:mb-32 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="accent-line mb-8" />
          <h2 className="tracking-tight text-black-deep max-w-lg">
            {OVERVIEW.title}
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-neutral-500 max-w-2xl">
            {OVERVIEW.subtitle}
          </p>
        </div>

        {/* Stacked editorial list */}
        <div className="space-y-0">
          {OVERVIEW.benefits.map((benefit, i) => (
            <div
              key={i}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-neutral-200/60 py-10 lg:py-14 ${
                visible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: visible ? `${(i + 1) * 100}ms` : undefined }}
            >
              <div className="lg:col-span-1">
                <span className="text-5xl font-extralight tabular-nums text-copper/40 group-hover:text-copper transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-medium tracking-tight text-black-deep group-hover:text-copper transition-colors duration-500">
                  {benefit.headline}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-relaxed text-neutral-500">
                  {benefit.detail}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-200/60" />
        </div>
      </div>
    </section>
  );
}
