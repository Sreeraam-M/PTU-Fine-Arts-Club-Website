import React from 'react';
import { PageMeta } from '../lib/seo';
import { Hero } from '../components/sections/home/Hero';
import { FeaturedWork } from '../components/sections/home/FeaturedWork';
import { TheMakers } from '../components/sections/home/TheMakers';
import { EventsWall } from '../components/sections/home/EventsWall';
import { ImageCta } from '../components/sections/home/ImageCta';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <PageMeta
        title="Fine Arts Club"
        description="Where art finds a home — the Fine Arts Club of Puducherry Technological University. Illustration, photography, digital art, and design from a student collective."
      />
      <Hero />
      <FeaturedWork />
      <TheMakers />
      <EventsWall />
      <ImageCta />
      <ContactSection />
    </>
  );
}
