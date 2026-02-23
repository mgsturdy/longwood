'use client';

import { BOOK_SHOWING } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function BookShowing() {
  const showBookShowing = process.env.NEXT_PUBLIC_SHOW_BOOK_SHOWING === 'true';
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  if (!showBookShowing) return null;

  return (
    <section id="book-showing" className="py-16 lg:py-20 bg-gold/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-[Georgia,serif]">
          {BOOK_SHOWING.title}
        </h2>
        <p className="text-xl text-warm-gray mb-8 leading-relaxed">
          {BOOK_SHOWING.description}
        </p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('book_showing_click')}
          className="inline-block bg-navy text-white px-8 py-4 rounded text-lg font-bold hover:bg-navy-light transition-colors"
        >
          {BOOK_SHOWING.cta}
        </a>
      </div>
    </section>
  );
}
