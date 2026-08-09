/**
 * Journey timeline data.
 *
 * Kept as a flat array of primitive fields (year, title, description) so
 * this can be swapped for a real CSV later with zero changes to the
 * Journey component — e.g.:
 *
 *   import Papa from 'papaparse';
 *   const { data } = Papa.parse(csvText, { header: true });
 *   // data rows already match { year, title, description }
 *
 * Columns: year, title, description
 */
export const journey = [
  {
    year: '2019',
    title: 'First sketches',
    description:
      'A handful of engineering students began meeting after lectures to paint, shoot, and sketch outside the syllabus, borrowing studio space wherever they could find it.',
  },
  {
    year: '2021',
    title: 'First public show',
    description:
      'Our first small exhibition filled a classroom corridor for one weekend — every seat and wall borrowed from somewhere else.',
  },
  {
    year: '2022',
    title: 'Chiaroscuro begins',
    description:
      'We launched Chiaroscuro, our flagship annual exhibition, now the centerpiece of the club\u2019s creative year.',
  },
  {
    year: '2023',
    title: 'University recognition',
    description:
      'The Fine Arts Club received formal recognition as an official student chapter of Puducherry Technological University.',
  },
  {
    year: '2024',
    title: 'Cross-department growth',
    description:
      'Membership crossed 150 students drawn from every engineering discipline on campus, not just design-adjacent branches.',
  },
  {
    year: '2025',
    title: 'National recognition',
    description:
      'Members carried the club\u2019s name beyond Puducherry, earning national honours in digital art and photography.',
  },
];
