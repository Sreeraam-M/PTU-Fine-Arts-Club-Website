import React from 'react';
import { BiImages, BiCategory, BiUserVoice } from 'react-icons/bi';
import { Reveal } from '../../ui/Reveal';
import { StatCard } from '../../ui/StatCard';
import { Container, Section } from '../../ui/Layout';
import { artworks, artworkCategoryFilters } from '../../../data/artworks';

export function ExhibitionStats() {
  // Computed from the live dataset rather than hardcoded, so the numbers
  // never drift out of sync with what's actually on display.
  const totalWorks = artworks.length;
  const disciplineCount = artworkCategoryFilters.filter((c) => c.slug !== 'all').length;
  const artistCount = new Set(artworks.map((a) => a.artist)).size;

  const stats = [
    { id: 'works', icon: BiImages, value: totalWorks, suffix: '', label: 'Works on display' },
    { id: 'disciplines', icon: BiCategory, value: disciplineCount, suffix: '', label: 'Disciplines' },
    { id: 'artists', icon: BiUserVoice, value: artistCount, suffix: '+', label: 'Contributing artists' },
  ];

  return (
    <Section tone="muted" size="compact" className="border-b border-border">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.06}>
              <StatCard icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
