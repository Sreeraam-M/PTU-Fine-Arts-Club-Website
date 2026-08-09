import React from 'react';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from './Button';
import { Badge } from './Badge';
import { PlaceholderMedia } from './Placeholder';

/**
 * Card
 * ----
 * Generic media-forward content card: image, optional status badge,
 * category label, title, meta line, optional description, optional CTA.
 * Built for the Events grid but deliberately free of event-specific
 * fields -- Gallery and Artwork can reuse it later for artwork/exhibit
 * cards by passing different props; the markup itself doesn't change.
 */
export function Card({
  mediaRatio = '4/3',
  mediaLabel,
  badge,
  badgeTone = 'accent',
  category,
  title,
  meta,
  description,
  ctaLabel,
  ctaTo,
  className = '',
}) {
  return (
    <article className={`group flex h-full flex-col ${className}`}>
      <div className="relative mb-5 overflow-hidden">
        <PlaceholderMedia
          ratio={mediaRatio}
          label={mediaLabel}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {badge && (
          <Badge tone={badgeTone} className="absolute left-3 top-3">
            {badge}
          </Badge>
        )}
      </div>
      {category && (
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">{category}</p>
      )}
      <h3 className="text-xl font-bold leading-snug text-ink">{title}</h3>
      {meta && <p className="mt-1 text-sm text-neutral-500">{meta}</p>}
      {description && <p className="mt-3 max-w-md text-sm text-ink-muted">{description}</p>}
      {ctaLabel && ctaTo && (
        <Button to={ctaTo} variant="ghost" size="sm" icon={RxChevronRight} className="mt-4 w-fit">
          {ctaLabel}
        </Button>
      )}
    </article>
  );
}
