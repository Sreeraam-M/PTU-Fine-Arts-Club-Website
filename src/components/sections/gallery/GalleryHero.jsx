import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { PlaceholderMedia } from '../../ui/Placeholder';
import { Container, Eyebrow } from '../../ui/Layout';

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-bg-inverse">
      <Container className="relative z-10 grid grid-cols-1 gap-12 py-24 md:grid-cols-[1fr_1.1fr] md:items-center md:py-32">
        <Reveal>
          <Eyebrow inverse>Digital exhibition</Eyebrow>
          <h1 className="max-w-lg text-4xl font-bold leading-[1.05] text-ink-inverse sm:text-5xl md:text-6xl">
            The gallery, always open.
          </h1>
          <p className="mt-6 max-w-md text-ink-inverse-muted md:text-lg">
            A living exhibition of work from the collective -- illustration, photography, digital
            art, and design, curated the way we'd hang it on a real wall.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <PlaceholderMedia ratio="4/5" tone="dark" label="Featured work" className="border-border-inverse" />
        </Reveal>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-inverse/40 to-transparent" />
    </section>
  );
}
