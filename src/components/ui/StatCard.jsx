import React from 'react';

/**
 * StatCard
 * --------
 * Single premium statistic tile: icon, big number (+ suffix), label.
 * Generic enough to reuse anywhere a page wants to surface headline
 * numbers -- About, Achievements, or Membership can all pull this in
 * later; only the dataset passed in changes.
 */
export function StatCard({ icon: Icon, value, suffix = '', label, tone = 'light', className = '' }) {
  const toneClasses =
    tone === 'dark'
      ? 'border-border-inverse bg-bg-inverse text-ink-inverse'
      : 'border-border bg-surface text-ink';

  return (
    <div className={`flex flex-col items-start gap-4 border p-6 md:p-8 ${toneClasses} ${className}`}>
      {Icon && <Icon className="size-6 text-accent-soft" aria-hidden="true" />}
      <p className="font-heading text-3xl font-bold leading-none md:text-4xl">
        {value}
        <span className="text-accent-soft">{suffix}</span>
      </p>
      <p className={`text-sm ${tone === 'dark' ? 'text-ink-inverse-muted' : 'text-ink-muted'}`}>
        {label}
      </p>
    </div>
  );
}
