import { LOCATION } from '@/lib/content';

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-[Georgia,serif]">
            {LOCATION.title}
          </h2>
          <p className="text-xl text-warm-gray">{LOCATION.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-5 mb-10">
              {LOCATION.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-navy mb-3">
                Getting Around
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Longwood is one of Nanaimo&rsquo;s most walkable and convenient
                neighbourhoods. With transit, shopping, dining, and healthcare
                all within easy reach, daily errands and social outings feel
                effortless.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-auto min-h-[400px]">
            <iframe
              title="Chelsea at Longwood location map"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${LOCATION.mapQuery}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
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
