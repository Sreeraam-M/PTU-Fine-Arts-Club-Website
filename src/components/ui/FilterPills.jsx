import React from 'react';

/**
 * FilterPills
 * -----------
 * Row of toggleable pill buttons for filtering a collection by category.
 * Generalizes the category-filter markup already used inline on the
 * Artwork page so Gallery can use it without re-authoring the pattern --
 * Artwork can adopt this primitive later with no visual change.
 *
 * Expects a flat `options` array of { label, slug } and reports the
 * active slug back through onChange.
 */
export function FilterPills({ options, active, onChange, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => {
        const isActive = option.slug === active;
        return (
          <button
            key={option.slug}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.slug)}
            className={`rounded-[var(--radius-sm)] border px-4 py-2 text-sm transition-colors ${
              isActive
                ? 'border-ink bg-ink text-ink-inverse'
                : 'border-neutral-300 text-ink-muted hover:border-ink hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
