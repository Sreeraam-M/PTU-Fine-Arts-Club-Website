import React from 'react';
import { CtaBanner } from '../../ui/CtaBanner';

export function RegistrationCta() {
  return (
    <CtaBanner
      id="registration"
      eyebrow="Take part"
      title="Your seat at the next show is open"
      description="Whether you're exhibiting, competing, or just want to sit in on a critique night -- every event on this page welcomes new faces."
      primaryCta={{ label: 'Become a member', to: '/membership' }}
      secondaryCta={{ label: 'Contact the club', to: '#contact' }}
    />
  );
}
