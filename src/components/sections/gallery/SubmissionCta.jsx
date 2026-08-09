import React from 'react';
import { CtaBanner } from '../../ui/CtaBanner';

export function SubmissionCta() {
  return (
    <CtaBanner
      id="submit"
      eyebrow="Get on the wall"
      title="Your work could hang here next"
      description="Submissions are open to every member, every discipline, all year round -- not just during Chiaroscuro season."
      primaryCta={{ label: 'Become a member', to: '/membership' }}
      secondaryCta={{ label: 'See upcoming shows', to: '/events' }}
    />
  );
}
