/**
 * Events Wall — the editorial exhibition timeline on the homepage.
 *
 * This homepage section is a preview: featured event posters rotate inside a
 * fixed 2:1 exhibition frame (see EventsTimeline). The full event archive
 * lives on the dedicated Events page.
 *
 * CMS contract
 *   cta            : { label, to }        — the single quiet editorial link
 *   featuredEvents : { id, title, src }[] — any length; the timeline animates
 *                                            1, 3, 5, 10+ posters unchanged
 *
 * Every poster renders inside a frame that is always 1000:500 (2:1). Uploaded
 * posters of any other ratio are contained, centered and never stretched,
 * cropped or distorted. The SVG data-URIs below are temporary development
 * placeholders — swap `src` for real uploaded posters during CMS integration;
 * nothing else changes.
 */

const TONES = [
  { bg: '#7a2e2e', ink: '#f8f5f0', accent: '#d68a63', line: '#c86b3c' },
  { bg: '#c86b3c', ink: '#f8f5f0', accent: '#7a2e2e', line: '#f8f5f0' },
  { bg: '#7a6a45', ink: '#f8f5f0', accent: '#c86b3c', line: '#f8f5f0' },
];

const placeholder = (n) => {
  const t = TONES[n % TONES.length];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="500" viewBox="0 0 1000 500">` +
    `<rect width="1000" height="500" fill="${t.bg}"/>` +
    `<circle cx="840" cy="80" r="150" fill="${t.accent}" opacity="0.3"/>` +
    `<circle cx="130" cy="440" r="130" fill="${t.accent}" opacity="0.18"/>` +
    `<text x="500" y="226" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="700" fill="${t.ink}">EVENT POSTER 0${n + 1}</text>` +
    `<text x="500" y="290" text-anchor="middle" font-family="sans-serif" font-size="24" letter-spacing="10" fill="${t.accent}">PTU FINE ARTS CLUB</text>` +
    `<text x="500" y="430" text-anchor="middle" font-family="sans-serif" font-size="22" letter-spacing="4" fill="${t.ink}" opacity="0.8">ACADEMIC YEAR 2025-26</text>` +
    `</svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};

export const eventsWall = {
  cta: { label: 'Explore All Events', to: '/events' },
  featuredEvents: [
    { id: 'poster-01', title: 'Event Poster 01', src: placeholder(0) },
    { id: 'poster-02', title: 'Event Poster 02', src: placeholder(1) },
    { id: 'poster-03', title: 'Event Poster 03', src: placeholder(2) },
  ],
};
