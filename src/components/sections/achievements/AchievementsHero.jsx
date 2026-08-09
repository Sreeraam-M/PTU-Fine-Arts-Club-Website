import React from 'react';
import { BiTrophy, BiMedal, BiCalendarStar } from 'react-icons/bi';
import { Reveal } from '../../ui/Reveal';
import { Button } from '../../ui/Button';
import { Container, Eyebrow } from '../../ui/Layout';
import { achievementStats } from '../../../data/achievementStats';

// Same icon-key mapping pattern as AchievementStats -- kept local since
// only the hero's mini-stat row needs it.
const spotlightIcons = {
  trophy: BiTrophy,
  medal: BiMedal,
  calendarStar: BiCalendarStar,
};

/**
 * AchievementsHero
 * ----------------
 * Unlike the photo-grid heroes on About/Gallery/Events, this hero pairs
 * the headline with a "trophy spotlight" panel pulled live from
 * achievementStats -- a distinct visual identity that fits a page about
 * recognition rather than imagery, while keeping the same dark editorial
 * hero shell (Reveal + Eyebrow + Container) used across the site.
 */
export function AchievementsHero() {
  const headline = achievementStats.find((stat) => stat.id === 'awards');
  const miniStats = achievementStats.filter(
    (stat) => stat.id === 'competitions' || stat.id === 'national'
  );

  return (
    <section className="relative overflow-hidden bg-bg-inverse">
      <Container className="relative z-10 grid grid-cols-1 gap-12 py-24 md:grid-cols-[1.3fr_1fr] md:items-center md:py-32">
        <Reveal>
          <Eyebrow inverse>Achievements</Eyebrow>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-ink-inverse sm:text-5xl md:text-6xl">
            Every wall we&rsquo;ve hung on has earned its place.
          </h1>
          <p className="mt-6 max-w-md text-ink-inverse-muted md:text-lg">
            From a borrowed classroom corridor to national recognition -- this is the record of
            what the collective has built, one award, one exhibition, one late night at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="#major-achievements" variant="primary" size="md">
              See major wins
            </Button>
            <Button to="#hall-of-fame" variant="accent-outline" size="md">
              Meet the Hall of Fame
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-border-inverse bg-bg-inverse/40 p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent/15 text-accent-soft">
                <BiTrophy className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-4xl font-bold leading-none text-ink-inverse md:text-5xl">
                  {headline?.value}
                  <span className="text-accent-soft">{headline?.suffix}</span>
                </p>
                <p className="mt-1 text-sm text-ink-inverse-muted">{headline?.label}</p>
              </div>
            </div>

            <div className="mt-8 space-y-5 border-t border-border-inverse pt-6">
              {miniStats.map((stat) => {
                const Icon = spotlightIcons[stat.icon];
                return (
                  <div key={stat.id} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2.5 text-sm text-ink-inverse-muted">
                      {Icon && <Icon className="size-4 shrink-0 text-copper-light" aria-hidden="true" />}
                      {stat.label}
                    </span>
                    <span className="font-heading text-lg font-bold text-ink-inverse">
                      {stat.value}
                      {stat.suffix}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-inverse/40 to-transparent" />
    </section>
  );
}
