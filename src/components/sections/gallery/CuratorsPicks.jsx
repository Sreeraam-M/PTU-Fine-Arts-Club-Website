import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Card } from '../../ui/Card';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { artworks, artworkCategoryFilters } from '../../../data/artworks';

function categoryLabel(slug) {
  return artworkCategoryFilters.find((c) => c.slug === slug)?.label ?? slug;
}

export function CuratorsPicks() {
  const picks = artworks.filter((art) => art.featured);
  if (picks.length === 0) return null;

  return (
    <Section>
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>Curator's picks</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            This month, on the wall
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((art, i) => (
            <Reveal key={art.id} delay={i * 0.08}>
              <Card
                mediaRatio={art.ratio}
                mediaLabel={art.title}
                badge="Curator's pick"
                badgeTone="nutmeg"
                category={categoryLabel(art.category)}
                title={art.title}
                meta={`${art.artist} · ${art.medium}, ${art.year}`}
                description={art.description}
                ctaLabel="Explore this discipline"
                ctaTo={`/artwork?category=${art.category}`}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
