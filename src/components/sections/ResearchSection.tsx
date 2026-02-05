'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Dictionary, Locale } from '@/types';

interface ResearchSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function ResearchSection({ dict, locale }: ResearchSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const research = dict.research;

  return (
    <section id="research" ref={ref} className="py-24 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-[0.3em] text-[var(--accent)] mb-4">
            {research.title}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
            {locale === 'ja' ? '3つの研究アプローチ' : 'Three Research Approaches'}
          </h2>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {research.areas.slice(0, 3).map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] overflow-hidden hover:border-[var(--accent)]/30 transition-colors">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[var(--background-secondary)] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 line-clamp-2">
                    {area.title.replace(/研究分野\d+[:：]\s*/, '').replace(/Research Area \d+[:：]\s*/, '')}
                  </h3>
                  <p className="text-sm text-[var(--muted)] line-clamp-3">
                    {area.summary.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href={`/${locale}/research`}
            className="btn-outline inline-block"
          >
            {dict.landing.cta.research}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
