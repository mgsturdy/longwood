'use client';

import { BOOK_SHOWING } from '@/lib/content';
import { track } from '@/lib/analytics';

export default function BookShowing() {
  const showBookShowing = process.env.NEXT_PUBLIC_SHOW_BOOK_SHOWING === 'true';
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  if (!showBookShowing) return null;

  return (
    <section id="book-showing" className="py-24 lg:py-32 bg-gold/10">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 font-[Georgia,serif] leading-tight">
          {BOOK_SHOWING.title}
        </h2>
        <p className="text-xl lg:text-2xl text-warm-gray mb-10 leading-relaxed max-w-2xl mx-auto">
          {BOOK_SHOWING.description}
        </p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('book_showing_click')}
          className="inline-block bg-navy text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-navy-light transition-colors shadow-md"
        >
          {BOOK_SHOWING.cta}
        </a>
      </div>
    </section>
  );
}
