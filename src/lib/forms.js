// src/lib/forms.js
// Form submission service.
// Components call submitForm() and never see fetch, endpoints, or transport
// details, so the backend (a serverless function per TRD §18.3) can be
// swapped later without touching any component. The endpoint is read from
// VITE_FORM_ENDPOINT. When it is unset — the current, pre-deployment state —
// the service returns an explicit "not live yet" result instead of pretending
// to succeed, so no data is silently lost.

const ENDPOINT = (import.meta.env && import.meta.env.VITE_FORM_ENDPOINT) || '';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schemas = {
  contact: {
    required: ['firstName', 'lastName', 'email', 'topic', 'describesYou', 'message', 'terms'],
    emails: ['email'],
  },
  membership: {
    required: ['name', 'regNo', 'email', 'dept', 'interest', 'about', 'terms'],
    emails: ['email'],
  },
  newsletter: {
    required: ['email'],
    emails: ['email'],
  },
};

const copy = {
  contact: {
    success: "Thanks — your message was sent. We'll reply soon.",
    notLive: "Submissions aren't live yet — please email finearts@ptu.edu.in.",
  },
  membership: {
    success: "Thanks — your application was received. We'll be in touch.",
    notLive: "Applications aren't live yet — please email finearts@ptu.edu.in.",
  },
  newsletter: {
    success: 'Thanks for subscribing.',
    notLive: "Subscriptions aren't live yet — please email finearts@ptu.edu.in.",
  },
};

export function validateForm(formId, payload) {
  const schema = schemas[formId];
  if (!schema) return { form: 'Unknown form.' };
  const errors = {};
  for (const field of schema.required) {
    if (field === 'terms') {
      if (!payload[field]) errors[field] = 'Please accept the terms to continue.';
      continue;
    }
    const value = payload[field];
    if (value === undefined || value === null || String(value).trim() === '') {
      errors[field] = 'This field is required.';
    }
  }
  for (const field of schema.emails) {
    const value = payload[field];
    if (value && !EMAIL_RE.test(String(value).trim())) {
      errors[field] = 'Enter a valid email address.';
    }
  }
  return errors;
}

export async function submitForm(formId, payload) {
  const fieldErrors = validateForm(formId, payload);
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, message: 'Please fix the highlighted fields and try again.' };
  }

  if (!ENDPOINT) {
    return { ok: false, message: copy[formId]?.notLive || 'Submissions are unavailable right now.' };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: formId, ...payload }),
    });
    if (!res.ok) throw new Error(`Submission failed (${res.status})`);
    return { ok: true, message: copy[formId]?.success || 'Thanks — your submission was received.' };
  } catch {
    return { ok: false, message: "We couldn't send that right now. Please try again." };
  }
}

export default submitForm;
