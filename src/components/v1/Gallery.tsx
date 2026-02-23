'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY } from '@/lib/content';
import { track } from '@/lib/analytics';
import type { GalleryImage } from '@/lib/types';

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'building', label: 'Building' },
  { value: 'interior', label: 'Interiors' },
  { value: 'neighbourhood', label: 'Neighbourhood' },
  { value: 'amenity', label: 'Amenity' },
] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === 'all'
      ? GALLERY.images
      : GALLERY.images.filter((img) => img.category === activeCategory);

  const openLightbox = (img: GalleryImage) => {
    setLightboxImage(img);
    track('gallery_open', { image: img.src });
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 font-[Georgia,serif] leading-tight">
            {GALLERY.title}
          </h2>
          <p className="text-xl lg:text-2xl text-warm-gray leading-relaxed">
            {GALLERY.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 rounded-full text-base font-medium transition-colors ${
                activeCategory === cat.value
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-cream text-charcoal hover:bg-cream-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((img) => (
            <button
              key={img.src}
              onClick={() => openLightbox(img)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />
            </button>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          <div className="bg-cream rounded-xl p-10 text-center">
            <svg className="w-12 h-12 text-warm-gray mx-auto mb-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className="text-warm-gray text-lg">{GALLERY.videoPlaceholder}</p>
          </div>
          <div className="bg-cream rounded-xl p-10 text-center">
            <svg className="w-12 h-12 text-warm-gray mx-auto mb-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
            </svg>
            <p className="text-warm-gray text-lg">{GALLERY.soraPlaceholder}</p>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-8 right-8 text-white/80 hover:text-white z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={lightboxImage.width}
              height={lightboxImage.height}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/70 text-center mt-5 text-base">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
