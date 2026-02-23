import Image from 'next/image';
import { AMENITIES } from '@/lib/content';

export default function Amenities() {
  return (
    <section id="amenities" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="w-12 h-1 bg-gold mb-8" />
            <h2 className="text-navy mb-6">
              {AMENITIES.title}
            </h2>
            <p className="text-xl text-charcoal mb-6 leading-relaxed">
              {AMENITIES.description}
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-12">
              {AMENITIES.placeholder}
            </p>
            <div className="border-l-2 border-gold pl-8">
              <p className="text-navy font-semibold mb-5 text-lg">
                Powered by our partnership with {AMENITIES.partnerName}
              </p>
              <ul className="space-y-4 text-warm-gray">
                {['Community amenity details', 'Exclusive resident benefits', 'Additional services'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {item} — coming soon
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-80 lg:h-[560px] overflow-hidden shadow-lg">
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
