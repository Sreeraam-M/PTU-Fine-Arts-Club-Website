import React from 'react';
import { PageMeta } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { Container, Section } from '../components/ui/Layout';
import { PlaceholderAvatar } from '../components/ui/Placeholder';
import { ContactSection } from '../components/sections/ContactSection';
import { team } from '../data/team';

export default function Team() {
  return (
    <>
      <PageMeta
        title="Team"
        description="Meet the student-run collective behind the Fine Arts Club — a team organised by members, for members."
      />
      <PageHero
        eyebrow="Team"
        title="The people behind the work"
        description="A student-run collective — organised by members, for members."
      />
      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
            {team.map((member, i) => (
              <div key={i}>
                <PlaceholderAvatar label={member.name} className="mb-4 w-full rounded-[var(--radius-sm)]" />
                <h3 className="font-semibold text-ink">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="text-xs text-ink-muted">{member.dept}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}
