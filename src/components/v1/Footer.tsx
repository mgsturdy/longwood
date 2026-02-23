import { FOOTER, SITE_NAME } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-2">{SITE_NAME}</h3>
            <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6">
              Opening Spring 2026
            </p>
            <p className="text-white/50 leading-relaxed text-base max-w-sm">
              {FOOTER.address}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${FOOTER.email}`} className="block text-white/70 hover:text-gold transition-colors">
                {FOOTER.email}
              </a>
              <a href={`tel:${FOOTER.phone.replace(/\./g, '')}`} className="block text-white/70 hover:text-gold transition-colors">
                {FOOTER.phone}
              </a>
            </div>
            <p className="text-white/30 text-sm mt-6 leading-relaxed">
              {FOOTER.propertyManager}
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-6">Navigate</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Why Rent', 'The Homes', 'Amenities', 'Location', 'Gallery', 'Register'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/\s/g, '')}`}
                  className="text-white/60 hover:text-gold transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <p className="text-white/25 text-xs leading-relaxed max-w-3xl">
            {FOOTER.disclaimer}
          </p>
          <p className="text-white/20 text-xs whitespace-nowrap">
            &copy; {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
