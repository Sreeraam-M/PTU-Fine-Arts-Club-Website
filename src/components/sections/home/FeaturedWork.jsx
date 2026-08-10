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
 * Featured Exhibition
 *
 * The artwork is the primary visual focus of this section.
 * Exhibition content remains image-driven so future CMS integration
 * can replace the artwork source without changing the layout.
 */
export function FeaturedWork({ exhibition = featuredWork }) {
  const [naturalRatio, setNaturalRatio] = useState(null)

  if (!exhibition?.src) {
    return null
  }

  const { src, link } = exhibition
  const posterSrc = resolveAssetUrl(src)
  const ratio = naturalRatio || exhibition.ratio || '1356/768'

  const poster = (
    <img
      src={posterSrc}
      alt="Featured exhibition poster"
      className="block h-auto w-full"
      style={{
        aspectRatio: ratio,
        objectFit: 'contain',
      }}
      onLoad={(event) => {
        const image = event.currentTarget

        if (image.naturalWidth && image.naturalHeight) {
          setNaturalRatio(
            `${image.naturalWidth}/${image.naturalHeight}`,
          )
        }
      }}
      decoding="async"
    />
  )

  return (
    <section
      aria-labelledby="featured-exhibition-title"
      className="relative bg-bg py-16 md:py-20 lg:py-24"
    >
      {/* Section introduction */}
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <Eyebrow>THE EXHIBITION</Eyebrow>

            <p
              id="featured-exhibition-title"
              className="mt-3 text-sm text-ink-muted md:text-base"
            >
              Featured Piece · Current Season
            </p>
          </div>
        </div>
      </Container>

      {/* Featured artwork */}
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1200px] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
        <Reveal>
          {link ? (
            <Link
              to={link}
              className="group block"
              aria-label="View the featured exhibition in the gallery"
            >
              <div className="overflow-hidden">
                {poster}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-ink transition-opacity duration-300 group-hover:opacity-60">
                  View exhibition
                </span>

                <span
                  aria-hidden="true"
                  className="text-sm text-ink transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ) : (
            poster
          )}
        </Reveal>
      </div>
    </section>
  )
}