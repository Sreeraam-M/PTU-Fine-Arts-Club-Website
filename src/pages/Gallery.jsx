import React from 'react';
import { PageMeta } from '../lib/seo';
import { GalleryHero } from '../components/sections/gallery/GalleryHero';
import { ExhibitionStats } from '../components/sections/gallery/ExhibitionStats';
import { CuratorsPicks } from '../components/sections/gallery/CuratorsPicks';
import { ExhibitionGrid } from '../components/sections/gallery/ExhibitionGrid';
import { SubmissionCta } from '../components/sections/gallery/SubmissionCta';
import { ContactSection } from '../components/sections/ContactSection';

export default function Gallery() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="A living exhibition of work from the Fine Arts Club collective — illustration, photography, digital art, and design, curated the way we'd hang it on a real wall."
      />
      <GalleryHero />
      <ExhibitionStats />
      <CuratorsPicks />
      <ExhibitionGrid />
      <SubmissionCta />
      <ContactSection />
    </>
  );
}
