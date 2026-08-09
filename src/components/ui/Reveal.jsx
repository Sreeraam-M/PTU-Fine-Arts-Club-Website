import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal
 * ------
 * Single point of control for "enter on scroll" motion. Every section on
 * story-driven pages (About, etc.) should wrap its content in one <Reveal>
 * per animated unit rather than animating ad hoc — that way, swapping this
 * implementation for GSAP + ScrollTrigger later is a one-file change and
 * every call site stays untouched.
 *
 * `as` lets you render a semantic element (e.g. "li", "article") instead
 * of the default div, since motion.create supports any tag.
 */
export function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  className = '',
  once = true,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
