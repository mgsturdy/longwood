import { SITE_NAME, FOOTER } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream-v3" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <h3 className="text-2xl mb-2">{SITE_NAME}</h3>
            <p className="text-terracotta-light tracking-[0.2em] uppercase text-xs font-medium mb-6">
              Opening Summer 2026
            </p>
            <p className="text-cream-v3/60 leading-relaxed max-w-sm">
              Modern 55+ rental living in the heart of Longwood, Nanaimo. Your next chapter starts here.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-v3/40 font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-cream-v3/70">
              <li>
                <a href={`mailto:${FOOTER.email}`} className="hover:text-cream-v3 transition-colors">
                  {FOOTER.email}
                </a>
              </li>
              <li>
                <a href={`tel:${FOOTER.phone.replace(/\./g, '')}`} className="hover:text-cream-v3 transition-colors">
                  {FOOTER.phone}
                </a>
              </li>
              <li className="pt-2 text-cream-v3/50">{FOOTER.address}</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-v3/40 font-semibold mb-6">Navigate</h4>
            <div className="grid grid-cols-2 gap-3 text-cream-v3/70">
              {[
                { label: 'Homes', href: '#homes' },
                { label: 'Amenities', href: '#amenities' },
                { label: 'Location', href: '#location' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Register', href: '#register' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-cream-v3 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-cream-v3/10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-cream-v3/40 text-sm mb-4">{FOOTER.propertyManager}</p>
            <p className="text-xs text-cream-v3/25 leading-relaxed max-w-3xl">
              {FOOTER.disclaimer}
            </p>
          </div>
          <p className="text-cream-v3/20 text-xs whitespace-nowrap">
            &copy; {currentYear} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
