/**
 * Event program timeline data, feeding the shared Timeline component on
 * the Events page (distinct from the club's own history in data/journey.js).
 *
 * Kept as a flat array of primitive fields so this can be swapped for a
 * real CSV later with zero changes to the Timeline component -- e.g.:
 *
 *   import Papa from 'papaparse';
 *   const { data } = Papa.parse(csvText, { header: true });
 *   // data rows already match { year, title, description }
 *
 * Columns: year, title, description
 */
export const eventTimeline = [
  {
    year: '2022',
    title: 'Chiaroscuro I',
    description:
      'The first edition of our flagship exhibition opened in a single borrowed classroom, showing work from just fourteen members.',
  },
  {
    year: '2023',
    title: 'Late Night Critique launches',
    description:
      'A monthly open-studio format began as a way to keep momentum between the big annual shows -- it has run every month since.',
  },
  {
    year: '2024',
    title: 'Frame & Focus debuts',
    description:
      'Our first dedicated photography competition drew entries from outside the club for the first time, judged live in the Innovation Block Atrium.',
  },
  {
    year: '2025',
    title: 'Chiaroscuro goes national',
    description:
      'The fourth edition expanded to a three-day format with an external juror panel and press coverage beyond the university.',
  },
  {
    year: '2026',
    title: 'Chiaroscuro V',
    description:
      'This year\u2019s edition returns to the Main Gallery Hall with an expanded highlights program and a new Best in Show award.',
  },
];
