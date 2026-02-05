'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { Stagger } from '@/components/animations/Stagger';
import type { Dictionary } from '@/types';

interface RecruitingSectionProps {
  dict: Dictionary;
}

export function RecruitingSection({ dict }: RecruitingSectionProps) {
  const recruiting = dict.recruiting;

  return (
    <section id="recruiting" className="mt-12">
      <FadeIn>
        <SectionTitle>{recruiting.title}</SectionTitle>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-[var(--muted)] mb-6">{recruiting.lead}</p>
      </FadeIn>

      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
        {recruiting.cards.map((card, index) => (
          <Card key={index}>
            <h3 className="text-lg font-bold mb-3">{card.title}</h3>
            {'items' in card && card.items && (
              <ul className="list-disc list-inside space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {'content' in card && card.content && <p className="mb-2">{card.content}</p>}
            {'note' in card && card.note && (
              <p className="text-[var(--muted)] text-sm">{card.note}</p>
            )}
          </Card>
        ))}
      </Stagger>
    </section>
  );
}
