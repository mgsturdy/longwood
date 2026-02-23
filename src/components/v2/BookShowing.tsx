'use client';

import { BOOK_SHOWING } from '@/lib/content-v2';
import { track } from '@/lib/analytics';

export default function BookShowing() {
  const show = process.env.NEXT_PUBLIC_SHOW_BOOK_SHOWING === 'true';
  if (!show) return null;

  return (
    <section id="book-showing" className="bg-charcoal-v2 py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="accent-line mx-auto mb-8" />
        <h2 className="tracking-tight text-ivory">
          {BOOK_SHOWING.title}
        </h2>
        <p className="mx-auto mt-5 text-lg text-neutral-400">{BOOK_SHOWING.subtitle}</p>
        <p className="mx-auto mt-6 text-base leading-relaxed text-ivory/50">{BOOK_SHOWING.description}</p>
        <button
          onClick={() => track('book_showing_click')}
          className="mt-12 border border-copper bg-copper px-12 py-4.5 text-sm font-medium tracking-widest text-black-deep uppercase transition-all duration-500 hover:bg-copper-light hover:shadow-lg hover:shadow-copper/15"
        >
          {BOOK_SHOWING.cta}
        </button>
      </div>
    </section>
  );
}
