import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow } from '../../ui/Layout';
import { Reveal } from '../../ui/Reveal';
import { featuredWork } from '../../../data/homeCurated';

/**
 * Featured Exhibition -- a museum-style frame around a single uploaded poster.
 *
 * The poster itself carries all exhibition information (title, artist,
 * typography, layout), so this section never re-renders that content. It is
 * CMS-ready: it depends only on the poster `src` (and an optional gallery
 * `link`). Swapping the next exhibition means replacing one image -- the
 * layout and the section structure stay untouched. The aspect ratio is
 * derived from the loaded image so any poster ratio keeps the frame intact.
 */
export function FeaturedWork({ exhibition = featuredWork }) {
  const [naturalRatio, setNaturalRatio] = useState(null);

  if (!exhibition?.src) {
    return null;
  }

  const { src, link } = exhibition;
  const ratio = naturalRatio || exhibition.ratio;

  const poster = (
    <img
      src={src}
      alt="Featured exhibition poster"
      className="block h-auto w-full"
      style={ratio ? { aspectRatio: ratio } : undefined}
      onLoad={(e) => {
        const n = e.currentTarget;
        if (n.naturalWidth && n.naturalHeight) {
          setNaturalRatio(`${n.naturalWidth}/${n.naturalHeight}`);
        }
      }}
      decoding="async"
    />
  );

  return (
    <section className="bg-neutral-100 text-ink">
      <Container className="pt-0.5 md:pt-1">
        <div className="flex flex-wrap items-end justify-between gap-x-2 md:gap-x-4">
          <Eyebrow className="mb-0! font-bold!">The Exhibition</Eyebrow>
          <p className="text-sm text-ink-muted">Featured Piece · Current Season</p>
        </div>
      </Container>

      <Container className="container-poster mt-0.5 pb-3 md:mt-1.5 md:pb-5">
        <Reveal>
          {link ? (
            <Link
              to={link}
              className="block"
              aria-label="View the featured exhibition in the gallery"
            >
              {poster}
            </Link>
          ) : (
            poster
          )}
        </Reveal>
      </Container>
    </section>
  );
}
