export const SITE_NAME = 'Chelsea at Longwood';

export const HERO = {
  headline: 'Modern Rental Living for Your Next Chapter',
  subheadline: 'Bright, comfortable homes in the heart of Longwood.',
  cta: 'Register for Updates',
  trustCues: ['Professionally managed', '55+ friendly living'],
};

export const OVERVIEW = {
  title: 'Why Chelsea at Longwood',
  subtitle: 'Key Benefits of Renting (vs. Owning)',
  benefits: [
    'No strata meetings, repairs, or maintenance',
    'No strata fees or special levies',
    'Brand-new, move-in-ready homes',
    'Built-in community',
    'Lower financial risk & greater flexibility',
    'Peace of mind for downsizers or retirees who want simplicity and comfort',
    'Professionally managed',
  ],
};

export const HOMES = {
  title: 'The Homes',
  subtitle: 'Condo-quality living, designed for comfort',
  features: [
    { label: 'Condo-quality 1- and 2-bedroom homes', icon: 'home' },
    { label: 'Air conditioning', icon: 'wind' },
    { label: 'Modern kitchens', icon: 'kitchen' },
    { label: 'Fireplace', icon: 'flame' },
    { label: 'In-suite laundry', icon: 'laundry' },
    { label: 'Open, practical layouts', icon: 'layout' },
    { label: 'Large windows with natural light', icon: 'sun' },
    { label: 'Accessible bathrooms', icon: 'accessible' },
    { label: 'Large private balconies', icon: 'balcony' },
  ],
  floorPlans: [
    {
      id: '1br',
      name: 'One Bedroom',
      bedrooms: 1,
      features: [
        'Open-concept living & dining',
        'Modern kitchen with full appliances',
        'In-suite laundry',
        'Private balcony',
        'Accessible bathroom',
      ],
    },
    {
      id: '2br',
      name: 'Two Bedroom',
      bedrooms: 2,
      features: [
        'Spacious open-concept layout',
        'Modern kitchen with full appliances',
        'In-suite laundry',
        'Private balcony',
        'Primary bedroom ensuite',
        'Accessible bathroom',
      ],
    },
  ],
};

export const AMENITIES = {
  title: 'Amenities',
  partnerName: 'Origin',
  description:
    'Amenities powered by our partnership with Origin — details coming soon.',
  placeholder:
    'We are finalizing our full amenities program with Origin. Check back soon for updates on the exclusive benefits available to Chelsea at Longwood residents.',
};

export const LOCATION = {
  title: 'Location & Neighbourhood',
  subtitle: 'Everything you need, steps from your door',
  address: '4775 Upland Drive, Nanaimo, BC V9T6L8',
  mapQuery: '4775+Upland+Drive+Nanaimo+BC+V9T6L8',
  highlights: [
    'Steps from Longwood Station',
    'Walkable access to Quality Foods, Thrifty Foods, restaurants, banking, medical services, and cafés',
    'Peaceful, established neighbourhood',
    'Nearby walking paths and parks',
    'Ideal for comfort, convenience, and community',
  ],
};

export const GALLERY = {
  title: 'Gallery',
  subtitle: 'See your future home',
  videoPlaceholder: 'Drone / lifestyle / interior walk-through — coming soon',
  soraPlaceholder:
    'Sora-generated video of people biking, walking, and socializing — coming soon',
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
      src: '/images/amenity.jpg',
      alt: 'Chelsea at Longwood amenity space rendering',
      category: 'amenity' as const,
      width: 2400,
      height: 1600,
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
      category: 'neighbourhood' as const,
      width: 2400,
      height: 1200,
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
    'Be the first to know about availability, layouts, and move-in dates.',
  cta: 'Register for Updates',
  successTitle: 'Thank you for registering!',
  successMessage:
    "We've received your information and will be in touch soon with updates about Chelsea at Longwood.",
  consentText: `By clicking on the box, I consent to Chelsea at Longwood marketing and leasing team to contact me via electronic and non-electronic means with messages such as newsletters, announcements, press releases and event invitations regarding their respective products and services. I consent to the collection, use and disclosure of my information submitted for the purposes disclosed on this page, including for electronic and non-electronic communications. I may withdraw my consent to electronic messages at any time by following the unsubscribe links contained in them. Gulf Development Inc's contact details are [Address].`,
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
  email: 'info@askgreta.com',
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
