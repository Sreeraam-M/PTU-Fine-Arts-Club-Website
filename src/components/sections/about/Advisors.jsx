import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { PlaceholderAvatar } from '../../ui/Placeholder';
import { advisors } from '../../../data/advisors';

export function Advisors() {
  return (
    <Section tone="muted" className="border-y border-border">
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>Faculty advisors</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            Guidance from those who&rsquo;ve seen it grow.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {advisors.map((advisor, i) => (
            <Reveal key={advisor.name + i} delay={i * 0.08}>
              <PlaceholderAvatar label={advisor.name} className="mb-4 w-full rounded-[var(--radius-sm)]" />
              <h3 className="font-bold text-ink">{advisor.name}</h3>
              <p className="text-sm text-accent">{advisor.position}</p>
              <p className="text-sm text-neutral-500">{advisor.department}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
