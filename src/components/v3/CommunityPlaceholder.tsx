export default function CommunityPlaceholder() {
  return (
    <section
      id="community"
      className="py-28 lg:py-40 bg-soft-white"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="community-heading"
          className="text-forest"
        >
          What Residents Love
        </h2>
        <p className="mt-6 text-xl text-warm-brown/70 max-w-2xl mx-auto leading-relaxed">
          We&apos;re gathering stories from our future community — the moments, details, and reasons that make this feel like home.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-warm-gray-v3/40 bg-cream-v3/50 p-10"
              aria-hidden="true"
            >
              <div className="w-14 h-14 bg-warm-gray-v3/40 mx-auto mb-5" />
              <div className="h-4 bg-warm-gray-v3/30 w-3/4 mx-auto mb-3" />
              <div className="h-4 bg-warm-gray-v3/20 w-1/2 mx-auto mb-3" />
              <div className="h-3 bg-warm-gray-v3/15 w-1/3 mx-auto" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-warm-brown/50 text-sm">
          Real testimonials coming soon
        </p>
      </div>
    </section>
  );
}
