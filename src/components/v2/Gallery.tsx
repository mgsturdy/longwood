'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { GALLERY } from '@/lib/content-v2';
import { track } from '@/lib/analytics';
import type { GalleryImage } from '@/lib/types';

const CATEGORIES = ['all', 'building', 'interior', 'neighbourhood', 'amenity'] as const;

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          track('section_view', { section: 'gallery' });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered: GalleryImage[] =
    activeFilter === 'all'
      ? GALLERY.images
      : GALLERY.images.filter((img) => img.category === activeFilter);

  const openLightbox = useCallback((index: number) => {
    setLightbox(index);
    track('gallery_open', { image: filtered[index]?.src });
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigateLightbox = useCallback(
    (direction: 1 | -1) => {
      if (lightbox === null) return;
      setLightbox((lightbox + direction + filtered.length) % filtered.length);
    },
    [lightbox, filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightbox, closeLightbox, navigateLightbox]);

  return (
    <section ref={sectionRef} id="gallery" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2
            className={`tracking-tight text-black-deep ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {GALLERY.title}
          </h2>
          <p
            className={`mx-auto mt-6 text-lg text-neutral-600 ${
              visible ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            {GALLERY.subtitle}
          </p>
        </div>

        <div
          className={`mt-12 flex flex-wrap justify-center gap-3 ${
            visible ? 'animate-fade-up delay-200' : 'opacity-0'
          }`}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-500 ${
                activeFilter === cat
                  ? 'bg-copper text-black-deep'
                  : 'border border-neutral-200 text-neutral-500 hover:border-copper/40 hover:text-copper'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div
          className={`mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 ${
            visible ? 'animate-fade-up delay-300' : 'opacity-0'
          }`}
        >
          {filtered.map((image, i) => (
            <button
              key={image.src}
              onClick={() => openLightbox(i)}
              className="group mb-5 block w-full overflow-hidden break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              aria-label={`View ${image.alt}`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black-deep/0 transition-all duration-500 group-hover:bg-black-deep/15" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center bg-copper/90 text-black-deep backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black-deep/95 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-10 text-ivory/60 transition-colors duration-300 hover:text-ivory"
            aria-label="Close lightbox"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-2 text-ivory/40 transition-colors duration-300 hover:text-ivory"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-2 text-ivory/40 transition-colors duration-300 hover:text-ivory"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={filtered[lightbox].width}
              height={filtered[lightbox].height}
              className="max-h-[85vh] w-auto object-contain animate-scale-in"
              sizes="90vw"
              priority
            />
            <p className="mt-4 text-center text-sm text-ivory/40">
              {filtered[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
