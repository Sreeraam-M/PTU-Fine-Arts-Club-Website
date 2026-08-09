import React from 'react';
import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-bg-inverse text-ink-inverse border border-bg-inverse hover:bg-neutral-800 hover:border-neutral-800',
  secondary:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ink-inverse',
  accent:
    'bg-accent text-ink-inverse border border-accent hover:bg-nutmeg-light hover:border-nutmeg-light',
  'accent-outline':
    'bg-transparent text-ink-inverse border border-ink-inverse/60 hover:bg-ink-inverse hover:text-ink',
  ghost:
    'bg-transparent text-ink border border-transparent underline-offset-4 hover:underline px-0',
};

const sizeClasses = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
};

/**
 * Button — shared UI primitive.
 * Renders a <Link> when `to` is provided, an <a> when `href` is provided,
 * otherwise a native <button>.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon: Icon,
  iconPosition = 'right',
  pill = false,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 font-medium ${
    pill ? 'rounded-[var(--radius-pill)]' : 'rounded-[var(--radius-sm)]'
  } transition-all duration-[var(--duration-hover)] ease-[var(--ease-standard)] active:translate-y-px whitespace-nowrap`;
  const classes = `${base} ${variantClasses[variant] ?? variantClasses.primary} ${
    variant === 'ghost' ? '' : sizeClasses[size] ?? sizeClasses.md
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="size-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="size-4" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
