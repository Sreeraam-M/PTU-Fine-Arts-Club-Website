import React from 'react';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { Timeline } from '../../ui/Timeline';
import { achievementTimeline } from '../../../data/achievementTimeline';

/**
 * AchievementsTimelineSection
 * ---------------------------
 * Reuses the shared Timeline primitive (already used by About > Journey
 * and Events > EventTimelineSection) to trace how the club's recognition
 * record grew year over year. Distinct dataset from journey.js -- this
 * one is specifically about awards, not the club's founding story.
 */
export function AchievementsTimelineSection() {
  return (
    <Section id="timeline">
      <Container>
        <div className="mb-16 max-w-xl">
          <Eyebrow>How the record grew</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            From a first certificate to national recognition.
          </h2>
        </div>
        <Timeline items={achievementTimeline} surfaceClassName="border-bg" />
      </Container>
    </Section>
  );
}
