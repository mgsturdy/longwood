export const SITE_NAME = 'Chelsea at Longwood';

export const HERO = {
  headline: 'Luxury Rental Living for Your Next Chapter',
  subheadline: 'Bright, comfortable homes in the heart of Longwood.',
  cta: 'Register for Updates',
  trustCues: ['Professionally managed', 'Opening Summer 2026'],
};

export const OVERVIEW = {
  title: 'A Simpler Way to Live',
  subtitle: 'You\'ve spent years taking care of a home. It may be time to let a home take care of you.',
  benefits: [
    'Leave strata meetings, repairs, and maintenance behind',
    'No strata fees or unexpected special levies',
    'Brand-new, move-in-ready homes — just bring what matters to you',
    'Lower financial risk and greater flexibility for your future',
  ],
};

export const HOMES = {
  title: 'The Homes',
  subtitle: 'Condo-quality living, designed for comfort',
  intro: 'Every detail has been considered — from the natural light that fills each room to the accessible layouts designed for ease and independence.',
  features: [
    { label: 'Condo-quality 1- and 2-bedroom homes', icon: 'home' },
    { label: 'Air conditioning', icon: 'wind' },
    { label: 'Modern kitchens with full appliances', icon: 'kitchen' },
    { label: 'Cozy fireplace', icon: 'flame' },
    { label: 'In-suite laundry', icon: 'laundry' },
    { label: 'Open, practical layouts', icon: 'layout' },
    { label: 'Large windows with natural light', icon: 'sun' },
    { label: 'Covered patios', icon: 'balcony' },
    { label: 'Large private balconies', icon: 'balcony' },
  ],
  floorPlans: [
    {
      id: '1br',
      name: 'One Bedroom',
      bedrooms: 1,
      description: 'A thoughtfully designed space that feels open, bright, and easy to call home.',
      features: [
        'Open-concept living & dining',
        'Modern kitchen with full appliances',
        'In-suite laundry',
        'Private balcony',
        'Covered patio',
      ],
    },
    {
      id: '2br',
      name: 'Two Bedroom',
      bedrooms: 2,
      description: 'Room for a home office, guest space, or simply more room to breathe.',
      features: [
        'Spacious open-concept layout',
        'Modern kitchen with full appliances',
        'In-suite laundry',
        'Private balcony',
        'Primary bedroom ensuite',
        'Covered patio',
      ],
    },
  ],
};

export const AMENITIES = {
  title: 'Amenities',
  partnerName: 'Origin',
  description:
    'Amenities thoughtfully designed to support comfort, connection, and ease — with full details to be announced.',
  placeholder:
    'We are carefully curating the amenities program in partnership with Origin to ensure every offering genuinely enhances your daily life. Full details will be shared soon.',
};

export const LOCATION = {
  title: 'Location & Neighbourhood',
  subtitle: 'Daily essentials and local favourites, just steps from your door.',
  address: '4775 Upland Drive, Nanaimo, BC V9T6L8',
  mapQuery: '4775+Upland+Drive+Nanaimo+BC+V9T6L8',
  highlights: [
    'Steps from Longwood Station — easy transit access when you want it',
    'Quality Foods, Thrifty Foods, restaurants, banking, and medical services within walking distance',
    'A peaceful, established neighbourhood with mature trees and quiet streets',
    'Walking paths and parks nearby for morning strolls or afternoon fresh air',
    'The kind of neighbourhood where independence, convenience, and community come naturally',
  ],
  walkabilityNote:
    'Longwood is one of Nanaimo\'s most walkable neighbourhoods — designed around the comfort of getting where you need to go, on your own terms.',
};

