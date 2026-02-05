'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Dictionary } from '@/types';

interface AccessSectionProps {
  dict: Dictionary;
}

export function AccessSection({ dict }: AccessSectionProps) {
  const access = dict.access;

  return (
    <section id="access" className="mt-12">
      <FadeIn>
        <SectionTitle>{access.title}</SectionTitle>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p>{access.address}</p>
      </FadeIn>
    </section>
  );
}
