import React, { useState } from 'react';
import { PageMeta } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { Container, Eyebrow, Section } from '../components/ui/Layout';
import { Input, Label, Select, Textarea, Checkbox, FieldError } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { ContactSection } from '../components/sections/ContactSection';
import { useFormSubmit } from '../hooks/useFormSubmit';

const benefits = [
  { title: 'Studio access', body: 'Late-night studio hours in the Design Block, most weekdays.' },
  { title: 'Mentorship', body: 'Pair with senior members across illustration, photography, and design.' },
  { title: 'Exhibition slots', body: 'A guaranteed wall at Chiaroscuro once you have exhibited once.' },
  { title: 'Workshops', body: 'Monthly skills workshops led by members, alumni, and visiting artists.' },
];

const steps = [
  { n: '01', title: 'Fill the form', body: 'Tell us a little about your interests below — no portfolio required to apply.' },
  { n: '02', title: 'Meet the team', body: 'A short, informal chat with the exhibitions or outreach lead.' },
  { n: '03', title: 'Join a critique night', body: 'Your first session is an open studio, not an audition.' },
];

const emptyForm = {
  name: '',
  regNo: '',
  email: '',
  dept: '',
  interest: '',
  about: '',
  terms: false,
};

export default function Membership() {
  const [form, setForm] = useState(emptyForm);
  const { pending, errors, status, submit, clearFieldError } = useFormSubmit('membership');

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    clearFieldError(field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await submit(form);
    if (ok) setForm(emptyForm);
  };

  return (
    <>
      <PageMeta
        title="Membership"
        description="Membership in the Fine Arts Club is open to every student at PTU — studio access, mentorship, exhibition slots, and workshops. No portfolio required."
      />
      <PageHero
        eyebrow="Membership"
        title="Ready to make your mark"
        description="Membership is open to every student at PTU, regardless of department or prior experience."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="border border-border p-6">
                <h3 className="mb-2 font-bold text-ink">{b.title}</h3>
                <p className="text-sm text-ink-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted" className="border-y border-border">
        <Container>
          <div className="mb-12 max-w-xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-3xl font-bold text-ink md:text-5xl">Three steps in</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n}>
                <span className="font-heading text-3xl font-bold text-accent-soft">{step.n}</span>
                <h3 className="mt-3 mb-2 text-xl font-bold text-ink">{step.title}</h3>
                <p className="text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-xl">
            <div className="mb-8 text-center">
              <Eyebrow className="flex justify-center">Apply</Eyebrow>
              <h2 className="text-3xl font-bold text-ink md:text-5xl">Tell us about you</h2>
            </div>
            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange('name')}
                    invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  <FieldError id="name-error">{errors.name}</FieldError>
                </div>
                <div>
                  <Label htmlFor="regNo">Registration number</Label>
                  <Input
                    id="regNo"
                    required
                    value={form.regNo}
                    onChange={handleChange('regNo')}
                    invalid={!!errors.regNo}
                    aria-describedby={errors.regNo ? 'regNo-error' : undefined}
                  />
                  <FieldError id="regNo-error">{errors.regNo}</FieldError>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange('email')}
                    invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  <FieldError id="email-error">{errors.email}</FieldError>
                </div>
                <div>
                  <Label htmlFor="dept">Department & year</Label>
                  <Input
                    id="dept"
                    required
                    value={form.dept}
                    onChange={handleChange('dept')}
                    invalid={!!errors.dept}
                    aria-describedby={errors.dept ? 'dept-error' : undefined}
                  />
                  <FieldError id="dept-error">{errors.dept}</FieldError>
                </div>
              </div>
              <div>
                <Label htmlFor="interest">Primary interest</Label>
                <Select
                  id="interest"
                  value={form.interest}
                  onChange={handleChange('interest')}
                  invalid={!!errors.interest}
                  aria-describedby={errors.interest ? 'interest-error' : undefined}
                >
                  <option value="" disabled>Select one...</option>
                  <option value="illustration">Illustration</option>
                  <option value="photography">Photography</option>
                  <option value="digital-art">Digital art</option>
                  <option value="design">Design</option>
                  <option value="undecided">Not sure yet</option>
                </Select>
                <FieldError id="interest-error">{errors.interest}</FieldError>
              </div>
              <div>
                <Label htmlFor="about">Why do you want to join?</Label>
                <Textarea
                  id="about"
                  placeholder="A sentence or two is plenty..."
                  value={form.about}
                  onChange={handleChange('about')}
                  invalid={!!errors.about}
                  aria-describedby={errors.about ? 'about-error' : undefined}
                />
                <FieldError id="about-error">{errors.about}</FieldError>
              </div>
              <div>
                <Checkbox
                  id="terms"
                  label="I accept the terms"
                  checked={form.terms}
                  onChange={handleChange('terms')}
                  invalid={!!errors.terms}
                  aria-describedby={errors.terms ? 'terms-error' : undefined}
                />
                <FieldError id="terms-error">{errors.terms}</FieldError>
              </div>
              <div className="space-y-3">
                <Button type="submit" variant="primary" disabled={pending}>
                  {pending ? 'Sending...' : 'Submit application'}
                </Button>
                {status && (
                  <p
                    role="alert"
                    aria-live="polite"
                    className={`text-sm ${status.ok ? 'text-accent' : 'text-danger'}`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </Container>
      </Section>
      <ContactSection />
    </>
  );
}
