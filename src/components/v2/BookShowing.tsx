'use client';

import { BOOK_SHOWING } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function BookShowing() {
  const show = process.env.NEXT_PUBLIC_SHOW_BOOK_SHOWING === 'true';
  if (!show) return null;

  return (
    <section id="book-showing" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="accent-line mx-auto mb-6" />
        <h2 className="text-3xl font-light tracking-tight text-ivory sm:text-4xl lg:text-5xl">
          {BOOK_SHOWING.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-400">{BOOK_SHOWING.subtitle}</p>
        <p className="mt-6 text-base text-ivory/60">{BOOK_SHOWING.description}</p>
        <button
          onClick={() => track('book_showing_click')}
          className="mt-10 border border-copper bg-copper px-10 py-4 text-sm font-medium tracking-widest text-black-deep uppercase transition-all duration-300 hover:bg-copper-light"
        >
          {BOOK_SHOWING.cta}
        </button>
      </div>
    </section>
  );
}