export const GALLERY = {
  title: 'Gallery',
  subtitle: 'A closer look at your future home',
  videoPlaceholder: 'Video walk-through — coming soon',
  soraPlaceholder:
    'Lifestyle video — coming soon',
  images: [
    {
      src: '/images/hero-view.jpg',
      alt: 'Chelsea at Longwood hero view rendering of the building exterior',
      category: 'building' as const,
      width: 2400,
      height: 1350,
    },
    {
      src: '/images/building-a.jpg',
      alt: 'Chelsea at Longwood Building A exterior rendering',
      category: 'building' as const,
      width: 2400,
      height: 1600,
    },
    {
      src: '/images/building-b.jpg',
      alt: 'Chelsea at Longwood Building B exterior rendering',
      category: 'building' as const,
      width: 2400,
      height: 1600,
    },
    {
      src: '/images/aerial-view.jpg',
      alt: 'Aerial view of Chelsea at Longwood and surrounding neighbourhood',
      category: 'neighbourhood' as const,
      width: 2400,
      height: 1350,
    },
    {
      src: '/images/living-room.jpg',
      alt: 'Bright, modern living room with large windows and natural light',
      category: 'interior' as const,
      width: 2400,
      height: 1600,
    },
    {
      src: '/images/kitchen-opt1.jpg',
      alt: 'Modern kitchen with contemporary finishes and full appliances',
      category: 'interior' as const,
      width: 2400,
      height: 1600,
    },
    {
      src: '/images/kitchen-opt2.jpg',
      alt: 'Alternate kitchen design with warm tones and modern cabinetry',
      category: 'interior' as const,
      width: 2400,
      height: 1600,
    },
    {
      src: '/images/ensuite.jpg',
      alt: 'Accessible ensuite bathroom with modern fixtures',
      category: 'interior' as const,
      width: 2400,
      height: 1600,
    },
    {
      src: '/images/pano-view.jpg',
      alt: 'Panoramic view from Chelsea at Longwood balcony',
      category: 'interior' as const,
      width: 2400,
      height: 960,
    },
    {
      src: '/images/pano-view-2.jpg',
      alt: 'Panoramic neighbourhood view with greenery and mountain backdrop',
      category: 'neighbourhood' as const,
      width: 2400,
      height: 1200,
    },
  ],
};

export const FORM = {
  title: 'Register for Updates',
  subtitle:
    'Be among the first to learn about availability, layouts, and move-in dates.',
  cta: 'Register for Updates',
  successTitle: 'Thank you for your interest.',
  successMessage:
    'We\'ve received your information and will be in touch soon with updates about Chelsea at Longwood. We look forward to welcoming you.',
  consentText: `By clicking on the box, I consent to Chelsea at Longwood marketing and leasing team to contact me via electronic and non-electronic means with messages such as newsletters, announcements, press releases and event invitations regarding their respective products and services. I consent to the collection, use and disclosure of my information submitted for the purposes disclosed on this page, including for electronic and non-electronic communications. I may withdraw my consent to electronic messages at any time by following the unsubscribe links contained in them.`,
  suiteOptions: [
    { value: '1BR', label: '1 Bedroom' },
    { value: '2BR', label: '2 Bedroom' },
  ],
  floorOptions: [
    { value: '1', label: 'Floor 1' },
    { value: '2', label: 'Floor 2' },
    { value: '3', label: 'Floor 3' },
    { value: '4', label: 'Floor 4' },
  ],
};

export const FOOTER = {
  email: 'info@chelsealiving.net',
  phone: '250.619.9500',
  propertyManager: 'Gulf Properties & Property Management Team',
  address: '4775 Upland Drive, Nanaimo, BC V9T6L8',
  disclaimer:
    'Please note that the floor plans, and photos are indicative only and may not represent the exact layout, size, design or inclusions of your chosen suite. Prices, incentives, availability and specifications are subject to change. Images may not reflect actual suite finishes. Pet restrictions may apply. E.&O.E',
};

export const BOOK_SHOWING = {
  title: 'Book a Showing',
  subtitle: 'See Chelsea at Longwood in person.',
  description:
    'Schedule a private tour and experience the quality and comfort of your future home.',
  cta: 'Book a Showing',
};
