import type { RegistrationFormData, FormErrors } from './types';

export function validateRegistration(data: RegistrationFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[\d\s\-\+\(\)]{7,20}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.suitePreference) {
    errors.suitePreference = 'Please select a suite preference.';
  }

  if (!data.floorPreference) {
    errors.floorPreference = 'Please select a floor preference.';
  }

  if (!data.budget.trim()) {
    errors.budget = 'Please enter your budget.';
  }

  const { phoneCall, email, text } = data.communicationPreference;
  if (!phoneCall && !email && !text) {
    errors.communicationPreference = 'Please select at least one communication method.';
  }

  if (!data.consent) {
    errors.consent = 'You must provide consent to continue.';
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}
