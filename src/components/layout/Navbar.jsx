import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { RxChevronDown } from 'react-icons/rx';
import { Button } from '../ui/Button';
import { primaryNav, workDropdown } from '../../data/navigation';

const EASE = [0.22, 1, 0.36, 1];

const underlineBase =
  'relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[var(--duration-hover)] after:ease-[var(--ease-standard)]';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const workActive = workDropdown.some((item) => pathname.startsWith(item.to));

  const navLinkClasses = (isActive) =>
    `${underlineBase} px-1 py-2 text-sm transition-colors duration-[var(--duration-hover)] ${
      scrolled
        ? isActive
          ? 'text-ink font-semibold after:scale-x-100'
          : 'text-ink-muted hover:text-ink hover:after:scale-x-100'
        : isActive
          ? 'text-ink-inverse font-semibold after:scale-x-100'
          : 'text-ink-inverse-muted hover:text-ink-inverse hover:after:scale-x-100'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-[var(--duration-state)] ease-[var(--ease-standard)] ${
        scrolled
          ? 'border-b border-border bg-bg/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <NavLink
          to="/"
          className={`font-heading text-xl font-bold tracking-tight transition-colors duration-[var(--duration-hover)] ${
            scrolled ? 'text-ink' : 'text-ink-inverse'
          }`}
        >
          Fine Arts Club
        </NavLink>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => navLinkClasses(isActive)}>
              {item.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`${underlineBase} flex items-center gap-1 px-1 py-2 text-sm transition-colors duration-[var(--duration-hover)] ${
                scrolled
                  ? workActive
                    ? 'text-ink font-semibold after:scale-x-100'
                    : 'text-ink-muted hover:text-ink hover:after:scale-x-100'
                  : workActive
                    ? 'text-ink-inverse font-semibold after:scale-x-100'
                    : 'text-ink-inverse-muted hover:text-ink-inverse hover:after:scale-x-100'
              }`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Work
              <motion.span aria-hidden="true" animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }}>
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15, ease: EASE }}
                  className="absolute left-0 top-full mt-1 min-w-40 border border-border bg-bg py-2 shadow-sm"
                >
                  {workDropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2 text-sm text-ink-muted transition-colors duration-[var(--duration-hover)] hover:bg-neutral-100 hover:text-ink"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            to="/membership"
            variant="secondary"
            size="sm"
            pill
            className={scrolled ? '' : 'text-ink-inverse! border-white/70!'}
          >
            Join
          </Button>
          <Button
            to="/about#contact"
            variant="primary"
            size="sm"
            pill
            className={scrolled ? '' : 'bg-surface! text-ink! border-surface! hover:text-ink-inverse!'}
          >
            Contact
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex size-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <motion.span
            className={`h-0.5 w-6 ${scrolled ? 'bg-ink' : 'bg-ink-inverse'}`}
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className={`h-0.5 w-6 ${scrolled ? 'bg-ink' : 'bg-ink-inverse'}`}
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className={`h-0.5 w-6 ${scrolled ? 'bg-ink' : 'bg-ink-inverse'}`}
            animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            aria-label="Mobile"
            className="overflow-hidden border-t border-border bg-bg lg:hidden"
          >
            <div className="container-editorial flex flex-col gap-1 py-4">
              {[...primaryNav, ...workDropdown].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[var(--radius-sm)] px-2 py-3 text-base text-ink-muted transition-colors duration-[var(--duration-hover)] hover:bg-neutral-100 hover:text-ink"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 flex gap-3">
                <Button to="/membership" variant="secondary" size="sm" pill className="flex-1">
                  Join
                </Button>
                <Button to="/about#contact" variant="primary" size="sm" pill className="flex-1">
                  Contact
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
