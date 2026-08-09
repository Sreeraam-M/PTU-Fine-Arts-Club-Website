import React from 'react';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { MasonryGallery } from '../../ui/MasonryGallery';
import { eventGallery } from '../../../data/eventGallery';

export function EventGallerySection() {
  // Lightbox wiring is intentionally deferred -- MasonryGallery already
  // accepts onItemClick, so swapping this console log for a real modal
  // later is a one-line change here, nowhere else.
  const handleItemClick = (item) => {
    console.log('open lightbox for', item.id);
  };

  return (
    <Section id="gallery" tone="muted" className="border-t border-border">
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>From the archive</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            Moments from past events
          </h2>
        </div>
        <MasonryGallery items={eventGallery} onItemClick={handleItemClick} />
      </Container>
    </Section>
  );
}
