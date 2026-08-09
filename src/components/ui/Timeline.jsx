import React from 'react';
import { Reveal } from './Reveal';

/**
 * Timeline
 * --------
 * Shared vertical timeline primitive. Used by About > Journey (club history)
 * and Events > EventTimeline (event history) so the pattern only exists
 * once. Any page needing a year-by-year record should reuse this rather
 * than re-implementing the border-line-and-dot markup.
 *
 * Expects a flat, CSV-ready `items` array of { year, title, description }.
 *
 * The left border IS the timeline line -- it naturally spans the full
 * height regardless of how long each entry's copy runs, no absolute-
 * position math required. Each dot is nudged left with a fixed offset to
 * sit centered on that border.
 *
 * GSAP note: swap the static border for an absolutely-positioned line with
 * scaleY driven by ScrollTrigger progress for a "draw-in" effect later --
 * the markup shape doesn't need to change.
 *
 * `surfaceClassName` should match the section's own background so the
 * dot's ring reads as a clean cutout against it (defaults to the About/
 * Events shared neutral-100 surface).
 */
export function Timeline({
  items,
  dotClassName = 'bg-accent',
  yearClassName = 'text-accent-soft',
  surfaceClassName = 'border-neutral-100',
}) {
  return (
    <ol className="space-y-14 border-l-2 border-neutral-300 pl-8 md:space-y-16 md:pl-12">
      {items.map((item, i) => (
        <Reveal as="li" key={`${item.year}-${item.title}`} delay={i * 0.05} className="relative list-none">
          <span
            className={`absolute -left-10 top-1.5 h-4 w-4 rounded-[var(--radius-xs)] border-4 md:-left-14 ${dotClassName} ${surfaceClassName}`}
          />
          <span className={`font-heading text-lg font-bold md:text-xl ${yearClassName}`}>
            {item.year}
          </span>
          <h3 className="mt-1 text-xl font-bold text-ink md:text-2xl">{item.title}</h3>
          <p className="mt-2 max-w-xl text-ink-muted">{item.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
