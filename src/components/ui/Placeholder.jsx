import React from 'react';

/**
 * PlaceholderMedia
 * ------------------
 * Drop-in stand-in for real photography/artwork. It reserves the exact
 * aspect ratio and responsive box the final asset will occupy, so swapping
 * in a real <img> later is a one-line change with zero layout shift.
 *
 * Usage once real assets exist:
 *   <img src={asset} alt="..." className="size-full object-cover" />
 * dropped inside the same wrapper, or replace <PlaceholderMedia> entirely.
 */
export function PlaceholderMedia({
  ratio = '4/3',
  label,
  tone = 'light',
  className = '',
  iconClassName = '',
}) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
      : tone === 'accent'
      ? 'bg-accent/10 text-accent/60 border-accent/30'
      : 'bg-neutral-100 text-neutral-500 border-neutral-200';

  const labelClasses =
    tone === 'dark'
      ? 'text-neutral-300'
      : tone === 'accent'
      ? 'text-accent'
      : 'text-neutral-600';

  return (
    <div
      className={`relative flex w-full self-start items-center justify-center overflow-hidden border ${toneClasses} ${className}`}
      style={{ aspectRatio: ratio, height: 'auto' }}
      role="img"
      aria-label={label ? `Placeholder image: ${label}` : 'Placeholder image'}
    >
      <svg
        className={`size-10 opacity-70 ${iconClassName}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="1.5" />
        <circle cx="9" cy="9" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      {label && (
        <span className={`absolute bottom-2 left-2 text-[10px] font-medium uppercase tracking-wide opacity-70 ${labelClasses}`}>
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * PlaceholderAvatar — square/circular stand-in for portraits (Team page).
 */
export function PlaceholderAvatar({ label, className = '', iconClassName = 'size-12' }) {
  return (
    <div
      className={`relative flex aspect-square shrink-0 self-start items-center justify-center overflow-hidden border border-neutral-200 bg-neutral-100 text-neutral-500 ${className}`}
      style={{ height: 'auto' }}
      role="img"
      aria-label={label ? `Placeholder portrait: ${label}` : 'Placeholder portrait'}
    >
      <svg className={`opacity-70 ${iconClassName}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    </div>
  );
}
