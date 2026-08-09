import React from 'react';
import { BiTrophy, BiMedal, BiCalendarStar, BiPalette, BiUserVoice } from 'react-icons/bi';
import { Reveal } from '../../ui/Reveal';
import { StatCard } from '../../ui/StatCard';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { achievementStats } from '../../../data/achievementStats';

// Same icon-key mapping pattern as ClubStatistics (Events page) --
// achievementStats uses its own icon set, so the map lives here.
const statIcons = {
  trophy: BiTrophy,
  medal: BiMedal,
  calendarStar: BiCalendarStar,
  palette: BiPalette,
  userVoice: BiUserVoice,
};

/**
 * AchievementStats
 * ----------------
 * Light-toned StatCard grid summarising the club's recognition record.
 * Sits directly under the dark AchievementsHero to break up tone, mirroring
 * how Events alternates dark/light bands between Hero and ClubStatistics.
 */
export function AchievementStats() {
  return (
    <Section>
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            A record built one entry at a time.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {achievementStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.06}>
              <StatCard
                icon={statIcons[stat.icon]}
                value={stat.value.toLocaleString()}
                suffix={stat.suffix}
                label={stat.label}
                tone="light"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
