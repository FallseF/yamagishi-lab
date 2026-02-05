'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { MemberCard } from '@/components/ui/MemberCard';
import { FadeIn } from '@/components/animations/FadeIn';
import type { Dictionary } from '@/types';

interface MembersSectionProps {
  dict: Dictionary;
}

export function MembersSection({ dict }: MembersSectionProps) {
  const members = dict.members;

  return (
    <section id="members" className="mt-12">
      <FadeIn>
        <SectionTitle>{members.title}</SectionTitle>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <MemberCard
          name={members.pi.name}
          role={members.pi.role}
          focus={members.pi.focus}
          image="/images/profile.jpg"
          index={0}
        />
        {members.placeholders.map((placeholder, index) => (
          <MemberCard
            key={index}
            name={placeholder.title}
            role={placeholder.role}
            focus={placeholder.focus}
            placeholder={placeholder.initial}
            index={index + 1}
          />
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p className="text-[var(--muted)] text-sm">{members.note}</p>
      </FadeIn>
    </section>
  );
}
