'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HOMES } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function Homes() {
  const [activePlan, setActivePlan] = useState<string | null>(null);

  return (
    <section id="homes" className="py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div>
            <div className="w-12 h-1 bg-gold mb-8" />
            <h2 className="text-navy mb-6">{HOMES.title}</h2>
            <p className="text-xl text-warm-gray leading-relaxed mb-6">
              {HOMES.subtitle}
            </p>
            <p className="text-base text-charcoal/70 leading-relaxed">
              {HOMES.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {HOMES.features.slice(0, 8).map((feature, i) => (
              <div
                key={feature.label}
                className={`flex items-start gap-3 py-4 ${
                  i < 6 ? 'border-b border-cream-dark/30' : ''
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-navy mt-2.5 shrink-0" />
                <span className="text-charcoal text-base leading-snug">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floor plans — magazine spread style */}
        <div className="border-t border-cream-dark/40 pt-20">
          <h3 className="text-2xl lg:text-3xl text-navy mb-4 text-center">
            Explore Our Layouts
          </h3>
          <p className="text-warm-gray text-center mb-14 max-w-lg mx-auto">
            Two thoughtfully designed layouts, each crafted for comfort and ease.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {HOMES.floorPlans.map((plan) => (
              <div
                key={plan.id}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-64 lg:h-72">
                  <Image
                    src="/images/living-room.jpg"
                    alt={`${plan.name} layout preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <h4 className="text-white text-2xl mb-1">{plan.name}</h4>
                    <p className="text-white/70 text-sm">
                      {plan.bedrooms} Bedroom{plan.bedrooms > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  {plan.description && (
                    <p className="text-charcoal/70 leading-relaxed mb-6 italic text-base">
                      {plan.description}
                    </p>
                  )}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-charcoal text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setActivePlan(activePlan === plan.id ? null : plan.id);
                      track('floorplan_view', { plan: plan.id });
                    }}
                    className="w-full bg-navy text-white py-4 font-semibold hover:bg-navy-light transition-colors tracking-wide"
                  >
                    {activePlan === plan.id ? 'Close' : 'View Layout Details'}
                  </button>
                </div>
                {activePlan === plan.id && (
                  <div className="border-t border-cream-dark p-8 bg-cream/50 text-center">
                    <p className="text-warm-gray text-base italic leading-relaxed">
                      Detailed floor plans coming soon. Contact us for more information.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
