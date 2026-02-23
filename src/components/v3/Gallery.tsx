'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { GALLERY } from '@/lib/content';
import { track } from '@/lib/analytics';
import type { GalleryImage } from '@/lib/types';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'building', label: 'Building' },
  { value: 'interior', label: 'Interior' },
  { value: 'neighbourhood', label: 'Neighbourhood' },
  { value: 'amenity', label: 'Amenity' },
] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === 'all'
      ? GALLERY.images
      : GALLERY.images.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((img: GalleryImage) => {
    setLightboxImage(img);
    track('gallery_open', { image: img.src });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: 1 | -1) => {
      if (!lightboxImage) return;
      const idx = filtered.findIndex((img) => img.src === lightboxImage.src);
      const nextIdx = (idx + direction + filtered.length) % filtered.length;
      setLightboxImage(filtered[nextIdx]);
    },
    [lightboxImage, filtered],
  );

  return (
    <section id="gallery" className="py-28 lg:py-40 bg-cream-v3" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 id="gallery-heading" className="text-forest">
            {GALLERY.title}
          </h2>
          <p className="mt-5 text-xl text-warm-brown/70 leading-relaxed">{GALLERY.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Gallery filter">
          {categories.map((cat) => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={activeCategory === cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === cat.value
                  ? 'bg-sage text-white'
                  : 'bg-warm-gray-v3 text-warm-brown hover:bg-warm-gray-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <button
              key={img.src}
              onClick={() => openLightbox(img)}
              className="group relative aspect-[4/3] overflow-hidden shadow-sm hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-sage/30"
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-soft-white border border-warm-gray-v3/40 p-10 text-center">
            <svg className="w-10 h-10 mx-auto text-warm-brown/30 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="text-warm-brown/60 font-medium">{GALLERY.videoPlaceholder}</p>
          </div>
          <div className="bg-soft-white border border-warm-gray-v3/40 p-10 text-center">
            <svg className="w-10 h-10 mx-auto text-warm-brown/30 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            <p className="text-warm-brown/60 font-medium">{GALLERY.soraPlaceholder}</p>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-forest/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={lightboxImage.width}
              height={lightboxImage.height}
              className="object-contain w-full h-auto max-h-[85vh]"
              sizes="90vw"
            />
            <p className="text-center text-white/80 mt-4 text-sm">{lightboxImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
