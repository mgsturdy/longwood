import Image from 'next/image';
import { AMENITIES } from '@/lib/content';

export default function Amenities() {
  return (
    <section id="amenities" className="py-28 lg:py-40 bg-cream-v3" aria-labelledby="amenities-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 id="amenities-heading" className="text-forest">
              {AMENITIES.title}
            </h2>
            <p className="mt-6 text-xl text-warm-brown/70 leading-relaxed">
              {AMENITIES.description}
            </p>

            <div className="mt-12 border-l-2 border-terracotta pl-8">
              <p className="text-forest font-semibold text-lg mb-4">
                Powered by {AMENITIES.partnerName}
              </p>
              <p className="text-warm-brown/70 leading-relaxed">
                {AMENITIES.placeholder}
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
            <Image
              src="/images/amenity.jpg"
              alt="Chelsea at Longwood amenity space rendering"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
