'use client';

import { BOOK_SHOWING } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function BookShowing() {
  const showBookShowing = process.env.NEXT_PUBLIC_SHOW_BOOK_SHOWING === 'true';

  if (!showBookShowing) return null;

  return (
    <section
      id="book-showing"
      className="py-28 lg:py-36 bg-forest"
      aria-labelledby="book-showing-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="book-showing-heading"
          className="text-cream-v3 mb-6"
        >
          {BOOK_SHOWING.title}
        </h2>
        <p className="text-cream-v3/70 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          {BOOK_SHOWING.description}
        </p>
        <button
          onClick={() => track('book_showing_click')}
          className="inline-flex items-center gap-2.5 bg-terracotta px-10 py-4.5 text-lg font-semibold text-white shadow-lg hover:bg-terracotta-dark transition-all hover:-translate-y-0.5 rounded-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          {BOOK_SHOWING.cta}
        </button>
      </div>
    </section>
  );
}
