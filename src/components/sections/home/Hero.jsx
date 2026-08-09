import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { RxArrowRight } from 'react-icons/rx'
import { Container } from '../../ui/Layout'
import { heroArtwork } from '../../../data/homeCurated'

export function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  })

  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  })

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero artwork */}
      <motion.img
        src={heroArtwork.src}
        alt={heroArtwork.alt}
        initial={
          reduce
            ? false
            : {
                scale: 1.02,
                opacity: 0,
                filter: 'brightness(0.96)',
              }
        }
        animate={{
          scale: 1,
          opacity: 1,
          filter: 'brightness(1)',
        }}
        transition={{
          scale: {
            duration: 9,
            ease: 'easeOut',
          },
          opacity: {
            duration: 1.2,
            ease: 'easeOut',
          },
          filter: {
            duration: 2,
            ease: 'easeOut',
          },
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Left-side readability overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.42),rgba(0,0,0,0.2)_40%,transparent_75%)]"
      />

      {/* Edge vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(21,15,11,0.18)_100%)]"
      />

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,var(--color-neutral-100),transparent)]"
      />

      {/* Hero content */}
      <Container className="relative z-10 flex min-h-[inherit] w-full flex-col justify-center py-24">
        <div className="max-w-2xl">
          <motion.h1
            {...rise(0)}
            className="font-heading text-xl font-bold uppercase leading-normal tracking-[0.32em] text-ink-inverse md:text-2xl"
          >
            PTU FINE ARTS CLUB
          </motion.h1>

          <motion.div {...rise(0.15)} className="mt-6">
            <p className="text-base text-ink-inverse-muted md:text-lg">
              Created by artists.
            </p>

            <p className="text-base text-ink-inverse-muted md:text-lg">
              Shared with everyone.
            </p>
          </motion.div>

          <motion.div {...fade(0.3)} className="mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-medium text-ink-inverse underline-offset-4 transition-colors hover:underline focus-visible:outline-offset-4"
            >
              Step inside
              <RxArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}