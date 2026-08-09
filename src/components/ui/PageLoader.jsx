import React from 'react';

/**
 * PageLoader
 * ----------
 * Suspense fallback shown while an async page chunk loads (TRD §13.2).
 * Static data means a full skeleton is unnecessary; a subtle, token-based
 * indicator is enough. Announced politely to screen readers so the state
 * change is not missed while the route renders.
 */
export function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] items-center justify-center"
    >
      <span className="inline-flex items-center gap-3 text-sm text-ink-muted">
        <svg
          className="size-5 animate-spin text-accent"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
        </svg>
        <span>Loading…</span>
      </span>
    </div>
  );
}
