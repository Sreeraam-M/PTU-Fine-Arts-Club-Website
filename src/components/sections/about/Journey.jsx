import React from 'react';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { Timeline } from '../../ui/Timeline';
import { journey } from '../../../data/journey';

export function Journey() {
  return (
    <Section tone="muted">
      <Container>
        <div className="mb-16 max-w-xl">
          <Eyebrow>Our journey</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            Year by year, wall by wall.
          </h2>
        </div>
        <Timeline items={journey} />
      </Container>
    </Section>
  );
}
