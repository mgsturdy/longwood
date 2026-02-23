import {
  HERO as BASE_HERO,
  FORM as BASE_FORM,
  FOOTER,
  BOOK_SHOWING,
  GALLERY as BASE_GALLERY,
} from './content';

export { FOOTER, BOOK_SHOWING };
export { SITE_NAME } from './content';

export const HERO = {
  ...BASE_HERO,
  trustCues: ['Professionally managed', '55+ friendly living', 'Opening Spring 2026'],
};

export const OVERVIEW = {
  title: 'A Simpler Way to Live',
  subtitle:
    'You\'ve spent years taking care of a home. It may be time to let a home take care of you.',
  benefits: [
    {
      headline: 'Leave strata meetings behind',
      detail: 'No more unexpected levies, repair votes, or maintenance schedules. That responsibility is ours now.',
    },
    {
      headline: 'Predictable monthly costs',
      detail: 'No strata fees, no special assessments, no surprise repairs. One clear monthly rent — that\'s it.',
    },
    {
      headline: 'Brand-new and move-in ready',
      detail: 'Everything is new, modern, and thoughtfully finished. Just bring what matters to you.',
    },
    {
      headline: 'A built-in community',
      detail: 'Neighbours who share your values and your stage of life — without the obligations of a strata council.',
    },
    {
      headline: 'Financial flexibility',
      detail: 'Free up the equity in your current home. Enjoy greater liquidity and lower risk.',
    },
    {
      headline: 'Peace of mind',
      detail: 'For downsizers and retirees who want simplicity, comfort, and the freedom to simply enjoy life.',
    },
    {
      headline: 'Professionally managed',
      detail: 'A dedicated management team handles everything — so you don\'t have to think about it.',
    },
  ],
};

export const HOMES = {
  title: 'The Homes',
  subtitle: 'Condo-quality living, designed for comfort',
  intro:
    'Every detail has been considered — from the natural light that fills each room to the accessible layouts designed for ease and independence. These are homes built for the way you want to live now.',
  features: [
    { label: 'Condo-quality 1- and 2-bedroom homes', icon: 'home' },
    { label: 'Air conditioning', icon: 'wind' },
    { label: 'Modern kitchens with full appliances', icon: 'kitchen' },
    { label: 'Cozy fireplace', icon: 'flame' },
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
      description: 'A thoughtfully designed space that feels open, bright, and easy to call home.',
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
      description: 'Room for a home office, guest space, or simply more room to breathe.',
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
    'Amenities thoughtfully designed to support comfort, connection, and ease — with full details to be announced.',
  placeholder:
    'We are carefully curating the amenities program in partnership with Origin to ensure every offering genuinely enhances your daily life. Full details will be shared soon.',
};

export const LOCATION = {
  title: 'The Longwood Neighbourhood',
  subtitle: 'Daily essentials and local favourites, just steps from your door.',
  sectionHeading: 'Explore the Neighbourhood',
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
  ...BASE_GALLERY,
  subtitle: 'A closer look at your future home',
  videoPlaceholder: 'Video walk-through — coming soon',
  soraPlaceholder: 'Lifestyle video — coming soon',
};

export const FORM = {
  ...BASE_FORM,
  subtitle:
    'Be among the first to learn about availability, layouts, and move-in dates. We\'ll be in touch with updates — never spam.',
  successTitle: 'Thank you for your interest.',
  successMessage:
    'We\'ve received your information and will be in touch soon with updates about Chelsea at Longwood. We look forward to welcoming you.',
};
