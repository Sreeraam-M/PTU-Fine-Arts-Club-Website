/**
 * Recognition Wall dataset -- feeds the editorial recognition grid on the
 * Achievements page (Awards, Certificates, Collaborations, Special
 * Mentions, and Institutional Recognition). Kept separate from the Major
 * Achievements dataset, which covers headline wins in depth -- this one
 * is the broader, lighter-touch archive of every honour earned.
 *
 * Columns: id, title, category, issuer, year
 * `category` matches a slug in `recognitionCategoryFilters` below, the
 * same pairing pattern used by artworks.js + artworkCategoryFilters.
 */
export const recognitionWall = [
  { id: 'rw-01', title: 'National Student Design Awards — Gold', category: 'awards', issuer: 'National Student Design Awards', year: '2025' },
  { id: 'rw-02', title: 'Best Student Collective', category: 'awards', issuer: 'South Zone Inter-University Arts Fest', year: '2025' },
  { id: 'rw-03', title: 'Certificate of Excellence in Curation', category: 'certificates', issuer: 'Puducherry Cultural Affairs Board', year: '2024' },
  { id: 'rw-04', title: 'Outstanding Workshop Series Certification', category: 'certificates', issuer: 'State Skill Development Mission', year: '2023' },
  { id: 'rw-05', title: 'Joint Exhibition with Alliance Fran\u00e7aise', category: 'collaborations', issuer: 'Alliance Fran\u00e7aise Puducherry', year: '2024' },
  { id: 'rw-06', title: 'Cross-Campus Mural Project', category: 'collaborations', issuer: 'Puducherry School of Architecture', year: '2025' },
  { id: 'rw-07', title: 'Jury Special Mention, Frame & Focus', category: 'special-mentions', issuer: 'Frame & Focus Jury Panel', year: '2024' },
  { id: 'rw-08', title: 'Editor\u2019s Pick, Student Design Digest', category: 'special-mentions', issuer: 'Student Design Digest', year: '2026' },
  { id: 'rw-09', title: 'Official Student Chapter Status', category: 'institutional-recognition', issuer: 'Puducherry Technological University', year: '2023' },
  { id: 'rw-10', title: 'Dean\u2019s Commendation for Cultural Contribution', category: 'institutional-recognition', issuer: 'Office of the Dean, Student Affairs', year: '2025' },
];

export const recognitionCategoryFilters = [
  { label: 'All', slug: 'all' },
  { label: 'Awards', slug: 'awards' },
  { label: 'Certificates', slug: 'certificates' },
  { label: 'Collaborations', slug: 'collaborations' },
  { label: 'Special mentions', slug: 'special-mentions' },
  { label: 'Institutional recognition', slug: 'institutional-recognition' },
];
