/**
 * Club statistics data, feeding the StatCard grid on the Events page.
 * `icon` is a string key mapped to a react-icon component where it's
 * rendered, following the same pattern as socialIcons in Footer.jsx.
 *
 * Columns: id, label, value, suffix, icon
 */
export const clubStats = [
  { id: 'events', label: 'Events conducted', value: 48, suffix: '+', icon: 'calendar' },
  { id: 'participants', label: 'Participants engaged', value: 3200, suffix: '+', icon: 'users' },
  { id: 'workshops', label: 'Workshops hosted', value: 65, suffix: '+', icon: 'palette' },
  { id: 'competitions', label: 'Competitions run', value: 22, suffix: '+', icon: 'trophy' },
  { id: 'artworks', label: 'Artworks displayed', value: 540, suffix: '+', icon: 'images' },
];
