import React from 'react';
import { Container, Eyebrow } from '../ui/Layout';

export function PageHero({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <section className="border-b border-border bg-bg pb-14 pt-14 md:pb-20 md:pt-20">
      <Container>
        <div className={`flex max-w-2xl flex-col ${alignment}`}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">{title}</h1>
          {description && <p className="mt-5 text-ink-muted md:text-lg">{description}</p>}
        </div>
      </Container>
    </section>
  );
}
