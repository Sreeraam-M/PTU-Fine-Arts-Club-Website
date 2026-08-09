import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * -----------
 * On route change without a hash, resets scroll to the top instantly.
 * On a hash route (e.g. /about#contact), smooth-scrolls to the target
 * element once the (lazy) page content is mounted, so the anchor never
 * races the async page chunk.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const id = hash.slice(1);
    let cancelled = false;

    const attempt = (tries) => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (tries < 10) {
        window.setTimeout(() => attempt(tries + 1), 60);
      }
    };

    const raf = window.requestAnimationFrame(() => attempt(0));
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
    };
  }, [pathname, hash]);

  return null;
}
