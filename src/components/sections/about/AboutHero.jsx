import React from 'react';
import { motion } from 'framer-motion';
import { PlaceholderMedia } from '../../ui/Placeholder';
import { Container, Eyebrow } from '../../ui/Layout';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-bg-inverse">
      <Container className="relative z-10 grid grid-cols-1 gap-12 py-24 md:grid-cols-[1.3fr_1fr] md:items-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow inverse>About the collective</Eyebrow>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-ink-inverse sm:text-5xl md:text-6xl">
            Art is not our elective. It&rsquo;s our discipline.
          </h1>
          <p className="mt-6 max-w-md text-ink-inverse-muted md:text-lg">
            We are engineers who paint past midnight, coders who compose, and architects of both
            circuits and canvases. The Fine Arts Club exists for the part of you that a syllabus
            never asked about.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-4 pt-10">
            <PlaceholderMedia ratio="3/4" tone="dark" label="Studio" className="border-neutral-800" />
          </div>
          <div className="flex flex-col gap-4">
            <PlaceholderMedia ratio="1/1" tone="dark" label="Exhibition" className="border-neutral-800" />
            <PlaceholderMedia ratio="3/4" tone="dark" label="Process" className="border-neutral-800" />
          </div>
        </motion.div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
