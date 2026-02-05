'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { Stagger } from '@/components/animations/Stagger';
import type { Dictionary } from '@/types';

interface CollaborationSectionProps {
  dict: Dictionary;
}

export function CollaborationSection({ dict }: CollaborationSectionProps) {
  const collaboration = dict.collaboration;

  return (
    <section id="collaboration" className="mt-12">
      <FadeIn>
        <SectionTitle>{collaboration.title}</SectionTitle>
      </FadeIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
        {collaboration.cards.map((card, index) => (
          <Card key={index}>
            <h3 className="text-lg font-bold mb-3">{card.title}</h3>
            <p>{card.content}</p>
          </Card>
        ))}
      </Stagger>
    </section>
  );
}
