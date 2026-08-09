import { useEffect } from 'react';

// SITE_URL is used only for the static public/sitemap.xml (which cannot
// read window.location). Canonical + Open Graph urls in <PageMeta>
// resolve from window.location.origin at runtime, so they always match
// whatever domain the site is served from. Update SITE_URL to the real
// production origin at deployment time.
export const SITE_URL = 'https://fineartsclub.ptu.edu.in';

const SITE_NAME = 'Fine Arts Club — Puducherry Technological University';
const DEFAULT_DESCRIPTION =
  'Fine Arts Club of Puducherry Technological University — a student collective for illustration, photography, digital art, and design.';

function upsertMeta(selector, create, set) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }
  set(node);
}

/**
 * PageMeta
 * --------
 * Sets per-page <title> and search/social meta tags client-side. This is
 * the "React Helmet or equivalent" approach referenced by TRD §15.2,
 * implemented as a small dependency-free component. Because the site is
 * a client-rendered SPA, these tags are set on mount; index.html holds
 * the global defaults for crawlers that render before JS runs.
 *
 * Usage:
 *   <PageMeta title="Gallery" description="A living exhibition of work from the collective." />
 */
export function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Fine Arts Club` : SITE_NAME;
    const metaDescription = description || DEFAULT_DESCRIPTION;
    const origin = window.location.origin;
    const url = origin + window.location.pathname;

    document.title = fullTitle;

    const setMeta = (selector, name, content) => {
      upsertMeta(selector, () => {
        const el = document.createElement('meta');
        el.setAttribute(name, 'content');
        return el;
      }, (el) => el.setAttribute('content', content));
    };

    setMeta('meta[name="description"]', 'name', metaDescription);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property', fullTitle);
    setMeta('meta[property="og:description"]', 'property', metaDescription);
    setMeta('meta[property="og:url"]', 'property', url);
    setMeta('meta[property="og:site_name"]', 'property', SITE_NAME);
    setMeta('meta[property="og:type"]', 'property', 'website');

    // Twitter Cards
    setMeta('meta[name="twitter:card"]', 'name', 'summary');
    setMeta('meta[name="twitter:title"]', 'name', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', metaDescription);

    // Canonical — matches the resolved route URL
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description]);

  return null;
}
