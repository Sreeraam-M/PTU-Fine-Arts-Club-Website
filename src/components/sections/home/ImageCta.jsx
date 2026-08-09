import React from 'react';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Layout';
import { Reveal } from '../../ui/Reveal';

/**
 * Warm, textured CTA band. In both style explorations this block held a
 * consistent warm taupe/gray tone regardless of the overall light/dark
 * direction, so it's built as its own fixed-tone section rather than
 * inheriting from the page background.
 */
export function ImageCta() {
  return (
    <section className="relative overflow-hidden bg-accent-tertiary py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-inverse/40 via-transparent to-bg-inverse/20" />
      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink-inverse md:text-6xl">
            Ready to make your mark
          </h2>
          <p className="mt-5 text-neutral-200 md:text-lg">
            The collective grows stronger with every new voice. Your perspective is the one we
            have been waiting for.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/membership" variant="primary" size="md">
              Membership
            </Button>
            <Button to="/about" variant="accent-outline" size="md">
              About
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
