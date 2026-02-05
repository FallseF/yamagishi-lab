'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Dictionary } from '@/types';

interface BiographySectionProps {
  dict: Dictionary;
}

export function BiographySection({ dict }: BiographySectionProps) {
  const biography = dict.biography;

  return (
    <section id="bio" className="mt-12">
      <FadeIn>
        <SectionTitle>{biography.title}</SectionTitle>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <div>
          <FadeIn delay={0.1}>
            <h3 className="text-xl font-bold mb-4">{biography.education.title}</h3>
          </FadeIn>
          <ul>
            {biography.education.items.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </ul>
        </div>

        {/* Career */}
        <div>
          <FadeIn delay={0.1}>
            <h3 className="text-xl font-bold mb-4">{biography.career.title}</h3>
          </FadeIn>
          <ul>
            {biography.career.items.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
