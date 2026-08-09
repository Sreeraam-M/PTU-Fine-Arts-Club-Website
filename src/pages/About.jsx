import React from 'react';
import { PageMeta } from '../lib/seo';
import { AboutHero } from '../components/sections/about/AboutHero';
import { WhoWeAre } from '../components/sections/about/WhoWeAre';
import { Journey } from '../components/sections/about/Journey';
import { VisionMission } from '../components/sections/about/VisionMission';
import { Advisors } from '../components/sections/about/Advisors';
import { ExecutiveMessage } from '../components/sections/about/ExecutiveMessage';
import { CreativePhilosophy } from '../components/sections/about/CreativePhilosophy';
import { ContactSection } from '../components/sections/ContactSection';

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Meet the Fine Arts Club of Puducherry Technological University — a collective of makers who happen to study engineering. Who we are, our journey, and the people behind the work."
      />
      <AboutHero />
      <WhoWeAre />
      <Journey />
      <VisionMission />
      <Advisors />
      <ExecutiveMessage />
      <CreativePhilosophy />
      <ContactSection />
    </>
  );
}
