/**
 * Major Achievements dataset -- the headline wins featured in depth on
 * the Achievements page (Major Achievements section). Each row supports
 * a title, year, category, recognition level, issuing body, and a short
 * description, and maps directly onto the shared Card component.
 *
 * Columns: id, title, year, category, recognitionLevel, issuer, description
 * `recognitionLevel` is one of 'University' | 'Zonal' | 'State' | 'National'.
 */
export const achievements = [
  {
    id: 'best-emerging-collective-2026',
    title: 'Best Emerging Collective',
    year: '2026',
    category: 'Institutional',
    recognitionLevel: 'National',
    issuer: 'National Student Arts Council',
    description:
      'Named among the top rising student arts collectives in the country for sustained growth in the scale and quality of work produced.',
  },
  {
    id: 'best-student-collective-2025',
    title: 'Best Student Collective',
    year: '2025',
    category: 'Exhibition',
    recognitionLevel: 'Zonal',
    issuer: 'South Zone Inter-University Arts Fest',
    description: 'Recognised for consistency and range of work exhibited across the year.',
  },
  {
    id: 'gold-digital-art-2025',
    title: 'Gold — Digital Art Category',
    year: '2025',
    category: 'Digital Art',
    recognitionLevel: 'National',
    issuer: 'National Student Design Awards',
    description:
      'Awarded to a member for a generative-art series exploring campus architecture.',
  },
  {
    id: 'best-booth-design-2024',
    title: 'Best Booth Design',
    year: '2024',
    category: 'Design',
    recognitionLevel: 'University',
    issuer: 'PTU Annual Cultural Fest',
    description: "The club's installation-style booth was cited for its immersive presentation.",
  },
  {
    id: 'photography-excellence-2024',
    title: 'Photography Excellence Award',
    year: '2024',
    category: 'Photography',
    recognitionLevel: 'State',
    issuer: 'Puducherry Regional Photography Meet',
    description: "A member's photo-essay on local craftspeople received top honours.",
  },
  {
    id: 'founding-recognition-2023',
    title: 'Founding Recognition',
    year: '2023',
    category: 'Institutional',
    recognitionLevel: 'University',
    issuer: 'Puducherry Technological University',
    description: 'Formal recognition as an official student chapter by the university.',
  },
];
