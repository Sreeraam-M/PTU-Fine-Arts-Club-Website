import React from 'react';
import { Container, Eyebrow, Section } from '../../ui/Layout';
import { Reveal } from '../../ui/Reveal';
import { PeopleCarousel } from './PeopleCarousel';
import { makers } from '../../../data/people';

export function TheMakers() {
  return (
    <Section data-section="makers" className="bg-olive! text-ink-inverse!">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow className="mb-3! font-heading! text-2xl! font-bold! md:text-3xl! text-ink-inverse!">
                The Makers
              </Eyebrow>
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
                The People Behind PTU Fine Arts Club
              </h2>
            </div>

            <div className="lg:col-span-7 lg:mb-6">
              <div className="flex items-center divide-x divide-white/25 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {makers.mottos.map((motto) => (
                  <p
                    key={motto}
                    className="shrink-0 whitespace-nowrap px-4 text-lg font-semibold leading-snug tracking-tight text-ink-inverse first:pl-0 lg:flex-1 lg:px-6 lg:first:pl-0 lg:last:pr-0 md:text-xl"
                  >
                    {motto}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 md:mt-20">
          <PeopleCarousel
            dark
            title="Faculty Coordinators"
            items={makers.faculty}
            roleKey="designation"
          />
        </Reveal>

        <Reveal className="mt-16 md:mt-24">
          <PeopleCarousel
            dark
            title="Core Committee"
            items={makers.committee}
            roleKey="position"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
