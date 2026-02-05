'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { PublicationItem } from '@/components/ui/PublicationItem';
import { AwardItem } from '@/components/ui/AwardItem';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Dictionary } from '@/types';

interface AchievementsSectionProps {
  dict: Dictionary;
}

export function AchievementsSection({ dict }: AchievementsSectionProps) {
  const achievements = dict.achievements;

  return (
    <section id="achievements" className="mt-12">
      <FadeIn>
        <SectionTitle>{achievements.title}</SectionTitle>
      </FadeIn>

      {/* Publications */}
      <div className="mb-8">
        <FadeIn delay={0.1}>
          <h3 className="text-xl font-bold mb-4">{achievements.publications.title}</h3>
        </FadeIn>
        <ul>
          {achievements.publications.items.map((pub, index) => (
            <PublicationItem key={index} publication={pub} index={index} />
          ))}
        </ul>
      </div>

      {/* Awards */}
      <div className="mb-8">
        <FadeIn delay={0.1}>
          <h3 className="text-xl font-bold mb-4">{achievements.awards.title}</h3>
        </FadeIn>
        <ul>
          {achievements.awards.items.map((award, index) => (
            <AwardItem key={index} award={award} index={index} />
          ))}
        </ul>
      </div>

      {/* Grants */}
      <div>
        <FadeIn delay={0.1}>
          <h3 className="text-xl font-bold mb-4">{achievements.grants.title}</h3>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[var(--muted)] italic">{achievements.grants.placeholder}</p>
        </FadeIn>
      </div>
    </section>
  );
}
