import React, { useMemo, useState } from 'react';
import { Reveal } from '../../ui/Reveal';
import { Badge } from '../../ui/Badge';
import { FilterPills } from '../../ui/FilterPills';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { recognitionWall, recognitionCategoryFilters } from '../../../data/recognitionWall';

function categoryLabel(slug) {
  return recognitionCategoryFilters.find((c) => c.slug === slug)?.label ?? slug;
}

/**
 * RecognitionWall
 * ---------------
 * Broader, lighter-touch archive of every honour earned (as opposed to
 * MajorAchievements, which covers headline wins in depth). Filterable via
 * the shared FilterPills primitive -- the same category/slug pairing
 * pattern already used by Artwork's category filter.
 */
export function RecognitionWall() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(
    () => (active === 'all' ? recognitionWall : recognitionWall.filter((r) => r.category === active)),
    [active]
  );

  return (
    <Section tone="muted" className="border-y border-border">
      <Container>
        <div className="mb-10 max-w-xl">
          <Eyebrow>Recognition wall</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            Every honour, in one place.
          </h2>
        </div>

        <FilterPills
          options={recognitionCategoryFilters}
          active={active}
          onChange={setActive}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 border border-border bg-surface p-6">
                <Badge tone="outline" className="w-fit">
                  {categoryLabel(item.category)}
                </Badge>
                <h3 className="text-lg font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-auto text-sm text-ink-muted">
                  {item.issuer} · {item.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
