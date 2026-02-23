'use client';

import { useState, useCallback } from 'react';
import { FORM } from '@/lib/content';
import { validateRegistration, hasErrors } from '@/lib/validation';
import { track } from '@/lib/analytics';
import type { RegistrationFormData, FormErrors, ApiResponse } from '@/lib/types';

const initialFormData: RegistrationFormData = {
  fullName: '',
  email: '',
  phone: '',
  suitePreference: '',
  floorPreference: '',
  budget: '',
  communicationPreference: {
    phoneCall: false,
    email: false,
    text: false,
  },
  notes: '',
  consent: false,
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const checked = (e.target as HTMLInputElement).checked;

      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });

      if (name === 'consent') {
        setFormData((prev) => ({ ...prev, consent: checked }));
      } else if (['phoneCall', 'email', 'text'].includes(name)) {
        setFormData((prev) => ({
          ...prev,
          communicationPreference: {
            ...prev.communicationPreference,
            [name]: checked,
          },
        }));
        setErrors((prev) => {
          const next = { ...prev };
          delete next.communicationPreference;
          return next;
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
      }
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setServerError('');

      const validationErrors = validateRegistration(formData);
      if (hasErrors(validationErrors)) {
        setErrors(validationErrors);
        track('form_error', { fields: Object.keys(validationErrors).join(',') });
        return;
      }

      setSubmitting(true);
      track('form_submit');

      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data: ApiResponse = await res.json();

        if (data.success) {
          setSuccess(true);
          track('form_success');
        } else {
          if (data.errors) setErrors(data.errors);
          setServerError(data.message);
          track('form_error', { server: true });
        }
      } catch {
        setServerError('Something went wrong. Please try again.');
        track('form_error', { network: true });
      } finally {
        setSubmitting(false);
      }
    },
    [formData],
  );

  if (success) {
    return (
      <section id="register" className="py-24 lg:py-32 bg-sage" aria-labelledby="register-heading">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-soft-white p-12 sm:p-16 shadow-lg">
            <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-sage" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 id="register-heading" className="text-forest mb-4">
              {FORM.successTitle}
            </h2>
            <p className="text-warm-brown/80 text-lg leading-relaxed max-w-md mx-auto">
              {FORM.successMessage}
            </p>
            <div className="mt-8 pt-8 border-t border-warm-gray-v3/30">
              <p className="text-warm-brown/60 text-sm">
                Opening Spring 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const inputClasses = (field: string) =>
    `w-full rounded-xl border-2 px-4 py-3.5 text-base text-forest bg-soft-white placeholder:text-warm-brown/40 transition-colors focus:outline-none focus:ring-0 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-warm-gray-v3 focus:border-sage'
    }`;

  return (
    <section id="register" className="py-24 lg:py-32 bg-sage" aria-labelledby="register-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-soft-white p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="text-center mb-12">
            <h2 id="register-heading" className="text-forest">
              {FORM.title}
            </h2>
            <p className="mt-4 text-warm-brown/70 text-lg leading-relaxed">{FORM.subtitle}</p>
          </div>

          {serverError && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4 mb-8" role="alert">
              <p className="text-red-700 font-medium">{serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-forest mb-2.5">
                  Full Name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClasses('fullName')}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-forest mb-2.5">
                  Email <span className="text-terracotta">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-forest mb-2.5">
                Phone <span className="text-terracotta">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="250-555-0123"
                className={inputClasses('phone')}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="suitePreference" className="block text-sm font-semibold text-forest mb-2.5">
                  Suite Preference <span className="text-terracotta">*</span>
                </label>
                <select
                  id="suitePreference"
                  name="suitePreference"
                  value={formData.suitePreference}
                  onChange={handleChange}
                  className={inputClasses('suitePreference')}
                  aria-invalid={!!errors.suitePreference}
                  aria-describedby={errors.suitePreference ? 'suite-error' : undefined}
                >
                  <option value="">Select...</option>
                  {FORM.suiteOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.suitePreference && (
                  <p id="suite-error" className="mt-1.5 text-sm text-red-500">{errors.suitePreference}</p>
                )}
              </div>

              <div>
                <label htmlFor="floorPreference" className="block text-sm font-semibold text-forest mb-2.5">
                  Floor <span className="text-terracotta">*</span>
                </label>
                <select
                  id="floorPreference"
                  name="floorPreference"
                  value={formData.floorPreference}
                  onChange={handleChange}
                  className={inputClasses('floorPreference')}
                  aria-invalid={!!errors.floorPreference}
                  aria-describedby={errors.floorPreference ? 'floor-error' : undefined}
                >
                  <option value="">Select...</option>
                  {FORM.floorOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.floorPreference && (
                  <p id="floor-error" className="mt-1.5 text-sm text-red-500">{errors.floorPreference}</p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-forest mb-2.5">
                  Budget <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g. $1,800/mo"
                  className={inputClasses('budget')}
                  aria-invalid={!!errors.budget}
                  aria-describedby={errors.budget ? 'budget-error' : undefined}
                />
                {errors.budget && (
                  <p id="budget-error" className="mt-1.5 text-sm text-red-500">{errors.budget}</p>
                )}
              </div>
            </div>

            <fieldset>
              <legend className="block text-sm font-semibold text-forest mb-3">
                Preferred Contact Method <span className="text-terracotta">*</span>
              </legend>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'phoneCall', label: 'Phone call' },
                  { name: 'email', label: 'Email' },
                  { name: 'text', label: 'Text' },
                ].map(({ name, label }) => (
                  <label key={name} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      name={name}
                      checked={formData.communicationPreference[name as keyof typeof formData.communicationPreference]}
                      onChange={handleChange}
                      className="w-5 h-5 rounded-md border-2 border-warm-gray-v3 text-sage focus:ring-sage focus:ring-offset-0 accent-sage"
                    />
                    <span className="text-warm-brown group-hover:text-forest transition-colors">{label}</span>
                  </label>
                ))}
              </div>
              {errors.communicationPreference && (
                <p className="mt-1.5 text-sm text-red-500">{errors.communicationPreference}</p>
              )}
            </fieldset>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-forest mb-2.5">
                Notes <span className="text-warm-brown/50 font-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Anything else you'd like us to know?"
                className={`${inputClasses('notes')} resize-none`}
              />
            </div>

            <div className="rounded-xl bg-cream-v3 border border-warm-gray-v3/50 p-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-5 h-5 rounded-md border-2 border-warm-gray-v3 text-sage focus:ring-sage focus:ring-offset-0 mt-0.5 flex-shrink-0 accent-sage"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <span className="text-sm text-warm-brown/80 leading-relaxed">
                  {FORM.consentText}
                </span>
              </label>
              {errors.consent && (
                <p id="consent-error" className="mt-2 text-sm text-red-500">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-terracotta py-4.5 text-lg font-semibold text-white shadow-lg hover:bg-terracotta-dark transition-all hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                FORM.cta
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
