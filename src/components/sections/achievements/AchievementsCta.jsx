import React from 'react';
import { CtaBanner } from '../../ui/CtaBanner';

/**
 * AchievementsCta
 * ---------------
 * Closing call-to-action, same shape as Gallery > SubmissionCta. Primary
 * CTA drives toward Membership (every content page must surface this per
 * the PRD's membership-growth objective); secondary follows the
 * documented Achievements -> Team navigation flow.
 */
export function AchievementsCta() {
  return (
    <CtaBanner
      id="join"
      eyebrow="Add to the record"
      title="Your win could be the next entry"
      description="Every award on this wall started with someone showing up to a meeting. Join the collective and help write what comes next."
      primaryCta={{ label: 'Become a member', to: '/membership' }}
      secondaryCta={{ label: 'Meet the team', to: '/team' }}
    />
  );
}
