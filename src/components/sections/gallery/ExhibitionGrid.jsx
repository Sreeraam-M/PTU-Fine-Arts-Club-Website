import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterPills } from '../../ui/FilterPills';
import { MasonryGallery } from '../../ui/MasonryGallery';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { artworks, artworkCategoryFilters } from '../../../data/artworks';

export function ExhibitionGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';

  // Curator's Picks already showcases featured pieces above, so the main
  // wall shows everything else -- no repeats between sections.
  const wallWorks = useMemo(() => artworks.filter((art) => !art.featured), []);

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? wallWorks
        : wallWorks.filter((art) => art.category === activeCategory),
    [wallWorks, activeCategory]
  );

  const items = useMemo(
    () =>
      filtered.map((art) => ({
        id: art.id,
        label: art.title,
        category: artworkCategoryFilters.find((c) => c.slug === art.category)?.label ?? art.category,
        ratio: art.ratio,
      })),
    [filtered]
  );

  const handleFilterChange = (slug) => {
    setSearchParams(slug === 'all' ? {} : { category: slug });
  };

  return (
    <Section id="wall" tone="muted" className="border-t border-border">
      <Container>
        <div className="mb-10 max-w-xl">
          <Eyebrow>The wall</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            Browse the full collection
          </h2>
        </div>

        <FilterPills
          options={artworkCategoryFilters}
          active={activeCategory}
          onChange={handleFilterChange}
          className="mb-12"
        />

        {items.length > 0 ? (
          <MasonryGallery items={items} />
        ) : (
          <p className="text-ink-muted">No works in this category yet -- check back soon.</p>
        )}
      </Container>
    </Section>
  );
}
