import React from 'react';
import { Reveal } from '../../ui/Reveal';
import { Badge } from '../../ui/Badge';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { PlaceholderAvatar } from '../../ui/Placeholder';
import { hallOfFame } from '../../../data/hallOfFame';

/**
 * HallOfFame
 * ----------
 * Credits the individual members behind the club's headline wins.
 * Follows the same avatar-grid pattern as About > Advisors so people-
 * focused sections stay visually consistent across the site.
 */
export function HallOfFame() {
  return (
    <Section id="hall-of-fame">
      <Container>
        <div className="mb-14 max-w-xl">
          <Eyebrow>Hall of fame</Eyebrow>
          <h2 className="text-3xl font-bold leading-[1.1] text-ink md:text-5xl">
            The people behind the wins.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {hallOfFame.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.06}>
              <PlaceholderAvatar label={member.name} className="mb-4 w-full rounded-[var(--radius-sm)]" />
              <Badge tone="outline" className="mb-2">
                {member.category}
              </Badge>
              <h3 className="font-bold leading-snug text-ink">{member.achievement}</h3>
              <p className="mt-1 text-sm text-ink-muted">
                {member.name} · {member.year}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
