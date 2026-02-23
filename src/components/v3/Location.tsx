import { LOCATION } from '@/lib/content';

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-soft-white" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-terracotta/10 px-4 py-1.5 text-sm font-semibold text-terracotta mb-4">
            Your Neighbourhood
          </span>
          <h2 id="location-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest tracking-tight">
            {LOCATION.title}
          </h2>
          <p className="mt-4 text-lg text-warm-brown/80">
            {LOCATION.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-warm-gray-v3/50">
              <iframe
                title="Chelsea at Longwood location on Google Maps"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${LOCATION.mapQuery}&zoom=15`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="mt-4 flex items-center gap-3 text-warm-brown">
              <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-medium">{LOCATION.address}</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-forest mb-6">
              Life in Longwood
            </h3>
            <div className="space-y-4">
              {LOCATION.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl bg-cream-v3 p-5 border border-warm-gray-v3/30"
                >
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-warm-brown font-medium leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>

            <a
              href="#register"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-3.5 text-white font-semibold shadow-sm hover:bg-terracotta-dark transition-all hover:shadow-md"
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
