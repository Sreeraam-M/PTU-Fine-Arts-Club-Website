import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { PlaceholderMedia } from '../../ui/Placeholder';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { events } from '../../../data/events';

export function FeaturedEvent() {
  const event = events.find((e) => e.featured);
  if (!event) return null;

  const highlights = event.highlights ? event.highlights.split(';').filter(Boolean) : [];

  return (
    <Section tone="muted" className="border-y border-border">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <PlaceholderMedia ratio="4/5" label={event.title} tone="accent" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <Eyebrow className="mb-0">Featured event</Eyebrow>
              <Badge tone="accent">{event.category}</Badge>
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
              {event.title}
            </h2>
            <p className="mt-2 text-sm font-medium text-neutral-500">
              {event.date} · {event.venue}
            </p>
            <p className="mt-5 text-ink-muted md:text-lg">{event.description}</p>

            {highlights.length > 0 && (
              <ul className="mt-6 space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[var(--radius-xs)] bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="#registration" variant="primary" size="md">
                Reserve your spot
              </Button>
              <Button to="#timeline" variant="secondary" size="md">
                See the timeline
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
