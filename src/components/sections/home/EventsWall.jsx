import React from 'react';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { Reveal } from '../../ui/Reveal';
import { EventsTimeline } from './EventsTimeline';
import { eventsWall } from '../../../data/eventsWall';

export function EventsWall() {
  return (
    <Section data-section="events-wall" className="pt-8! pb-8! md:pt-12! md:pb-10! lg:pt-16!">
      <Container>
        <Reveal>
          <Eyebrow className="mb-3! font-heading! text-2xl! font-bold! md:text-3xl!">
            The Events
          </Eyebrow>
        </Reveal>

        <Reveal className="mt-6 md:mt-8">
          <EventsTimeline />
        </Reveal>

        <Reveal className="mt-5 md:mt-7">
          <div className="flex justify-center">
            <Link
              to={eventsWall.cta.to}
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-bg px-9 py-3.5 text-sm font-medium text-ink shadow-[0_1px_2px_rgba(17,17,17,0.05)] transition-all duration-[var(--duration-hover)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-14px_rgba(17,17,17,0.35)]"
            >
              {eventsWall.cta.label}
              <RxArrowRight
                aria-hidden="true"
                className="size-4 text-ink transition-transform duration-[var(--duration-hover)] ease-[var(--ease-standard)] group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
