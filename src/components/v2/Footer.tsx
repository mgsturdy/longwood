import { SITE_NAME, FOOTER } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-black-deep py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <span className="text-lg font-semibold tracking-wide uppercase">
              <span className="text-copper">Chelsea</span>
              <span className="ml-1 font-light text-ivory/80">at Longwood</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-ivory/40">
              {SITE_NAME} — Modern 55+ rental living in the heart of Longwood, Nanaimo.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li>
                <a
                  href={`mailto:${FOOTER.email}`}
                  className="transition-colors hover:text-copper"
                >
                  {FOOTER.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER.phone.replace(/\./g, '')}`}
                  className="transition-colors hover:text-copper"
                >
                  {FOOTER.phone}
                </a>
              </li>
              <li>{FOOTER.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-copper uppercase">
              Management
            </h3>
            <p className="text-sm text-ivory/60">{FOOTER.propertyManager}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-8">
          <p className="text-xs leading-relaxed text-ivory/30">
            {FOOTER.disclaimer}
          </p>
          <p className="mt-4 text-xs text-ivory/20">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
