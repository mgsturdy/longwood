export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  suitePreference: '1BR' | '2BR' | '';
  floorPreference: string;
  budget: string;
  communicationPreference: {
    phoneCall: boolean;
    email: boolean;
    text: boolean;
  };
  notes: string;
  consent: boolean;
}

export interface RegistrationPayload extends RegistrationFormData {
  submittedAt: string;
  source: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  errors?: FormErrors;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'building' | 'interior' | 'neighbourhood' | 'amenity';
  width: number;
  height: number;
}

export interface FloorPlan {
  id: string;
  name: string;
  bedrooms: number;
  description?: string;
  image?: string;
  sqft?: string;
  features: string[];
}
