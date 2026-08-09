/**
 * The Makers — the people behind PTU Fine Arts Club (homepage).
 *
 * CMS contract
 *   mottos    : string[]   — three short editorial mottos (static branding)
 *   faculty   : { id, photo, name, designation }[]   — Faculty Coordinators
 *   committee : { id, photo, name, position }[]      — Core Committee
 *
 * `photo` is a public asset path (e.g. "/people/name.jpg") or null, in which
 * case the card renders a placeholder portrait. The carousel shows four cards
 * per view on desktop and reveals its flanking prev/next controls automatically
 * whenever more than four people are listed — no frontend change is needed as
 * the roster grows or shrinks, only this file.
 *
 * The roster below is placeholder content — swap it for real CMS data.
 */
export const makers = {
  mottos: ['Create Together', 'Learn Together', 'Inspire Others'],

  faculty: [
    { id: 'fac-1', photo: null, name: 'Dr. S. Ramachandran', designation: 'Faculty Convenor' },
    { id: 'fac-2', photo: null, name: 'Prof. Meena Krishnan', designation: 'Co-Convenor' },
    { id: 'fac-3', photo: null, name: 'Dr. R. Venkatesh', designation: 'Faculty Advisor' },
    { id: 'fac-4', photo: null, name: 'Prof. Anitha Suresh', designation: 'Faculty Advisor' },
    { id: 'fac-5', photo: null, name: 'Mr. G. Prakash', designation: 'Faculty Advisor' },
  ],

  committee: [
    { id: 'com-1', photo: null, name: 'Aarav Iyer', position: 'President' },
    { id: 'com-2', photo: null, name: 'Meghna Ravi', position: 'Vice President' },
    { id: 'com-3', photo: null, name: 'Karthik Subramanian', position: 'Secretary' },
    { id: 'com-4', photo: null, name: 'Priya Raman', position: 'Treasurer' },
    { id: 'com-5', photo: null, name: 'Aditya Rao', position: 'Design Lead' },
    { id: 'com-6', photo: null, name: 'Ananya Nair', position: 'Photography Lead' },
    { id: 'com-7', photo: null, name: 'Vignesh Kumar', position: 'Events Coordinator' },
    { id: 'com-8', photo: null, name: 'Harini Menon', position: 'Outreach Lead' },
  ],
};
