import React from 'react';

const toneClasses = {
  accent: 'bg-accent-tertiary/15 text-accent-tertiary',
  nutmeg: 'bg-accent/10 text-accent',
  outline: 'border border-neutral-300 text-ink-muted',
};

/**
 * Badge — small pill for status/category labels.
 * `tone="accent"` (filled, olive) reads as a state indicator (e.g. event
 * status). `tone="outline"` reads as secondary metadata (e.g. category).
 */
export function Badge({ children, tone = 'accent', className = '' }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-[var(--radius-xs)] px-2.5 py-1 text-xs font-medium uppercase tracking-wide ${
        toneClasses[tone] ?? toneClasses.accent
      } ${className}`}
    >
      {children}
    </span>
  );
}
