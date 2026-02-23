import { LOCATION } from '@/lib/content';

export default function Location() {
  return (
    <section id="location" className="py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="w-12 h-1 bg-gold mb-8" />
          <h2 className="text-navy mb-6">
            {LOCATION.title}
          </h2>
          <p className="text-xl text-warm-gray leading-relaxed">
            {LOCATION.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-0">
              {LOCATION.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-5 py-5 border-b border-cream-dark/40 last:border-b-0">
                  <span className="shrink-0 w-1.5 h-1.5 bg-navy rounded-full mt-3" />
                  <p className="text-lg text-charcoal leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-gold pl-8">
              <h3 className="text-navy mb-3">Getting Around</h3>
              <p className="text-charcoal/70 leading-relaxed text-base">
                {LOCATION.walkabilityNote}
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-lg h-80 lg:h-auto min-h-[460px]">
            <iframe
              title="Chelsea at Longwood location map"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${LOCATION.mapQuery}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '460px' }}
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
