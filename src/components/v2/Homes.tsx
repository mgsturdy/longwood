'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HOMES } from '@/lib/content-v2';
import { track } from '@/lib/analytics';

function FeatureIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1',
    wind: 'M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2',
    kitchen: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    flame: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
    laundry: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    layout: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z',
    sun: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    accessible: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
    balcony: 'M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11',
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 shrink-0" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[icon] || paths.home} />
    </svg>
  );
}

export default function Homes() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activePlan, setActivePlan] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          track('section_view', { section: 'homes' });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const plan = HOMES.floorPlans[activePlan];

  return (
    <section
      ref={sectionRef}
      id="homes"
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
            {HOMES.title}
          </h2>
          <p
            className={`mx-auto mt-4 text-lg text-neutral-400 ${
              visible ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            {HOMES.subtitle}
          </p>
          <p
            className={`mx-auto mt-6 text-base leading-relaxed text-ivory/50 ${
              visible ? 'animate-fade-up delay-200' : 'opacity-0'
            }`}
          >
            {HOMES.intro}
          </p>
        </div>

        <div
          className={`mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
            visible ? 'animate-fade-up delay-300' : 'opacity-0'
          }`}
        >
          {HOMES.features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-4 border border-charcoal-light/80 bg-charcoal-light/30 p-6 transition-all duration-500 hover:border-copper/20 hover:bg-charcoal-light/50"
            >
              <span className="text-copper">
                <FeatureIcon icon={feature.icon} />
              </span>
              <span className="text-base text-ivory/70">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="section-divider my-20" />

        <div
          className={`${visible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: visible ? '400ms' : undefined }}
        >
          <h3 className="mb-10 text-center text-sm font-medium tracking-[0.2em] text-copper uppercase">
            Choose Your Home
          </h3>

          <div className="mx-auto flex max-w-sm justify-center gap-4">
            {HOMES.floorPlans.map((fp, i) => (
              <button
                key={fp.id}
                onClick={() => {
                  setActivePlan(i);
                  track('floorplan_view', { plan: fp.id });
                }}
                className={`flex-1 border px-6 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-500 ${
                  activePlan === i
                    ? 'border-copper bg-copper text-black-deep'
                    : 'border-charcoal-light text-ivory/50 hover:border-copper/40 hover:text-ivory'
                }`}
              >
                {fp.name}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-charcoal-light/50">
              <Image
                src="/images/living-room.jpg"
                alt={`${plan.name} layout preview`}
                fill
                className="object-cover opacity-80 transition-all duration-700 hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-black-deep/80 px-3 py-1.5 text-xs tracking-wider text-ivory/60 uppercase backdrop-blur-sm">
                  Sample layout — details coming soon
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-light tracking-tight text-ivory">{plan.name}</h4>
              <p className="mt-1.5 text-sm tracking-wider text-copper uppercase">
                {plan.bedrooms} {plan.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
              </p>
              {plan.description && (
                <p className="mt-4 text-base leading-relaxed text-ivory/50">
                  {plan.description}
                </p>
              )}
              <ul className="mt-8 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ivory/60">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-copper">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className="mt-10 inline-block w-fit border border-copper px-10 py-3.5 text-sm font-medium tracking-wider text-copper uppercase transition-all duration-500 hover:bg-copper hover:text-black-deep hover:shadow-lg hover:shadow-copper/10"
              >
                Register Interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
