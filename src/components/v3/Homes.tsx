'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HOMES } from '@/lib/content';
import { track } from '@/lib/analytics';
import type { FloorPlan } from '@/lib/types';

const featureIcons: Record<string, React.ReactNode> = {
  home: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  wind: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
  kitchen: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>,
  flame: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>,
  laundry: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>,
  layout: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
  sun: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
  accessible: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  balcony: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" /></svg>,
};

function FloorPlanCard({ plan }: { plan: FloorPlan }) {
  return (
    <div className="bg-cream-v3 border border-warm-gray-v3/40 overflow-hidden">
      <div className="bg-forest/5 px-8 py-6 border-b border-warm-gray-v3/30">
        <div className="flex items-baseline gap-4">
          <span className="text-3xl font-bold text-terracotta">{plan.bedrooms}</span>
          <div>
            <h4 className="text-xl text-forest">{plan.name}</h4>
            <p className="text-sm text-warm-brown/60">{plan.bedrooms} bedroom{plan.bedrooms > 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>
      <div className="px-8 py-6">
        {plan.description && (
          <p className="text-warm-brown/80 leading-relaxed mb-5 italic">
            {plan.description}
          </p>
        )}
        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2.5 shrink-0" />
              <span className="text-warm-brown">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Homes() {
  const [activePlan, setActivePlan] = useState<string>('1br');
  const selectedPlan = HOMES.floorPlans.find((p) => p.id === activePlan)!;

  return (
    <section id="homes" className="py-28 lg:py-40 bg-soft-white" aria-labelledby="homes-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 id="homes-heading" className="text-forest">
            {HOMES.title}
          </h2>
          <p className="mt-4 text-xl text-warm-brown/70 leading-relaxed">
            {HOMES.subtitle}
          </p>
          <p className="mt-4 text-base text-warm-brown/60 leading-relaxed max-w-2xl">
            {HOMES.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
              <Image
                src="/images/living-room.jpg"
                alt="Bright, modern living room with large windows"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="relative aspect-[4/3] overflow-hidden shadow-sm">
                <Image
                  src="/images/kitchen-opt1.jpg"
                  alt="Modern kitchen with contemporary finishes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden shadow-sm">
                <Image
                  src="/images/ensuite.jpg"
                  alt="Accessible ensuite bathroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-forest mb-2">Home Features</h3>
            <p className="text-warm-brown/60 text-sm mb-8">Every home includes</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-16">
              {HOMES.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 py-3 border-b border-warm-gray-v3/30"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-sage shrink-0">
                    {featureIcons[feature.icon] || featureIcons.home}
                  </div>
                  <span className="text-warm-brown text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-forest mb-2">Floor Plans</h3>
            <p className="text-warm-brown/60 text-sm mb-6">Select a layout to explore</p>
            <div className="flex gap-3 mb-6" role="tablist" aria-label="Floor plan selector">
              {HOMES.floorPlans.map((plan) => (
                <button
                  key={plan.id}
                  role="tab"
                  aria-selected={activePlan === plan.id}
                  onClick={() => {
                    setActivePlan(plan.id);
                    track('floorplan_view', { plan: plan.id });
                  }}
                  className={`px-6 py-3 text-sm font-semibold transition-all ${
                    activePlan === plan.id
                      ? 'bg-sage text-white'
                      : 'bg-warm-gray-v3 text-warm-brown hover:bg-warm-gray-dark'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
            <div role="tabpanel" aria-label={`${selectedPlan.name} floor plan details`}>
              <FloorPlanCard plan={selectedPlan} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
