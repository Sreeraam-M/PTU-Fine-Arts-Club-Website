import React from 'react';
import { PageMeta } from '../lib/seo';
import { Container } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <PageMeta
        title="Page not found"
        description="The page you're looking for isn't hung here. It may have moved, or never existed."
      />
      <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-accent">404</span>
      <h1 className="mt-3 text-4xl font-bold text-ink md:text-5xl">This wall is empty</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page you're looking for isn't hung here. It may have moved, or never existed.
      </p>
      <Button to="/" variant="primary" className="mt-8">Back to Home</Button>
    </Container>
  );
}
