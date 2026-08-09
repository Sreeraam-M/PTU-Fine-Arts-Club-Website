import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { eventsWall } from '../../../data/eventsWall';

const HOLD_MS = 5000;
const DURATION_MS = 800;
const RESUME_MS = 6000;
const EASE = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
const WHEEL_THRESHOLD = 60;
const SWIPE_THRESHOLD = 40;

/**
 * EventsTimeline — an editorial exhibition timeline.
 *
 * Featured event posters rotate inside a fixed 1000:500 (2:1) exhibition
 * frame. The track of stacked posters translates vertically on the GPU
 * (translate3d only) — the current poster slides up out of the frame while
 * the next rises from below and stops perfectly centered, then holds.
 *
 * Autoplay starts when the frame enters the viewport (IntersectionObserver),
 * pauses when it leaves, and loops infinitely. Wheel / arrow keys / vertical
 * swipe override autoplay; after 6s of no interaction autoplay resumes. Any
 * number of posters is supported without changing the component.
 */
export function EventsTimeline({ events = eventsWall.featuredEvents }) {
  const count = events.length;
  const reduced = useReducedMotion();

  const frameRef = useRef(null);
  const visibleRef = useRef(false);
  const transitioningRef = useRef(false);
  const snappingRef = useRef(false);
  const holdTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const wheelAccRef = useRef(0);
  const touchStartRef = useRef(null);

  // Track is rendered as [last, ...events, first] so the loop wraps cleanly:
  // reaching either duplicate snaps back to the identical real position with
  // the transition disabled — the frame never shows a jump.
  const slides = count > 1 ? [events[count - 1], ...events, events[0]] : events;

  const [active, setActive] = useState(count > 1 ? 1 : 0);

  const go = useCallback(
    (dir, auto = false) => {
      if (count <= 1 || transitioningRef.current) return;
      transitioningRef.current = true;
      setActive((a) => {
        const next = a + dir;
        if (next > count) return count + 1;
        if (next < 0) return 0;
        return next;
      });
      window.setTimeout(() => {
        snappingRef.current = true;
        const snap = (a) => {
          if (a === count + 1) return 1;
          if (a === 0) return count;
          return a;
        };
        setActive(snap);
        window.setTimeout(() => {
          snappingRef.current = false;
          transitioningRef.current = false;
          if (auto) resumeAutoplayRef.current();
        }, 30);
      }, DURATION_MS + 40);
    },
    [count]
  );

  const resumeAutoplay = useCallback(() => {
    clearTimeout(holdTimerRef.current);
    if (!visibleRef.current || reduced || count <= 1) return;
    holdTimerRef.current = window.setTimeout(() => go(1, true), HOLD_MS);
  }, [go, reduced, count]);

  const resumeAutoplayRef = useRef(resumeAutoplay);
  resumeAutoplayRef.current = resumeAutoplay;

  const manual = useCallback(
    (dir) => {
      clearTimeout(resumeTimerRef.current);
      clearTimeout(holdTimerRef.current);
      go(dir, false);
      resumeTimerRef.current = window.setTimeout(() => {
        if (visibleRef.current) resumeAutoplayRef.current();
      }, RESUME_MS);
    },
    [go]
  );

  // Pause autoplay off-screen, resume on re-entry.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        visibleRef.current = entries[0].isIntersecting;
        if (entries[0].isIntersecting) {
          resumeAutoplayRef.current();
        } else {
          clearTimeout(holdTimerRef.current);
          clearTimeout(resumeTimerRef.current);
          wheelAccRef.current = 0;
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(holdTimerRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Wheel (desktop) and swipe (touch) navigation. Wheel is registered natively
  // non-passive so the poster advance is the interaction over the frame.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return undefined;
    const onWheel = (e) => {
      e.preventDefault();
      if (transitioningRef.current) return;
      wheelAccRef.current += e.deltaY;
      if (Math.abs(wheelAccRef.current) < WHEEL_THRESHOLD) return;
      const dir = wheelAccRef.current > 0 ? 1 : -1;
      wheelAccRef.current = 0;
      manualRef.current(dir);
    };
    const onTouchStart = (e) => {
      const t = e.changedTouches[0];
      touchStartRef.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e) => {
      const start = touchStartRef.current;
      if (!start) return;
      const t = e.changedTouches[0];
      const dy = t.clientY - start.y;
      const dx = t.clientX - start.x;
      if (Math.abs(dy) > SWIPE_THRESHOLD && Math.abs(dy) > Math.abs(dx)) {
        manualRef.current(dy < 0 ? 1 : -1);
      }
      touchStartRef.current = null;
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  const manualRef = useRef(manual);
  manualRef.current = manual;

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      manual(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      manual(-1);
    }
  };

  const ms = reduced || snappingRef.current ? 0 : DURATION_MS;

  return (
    <div
      ref={frameRef}
      tabIndex={0}
      role="region"
      aria-roledescription="Events timeline"
      aria-label="Featured events exhibition timeline"
      onKeyDown={onKeyDown}
      className="relative mx-auto aspect-[2/1] w-full max-w-[22rem] overflow-hidden border-x border-t border-border bg-neutral-100 sm:max-w-[40rem] md:max-w-[47.5rem] lg:max-w-[57.5rem] xl:max-w-[62.5rem]"
    >
      <div
        className="flex w-full flex-col will-change-transform"
        style={{
          transform: `translate3d(0, ${(-100 / slides.length) * active}%, 0)`,
          transition: `transform ${ms}ms ${EASE}`,
        }}
      >
        {slides.map((event, i) => (
          <div key={`${event.id}-${i}`} className="relative aspect-[2/1] w-full shrink-0">
            <img
              src={event.src}
              alt={`${event.title} exhibition poster`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Soft editorial masks — posters slide behind the exhibition wall.
          Feathery layered gradients in the wall's warm paper tone (spring
          wood), reduced to a whisper. The bottom adds a whisper-thin solid
          tuck so the poster's last ~10px continue behind the wall into the
          next exhibit — no cut line, no visible fade. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-12 md:h-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(248,245,240,0.38), rgba(248,245,240,0) 78%), linear-gradient(to bottom, rgba(248,245,240,0.2), rgba(248,245,240,0) 48%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 md:h-20"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(248,245,240,0.95) 0%, rgba(248,245,240,0.92) 12%, rgba(248,245,240,0) 30%), linear-gradient(to top, rgba(248,245,240,0.38), rgba(248,245,240,0) 78%), linear-gradient(to top, rgba(248,245,240,0.2), rgba(248,245,240,0) 48%)',
        }}
      />
    </div>
  );
}
