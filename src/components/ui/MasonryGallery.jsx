import React from 'react';
import { PlaceholderMedia } from './Placeholder';

/**
 * MasonryGallery
 * --------------
 * Responsive CSS-columns masonry grid with a hover-reveal caption. Built
 * generic (flat `items` array + optional `onItemClick`) so the Gallery
 * page can reuse it directly for the full artwork archive later --
 * wiring a real lightbox there is just passing an onItemClick handler,
 * the grid markup itself doesn't need to change.
 *
 * Expects a flat, CSV-ready `items` array of { id, label, category, ratio }.
 */
export function MasonryGallery({ items, onItemClick }) {
  return (
    <div className="columns-2 gap-4 sm:columns-3 md:gap-6">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onItemClick?.(item)}
          className="group relative mb-4 block w-full break-inside-avoid overflow-hidden text-left md:mb-6"
        >
          <PlaceholderMedia
            ratio={item.ratio}
            label={item.label}
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg-inverse/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-copper-light">
                {item.category}
              </p>
              <p className="text-sm font-semibold text-ink-inverse">{item.label}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
