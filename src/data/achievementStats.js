/**
 * Achievement statistics, feeding the StatCard grid and the hero
 * spotlight panel on the Achievements page. `icon` is a string key
 * mapped to a react-icon component where it's rendered, following the
 * same pattern as `icon` in clubStats.js and `socialIcons` in Footer.jsx.
 *
 * Columns: id, label, value, suffix, icon
 */
export const achievementStats = [
  { id: 'awards', label: 'Awards Won', value: 34, suffix: '+', icon: 'trophy' },
  { id: 'competitions', label: 'Competitions Participated', value: 58, suffix: '+', icon: 'medal' },
  { id: 'national', label: 'National Level Events', value: 12, suffix: '+', icon: 'calendarStar' },
  { id: 'workshops', label: 'Workshops Conducted', value: 65, suffix: '+', icon: 'palette' },
  { id: 'artists', label: 'Student Artists Recognized', value: 90, suffix: '+', icon: 'userVoice' },
];
