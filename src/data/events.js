/**
 * Events dataset.
 *
 * Single flat source for the unified Events page -- the same rows power
 * the Upcoming Events grid and the Featured Event split-screen, so a
 * standalone event-details page is no longer needed.
 *
 * Columns: slug, title, tagline, date, venue, category, status, featured,
 * excerpt, description, highlights.
 *
 * `status` is one of 'upcoming' | 'recurring' | 'past'.
 * `featured` (true/false) marks the single event promoted to the
 * Featured Event section; it is excluded from the grid to avoid repeats.
 * `highlights` is a semicolon-delimited string (kept scalar so the row
 * stays a single CSV cell) -- split on ';' when rendering as a list.
 */
export const events = [
  {
    slug: 'chiaroscuro-2026',
    title: 'Chiaroscuro',
    tagline: 'Our flagship annual exhibition',
    date: 'March 14–16, 2026',
    venue: 'PTU Main Gallery Hall',
    category: 'Exhibition',
    status: 'upcoming',
    featured: true,
    excerpt:
      'Chiaroscuro is our annual exhibition where student work commands the gallery walls -- the moment light cuts through shadow and talent meets opportunity.',
    description:
      'Chiaroscuro brings together a full year of student practice across painting, photography, illustration, and digital media. Works are curated and hung by the exhibitions committee, with an opening night reception, guided walkthroughs, and a juried award for best in show.',
    highlights:
      'Opening night reception with live music;Guided curator walkthroughs;Juried Best in Show award;Live portrait sketching booth',
  },
  {
    slug: 'frame-and-focus',
    title: 'Frame & Focus',
    tagline: 'Annual photography competition',
    date: 'January 24, 2026',
    venue: 'Innovation Block Atrium',
    category: 'Competition',
    status: 'upcoming',
    featured: false,
    excerpt: 'A single-day photography contest judged live, open to every skill level on campus.',
    description:
      'Members submit a themed series shot over the preceding month. Entries are printed, displayed, and judged live by a visiting photographer, with prizes across three categories.',
    highlights: '',
  },
  {
    slug: 'sketchbook-sessions',
    title: 'Sketchbook Sessions',
    tagline: 'Weekly life-drawing meetup',
    date: 'Every Wednesday evening',
    venue: 'Studio A, Design Block',
    category: 'Workshop',
    status: 'recurring',
    featured: false,
    excerpt: 'A relaxed weekly meetup for figure and still-life drawing, all mediums welcome.',
    description:
      'Drop-in life-drawing sessions with rotating short and long poses. Materials are provided for first-time attendees; regulars bring their own kit.',
    highlights: '',
  },
  {
    slug: 'late-night-critique',
    title: 'Late Night Critique',
    tagline: 'Monthly open studio & feedback session',
    date: 'Every third Friday',
    venue: 'Studio B, Design Block',
    category: 'Workshop',
    status: 'recurring',
    featured: false,
    excerpt: 'Steel sharpens steel in the late-night workshops where critique becomes craft.',
    description:
      'An informal monthly gathering where members bring in-progress work for peer critique. Open to all skill levels -- bring something unfinished, leave with direction.',
    highlights: '',
  },
  {
    slug: 'first-frame',
    title: 'First Frame',
    tagline: 'Orientation exhibition for new members',
    date: 'August 2025',
    venue: 'PTU Main Gallery Hall',
    category: 'Exhibition',
    status: 'past',
    featured: false,
    excerpt: 'Every masterpiece begins with a blank surface and a steady hand.',
    description:
      'First Frame is the induction showcase for incoming members, pairing first-time exhibitors with senior mentors to prepare and hang their debut piece.',
    highlights: '',
  },
];
