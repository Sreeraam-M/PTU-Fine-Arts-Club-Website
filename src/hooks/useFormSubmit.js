import { useCallback, useState } from 'react';
import { submitForm } from '../lib/forms';

// src/hooks/useFormSubmit.js
// Frontend-only form interaction state. The component owns the field values;
// this hook owns pending / errors / result status / reset. Communication with
// the backend lives entirely in src/lib/forms.js (the adapter), so swapping the
// backend means editing that one module and nothing else (TRD §18.3).
export function useFormSubmit(formId) {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const clearFieldError = useCallback((field) => {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }, []);

  const reset = useCallback(() => {
    setPending(false);
    setErrors({});
    setStatus(null);
  }, []);

  const submit = useCallback(
    async (payload) => {
      setPending(true);
      setStatus(null);
      const result = await submitForm(formId, payload);
      setPending(false);
      setErrors(result.fieldErrors || {});
      setStatus(result);
      return result.ok;
    },
    [formId],
  );

  return { pending, errors, status, submit, reset, clearFieldError };
}
