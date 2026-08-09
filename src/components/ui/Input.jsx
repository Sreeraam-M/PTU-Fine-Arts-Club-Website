import React from 'react';

const fieldBase =
  'w-full rounded-[var(--radius-sm)] border border-border bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-accent-soft focus:outline-none';

const fieldInvalid = 'border-danger focus:border-danger';

export function Label({ children, htmlFor, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`mb-2 block text-sm font-medium ${className}`}>
      {children}
    </label>
  );
}

/**
 * FieldError — inline validation message.
 * Renders nothing when `children` is falsy so callers can pass it
 * unconditionally. Reference it with aria-describedby on the field.
 */
export function FieldError({ id, children, className = '', color = 'text-danger' }) {
  if (!children) return null;
  return (
    <p id={id} className={`mt-1.5 text-sm ${color} ${className}`}>
      {children}
    </p>
  );
}

export function Input({ className = '', invalid = false, ...props }) {
  return (
    <input
      className={`${fieldBase} ${invalid ? fieldInvalid : ''} ${className}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Textarea({ className = '', rows = 6, invalid = false, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`${fieldBase} resize-none ${invalid ? fieldInvalid : ''} ${className}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Select({ className = '', children, invalid = false, ...props }) {
  return (
    <div className="relative">
      <select
        className={`${fieldBase} appearance-none pr-10 ${invalid ? fieldInvalid : ''} ${className}`}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

export function Checkbox({ id, label, className = '', invalid = false, ...props }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        className={`size-4 rounded-[var(--radius-xs)] border text-accent focus:ring-2 focus:ring-accent-soft ${
          invalid ? 'border-danger' : 'border-border'
        }`}
        aria-invalid={invalid || undefined}
        {...props}
      />
      {label && (
        <label htmlFor={id} className={`cursor-pointer text-sm ${invalid ? 'text-danger' : 'text-ink-muted'}`}>
          {label}
        </label>
      )}
    </div>
  );
}

export function RadioOption({ id, name, value, label, invalid = false, ...props }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={`size-4 border text-accent focus:ring-2 focus:ring-accent-soft ${
          invalid ? 'border-danger' : 'border-border'
        }`}
        aria-invalid={invalid || undefined}
        {...props}
      />
      <label htmlFor={id} className={`cursor-pointer text-sm ${invalid ? 'text-danger' : ''}`}>
        {label}
      </label>
    </div>
  );
}
