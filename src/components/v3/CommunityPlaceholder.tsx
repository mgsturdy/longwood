export default function CommunityPlaceholder() {
  return (
    <section
      id="community"
      className="py-20 sm:py-28 bg-soft-white"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block rounded-full bg-sage/10 px-4 py-1.5 text-sm font-semibold text-sage mb-4">
          Coming Soon
        </span>
        <h2
          id="community-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest tracking-tight"
        >
          What Residents Love
        </h2>
        <p className="mt-4 text-lg text-warm-brown/80 max-w-2xl mx-auto">
          We&apos;re gathering stories from our future community. Check back soon.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-dashed border-sage/25 bg-cream-v3/50 p-8"
              aria-hidden="true"
            >
              <div className="w-16 h-16 rounded-full bg-warm-gray-v3/50 mx-auto mb-4" />
              <div className="h-4 bg-warm-gray-v3/40 rounded-full w-3/4 mx-auto mb-3" />
              <div className="h-4 bg-warm-gray-v3/30 rounded-full w-1/2 mx-auto mb-3" />
              <div className="h-3 bg-warm-gray-v3/20 rounded-full w-1/3 mx-auto" />
            </div>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-sage/10 px-5 py-2.5 text-sage font-medium">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Placeholder — real testimonials coming soon</span>
        </div>
      </div>
    </section>
  );
}
