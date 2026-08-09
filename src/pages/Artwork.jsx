import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageMeta } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { Container, Section } from '../components/ui/Layout';
import { PlaceholderMedia } from '../components/ui/Placeholder';
import { FilterPills } from '../components/ui/FilterPills';
import { ContactSection } from '../components/sections/ContactSection';
import { artworks, artworkCategoryFilters } from '../data/artworks';

export default function Artwork() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? artworks
        : artworks.filter((a) => a.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <PageMeta
        title="Artwork"
        description="A curated selection of Fine Arts Club member work across illustration, photography, digital art, and design."
      />
      <PageHero
        eyebrow="Work"
        title="Artwork"
        description="A curated selection of member work across illustration, photography, digital art, and design."
      />
      <Section>
        <Container>
          <FilterPills
            options={artworkCategoryFilters}
            active={activeCategory}
            onChange={(slug) => setSearchParams(slug === 'all' ? {} : { category: slug })}
            className="mb-10"
          />

          <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-4 md:gap-6">
            {filtered.map((art) => (
              <div key={art.id}>
                <PlaceholderMedia ratio={art.ratio} label={art.title} className="mb-3" />
                <p className="text-sm font-medium text-ink">{art.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}
