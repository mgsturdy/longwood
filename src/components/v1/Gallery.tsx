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
    <section id="gallery" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14">
          <div className="w-12 h-1 bg-gold mb-8" />
          <h2 className="text-navy mb-6">
            {GALLERY.title}
          </h2>
          <p className="text-xl text-warm-gray leading-relaxed">
            {GALLERY.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                activeCategory === cat.value
                  ? 'bg-navy text-white'
                  : 'bg-cream text-charcoal hover:bg-cream-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <button
              key={img.src}
              onClick={() => openLightbox(img)}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
            </button>
          ))}
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
              className="w-full h-auto max-h-[85vh] object-contain"
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
