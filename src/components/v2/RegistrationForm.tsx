'use client';

import { useState, useRef, useEffect } from 'react';
import { FORM } from '@/lib/content';
import { validateRegistration, hasErrors } from '@/lib/validation';
import { track } from '@/lib/analytics';
import type { RegistrationFormData, FormErrors } from '@/lib/types';

const INITIAL_STATE: RegistrationFormData = {
  fullName: '',
  email: '',
  phone: '',
  suitePreference: '',
  floorPreference: '',
  budget: '',
  communicationPreference: { phoneCall: false, email: false, text: false },
  notes: '',
  consent: false,
};

export default function RegistrationForm() {
  const [form, setForm] = useState<RegistrationFormData>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          track('section_view', { section: 'register' });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function updateField<K extends keyof RegistrationFormData>(
    key: K,
    value: RegistrationFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => { const { [key]: _, ...rest } = prev; return rest; });
  }

  function updateCommPref(key: keyof RegistrationFormData['communicationPreference'], value: boolean) {
    setForm((prev) => ({
      ...prev,
      communicationPreference: { ...prev.communicationPreference, [key]: value },
    }));
    if (errors.communicationPreference) {
      setErrors((prev) => { const { communicationPreference: _, ...rest } = prev; return rest; });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError('');

    const validationErrors = validateRegistration(form);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      track('form_error', { errors: Object.keys(validationErrors).join(',') });
      return;
    }

    setSubmitting(true);
    track('form_submit');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString(), source: 'v2-modern-premium' }),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        track('form_success');
      } else {
        setServerError(data.message || 'Something went wrong. Please try again.');
        if (data.errors) setErrors(data.errors);
        track('form_error', { server: true });
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      track('form_error', { network: true });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full border border-charcoal-light bg-charcoal-light/50 px-4 py-3.5 text-ivory placeholder:text-neutral-600 transition-all duration-300 focus:border-copper focus:bg-charcoal-light';
  const labelClass = 'mb-1.5 block text-sm font-medium tracking-wide text-ivory/80';
  const errorClass = 'mt-1 text-sm text-error';

  if (success) {
    return (
      <section id="register" className="bg-black-deep py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <div className="animate-scale-in">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border border-sage-v2 bg-sage-v2/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-sage-v2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-3xl font-light text-ivory">{FORM.successTitle}</h2>
            <p className="mt-4 text-lg text-ivory/60">{FORM.successMessage}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="register" className="bg-black-deep py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2
            className={`text-3xl font-light tracking-tight text-ivory sm:text-4xl lg:text-5xl ${
              visible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            {FORM.title}
          </h2>
          <p
            className={`mt-4 text-lg text-ivory/50 ${
              visible ? 'animate-fade-up delay-100' : 'opacity-0'
            }`}
          >
            {FORM.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`mt-14 space-y-6 ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}
        >
          {serverError && (
            <div className="border border-error/30 bg-error/10 px-5 py-4 text-sm text-error">
              {serverError}
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>Full Name *</label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className={inputClass}
                placeholder="Your full name"
                aria-required="true"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && <p className={errorClass} role="alert">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={inputClass}
                placeholder="your@email.com"
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className={errorClass} role="alert">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className={labelClass}>Phone *</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={inputClass}
                placeholder="250-555-0000"
                aria-required="true"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className={errorClass} role="alert">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="budget" className={labelClass}>Budget *</label>
              <input
                id="budget"
                type="text"
                value={form.budget}
                onChange={(e) => updateField('budget', e.target.value)}
                className={inputClass}
                placeholder="e.g. $1,800 - $2,200/mo"
                aria-required="true"
                aria-invalid={!!errors.budget}
              />
              {errors.budget && <p className={errorClass} role="alert">{errors.budget}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="suitePreference" className={labelClass}>Suite Preference *</label>
              <select
                id="suitePreference"
                value={form.suitePreference}
                onChange={(e) => updateField('suitePreference', e.target.value as RegistrationFormData['suitePreference'])}
                className={inputClass}
                aria-required="true"
                aria-invalid={!!errors.suitePreference}
              >
                <option value="">Select suite type</option>
                {FORM.suiteOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.suitePreference && <p className={errorClass} role="alert">{errors.suitePreference}</p>}
            </div>
            <div>
              <label htmlFor="floorPreference" className={labelClass}>Floor Preference *</label>
              <select
                id="floorPreference"
                value={form.floorPreference}
                onChange={(e) => updateField('floorPreference', e.target.value)}
                className={inputClass}
                aria-required="true"
                aria-invalid={!!errors.floorPreference}
              >
                <option value="">Select floor</option>
                {FORM.floorOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.floorPreference && <p className={errorClass} role="alert">{errors.floorPreference}</p>}
            </div>
          </div>

          <fieldset>
            <legend className={labelClass}>Preferred Communication *</legend>
            <div className="mt-2 flex flex-wrap gap-4">
              {([
                { key: 'phoneCall' as const, label: 'Phone Call' },
                { key: 'email' as const, label: 'Email' },
                { key: 'text' as const, label: 'Text' },
              ]).map(({ key, label }) => (
                <label key={key} className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={form.communicationPreference[key]}
                    onChange={(e) => updateCommPref(key, e.target.checked)}
                    className="h-4 w-4 accent-copper"
                  />
                  <span className="text-sm text-ivory/70">{label}</span>
                </label>
              ))}
            </div>
            {errors.communicationPreference && (
              <p className={errorClass} role="alert">{errors.communicationPreference}</p>
            )}
          </fieldset>

          <div>
            <label htmlFor="notes" className={labelClass}>Notes (optional)</label>
            <textarea
              id="notes"
              rows={3}
              value={form.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              className={inputClass}
              placeholder="Anything else you'd like us to know?"
            />
          </div>

          <div>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => updateField('consent', e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-copper"
                aria-required="true"
              />
              <span className="text-xs leading-relaxed text-ivory/50">
                {FORM.consentText}
              </span>
            </label>
            {errors.consent && <p className={errorClass} role="alert">{errors.consent}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-copper px-8 py-4 text-sm font-medium tracking-widest text-black-deep uppercase transition-all duration-300 hover:bg-copper-light disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            {submitting ? 'Submitting...' : FORM.cta}
          </button>
        </form>
      </div>
    </section>
  );
}
