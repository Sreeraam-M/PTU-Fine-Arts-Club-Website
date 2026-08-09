import React, { useEffect, useRef, useState } from 'react';
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx';
import { PlaceholderAvatar } from '../../ui/Placeholder';

/**
 * PeopleCarousel
 * --------------
 * Reusable, CMS-driven profile carousel shared by both the Faculty
 * Coordinators and Core Committee rows on the homepage.
 *
 *   title   : heading shown above the strip
 *   items   : array of { id, photo, name, ...roleKey } — any length
 *   roleKey : field name holding the role line ("designation" | "position")
 *
 * Shows four cards per view on desktop, two on small screens and one on
 * phones. When more than four people are listed, dedicated prev/next controls
 * flank the row (screens ≥ sm); on mobile the strip is swipeable with
 * scroll-snap. The component only reads the array it is given, so the roster
 * can change without any frontend work.
 */
export function PeopleCarousel({ title, items, roleKey = 'position', dark = false }) {
  const trackRef = useRef(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    const update = () => {
      setCanScrollBack(el.scrollLeft > 4);
      setCanScrollForward(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
    // The strip is stable for the life of the section (CMS module import).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollPage = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
  };

  const showNav = items.length > 4;

  const arrowClass = dark
    ? 'hidden size-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-white/30 bg-transparent text-white transition-all duration-[var(--duration-hover)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-white/80 disabled:cursor-not-allowed disabled:opacity-25 sm:flex'
    : 'hidden size-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border text-ink transition-colors duration-[var(--duration-hover)] ease-[var(--ease-standard)] hover:border-ink disabled:cursor-not-allowed disabled:opacity-25 sm:flex';

  return (
    <div>
      <h3
        className={`text-2xl font-semibold tracking-tight md:text-3xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h3>

      <div className="mt-6 flex items-center gap-4 md:gap-5">
        {showNav && (
          <button
            type="button"
            onClick={() => scrollPage(-1)}
            disabled={!canScrollBack}
            aria-label={`Scroll ${title} back`}
            className={arrowClass}
          >
            <RxArrowLeft className="size-5" aria-hidden="true" />
          </button>
        )}

        <div
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((person) => (
            <article
              key={person.id ?? person.name}
              className="group w-full shrink-0 snap-start sm:w-[calc(50%_-_0.625rem)] md:w-[calc(33.333%_-_0.834rem)] lg:w-[calc(25%_-_0.938rem)]"
            >
              <div className="mb-4 overflow-hidden">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <PlaceholderAvatar
                    label={person.name}
                    className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <h4 className="font-semibold leading-snug text-ink">{person.name}</h4>
              <p className="mt-0.5 text-sm text-ink-muted">{person[roleKey]}</p>
            </article>
          ))}
        </div>

        {showNav && (
          <button
            type="button"
            onClick={() => scrollPage(1)}
            disabled={!canScrollForward}
            aria-label={`Scroll ${title} forward`}
            className={arrowClass}
          >
            <RxArrowRight className="size-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
