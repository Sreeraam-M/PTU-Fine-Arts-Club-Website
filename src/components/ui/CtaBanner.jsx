import React from 'react';
import { Button } from './Button';
import { Container } from './Layout';

/**
 * CtaBanner
 * ---------
 * Large full-bleed editorial banner: heading, description, up to two
 * CTAs. Same shape as the warm band already used on Home (ImageCta) --
 * pulled into a primitive so any page needing a closing call-to-action
 * (Events, Membership, future pages) can reuse the layout instead of
 * re-authoring the section markup each time.
 */
export function CtaBanner({ id, eyebrow, title, description, primaryCta, secondaryCta, tone = 'accent' }) {
  const toneClasses = tone === 'dark' ? 'bg-bg-inverse' : 'bg-accent-tertiary';

  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${toneClasses}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-bg-inverse/40 via-transparent to-bg-inverse/20" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-copper-light">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl font-bold leading-[1.05] text-ink-inverse md:text-6xl">{title}</h2>
          {description && <p className="mt-5 text-neutral-200 md:text-lg">{description}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {primaryCta && (
                <Button to={primaryCta.to} variant="primary" size="md">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant="accent-outline" size="md">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
