import { SITE_NAME, FOOTER } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream-v3" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-cream-v3/70 leading-relaxed">
              Modern 55+ rental living in the heart of Longwood, Nanaimo. Your next chapter starts here.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-cream-v3/80">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-terracotta-light flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${FOOTER.email}`} className="hover:text-cream-v3 transition-colors">
                  {FOOTER.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-terracotta-light flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={`tel:${FOOTER.phone.replace(/\./g, '')}`} className="hover:text-cream-v3 transition-colors">
                  {FOOTER.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-terracotta-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{FOOTER.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-cream-v3/80">
              {[
                { label: 'Homes', href: '#homes' },
                { label: 'Amenities', href: '#amenities' },
                { label: 'Location', href: '#location' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Register', href: '#register' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-cream-v3 transition-colors inline-flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-v3/15">
          <p className="text-sm text-cream-v3/60 mb-4">{FOOTER.propertyManager}</p>
          <p className="text-xs text-cream-v3/40 leading-relaxed max-w-4xl">
            {FOOTER.disclaimer}
          </p>
          <p className="mt-6 text-sm text-cream-v3/50">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
