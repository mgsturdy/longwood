'use client';

import { BOOK_SHOWING } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function BookShowing() {
  const showBookShowing = process.env.NEXT_PUBLIC_SHOW_BOOK_SHOWING === 'true';

  if (!showBookShowing) return null;

  return (
    <section
      id="book-showing"
      className="py-24 lg:py-32 bg-cream-v3"
      aria-labelledby="book-showing-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-forest p-12 sm:p-16 lg:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sage/20 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sage/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="inline-block rounded-full bg-terracotta/20 px-4 py-1.5 text-sm font-semibold text-terracotta-light mb-8">
              Visit Us
            </span>
            <h2
              id="book-showing-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-v3 tracking-tight mb-5 leading-tight"
            >
              {BOOK_SHOWING.title}
            </h2>
            <p className="text-cream-v3/80 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              {BOOK_SHOWING.description}
            </p>
            <button
              onClick={() => track('book_showing_click')}
              className="inline-flex items-center gap-2.5 rounded-full bg-terracotta px-10 py-4.5 text-lg font-semibold text-white shadow-lg hover:bg-terracotta-dark transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              {BOOK_SHOWING.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
