'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { FadeIn } from '@/components/animations/FadeIn';
import { Stagger } from '@/components/animations/Stagger';
import type { Dictionary } from '@/types';

interface LabLifeSectionProps {
  dict: Dictionary;
}

export function LabLifeSection({ dict }: LabLifeSectionProps) {
  const labLife = dict.labLife;

  return (
    <section id="life" className="mt-12">
      <FadeIn>
        <SectionTitle>{labLife.title}</SectionTitle>
      </FadeIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" staggerDelay={0.1}>
        {labLife.placeholders.map((placeholder, index) => (
          <div
            key={index}
            className="border border-dashed border-[var(--border)] rounded-xl p-6 text-center text-[var(--muted)] bg-[var(--background)]"
          >
            <p>{placeholder}</p>
          </div>
        ))}
      </Stagger>

      <FadeIn delay={0.3}>
        <p className="text-[var(--muted)] text-sm">{labLife.note}</p>
      </FadeIn>
    </section>
  );
}
