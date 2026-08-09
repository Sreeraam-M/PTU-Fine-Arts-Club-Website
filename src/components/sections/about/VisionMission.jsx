import React from 'react';
import { BiCompass, BiFlag } from 'react-icons/bi';
import { Reveal } from '../../ui/Reveal';
import { Container, Eyebrow, Section } from '../../ui/Layout';

const cards = [
  {
    icon: BiCompass,
    label: 'Vision',
    body: 'To become the definitive creative voice of engineering education in India — a place where technical minds shape the visual and cultural life of their institution, not just its output.',
  },
  {
    icon: BiFlag,
    label: 'Mission',
    body: 'To give every student, regardless of major, a standing invitation to make — to paint, shoot, design, and exhibit without asking permission first.',
  },
];

export function VisionMission() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.label}
                delay={i * 0.1}
                className="border border-border p-8 md:p-10"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent/10 text-accent">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <Eyebrow>{card.label}</Eyebrow>
                <p className="text-lg leading-relaxed text-ink md:text-xl">{card.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
