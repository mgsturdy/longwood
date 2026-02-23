import { LOCATION } from '@/lib/content';

export default function Location() {
  return (
    <section id="location" className="py-28 lg:py-40 bg-soft-white" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 id="location-heading" className="text-forest">
            {LOCATION.title}
          </h2>
          <p className="mt-6 text-xl text-warm-brown/70 leading-relaxed">
            {LOCATION.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="overflow-hidden shadow-lg h-80 lg:h-auto min-h-[460px]">
            <iframe
              title="Chelsea at Longwood location on Google Maps"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${LOCATION.mapQuery}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '460px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          <div>
            <h3 className="text-forest mb-8">Life in Longwood</h3>
            <div className="space-y-0">
              {LOCATION.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 py-5 border-b border-warm-gray-v3/40 last:border-b-0"
                >
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta mt-3" />
                  <p className="text-warm-brown leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-sage pl-8">
              <h4 className="text-forest mb-2">Getting Around</h4>
              <p className="text-warm-brown/70 leading-relaxed text-base italic">
                {LOCATION.walkabilityNote}
              </p>
            </div>

            <a
              href="#register"
              className="mt-10 inline-flex items-center gap-2 bg-terracotta px-8 py-4 text-white font-semibold hover:bg-terracotta-dark transition-all rounded-sm"
            >
              Join Our Community
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
