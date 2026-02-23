import { SITE_NAME, FOOTER } from '@/lib/content-v2';

export default function Footer() {
  return (
    <footer className="bg-black-deep py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-3">
          <div>
            <span className="text-lg font-semibold tracking-wide uppercase">
              <span className="text-copper">Chelsea</span>
              <span className="ml-1.5 font-light text-ivory/70">at Longwood</span>
            </span>
            <p className="mt-5 text-sm leading-relaxed text-ivory/35">
              Modern 55+ rental living in the heart of Longwood, Nanaimo. Opening Spring 2026.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-ivory/50">
              <li>
                <a
                  href={`mailto:${FOOTER.email}`}
                  className="transition-colors duration-300 hover:text-copper"
                >
                  {FOOTER.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER.phone.replace(/\./g, '')}`}
                  className="transition-colors duration-300 hover:text-copper"
                >
                  {FOOTER.phone}
                </a>
              </li>
              <li className="text-ivory/40">{FOOTER.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              Management
            </h3>
            <p className="text-sm text-ivory/50">{FOOTER.propertyManager}</p>
          </div>
        </div>

        <div className="mt-20 border-t border-ivory/8 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-ivory/25">
            {FOOTER.disclaimer}
          </p>
          <p className="mt-5 text-xs text-ivory/15">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
