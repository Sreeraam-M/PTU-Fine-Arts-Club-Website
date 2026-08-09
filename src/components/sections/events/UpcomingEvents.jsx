import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Card } from '../../ui/Card';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { events } from '../../../data/events';

const statusMeta = {
  upcoming: { label: 'Upcoming', tone: 'accent' },
  recurring: { label: 'Recurring', tone: 'nutmeg' },
  past: { label: 'Past', tone: 'outline' },
};

// Past events point into the Event Gallery further down the page; anything
// still running points at the Registration CTA -- both anchors live on
// this same unified page, so no separate details route is needed.
function ctaFor(event) {
  return event.status === 'past'
    ? { label: 'View gallery', to: '#gallery' }
    : { label: 'Reserve your spot', to: '#registration' };
}

export function UpcomingEvents() {
  const gridEvents = events.filter((event) => !event.featured);

  return (
    <Section>
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>On the calendar</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            Upcoming events
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {gridEvents.map((event, i) => {
            const status = statusMeta[event.status] ?? statusMeta.upcoming;
            const cta = ctaFor(event);
            return (
              <Reveal key={event.slug} delay={i * 0.06}>
                <Card
                  mediaRatio="4/3"
                  mediaLabel={event.title}
                  badge={status.label}
                  badgeTone={status.tone}
                  category={event.category}
                  title={event.title}
                  meta={`${event.date} · ${event.venue}`}
                  description={event.excerpt}
                  ctaLabel={cta.label}
                  ctaTo={cta.to}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
