import Image from 'next/image';
import { AMENITIES } from '@/lib/content';

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 font-[Georgia,serif] leading-tight">
              {AMENITIES.title}
            </h2>
            <p className="text-xl text-charcoal mb-6 leading-relaxed">
              {AMENITIES.description}
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-10">
              {AMENITIES.placeholder}
            </p>
            <div className="bg-cream rounded-xl p-8 border-l-4 border-gold">
              <p className="text-navy font-semibold mb-4 text-lg">
                Powered by our partnership with {AMENITIES.partnerName}
              </p>
              <ul className="space-y-3 text-warm-gray">
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-gold rounded-full flex-shrink-0" />
                  Community amenity details — coming soon
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-gold rounded-full flex-shrink-0" />
                  Exclusive resident benefits — coming soon
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-gold rounded-full flex-shrink-0" />
                  Additional services — coming soon
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-80 lg:h-[520px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/amenity.jpg"
              alt="Chelsea at Longwood amenity space rendering"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
