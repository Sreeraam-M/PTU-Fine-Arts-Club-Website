import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Container, Eyebrow, Section } from '../../ui/Layout';

export function WhoWeAre() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
              A collective of makers who happen to study engineering.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-xl font-medium leading-snug text-ink md:text-2xl">
              We are not a resume line. We are the room where a circuit diagram and a charcoal
              sketch share the same desk.
            </p>
            <p className="text-ink-muted md:text-lg">
              The Fine Arts Club brings together students from every department at Puducherry
              Technological University who want to make something with their hands — paint,
              pixels, film, or ink. There is no audition to join and no portfolio required to
              start. What we ask instead is curiosity, a willingness to be critiqued, and enough
              stubbornness to finish what you start.
            </p>
            <p className="text-ink-muted md:text-lg">
              Over the past several years that has grown into a full creative calendar: weekly
              open studios, cross-department workshops, and Chiaroscuro, our flagship annual
              exhibition where a year of work finally meets a wall.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
