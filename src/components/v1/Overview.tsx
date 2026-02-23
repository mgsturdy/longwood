import { OVERVIEW } from '@/lib/content';

export default function Overview() {
  return (
    <section id="overview" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-[Georgia,serif]">
            {OVERVIEW.title}
          </h2>
          <p className="text-xl text-warm-gray">
            {OVERVIEW.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {OVERVIEW.benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-cream rounded-lg"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-charcoal leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
