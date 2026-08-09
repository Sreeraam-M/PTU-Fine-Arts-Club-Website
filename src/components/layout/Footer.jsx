import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '../ui/Button';
import { Input, FieldError } from '../ui/Input';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import { footerQuickLinks, artworkCategories, socialLinks } from '../../data/navigation';

const socialIcons = {
  Facebook: BiLogoFacebookCircle,
  Instagram: BiLogoInstagram,
  X: FaXTwitter,
  LinkedIn: BiLogoLinkedinSquare,
  YouTube: BiLogoYoutube,
};

export function Footer() {
  const [email, setEmail] = useState('');
  const { pending, errors, status, submit, clearFieldError } = useFormSubmit('newsletter');
  const error = errors.email;

  const handleChange = (e) => {
    setEmail(e.target.value);
    clearFieldError('email');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await submit({ email });
    if (ok) setEmail('');
  };

  return (
    <footer className="border-t border-border-inverse bg-bg-inverse text-ink-inverse">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-[1fr_1.4fr] md:gap-8">
          <div>
            <Link to="/" className="font-heading text-xl font-bold text-ink-inverse">
              Fine Arts Club
            </Link>
            <p className="mt-4 max-w-sm text-sm text-neutral-400">
              Stay informed on new exhibitions, workshops, and exclusive artistic features.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-5 flex max-w-sm gap-3">
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                aria-label="Email address"
                invalid={!!error}
                aria-describedby={error ? 'subscribe-error' : undefined}
                className="border-neutral-700 text-ink-inverse placeholder:text-neutral-400 focus:border-accent-soft"
              />
              <Button type="submit" variant="accent-outline" size="sm" className="shrink-0" disabled={pending}>
                {pending ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            <FieldError id="subscribe-error" color="text-neutral-300">
              {error}
            </FieldError>
            {status && (
              <p role="alert" aria-live="polite" className={`mt-2 max-w-sm text-sm ${status.ok ? 'text-accent-soft' : 'text-neutral-300'}`}>
                {status.message}
              </p>
            )}
            <p className="mt-3 max-w-sm text-xs text-neutral-400">
              By subscribing you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-ink-inverse">Quick links</h3>
              <ul className="space-y-3">
                {footerQuickLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-neutral-400 transition-colors duration-[var(--duration-hover)] hover:text-ink-inverse"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-ink-inverse">Artwork</h3>
              <ul className="space-y-3">
                {artworkCategories.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to ?? `/artwork?category=${item.slug}`}
                      className="text-sm text-neutral-400 transition-colors duration-[var(--duration-hover)] hover:text-ink-inverse"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-ink-inverse">Follow us</h3>
              <ul className="space-y-3">
                {socialLinks.map(({ label, href }) => {
                  const Icon = socialIcons[label];
                  if (!Icon) return null;
                  const isPlaceholder = href === '#';
                  return (
                    <li key={label}>
                      {isPlaceholder ? (
                        <span className="flex items-center gap-2 text-sm text-neutral-400">
                          <Icon className="size-5" aria-hidden="true" />
                          {label}
                        </span>
                      ) : (
                        <a
                          href={href}
                          className="flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-[var(--duration-hover)] hover:text-ink-inverse"
                        >
                          <Icon className="size-5" aria-hidden="true" />
                          {label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-neutral-800" />

        <div className="flex flex-col-reverse items-start justify-between gap-4 pt-6 text-xs text-neutral-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Fine Arts Club, Puducherry Technological University. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><span className="transition-colors duration-[var(--duration-hover)] hover:text-ink-inverse">Privacy Policy</span></li>
            <li><span className="transition-colors duration-[var(--duration-hover)] hover:text-ink-inverse">Terms of Service</span></li>
            <li><span className="transition-colors duration-[var(--duration-hover)] hover:text-ink-inverse">Cookies Settings</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
