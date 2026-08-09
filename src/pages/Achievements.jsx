import React from 'react';
import { PageMeta } from '../lib/seo';
import { AchievementsHero } from '../components/sections/achievements/AchievementsHero';
import { AchievementStats } from '../components/sections/achievements/AchievementStats';
import { MajorAchievements } from '../components/sections/achievements/MajorAchievements';
import { AchievementsTimelineSection } from '../components/sections/achievements/AchievementsTimelineSection';
import { RecognitionWall } from '../components/sections/achievements/RecognitionWall';
import { HallOfFame } from '../components/sections/achievements/HallOfFame';
import { AchievementsCta } from '../components/sections/achievements/AchievementsCta';
import { ContactSection } from '../components/sections/ContactSection';

export default function Achievements() {
  return (
    <>
      <PageMeta
        title="Achievements"
        description="The record of what the Fine Arts Club has built — awards, exhibitions, and national recognition earned one entry at a time."
      />
      <AchievementsHero />
      <AchievementStats />
      <MajorAchievements />
      <AchievementsTimelineSection />
      <RecognitionWall />
      <HallOfFame />
      <AchievementsCta />
      <ContactSection />
    </>
  );
}
