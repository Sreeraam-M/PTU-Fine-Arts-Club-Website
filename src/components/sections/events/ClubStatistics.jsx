import React from 'react';
import { BiCalendarEvent, BiGroup, BiPalette, BiTrophy, BiImages } from 'react-icons/bi';
import { Reveal } from '../../ui/Reveal';
import { StatCard } from '../../ui/StatCard';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { clubStats } from '../../../data/clubStats';

const statIcons = {
  calendar: BiCalendarEvent,
  users: BiGroup,
  palette: BiPalette,
  trophy: BiTrophy,
  images: BiImages,
};

export function ClubStatistics() {
  return (
    <Section tone="dark">
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow inverse>By the numbers</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink-inverse md:text-5xl">
            Club statistics
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {clubStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.06}>
              <StatCard
                icon={statIcons[stat.icon]}
                value={stat.value.toLocaleString()}
                suffix={stat.suffix}
                label={stat.label}
                tone="dark"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
