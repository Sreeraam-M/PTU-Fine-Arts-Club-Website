import React from 'react';

export function Container({ children, className = '' }) {
  return <div className={`container-editorial ${className}`}>{children}</div>;
}

export function Section({ children, className = '', tone = 'light', size = 'default', ...props }) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-bg-inverse text-ink-inverse'
      : tone === 'muted'
      ? 'bg-neutral-100 text-ink'
      : 'bg-transparent text-ink';

  const sizeClasses = size === 'compact' ? 'py-14 md:py-16' : 'py-16 md:py-20 lg:py-28';

  return (
    <section className={`px-0 ${sizeClasses} ${toneClasses} ${className}`} {...props}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, inverse = false, className = '' }) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
        inverse ? 'text-copper-light' : 'text-accent'
      } ${className}`}
    >
      {children}
    </p>
  );
}
