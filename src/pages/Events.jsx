import React from 'react';
import { PageMeta } from '../lib/seo';
import { EventsHero } from '../components/sections/events/EventsHero';
import { UpcomingEvents } from '../components/sections/events/UpcomingEvents';
import { FeaturedEvent } from '../components/sections/events/FeaturedEvent';
import { EventTimelineSection } from '../components/sections/events/EventTimelineSection';
import { EventGallerySection } from '../components/sections/events/EventGallerySection';
import { ClubStatistics } from '../components/sections/events/ClubStatistics';
import { RegistrationCta } from '../components/sections/events/RegistrationCta';
import { ContactSection } from '../components/sections/ContactSection';

export default function Events() {
  return (
    <>
      <PageMeta
        title="Events"
        description="Where the Fine Arts Club collective gathers, shows up, and shows its work — from the flagship Chiaroscuro exhibition to quiet weekly open studios."
      />
      <EventsHero />
      <UpcomingEvents />
      <FeaturedEvent />
      <EventTimelineSection />
      <EventGallerySection />
      <ClubStatistics />
      <RegistrationCta />
      <ContactSection />
    </>
  );
}
