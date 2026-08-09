import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Card } from '../../ui/Card';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { achievements } from '../../../data/achievements';

// recognitionLevel -> Badge tone, so the highest honours read most
// prominent without introducing a new Badge variant.
const levelTone = {
  National: 'nutmeg',
  Zonal: 'accent',
  State: 'accent',
  University: 'outline',
};

/**
 * MajorAchievements
 * ------------------
 * Card grid for the headline wins in `achievements.js` -- replaces the
 * plain divided-list rendering the page previously used, bringing
 * Achievements in line with the editorial, media-forward Card treatment
 * already used on Events and Gallery. Reuses the shared Card primitive
 * with no new props.
 */
export function MajorAchievements() {
  return (
    <Section id="major-achievements" tone="muted" className="border-y border-border">
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>Major wins</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            The honours that mark the way.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <Card
                mediaRatio="4/3"
                mediaLabel={item.title}
                badge={item.recognitionLevel}
                badgeTone={levelTone[item.recognitionLevel] ?? 'accent'}
                category={item.category}
                title={item.title}
                meta={`${item.issuer} · ${item.year}`}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
