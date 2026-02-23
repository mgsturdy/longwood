import Image from 'next/image';
import { AMENITIES } from '@/lib/content';

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-cream-v3" aria-labelledby="amenities-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-sage/10 px-4 py-1.5 text-sm font-semibold text-sage mb-5">
              Community Living
            </span>
            <h2 id="amenities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest tracking-tight leading-tight">
              {AMENITIES.title}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-warm-brown/80 leading-relaxed">
              {AMENITIES.description}
            </p>

            <div className="mt-10 rounded-2xl bg-soft-white border-2 border-dashed border-sage/30 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest mb-2">
                    Powered by {AMENITIES.partnerName}
                  </h3>
                  <p className="text-warm-brown/80 leading-relaxed">
                    {AMENITIES.placeholder}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/amenity.jpg"
              alt="Chelsea at Longwood amenity space rendering"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
