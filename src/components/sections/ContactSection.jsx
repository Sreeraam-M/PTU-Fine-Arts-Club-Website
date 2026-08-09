import React, { useState } from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { Button } from '../ui/Button';
import { Container, Eyebrow, Section } from '../ui/Layout';
import { Input, Label, Select, Textarea, Checkbox, RadioOption, FieldError } from '../ui/Input';
import { Reveal } from '../ui/Reveal';
import { useFormSubmit } from '../../hooks/useFormSubmit';

const describesYou = ['Student', 'Faculty', 'Artist', 'Partner', 'Alumni', 'Other'];

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  topic: '',
  describesYou: '',
  message: '',
  terms: false,
};

export function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const { pending, errors, status, submit, clearFieldError } = useFormSubmit('contact');

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
    <Section id="contact">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Eyebrow>Connect</Eyebrow>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Start a conversation
            </h2>
            <p className="mt-5 text-ink-muted md:text-lg">
              Inquiries about membership, partnerships, or commissions are always welcome.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-ink-muted">
                <BiEnvelope className="size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>finearts@ptu.edu.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-muted">
                <BiPhone className="size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>+91 413 265 5111</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-ink-muted">
                <BiMap className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>Puducherry Technological University, Pillaichavady, Puducherry 605014, India</span>
              </div>
            </div>
          </Reveal>

          <Reveal as="form" delay={0.1} onSubmit={handleSubmit} noValidate className="grid max-w-lg grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                  invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                <FieldError id="firstName-error">{errors.firstName}</FieldError>
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                  invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                />
                <FieldError id="lastName-error">{errors.lastName}</FieldError>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                <FieldError id="email-error">{errors.email}</FieldError>
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                <FieldError id="phone-error">{errors.phone}</FieldError>
              </div>
            </div>
            <div>
              <Label htmlFor="topic">Choose a topic</Label>
              <Select
                id="topic"
                value={form.topic}
                onChange={handleChange('topic')}
                invalid={!!errors.topic}
                aria-describedby={errors.topic ? 'topic-error' : undefined}
              >
                <option value="" disabled>Select one...</option>
                <option value="membership">Membership</option>
                <option value="partnership">Partnership</option>
                <option value="commission">Commission</option>
                <option value="other">Other</option>
              </Select>
              <FieldError id="topic-error">{errors.topic}</FieldError>
            </div>
            <fieldset>
              <legend className="mb-3 text-sm font-medium">Which best describes you?</legend>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {describesYou.map((label) => (
                  <RadioOption
                    key={label}
                    id={label}
                    name="describesYou"
                    value={label}
                    label={label}
                    checked={form.describesYou === label}
                    onChange={handleChange('describesYou')}
                    invalid={!!errors.describesYou}
                    aria-describedby={errors.describesYou ? 'describesYou-error' : undefined}
                  />
                ))}
              </div>
              <FieldError id="describesYou-error">{errors.describesYou}</FieldError>
            </fieldset>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                value={form.message}
                onChange={handleChange('message')}
                invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <FieldError id="message-error">{errors.message}</FieldError>
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
                {pending ? 'Sending...' : 'Submit'}
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
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
