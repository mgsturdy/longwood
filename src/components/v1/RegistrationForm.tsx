'use client';

import { useState } from 'react';
import { FORM } from '@/lib/content';
import { validateRegistration, hasErrors } from '@/lib/validation';
import { track } from '@/lib/analytics';
import type { RegistrationFormData, FormErrors } from '@/lib/types';

const initialFormData: RegistrationFormData = {
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
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const updateField = <K extends keyof RegistrationFormData>(
    field: K,
    value: RegistrationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validateRegistration(formData);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField instanceof HTMLElement) firstErrorField.focus();
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

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        track('form_success');
      } else {
        if (result.errors) setErrors(result.errors);
        setServerError(result.message || 'Something went wrong.');
        track('form_error', { message: result.message });
      }
    } catch {
      setServerError('Unable to submit. Please check your connection and try again.');
      track('form_error', { message: 'network_error' });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="py-28 lg:py-36 bg-navy">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-10">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-white mb-6">
            {FORM.successTitle}
          </h2>
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-10">
            {FORM.successMessage}
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />
          <p className="text-white/50 text-base">
            We&rsquo;ll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-white mb-6">
            {FORM.title}
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
            {FORM.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl space-y-7"
        >
          {serverError && (
            <div className="bg-error/10 border border-error/30 text-error p-5 rounded-xl text-base" role="alert">
              {serverError}
            </div>
          )}

          <InputField
            label="Full Name"
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            error={errors.fullName}
            onChange={(v) => updateField('fullName', v)}
            autoComplete="name"
          />

          <div className="grid sm:grid-cols-2 gap-7">
            <InputField
              label="Email"
              id="email"
              type="email"
              required
              value={formData.email}
              error={errors.email}
              onChange={(v) => updateField('email', v)}
              autoComplete="email"
            />
            <InputField
              label="Phone Number"
              id="phone"
              type="tel"
              required
              value={formData.phone}
              error={errors.phone}
              onChange={(v) => updateField('phone', v)}
              autoComplete="tel"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-7">
            <SelectField
              label="Suite Preference"
              id="suitePreference"
              required
              value={formData.suitePreference}
              error={errors.suitePreference}
              onChange={(v) => updateField('suitePreference', v as RegistrationFormData['suitePreference'])}
              options={FORM.suiteOptions}
              placeholder="Select..."
            />
            <SelectField
              label="Preferred Floor"
              id="floorPreference"
              required
              value={formData.floorPreference}
              error={errors.floorPreference}
              onChange={(v) => updateField('floorPreference', v)}
              options={FORM.floorOptions}
              placeholder="Select..."
            />
            <InputField
              label="Budget"
              id="budget"
              type="text"
              required
              value={formData.budget}
              error={errors.budget}
              onChange={(v) => updateField('budget', v)}
              placeholder="e.g. $1,800/mo"
            />
          </div>

          <fieldset>
            <legend className="block text-base font-semibold text-charcoal mb-4">
              Preferred Method of Communication *
            </legend>
            {errors.communicationPreference && (
              <p className="text-error text-sm mb-3">{errors.communicationPreference}</p>
            )}
            <div className="flex flex-wrap gap-8">
              {(['phoneCall', 'email', 'text'] as const).map((method) => {
                const labels: Record<string, string> = {
                  phoneCall: 'Phone Call',
                  email: 'Email',
                  text: 'Text',
                };
                return (
                  <label key={method} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.communicationPreference[method]}
                      onChange={(e) =>
                        updateField('communicationPreference', {
                          ...formData.communicationPreference,
                          [method]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 rounded border-gray-300 text-navy accent-navy"
                    />
                    <span className="text-charcoal text-base">{labels[method]}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="notes" className="block text-base font-semibold text-charcoal mb-3">
              Notes <span className="font-normal text-warm-gray">(optional)</span>
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-5 py-3.5 text-charcoal text-base focus:border-navy focus:ring-2 focus:ring-navy/20 transition"
            />
          </div>

          <div className="bg-cream/70 rounded-xl p-6 border border-cream-dark/30">
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => updateField('consent', e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-navy accent-navy mt-1 flex-shrink-0"
                aria-invalid={!!errors.consent}
              />
              <span className="text-sm text-warm-gray leading-relaxed">
                {FORM.consentText}
              </span>
            </label>
            {errors.consent && (
              <p className="text-error text-sm mt-3 ml-9">{errors.consent}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-navy-dark py-4.5 rounded-xl text-lg font-bold hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {submitting ? 'Submitting...' : FORM.cta}
          </button>
        </form>
      </div>
    </section>
  );
}

function InputField({
  label,
  id,
  type,
  required,
  value,
  error,
  onChange,
  autoComplete,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold text-charcoal mb-2.5">
        {label} {required && '*'}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border px-5 py-3.5 text-charcoal text-base transition focus:ring-2 focus:ring-navy/20 ${
          error ? 'border-error focus:border-error' : 'border-gray-300 focus:border-navy'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-error text-sm mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  id,
  required,
  value,
  error,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  id: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold text-charcoal mb-2.5">
        {label} {required && '*'}
      </label>
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border px-5 py-3.5 text-charcoal text-base transition focus:ring-2 focus:ring-navy/20 ${
          error ? 'border-error focus:border-error' : 'border-gray-300 focus:border-navy'
        }`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="text-error text-sm mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
