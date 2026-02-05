'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Dictionary, Locale } from '@/types';

interface TeamSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function TeamSection({ dict, locale }: TeamSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const team = dict.team;

  return (
    <section id="team" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="px-[var(--page-padding-mobile)] md:px-[var(--page-padding-desktop)]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[var(--foreground)] mb-8">
              {team.title}
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4 text-multiline">
              {team.catchphrase}
            </p>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-multiline">
              {team.description}
            </p>
          </motion.div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/9] overflow-hidden mb-10"
          >
            <Image
              src="/images/team-photo.jpg"
              alt={locale === 'ja' ? '研究室メンバー集合写真' : 'Lab Team Photo'}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href={`/${locale}/team`}
              className="btn-outline inline-block"
            >
              {locale === 'ja' ? 'メンバー紹介を見る' : 'Meet Our Team'}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
