import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Container, Eyebrow, Section } from '../../ui/Layout';

const lines = [
  'Creativity is not decoration.',
  'It is how we think before we build.',
  'It is discipline wearing a different coat.',
];

export function CreativePhilosophy() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="flex justify-center">Creative philosophy</Eyebrow>
          <div className="space-y-2">
            {lines.map((line, i) => (
              <Reveal
                key={line}
                as="p"
                delay={i * 0.12}
                className="text-2xl font-bold leading-tight text-ink md:text-4xl"
              >
                {line}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
