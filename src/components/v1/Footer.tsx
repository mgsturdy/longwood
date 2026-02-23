import { FOOTER, SITE_NAME } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 font-[Georgia,serif]">{SITE_NAME}</h3>
            <p className="text-white/60 leading-relaxed">{FOOTER.address}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-white/70 mb-2">
              <a href={`mailto:${FOOTER.email}`} className="hover:text-gold transition-colors">
                {FOOTER.email}
              </a>
            </p>
            <p className="text-white/70 mb-4">
              <a href={`tel:${FOOTER.phone.replace(/\./g, '')}`} className="hover:text-gold transition-colors">
                {FOOTER.phone}
              </a>
            </p>
            <p className="text-white/50 text-sm">{FOOTER.propertyManager}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              <a href="#overview" className="block text-white/70 hover:text-gold transition-colors">Why Rent</a>
              <a href="#homes" className="block text-white/70 hover:text-gold transition-colors">The Homes</a>
              <a href="#amenities" className="block text-white/70 hover:text-gold transition-colors">Amenities</a>
              <a href="#location" className="block text-white/70 hover:text-gold transition-colors">Location</a>
              <a href="#gallery" className="block text-white/70 hover:text-gold transition-colors">Gallery</a>
              <a href="#register" className="block text-white/70 hover:text-gold transition-colors">Register</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm leading-relaxed max-w-4xl">
            {FOOTER.disclaimer}
          </p>
          <p className="text-white/30 text-sm mt-4">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
