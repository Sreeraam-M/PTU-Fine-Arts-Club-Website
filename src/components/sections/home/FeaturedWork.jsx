import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Eyebrow } from '../../ui/Layout'
import { Reveal } from '../../ui/Reveal'
import { featuredWork } from '../../../data/homeCurated'

/**
 * Resolves local public assets correctly for:
 * - Local development
 * - GitHub Pages
 * - Future CMS / CDN URLs
 */
const resolveAssetUrl = (src) => {
  if (!src) return ''

  // External assets from a future CMS/CDN
  if (/^https?:\/\//i.test(src)) {
    return src
  }

  // Local public assets
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`
}

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
  const [naturalRatio, setNaturalRatio] = useState(null)

  if (!exhibition?.src) {
    return null
  }

  const { src, link } = exhibition
  const ratio = naturalRatio || exhibition.ratio
  const posterSrc = resolveAssetUrl(src)

  const poster = (
    <img
      src={posterSrc}
      alt="Featured exhibition poster"
      className="block h-auto w-full"
      style={ratio ? { aspectRatio: ratio } : undefined}
      onLoad={(e) => {
        const n = e.currentTarget

        if (n.naturalWidth && n.naturalHeight) {
          setNaturalRatio(`${n.naturalWidth}/${n.naturalHeight}`)
        }
      }}
      decoding="async"
    />
  )

  return (
    <section>
      <div className="container-editorial">
        <div className="mb-5">
          <Eyebrow>The Exhibition</Eyebrow>

          <p className="mt-2 text-sm text-ink-muted">
            Featured Piece · Current Season
          </p>
        </div>
      </div>

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
  )
}