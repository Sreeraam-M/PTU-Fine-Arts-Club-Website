import React from 'react';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { Timeline } from '../../ui/Timeline';
import { eventTimeline } from '../../../data/eventTimeline';

export function EventTimelineSection() {
  return (
    <Section id="timeline">
      <Container>
        <div className="mb-16 max-w-xl">
          <Eyebrow>Event history</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            How the program grew.
          </h2>
        </div>
        <Timeline items={eventTimeline} surfaceClassName="border-bg" />
      </Container>
    </Section>
  );
}
