import { LOCATION } from '@/lib/content';

export default function Location() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 font-[Georgia,serif] leading-tight">
            {LOCATION.title}
          </h2>
          <p className="text-xl lg:text-2xl text-warm-gray leading-relaxed">
            {LOCATION.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ul className="space-y-6 mb-12">
              {LOCATION.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal leading-relaxed pt-0.5">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-cream-dark/30">
              <h3 className="text-lg font-bold text-navy mb-3 font-[Georgia,serif]">
                Getting Around
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-base">
                {LOCATION.walkabilityNote}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[420px]">
            <iframe
              title="Chelsea at Longwood location map"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${LOCATION.mapQuery}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
