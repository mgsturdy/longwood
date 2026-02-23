import { FOOTER, SITE_NAME } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-[Georgia,serif]">{SITE_NAME}</h3>
            <p className="text-gold text-sm font-medium tracking-wide mb-5">
              Opening Spring 2026
            </p>
            <p className="text-white/60 leading-relaxed">{FOOTER.address}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Contact</h3>
            <div className="space-y-3">
              <p>
                <a href={`mailto:${FOOTER.email}`} className="text-white/70 hover:text-gold transition-colors">
                  {FOOTER.email}
                </a>
              </p>
              <p>
                <a href={`tel:${FOOTER.phone.replace(/\./g, '')}`} className="text-white/70 hover:text-gold transition-colors">
                  {FOOTER.phone}
                </a>
              </p>
            </div>
            <p className="text-white/40 text-sm mt-5 leading-relaxed">
              {FOOTER.propertyManager}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              <a href="#overview" className="block text-white/70 hover:text-gold transition-colors">Why Rent</a>
              <a href="#homes" className="block text-white/70 hover:text-gold transition-colors">The Homes</a>
              <a href="#amenities" className="block text-white/70 hover:text-gold transition-colors">Amenities</a>
              <a href="#location" className="block text-white/70 hover:text-gold transition-colors">Location</a>
              <a href="#gallery" className="block text-white/70 hover:text-gold transition-colors">Gallery</a>
              <a href="#register" className="block text-white/70 hover:text-gold transition-colors">Register</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <p className="text-white/35 text-xs leading-relaxed max-w-4xl mb-6">
            {FOOTER.disclaimer}
          </p>
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
