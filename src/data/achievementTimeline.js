/**
 * Achievement timeline data, feeding the shared Timeline component on
 * the Achievements page. Distinct from data/journey.js (the club's
 * founding story on the About page) -- this timeline tracks specifically
 * how the club's recognition and awards record grew year over year.
 *
 * Kept as a flat array of primitive fields so this can be swapped for a
 * real CSV later with zero changes to the Timeline component.
 *
 * Columns: year, title, description
 */
export const achievementTimeline = [
  {
    year: '2021',
    title: 'First award',
    description:
      'A small campus-level fest handed the collective its first certificate -- proof that work made after lectures could still hold up against a jury.',
  },
  {
    year: '2022',
    title: 'Regional breakthrough',
    description:
      'A member\u2019s photography took top honours at a regional meet, the club\u2019s first recognition from outside the university.',
  },
  {
    year: '2023',
    title: 'National debut',
    description:
      'Formal recognition as an official student chapter coincided with the club\u2019s first national-level shortlist for a digital art piece.',
  },
  {
    year: '2024',
    title: 'Wins across categories',
    description:
      'Booth design and photography awards landed in the same year, showing the range of disciplines the collective now competes in.',
  },
  {
    year: '2025',
    title: 'Zonal champions, national gold',
    description:
      'Best Student Collective at the zonal level and a Gold in Digital Art nationally -- the club\u2019s strongest single year yet.',
  },
  {
    year: '2026',
    title: 'National spotlight',
    description:
      'Named Best Emerging Collective nationally, marking recognition not just for individual pieces but for the collective itself.',
  },
];
