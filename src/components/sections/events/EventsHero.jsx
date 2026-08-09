import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { PlaceholderMedia } from '../../ui/Placeholder';
import { Container, Eyebrow } from '../../ui/Layout';

export function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-bg-inverse">
      <Container className="relative z-10 grid grid-cols-1 gap-12 py-24 md:grid-cols-[1.3fr_1fr] md:items-center md:py-32">
        <Reveal>
          <Eyebrow inverse>Events</Eyebrow>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-ink-inverse sm:text-5xl md:text-6xl">
            Where the collective gathers, shows up, and shows its work.
          </h1>
          <p className="mt-6 max-w-md text-ink-inverse-muted md:text-lg">
            From our flagship annual exhibition to the quiet Wednesday sketch circle -- every
            format we run exists to get work off the page and onto a wall.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 pt-10">
            <PlaceholderMedia ratio="3/4" tone="dark" label="Exhibition" className="border-border-inverse" />
          </div>
          <div className="flex flex-col gap-4">
            <PlaceholderMedia ratio="1/1" tone="dark" label="Workshop" className="border-border-inverse" />
            <PlaceholderMedia ratio="3/4" tone="dark" label="Critique" className="border-border-inverse" />
          </div>
        </Reveal>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-inverse/40 to-transparent" />
    </section>
  );
}
