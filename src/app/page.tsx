import Image from 'next/image';
import Link from 'next/link';

const VARIANTS = [
  {
    id: 'v1',
    title: 'Classic Trust',
    description:
      'Traditional leasing aesthetic. Navy, cream, and gold palette with strong hierarchy, big readable type, and minimal animation. Designed for clarity and confidence.',
    color: 'from-[#1B3A5C] to-[#112840]',
    accent: '#C5A55A',
    image: '/images/building-a.jpg',
  },
  {
    id: 'v2',
    title: 'Modern Premium',
    description:
      'Upscale condo-quality feel. Deep charcoal and copper palette with elegant transitions, masonry gallery, and refined iconography. Feels like high-end real estate marketing.',
    color: 'from-[#1A1A1A] to-[#0A0A0A]',
    accent: '#B8860B',
    image: '/images/hero-view.jpg',
  },
  {
    id: 'v3',
    title: 'Warm Community',
    description:
      'Lifestyle and community focused. Sage green and terracotta palette with rounded shapes, friendly microcopy, and a welcoming tone. Emphasizes neighbourhood and belonging.',
    color: 'from-[#2D4A2E] to-[#1a2e1b]',
    accent: '#C17A50',
    image: '/images/amenity.jpg',
  },
];

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="pt-16 pb-12 px-4 text-center">
        <p className="text-white/30 text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Studio 1299
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Previews
        </h1>
        <p className="text-white/40 text-base max-w-md mx-auto leading-relaxed">
          Three landing page concepts for Chelsea at Longwood. Click any card to view the full design.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {VARIANTS.map((v) => (
            <Link
              key={v.id}
              href={`/${v.id}`}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${v.color} opacity-60`} />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-sm"
                    style={{ backgroundColor: `${v.accent}CC` }}
                  >
                    Version {v.id.replace('v', '')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-white text-xl font-semibold mb-2 group-hover:text-white/90 transition-colors">
                  {v.title}
                </h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  {v.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-white/50 text-sm font-medium group-hover:text-white/70 transition-colors">
                  View full page
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center pb-10">
        <p className="text-white/20 text-xs">
          Confidential preview &mdash; Studio 1299
        </p>
      </footer>
    </div>
  );
}
