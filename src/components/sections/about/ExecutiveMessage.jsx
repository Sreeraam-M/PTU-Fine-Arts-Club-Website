import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { PlaceholderAvatar } from '../../ui/Placeholder';

export function ExecutiveMessage() {
  return (
    <Section tone="dark">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow inverse className="flex justify-center">Executive message</Eyebrow>
            <blockquote className="text-center text-2xl font-medium leading-snug text-ink-inverse md:text-4xl">
              &ldquo;We didn&rsquo;t start this club to decorate our resumes. We started it
              because some of us needed a room where a circuit diagram and a charcoal sketch
              could sit on the same desk without either one apologizing for the other. If
              you&rsquo;ve ever felt that pull, you already belong here.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex items-center justify-center gap-4">
            <PlaceholderAvatar label="President" className="size-14 rounded-[var(--radius-sm)]" iconClassName="size-6" />
            <div className="text-left">
              <p className="font-semibold text-ink-inverse">President Name</p>
              <p className="text-sm text-neutral-400">President, Fine Arts Club</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
