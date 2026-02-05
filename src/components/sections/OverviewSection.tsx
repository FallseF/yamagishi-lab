'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { Stagger } from '@/components/animations/Stagger';
import type { Dictionary } from '@/types';

interface OverviewSectionProps {
  dict: Dictionary;
}

export function OverviewSection({ dict }: OverviewSectionProps) {
  const overview = dict.overview;

  return (
    <section id="overview" className="mt-12">
      <FadeIn>
        <SectionTitle>{overview.title}</SectionTitle>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[var(--muted)] mb-6">{overview.lead}</p>
      </FadeIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
        {overview.cards.map((card, index) => (
          <Card key={index}>
            <h3 className="text-lg font-bold mb-3">{card.title}</h3>
            {'content' in card && card.content && <p>{card.content}</p>}
            {'items' in card && card.items && (
              <ul className="list-disc list-inside space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </Stagger>
    </section>
  );
}
